import angular from 'angular';
import 'angular-mocks';
import {overview} from './overview';

describe('overview component', () => {

  beforeEach(() => {
    angular
      .module('students', ['app/overview/overview.html'])
      .component('overview', overview);
    angular.mock.module('students');

    angular.mock.module(($provide) => {
      $provide.value('DataService', {
        getQuizzes() {
          return {
            then(fn) {
              setTimeout(fn({
                quizzes: [
                  {id: 1, title: 'Quiz 1', question_ids: [1,2,3]},
                  {id: 2, title: 'Quiz 2', question_ids: [1,2,3]},
                  {id: 3, title: 'Quiz 3', question_ids: [1,2,3]},
                  {id: 4, title: 'Quiz 4', question_ids: [1,2,3]},
                  {id: 5, title: 'Quiz 5', question_ids: [1,2,3]}
                ]
              }));
            }
          }
        }
      });
    });

  });

  it('should render title and list of quizzes', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<overview>Loading...</overview>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('List of quizzes');

    const quizzes = element.find('a');
    expect(quizzes.length).toEqual(5);
  }));
});
