import angular from 'angular';
import 'angular-mocks';
import {overview} from './overview';
import {DataServiceMock} from '../../mocks/data-service.mock';
import {QuizStateMock} from "../../mocks/quiz-state.mock";

describe('overview component', () => {

  let element;
  let $rootScope;

  beforeEach(() => {
    angular
      .module('students', ['app/overview/overview.html'])
      .component('overview', overview);
    angular.mock.module('students');

    QuizStateMock._reset();

    angular.mock.module(($provide) => {
      $provide.value('DataService', DataServiceMock);
      $provide.value('QuizState', QuizStateMock);
    });
  });

  beforeEach(angular.mock.inject((_$rootScope_, $compile) => {
    $rootScope = _$rootScope_;

    element = $compile('<overview></overview>')($rootScope);
    $rootScope.$digest();
  }));

  it('should render title and list of quizzes', () => {
    const h1 = element.find('h1');
    expect(h1.text().trim()).toEqual('List of quizzes');

    const quizzes = element[0].querySelectorAll('md-list-item');
    expect(quizzes.length).toEqual(5);
  });

  it('should initally allow to go to only to first quiz', () => {

    const quizzes = element[0].querySelectorAll('md-list-item:not([disabled])');
    expect(quizzes.length).toEqual(1);
  });

  it('should show multiple links if there are some quizzes already done', () => {

    QuizStateMock._setMostDifficultResolvedQuiz(1);
    QuizStateMock._addQuizResult(1, {1: 1, 2: 1, 3: 1});
    element.isolateScope().$ctrl._setAvailableQuizzes();

    $rootScope.$digest();

    const quizzes = element[0].querySelectorAll('md-list-item:not([disabled])');
    expect(quizzes.length).toEqual(2);
  });
});
