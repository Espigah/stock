(function (angular) {
  "use strict";
  angular.module('ModalFormComponentModule')
    .constant('ModalFormState', {
      CLOSE: "CLOSE",
      CREATE: "CREATE",
      READ_ONLY: "READ_ONLY",
      EDIT: "EDIT"
    });
})(angular);
