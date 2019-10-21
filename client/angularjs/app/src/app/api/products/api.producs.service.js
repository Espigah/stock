(function (angular) {
  "use strict";
  angular.module('ApiProductsModule')
    .factory('ApiProductsService', ApiProductsService);

  ApiProductsService.$inject = ['ApiService'];

  function ApiProductsService(ApiService) {

    var productResource = create();

    var instance = {
      getProducts: getProducts,
      getProduct: getProduct,
      createProduct: createProduct,
      updateProduct: updateProduct,
      deleteProduct: deleteProduct,
      save: save
    };

    return instance;

    function create(params) {
      return ApiService.create('/products/:id');
    }

    function getProducts() {
      return productResource.query().$promise;
    }

    // HttpClient API get() method => Fetch product
    function getProduct(id) {

      return productResource.get({
        id: id
      }).$promise;
    }

    // HttpClient API post() method => Create product
    function createProduct(product) {
      return productResource.post(product);
    }

    // HttpClient API put() method => Update product
    function updateProduct(product) {
      return productResource.put(product);
    }

    // HttpClient API delete() method => Delete product
    function deleteProduct(product) {
      return productResource.delete(product);
    }

    function save(product) {
      var action = product.id ? 'updateProduct' : 'createProduct';
      return instance[action](product);
    }


  }


})(angular);
