(function (angular) {
  "use strict";

  var component = {
    templateUrl: "src/app/components/alert/alert.component.html",
    controller: AlertComponentController,
    bindings: {
      message: "<",
      hasError : "<"
    }
  };


  AlertComponentController.$inject = [];

  function AlertComponentController() {
    var $ctrl = this;  
  }

  angular.module('AlertComponentModule')
    .component('appAlert', component);


})(angular);
