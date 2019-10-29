(function (angular) {
  "use strict";
  angular.module('ModalFormComponentModule')
    .factory('ModalFormComponentService', ModalFormComponentService);

  ModalFormComponentService.$inject = ['ModalService'];

  function ModalFormComponentService(ModalService) {
    var idModal = "#modalForm";
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
