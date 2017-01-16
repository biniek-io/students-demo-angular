import angular from 'angular';
import 'angular-mocks';
import {QuizStateProvider} from './quiz-state.service';

describe('QuizState', () => {

  beforeEach(() => {
    angular
      .module('quiz-state-service', [])
      .factory('QuizState', QuizStateProvider);

    angular.mock.module('quiz-state-service');
  });

  it('should return initally empty list of results', angular.mock.inject((QuizState) => {
    expect(QuizState.getQuizzesResults()).toEqual([]);
  }));

  it('should return initally 0 for most difficult resolved quiz', angular.mock.inject((QuizState) => {
    expect(QuizState.getMostDifficultResolvedQuiz()).toEqual(0);
  }));

  it('should return promise after saving quiz result', angular.mock.inject((QuizState) => {
    const result = QuizState.saveQuizResult(1, {1: '1', 2: '1', 3: '1'});
    // @todo make test better when known backend response
    expect(result.then).toBeDefined();
  }));

  describe('after save', () => {
    beforeEach(angular.mock.inject(($rootScope, QuizState) => {
      QuizState.saveQuizResult(1, {1: '1', 2: '1', 3: '1'});
      $rootScope.$digest();
    }));

    it('should return non-empty list of results', angular.mock.inject(($rootScope, QuizState) => {
      expect(QuizState.getQuizzesResults().length).toEqual(1);
    }));

    it('should return last added of quiz', angular.mock.inject(($rootScope, QuizState) => {
      expect(QuizState.getMostDifficultResolvedQuiz()).toEqual(1);
    }));
  });
});
