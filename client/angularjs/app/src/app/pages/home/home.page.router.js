(function (angular) {
  "use strict";
  angular.module('HomePageModule')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: 'src/app/pages/home/home.component.html',
          controller: 'HomePageController',
          controllerAs: '$ctrl'
        });
    });

})(angular)
;
