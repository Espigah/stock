(function (angular) {
  "use strict";
  angular.module('HomePageModule')
    .controller('HomePageController', HomePageController);

  HomePageController.$inject = ['HomePageService'];

  function HomePageController(HomePageService) {
    var $ctrl = this;

    $ctrl.onEdit = onEdit;
    $ctrl.onDelete = onDelete;
    $ctrl.onCreate = onCreate;
    $ctrl.onFormSubmit = onFormSubmit;
    $ctrl.onModelConfirmationClose = onModelConfirmationClose;
    $ctrl.ModalFormState = HomePageService.ModalFormState.CLOSE;
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
    function openModalForm(state) {
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
      openModalForm();
    }

    function onCreate() {
      setProduct({});
      openModalForm(HomePageService.ModalFormState.CREATE);
    }

    //________________________________
    //API REQUEST
    //________________________________
    function onFormSubmit(data) {
      var product = data.product;
      HomePageService.upsertProduct(product, $ctrl.modalFormState)
        .then(function (data) {
          $ctrl.productList = HomePageService.pushProduct($ctrl.productList, data);
          openModalForm(HomePageService.ModalFormState.CLOSE);
          //alertService.success("Editado!");
        });
    }

    function onModelConfirmationClose(data) {
      var answer = data.answer;
      if (!answer) { //isNo
        hideModalConfirmation();
        return;
      }

      HomePageService.deleteProduct($ctrl.product)
        .then(data => {
          $ctrl.productList = HomePageService.popProduct($ctrl.productList, $ctrl.product);
          hideModalConfirmation();
          //this.alertService.success("Removido!");
        }, (err) => {
          hideModalConfirmation();
          //this.alertService.error("Erro ao tentar remover um produto!");
        })

    }
    //________________________________
    //
    //________________________________
    function setProduct(product) {
      $ctrl.product = angular.copy(product);
    }

  }


})(angular);
