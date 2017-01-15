import angular from 'angular';
import overview from './overview';
import quiz from './quiz';

const module = angular.module('app', [
  overview,
  quiz
]);

export default module.name;
