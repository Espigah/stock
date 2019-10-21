(function (angular) {
  "use strict";

  var component = {
    templateUrl: "src/app/components/table/table.component.html",
    controller: TableComponentController,
    bindings: {
      productList: '<',
      onEdit: "&",
      onDelete: "&"
    }
  };


  TableComponentController.$inject = [];

  function TableComponentController() {
    var $ctrl = this;  

  }

  angular.module('TableComponentModule')
    .component('appTable', component);


})(angular);
