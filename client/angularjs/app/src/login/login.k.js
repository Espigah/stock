'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('loginNRoutersApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));



  describe("[Given] a list is not empty", function () {

    describe("[When] check length", function () {


      it("[Then] length to be '3'", function () {
        expect(MainCtrl.awesomeThings.length).toBe(3);
      });

    });

    describe("[When] remove last item", function () {
      beforeEach(function () {
        MainCtrl.awesomeThings.pop()
      });

      it("[Then] length to be '2'", function () {
        expect(MainCtrl.awesomeThings.length).toBe(2);
      });

    });
  });

  describe("[Given] a list is empty", function () {

    beforeEach(function () {
      MainCtrl.awesomeThings = [];
    });

    describe("[When] check length", function () {


      it("[Then] length to be '0'", function () {
        expect(MainCtrl.awesomeThings.length).toBe(0);
      });

    });

    describe("[When] add new  item", function () {
      beforeEach(function () {
        MainCtrl.awesomeThings.push("value")
      });

      it("[Then] length to be '1'", function () {
        expect(MainCtrl.awesomeThings.length).toBe(1);
      });

    });
  });

});
