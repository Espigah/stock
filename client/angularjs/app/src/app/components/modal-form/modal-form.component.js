(function (angular) {
  "use strict";

  var component = {
    templateUrl: "src/app/components/modal-form/modal-form.component.html",
    controller: ModalFormComponentController,
    bindings: {
    }
  };


  ModalFormComponentController.$inject = [];

  function ModalFormComponentController() {
    var $ctrl = this;  

  }

  angular.module('ModalFormComponentModule')
    .component('appModalForm', component);


})(angular);
