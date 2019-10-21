(function (angular) {
  "use strict"

  var component = {
    templateUrl:"src/app/components/table/table.component.html",
    bindings: {      
      productList: '<',
      onEdit:  "&",
      onDelete:  "&"
    },
    controller: TableComponentController
  }


  TableComponentController.$inject = [];

  function TableComponentController() {
    debugger
  }

  angular.module('TableComponentModule')
    .component('appTable', component)


})(angular);
