import angular from 'angular';
import 'angular-mocks';
import {quiz} from './quiz';
import {DataServiceMock} from '../../mocks/data-service.mock';
import {QuizStateMock} from "../../mocks/quiz-state.mock";

describe('quiz component', () => {

  let element;
  let $rootScope;

  beforeEach(() => {
    angular
      .module('students', ['app/quiz/quiz.html'])
      .component('quiz', quiz);
    angular.mock.module('students');

    angular.mock.module(($provide) => {
      $provide.value('DataService', DataServiceMock);
      $provide.value('QuizState', QuizStateMock);
      spyOn(QuizStateMock, 'saveQuizResult').and.callThrough();

      $provide.value('$stateParams', {id: 1});
      $provide.value('$state', jasmine.createSpyObj('$state', ['go']));
    });
  });

  beforeEach(angular.mock.inject((_$rootScope_, $compile) => {
    $rootScope = _$rootScope_;

    element = $compile('<quiz></quiz>')($rootScope);
    $rootScope.$digest();
  }));

  it('should render title and questions', () => {
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('Quiz: Quiz 1');

    const rowAnswers = element[0].querySelectorAll('.row-answers');
    expect(rowAnswers.length).toEqual(3);

    const radioButtons = element[0].querySelectorAll('.row-answers input[type=radio]');
    expect(radioButtons.length).toEqual(12);
  });

  it('should have submit button disabled until not all questions marked', () => {
    const button = element[0].querySelector('input[type=submit]');
    expect(button.disabled, true);

    element[0].querySelectorAll('input[type=radio]')[0].click();
    $rootScope.$digest();
    expect(button.disabled, true);

    element[0].querySelectorAll('input[type=radio]')[4].click();
    $rootScope.$digest();
    expect(button.disabled, true);

    element[0].querySelectorAll('input[type=radio]')[8].click();
    $rootScope.$digest();
    expect(button.disabled, false);
  });

  it('should submit correct data structure', () => {
    element[0].querySelectorAll('input[type=radio]')[0].click();
    element[0].querySelectorAll('input[type=radio]')[4].click();
    element[0].querySelectorAll('input[type=radio]')[8].click();
    element[0].querySelector('input[type=submit]').click();
    expect(QuizStateMock.saveQuizResult).toHaveBeenCalledWith(1, {1: '0', 2: '0', 3: '0'});
  });

});
