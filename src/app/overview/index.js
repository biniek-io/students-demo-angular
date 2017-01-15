import angular from 'angular';
import {overview} from './overview';
import common from '../../common';

const module = angular.module('overview', [
  common
]);

module.component('overview', overview);

export default module.name;
