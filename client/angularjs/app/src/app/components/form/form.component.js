(function (angular) {
  "use strict";

  var component = {
    templateUrl: "src/app/components/form/form.component.html",
    controller: FormComponentController,
    bindings: {
    }
  };


  FormComponentController.$inject = [];

  function FormComponentController() {
    var $ctrl = this;  

  }

  angular.module('FormComponentModule')
    .component('appForm', component);


})(angular);
