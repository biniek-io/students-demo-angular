import angular from 'angular';
import 'angular-mocks';
import {results} from './results';
import {DataServiceMock} from '../../mocks/data-service.mock';
import {QuizStateMock} from "../../mocks/quiz-state.mock";

describe('results component', () => {

  let element;
  let $rootScope;
  let $compile;

  beforeEach(() => {
    angular
      .module('students', ['app/results/results.html'])
      .component('results', results);
    angular.mock.module('students');

    QuizStateMock._reset();

    angular.mock.module(($provide) => {
      $provide.value('DataService', DataServiceMock);
      $provide.value('QuizState', QuizStateMock);
    });
  });

  beforeEach(angular.mock.inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  it('should initially render no results', () => {
    compile();
    const rowResults = element[0].querySelectorAll('.row-results');
    expect(rowResults.length).toEqual(0);
  });

  it('should calculate correctly ratings', () => {
    QuizStateMock._addQuizResult(1, {1: 0, 2: 1, 3: 2});
    QuizStateMock._addQuizResult(2, {1: 1, 2: 1, 3: 1});
    QuizStateMock._addQuizResult(3, {1: 0, 2: 2, 3: 2});
    QuizStateMock._addQuizResult(4, {1: 2, 2: 2, 3: 2});
    QuizStateMock._setMostDifficultResolvedQuiz(4);
    compile();

    const rowResults = element[0].querySelectorAll('.md-list-item-text');
    expect(rowResults.length).toEqual(4);
    expect(rowResults[0].querySelector('h3').innerHTML.trim()).toEqual('Quiz 1');
    expect(rowResults[0].querySelector('h4').innerHTML.trim()).toEqual('Correct answers: 1 / 3');
    expect(rowResults[1].querySelector('h3').innerHTML.trim()).toEqual('Quiz 2');
    expect(rowResults[1].querySelector('h4').innerHTML.trim()).toEqual('Correct answers: 0 / 3');
    expect(rowResults[2].querySelector('h3').innerHTML.trim()).toEqual('Quiz 3');
    expect(rowResults[2].querySelector('h4').innerHTML.trim()).toEqual('Correct answers: 2 / 3');
    expect(rowResults[3].querySelector('h3').innerHTML.trim()).toEqual('Quiz 4');
    expect(rowResults[3].querySelector('h4').innerHTML.trim()).toEqual('Correct answers: 3 / 3');
  });

  function compile() {
    element = $compile('<results></results>')($rootScope);
    $rootScope.$digest();
  }

});
