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
    getQuestions(quizId) {
      //$q.all()
      //return this.questions.get().$promise.then(data => );
    }
  }

  return new DataService();
}