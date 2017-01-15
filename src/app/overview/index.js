import angular from 'angular';
import {overview} from './overview';

const module = angular.module('overview', []);

module.component('overview', overview);

export default module.name;
