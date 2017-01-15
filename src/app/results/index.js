import angular from 'angular';
import {results} from './results';
import common from '../../common';

const module = angular.module('results', [
  common
]);

module.component('results', results);

export default module.name;
