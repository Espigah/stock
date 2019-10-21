(function (angular) {
  "use strict"
  angular.module('HomePageModule')
    .controller('HomePageController', HomePageController)

  HomePageController.$inject = ['HomePageService'];

  function HomePageController(HomePageService) {
    var $ctrl = this;

    $ctrl.onEdit = onEdit;
    $ctrl.onDelete = onDelete;

    HomePageService.getProducts()
      .then(function (productList) {
        $ctrl.productList = productList;
      })


      function onDelete(params) {
        debugger
      }

      function onEdit(params) {
        debugger
      }


  }


})(angular);
