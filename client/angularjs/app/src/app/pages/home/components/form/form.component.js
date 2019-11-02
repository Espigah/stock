(function (angular) {
  "use strict";

  var component = {
    templateUrl: "src/app/pages/home/components/form/form.component.html",
    controller: FormComponentController,
    bindings: {
      product: "<"
    }
  };


  FormComponentController.$inject = [];

  function FormComponentController() {
    var $ctrl = this;  

  }

  angular.module('FormComponentModule')
    .component('appForm', component);


})(angular);
