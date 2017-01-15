import angular from 'angular';
import 'angular-mocks';
import {results} from './results';

describe('results component', () => {

  beforeEach(() => {
    angular
      .module('students', ['app/results/results.html'])
      .component('results', results);
    angular.mock.module('students');
  });

});
