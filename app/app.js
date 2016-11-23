(function() {
  'use strict';

  angular.module('helloApp', [
    'ui.router'
  ])
  .controller('helloWorldController',function($scope){
    $scope.hello = 'Hello World';
  })
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
})();
