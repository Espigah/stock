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

    function create() {
      return ApiService.create('/products/:id');
    }

    function getProducts() {
      return productResource.query().$promise.then(normalizeId);
    }

    /**
     * From json-serve idProduct does not exist
     * @param {*} productList 
     */
    function normalizeId(productList) {
      return productList.map(function (data) {
        return angular.merge({
          idProduct: data.idProduct || data.id
        }, data);
      });
    }

    // HttpClient API get() method => Fetch product
    function getProduct(id) {

      return productResource.get({
        id: id
      }).$promise;
    }

    // HttpClient API post() method => Create product
    function createProduct(product) {
      return productResource.post(product).$promise;
    }

    // HttpClient API put() method => Update product
    function updateProduct(idProduct, product) {
      return productResource.put(product).$promise;
    }

    // HttpClient API delete() method => Delete product
    function deleteProduct(idProdcut) {
      return productResource.delete({
        id: idProdcut
      }).$promise;
    }

    function save(product) {
      var action = product.id ? 'updateProduct' : 'createProduct';
      return instance[action](product);
    }


  }


})(angular);
