(function (angular) {
  "use strict";
  angular.module('HomePageModule')
    .factory('HomePageService', HomePageService)

  HomePageService.$inject = ['ApiProductsService'];

  function HomePageService(ApiProductsService) {
    var instance = {
      getProducts: ApiProductsService.getProducts,
      getProduct: ApiProductsService.getProduct,
      updateProduct: ApiProductsService.updateProduct,
      deleteProduct: ApiProductsService.deleteProduct,
      createProduct: ApiProductsService.createProduct,
    };


    return instance;
  }


})(angular);
