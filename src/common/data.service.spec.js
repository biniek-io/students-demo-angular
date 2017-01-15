import angular from 'angular';
import 'angular-mocks';
import {DataServiceProvider} from './data.service';
import ngResource from 'angular-resource';
import quizData from '../data/quizzes.json';

describe('DataService', () => {
  let $httpBackend;

  beforeEach(() => {
    angular
      .module('data-service', [ngResource])
      .factory('DataService', DataServiceProvider);

    angular.mock.module('data-service');

    angular.mock.inject(($injector) => {
      $httpBackend = $injector.get('$httpBackend');
    })

  });

  it('should return promise of response', angular.mock.inject(($rootScope, DataService) => {
    $httpBackend
      .expectGET('data/quizzes.json')
      .respond(quizData);

    let promise = DataService.getQuizzes();

    $httpBackend.flush();

    promise.then(data => {
      expect(data.quizzes).toBeDefined();
    });

    $rootScope.$apply();

  }));
});
