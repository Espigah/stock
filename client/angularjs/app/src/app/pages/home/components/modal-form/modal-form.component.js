(function (angular) {
  "use strict";

  var component = {
    templateUrl: "src/app/pages/home/components/modal-form/modal-form.component.html",
    controller: ModalFormComponentController,
    bindings: {
      product: "<",
      submit: "&",
      state: "@"
    }
  };


  ModalFormComponentController.$inject = ['ModalFormComponentService'];

  function ModalFormComponentController(ModalFormComponentService) {
    var $ctrl = this;
    $ctrl.close = close;
    $ctrl.save = save;
    $ctrl.$onChanges = $onChanges;

    function $onChanges(changes) {
      ModalFormComponentService.updateState($ctrl.state);
    }

    //___
    //
    //___
    function close() {
      ModalFormComponentService.hide();
    }

    function save(product) {
      if ($ctrl.productForm.$invalid) {
        return;
      }
      $ctrl.submit({
        product: product
      });
    }

  }

  angular.module('ModalFormComponentModule')
    .component('appModalForm', component);


})(angular);
