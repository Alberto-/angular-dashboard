'use strict';

/* jasmine specs for controllers go here */
describe('Dashboard controllers', function() {

  describe('widget5Controller', function(){

    beforeEach(module('dashboardApp'));

    it('should create lenght data = 2', inject(function($controller) {
      var scope = {},
          ctrl = $controller('widget5Controller', {$scope:scope});

      expect(scope.series.length).toBe(2);
      expect(scope.customerData.length).toBe(scope.series.length);
    }));

  });
});