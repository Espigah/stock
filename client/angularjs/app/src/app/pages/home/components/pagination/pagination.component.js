(function (angular) {
  "use strict";

  var component = {
    templateUrl: "src/app/pages/home/components/pagination/pagination.component.html",
    controller: PaginationComponentController,
    bindings: {
    }
  };


  PaginationComponentController.$inject = [];

  function PaginationComponentController() {
    var $ctrl = this;  

  }

  angular.module('PaginationComponentModule')
    .component('appPagination', component);


})(angular);
