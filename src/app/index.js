import angular from 'angular';
import overview from './overview';
import quiz from './quiz';
import results from './results';

const module = angular.module('app', [
  overview,
  quiz,
  results
]);

export default module.name;
