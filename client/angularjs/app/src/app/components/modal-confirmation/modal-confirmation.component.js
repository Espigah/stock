(function (angular) {
  "use strict";

  var component = {
    templateUrl: "src/app/components/modal-confirmation/modal-confirmation.component.html",
    controller: ModalConfirmationComponentController,
    bindings: {
      close: "&"
    }
  };


  ModalConfirmationComponentController.$inject = [];

  function ModalConfirmationComponentController() {
    var $ctrl = this;   
  }

  angular.module('ModalConfirmationComponentModule')
    .component('appModalConfirmation', component);


})(angular);
