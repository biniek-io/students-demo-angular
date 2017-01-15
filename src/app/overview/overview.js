/**
 * Controller for overview component
 */
class overviewCtrl {
  /**
   *
   * @param {DataService} DataService common service to fetch data
   * @ngInject
   */
  constructor(DataService) {
    this.DataService = DataService;
  }

  $onInit() {
    this.loading = true;

    this.DataService.getQuizzes().then(result => {
      this.quizzes = result.quizzes;
      this.loading = false;
    });
  }
}

export const overview = {
  template: require('./overview.html'),
  controller: overviewCtrl
};
