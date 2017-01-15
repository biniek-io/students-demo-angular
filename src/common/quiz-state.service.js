/**
 * Provider to quiz state service
 * @returns {QuizState}
 * @ngInject
 */
export function QuizStateProvider($q) {

  /**
   * Quiz state service manages results of already done quizzes
   */
  class QuizState {
    constructor() {
      this.quizzesResult = [];
    }

    /**
     * Returns array of results
     * @returns {Array.<Object>}
     */
    getQuizzesResults() {
      return this.quizzesResult.slice();
    }

    /**
     * Returns most difficult resolved quiz
     * @returns {number} id of resolved quiz
     */
    getMostDifficultResolvedQuiz() {
      if (this.quizzesResult.length === 0) {
        return 0;
      } else {
        // get max id of quiz
        return this.quizzesResult[this.quizzesResult.length - 1].id;
      }
    }

    /**
     * Saves result of the quiz
     * @param quizId
     * @param result
     * @returns {Promise}
     */
    saveQuizResult(quizId, result) {
      const quiz = this.quizzesResult.find(existing => existing.id === quizId);
      if (!quiz) {
        this.quizzesResult.push({
          id: quizId,
          result
        });
      } else {
        if (quiz.result < result) {
          quiz.result = result;
        }
      }

      //@todo fake promise - connect to backend
      const deferred = $q.defer();
      deferred.resolve();
      return deferred.promise;
    }
  }

  return new QuizState();
}