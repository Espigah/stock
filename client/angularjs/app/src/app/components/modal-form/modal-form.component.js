(function (angular) {
  "use strict";

  var component = {
    templateUrl: "src/app/components/modal-form/modal-form.component.html",
    controller: ModalFormComponentController,
    bindings: {
      product : "<",
      submit : "&",
      state : "@"
    }
  };


  ModalFormComponentController.$inject = ['ModalFormComponentService'];

  function ModalFormComponentController(ModalFormComponentService) {
    var $ctrl = this;
    $ctrl.close = close;
    $ctrl.save = save;
    
    //___
    //
    //___
    function close() {
      ModalFormComponentService.hide();
    }

    function save(product) {
      $ctrl.submit({product:product})
    }
    
  }

  angular.module('ModalFormComponentModule')
    .component('appModalForm', component);


})(angular);
