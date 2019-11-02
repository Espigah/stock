(function (angular) {
  "use strict";
  angular.module('TimeoutService', [])
    .factory('TimeoutService', ModalService);

  ModalService.$inject = ['$timeout'];

  function ModalService($timeout) {

    var timeoutMap = {};

    return function (key, func, delay) {
      if (key in timeoutMap) {
        $timeout.cancel(timeoutMap[key]);
      }
      timeoutMap[key] = $timeout(func, delay);
    };
  }


})(angular);
