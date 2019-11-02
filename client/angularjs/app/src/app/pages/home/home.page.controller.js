(function (angular) {
  "use strict";
  angular.module('HomePageModule')
    .controller('HomePageController', HomePageController);

  HomePageController.$inject = ['HomePageService', 'TimeoutService'];

  function HomePageController(HomePageService, TimeoutService) {
    var $ctrl = this;

    $ctrl.onEdit = onEdit;
    $ctrl.onDelete = onDelete;
    $ctrl.onCreate = onCreate;
    $ctrl.onFormSubmit = onFormSubmit;
    $ctrl.onModelConfirmationClose = onModelConfirmationClose;
    $ctrl.modalFormState = HomePageService.ModalFormState.CLOSE;
    $ctrl.product;

    setup();

    function setup() {
      loadProduct();
    }

    function loadProduct() {
      HomePageService.getProducts()
        .then(function (productList) {
          $ctrl.productList = productList;
        });
    }

    //________________________________
    //MODAL STATE
    //________________________________
    function updateModalFormState(state) {
      $ctrl.modalFormState = state || HomePageService.ModalFormState.EDIT;
      HomePageService.showModalForm();
    }

    function showModalConfirmation() {
      HomePageService.showModalConfirmation();
    }

    function hideModalConfirmation() {
      HomePageService.hideModalConfirmation();
    }
    //___
    //
    //___
    function onDelete(product) {
      setProduct(product);
      showModalConfirmation();
    }

    function onEdit(product) {
      setProduct(product);
      updateModalFormState(HomePageService.ModalFormState.EDIT);
    }

    function onCreate() {
      setProduct({});
      updateModalFormState(HomePageService.ModalFormState.CREATE);
    }

    //________________________________
    //API REQUEST
    //________________________________
    function onFormSubmit(data) {
      var product = data.product;
      HomePageService.upsertProduct(product, $ctrl.modalFormState)
        .then(function (data) {
          $ctrl.productList = HomePageService.pushProduct($ctrl.productList, data);
          updateModalFormState(HomePageService.ModalFormState.CLOSE);
          showAlert("Editado!");
        });
    }

    function onModelConfirmationClose(data) {
      var answer = data.answer;
      if (!answer) { //isNo
        hideModalConfirmation();
        return;
      }

      HomePageService.deleteProduct($ctrl.product)
        .then(function (data)  {
          $ctrl.productList = HomePageService.popProduct($ctrl.productList, $ctrl.product);
          hideModalConfirmation();
          showAlert("Removido!");
        }, function (err) {
          hideModalConfirmation();
          showAlert("Erro ao tentar remover um produto!", true);
        });

    }
    //________________________________
    //
    //________________________________
    function setProduct(product) {
      $ctrl.product = angular.copy(product);
    }

    //________________________________
    //alert 
    //________________________________
    function showAlert(message, error) {
      $ctrl.message = message;
      $ctrl.hasError = error;
      TimeoutService('showAlert', function () {
        showAlert(null)
      }, 3000)
    }

  }


})(angular);
