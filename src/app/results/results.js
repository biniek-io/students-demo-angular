/**
 * Controller for results component
 */
class resultsCtrl {
  /**
   * @param {DataService}
   * @param {QuizState}
   * @ngInject
   */
  constructor(DataService, QuizState) {
    this.DataService = DataService;
    this.QuizState = QuizState;
  }

  $onInit() {
    this.results = [];
    this.QuizState.getQuizzesResults().forEach(results => {
      console.log('results', results);

      const quiz = {loading: true};
      this.results.push(quiz);
      this.DataService.getQuizWithQuestions(results.id).then(quizResult => {
        quiz.title = quizResult.title;
        quiz.answers = {
          correct: quizResult.questions.reduce((prev, question, i) => {
            if (question.correct_answer === results.result[question.id]) {
              return prev + 1;
            }
            return prev;
          }, 0),
          all: quizResult.questions.length
        }
      });

    });
  }
}

export const results = {
  template: require('./results.html'),
  controller: resultsCtrl
};
