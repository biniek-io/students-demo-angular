import angular from 'angular';
import {DataServiceProvider} from './data.service';

const module = angular.module('common', []);

module.factory('DataService', DataServiceProvider);

export default module.name;
