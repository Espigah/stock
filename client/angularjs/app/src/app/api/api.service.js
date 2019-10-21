(function (angular) {
  "use strict";
  angular.module('ApiModule')
    .factory('ApiService', ApiService)

  ApiService.$inject = ['$resource', 'API_URL'];

  function ApiService($resource, API_URL) {
    var instance = {
      create: create
    };


    function create(uri) {
      var interceptor = {
        request: function (config) {
          // Before the request is sent out, store a timestamp on the request config
          config.requestTimestamp = Date.now();
          return config;
        },
        response: function (response) {
          // Get the instance from the response object
          var instance = response.resource;

          // Augment the instance with a custom `saveLatency` property, computed as the time
          // between sending the request and receiving the response.
          instance.saveLatency = Date.now() - response.config.requestTimestamp;

          // Return the instance
          return instance;
        }
      };
      return $resource(API_URL + uri, {
        id: '@id'
      }, {
        post: {
          method: 'POST',
          interceptor:  interceptor
        },
        put: {
          method: 'PUT',
          interceptor:  interceptor
        },
        delete: {
          method: 'DELETE',
          interceptor:  interceptor
        },
        get: {
          method: 'GET',
          interceptor:  interceptor
        }
      });
    }
    return instance;
  }

})(angular);
