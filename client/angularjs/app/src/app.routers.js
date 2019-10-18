'use strict';

/**
 * @ngdoc overview
 * @name loginNRoutersApp
 * @description
 * # loginNRoutersApp
 *
 * Main module of the application.
 */
angular
  .module('loginNRoutersApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/login/login.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
