'use strict';

var thirpartyModules = [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
];

var appModules = [
  'HomePageModule'
];

var appServices = [
  'ApiProductsModule'
];

/**
 * @ngdoc overview
 * @name loginNRoutersApp
 * @description
 * # loginNRoutersApp
 *
 * Main module of the application.
 */
angular
  .module('loginNRoutersApp', thirpartyModules.concat(appModules).concat(appServices));
