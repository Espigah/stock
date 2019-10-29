(function (angular) {
  "use strict";
  angular.module('ModalConfirmationComponentModule')
    .factory('ModalConfirmationComponentService', ModalConfirmationComponentService);

  ModalConfirmationComponentService.$inject = ['ModalService'];

  function ModalConfirmationComponentService(ModalService) {
    var idModal = "#modalConfirmation";
    var instance = {
      show: show,
      hide: hide
    };


    function show() {
      ModalService.attach(idModal).show();
    }

    function hide() {
      ModalService.attach(idModal).show(false);
    }




    return instance;

  }


})(angular);
