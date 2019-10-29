(function (angular) {
  "use strict";
  angular.module('HomePageModule')
    .factory('HomePageService', HomePageService)

  HomePageService.$inject = [
    'ApiProductsService',
    'ModalFormState',
    'ModalFormComponentService',
    'ModalConfirmationComponentService'
  ];

  function HomePageService(
    ApiProductsService,
    ModalFormState,
    ModalFormComponentService,
    ModalConfirmationComponentService
  ) {
    var instance = {
      getProducts: ApiProductsService.getProducts,
      getProduct: ApiProductsService.getProduct,
      updateProduct: ApiProductsService.updateProduct,
      deleteProduct: deleteProduct,
      createProduct: ApiProductsService.createProduct,
      pushProduct: pushProduct,
      popProduct: popProduct,
      upsertProduct: upsertProduct,
      ModalFormState: ModalFormState,
      showModalForm: ModalFormComponentService.show,
      showModalConfirmation: ModalConfirmationComponentService.show,
      hideModalConfirmation: ModalConfirmationComponentService.hide
    };


    return instance;

    function deleteProduct(idProduct) {
      idProduct = idProduct.idProduct || idProduct;
      return ApiProductsService.deleteProduct(idProduct);
    }

    function upsertProduct(product, modalFormState) {
      switch (modalFormState) {
        case ModalFormState.CREATE:
          return ApiProductsService.createProduct(product);
          break;
        case ModalFormState.EDIT:
          return ApiProductsService.updateProduct(product.idProduct, product);
          break;

        default:
          break;
      }

    }

    function pushProduct(products, newProduct) {

      let newList = products
        .filter((product) => {
          return product.idProduct !== newProduct.idProduct //remove if exist
        })
        .concat([newProduct])

      return newList;

    }


    function popProduct(products, oldProduct) {
      return products.filter((product) => {
        return product.idProduct !== oldProduct.idProduct;
      })
    }
  }


})(angular);
