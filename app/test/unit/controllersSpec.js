'use strict';


describe('Dashboard widgets', function() {


	describe('Test Servces - Widget cirles', function() {
		beforeEach(module('dashboardApp'));

		var $controller;
		var service 
		beforeEach(inject(function(_$controller_,widgetCircleService){
		    // The injector unwraps the underscores (_) from around the parameter names when matching
		    $controller = _$controller_;
		    service = widgetCircleService;

		}));

		describe('widgetCircleService', function() {
			it('Json data widget1 expect percentage = 90', function() {
				var $scope = {};
				var controller = $controller('widgetCircleController_I', { $scope: $scope });
				var result;
				service.getInfo().success(function(data){
					$scope.json = data.widgetCircle1; 
					$scope.percentage = $scope.json.percentage;
					result = $scope.percentage;
					expect(result).toEqual(90);
					expect(result).not.toBe(null);
				});
			});


			it('expect check level colors ', function() {
				var result;
				expect(service.checkLevel(75)).toMatch("success");
				expect(service.checkLevel(50)).toMatch("medium");
				expect(service.checkLevel(25)).toMatch("warning");
				expect(service.checkLevel(5)).toMatch("error");
			});


		});



	});



});