(function (angular) {
  "use strict";
  angular.module('ModalFormComponentModule')
    .factory('ModalFormComponentService', ModalFormComponentService);

  ModalFormComponentService.$inject = ['ModalService', 'ModalFormState'];

  function ModalFormComponentService(ModalService, ModalFormState) {
    var idModal = "#modalForm";
    var instance = {
      show: show,
      hide: hide,
      updateState: updateState
    };


    function show() {
      ModalService.attach(idModal).show();
    }

    function hide() {
      ModalService.attach(idModal).show(false);
    }

    function updateState(state) {
      if (state !== ModalFormState.CLOSE) {
        return;
      }
      hide();
    }


    return instance;

  }


})(angular);
