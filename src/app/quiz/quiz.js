/**
 * Controller for quiz component
 */
class quizCtrl {
  /**
   * @param {DataService}
   * @param {QuizState}
   * @param {$stateParams}
   * @param {$state}
   * @ngInject
   */
  constructor(DataService, QuizState, $stateParams, $state) {
    this.DataService = DataService;
    this.QuizState = QuizState;
    this.$stateParams = $stateParams;
    this.$state = $state;
  }

  $onInit() {
    this.quizId = this.$stateParams.id;
    this.loading = true;
    this.availableQuizzes = {};
    this.answers = {};

    this.DataService.getQuizWithQuestions(this.quizId).then(result => {
      this.loading = false;
      this.quiz = result;
      result.questions.forEach(question => {
        this.answers[question.id] = null;
      });
    });
  }

  save() {
    this.QuizState.saveQuizResult(this.quizId, this.answers).then(() => {
      this.$state.go('overview');
    });
  }

  get allAnswered() {
    return Object.keys(this.answers).every(question => this.answers[question] !== null);
  }
}

export const quiz = {
  template: require('./quiz.html'),
  controller: quizCtrl
};
