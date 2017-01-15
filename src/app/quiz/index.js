import angular from 'angular';
import {quiz} from './quiz';
import common from '../../common';

const module = angular.module('quiz', [
  common
]);

module.component('quiz', quiz);

export default module.name;
