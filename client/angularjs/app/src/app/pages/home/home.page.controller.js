(function (angular) {
  "use strict"
  angular.module('HomePageModule')
    .controller('HomePageController', HomePageController)

  HomePageController.$inject = ['HomePageService'];

  function HomePageController(HomePageService) {
    debugger
    HomePageService.createProduct( {
      "barCode": 33,
      "name": "novo",
      "description": "tony@mcu.com",
      "quantity": 1,
      "category": "C"
    }).then(function(data){
      debugger
    })
  

  }


})(angular);

