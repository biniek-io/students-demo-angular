/**
 * Controller for overview component
 */
class overviewCtrl {
  /**
   * @param {DataService} DataService common service to fetch data
   * @param {QuizState}
   * @ngInject
   */
  constructor(DataService, QuizState) {
    this.DataService = DataService;
    this.QuizState = QuizState;
  }

  $onInit() {
    this.loading = true;
    this.availableQuizzes = {};

    this.DataService.getQuizzes().then(result => {
      this.loading = false;
      this.quizzes = result.quizzes;
      this._setAvailableQuizzes();
    });
  }

  _setAvailableQuizzes() {
    // first quiz always available
    this.availableQuizzes = {};
    this.availableQuizzes[this.quizzes[0].id] = true;

    const mostDifficultQuiz = this.QuizState.getMostDifficultResolvedQuiz();

    // assumption that quiz is always available
    if (mostDifficultQuiz !== 0) {
      let i = -1;
      do {
        i++;
        this.availableQuizzes[this.quizzes[i].id] = true;
      } while (this.quizzes[i].id !== mostDifficultQuiz);

      if (i < this.quizzes.length - 1) {
        // add next after saved one
        this.availableQuizzes[this.quizzes[i + 1].id] = true;
      }
    }
  }
}

export const overview = {
  template: require('./overview.html'),
  controller: overviewCtrl
};
