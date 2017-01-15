/**
 *
 * @param $resource
 * @param $q
 * @returns {DataService}
 * @constructor
 * @ngInject
 */
export function DataServiceProvider($resource, $q) {
  class DataService {
    constructor() {
      this.quizzes = $resource('data/quizzes.json');
      this.questions = $resource('data/questions.json');
    }

    getQuizzes() {
      return this.quizzes.get().$promise;
    }

    getQuestions(quizId) {
      //$q.all()
      //return this.questions.get().$promise.then(data => );
    }
  }

  return new DataService();
}