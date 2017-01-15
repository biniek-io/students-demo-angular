export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('overview', {
      url: '/',
      component: 'overview'
    })
    .state('quiz', {
      url: '/quiz/:id',
      component: 'quiz'
    })
    .state('results', {
      url: '/results',
      component: 'results'
    });
}
