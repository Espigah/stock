(function (angular) {
  "use strict";
  angular.module('ModalService',[])
    .factory('ModalService', ModalService);

  ModalService.$inject = ['$timeout'];

  function ModalService($timeout) {
    var instance = {
      attach: attach
    };

  
    
    return instance;


    function attach(id) {
      var $element = $(id);
      return {
        show: function (open)  {
          if(open === undefined){
            open = true;
          }
          $element.modal(open ? 'show' :  'hide');
       
        }
      };
    }

  }


})(angular);
