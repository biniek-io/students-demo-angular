import angular from 'angular';
import {QuizStateProvider} from './quiz-state.service';
import {DataServiceProvider} from './data.service';

const module = angular.module('common', []);

module.factory('QuizState', QuizStateProvider);
module.factory('DataService', DataServiceProvider);

export default module.name;
