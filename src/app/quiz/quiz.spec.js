import angular from 'angular';
import 'angular-mocks';
import {quiz} from './quiz';

describe('quiz component', () => {

  beforeEach(() => {
    angular
      .module('students', ['app/quiz/quiz.html'])
      .component('quiz', quiz);
    angular.mock.module('students');
  });

});
