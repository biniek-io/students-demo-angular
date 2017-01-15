import angular from 'angular';

/**
 * Provider of data service
 *
 * @param $resource
 * @param $q
 * @returns {DataService}
 * @ngInject
 */
export function DataServiceProvider($resource, $q) {

  /**
   * Service which is delivering JSON data to application
   */
  class DataService {
    constructor() {
      this.quizzes = $resource('data/quizzes.json');
      this.questions = $resource('data/questions.json');
    }

    /**
     * Returns list of available quizzes
     * @returns {Promise}
     */
    getQuizzes() {
      return this.quizzes.get().$promise;
    }

    /**
     * Returns list of questions to requested quiz
     * @param {number} quizId
     * @returns {Promise}
     * @todo add backend validation
     */
    getQuizWithQuestions(quizId) {

      if (typeof quizId !== 'number') {
        quizId = parseInt(quizId);
      }

      const promise = $q.all({
        quizzes: this.getQuizzes(),
        questions: this.questions.get().$promise
      }).then(result => {

        const quizzes = result.quizzes.quizzes;
        const questions = result.questions.questions;
        const quiz = angular.copy(quizzes.find((quiz) => quiz.id === quizId));

        if (!quiz) {
          let deferred = $q.defer();
          deferred.reject();
          return deferred.promise;
        }

        quiz.questions = quiz.question_ids.map(id => {
          let value = questions.find(question => question.id === id);
          return value;
        });

        return quiz;
      });

      return promise;
    }
  }

  return new DataService();
}