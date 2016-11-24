skuApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$localStorageProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $localStorageProvider){

  $locationProvider.html5Mode(true);
  $localStorageProvider.setKeyPrefix('');

  $stateProvider
    .state('directory', {
      url: '/',
      templateUrl: 'views/sku.html',
      controller: 'genCtrl'
    });


  $urlRouterProvider.otherwise('/');
}])
