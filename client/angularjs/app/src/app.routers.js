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
      .otherwise({
        redirectTo: '/home'
      });
  });
