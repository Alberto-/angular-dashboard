'use strict';


describe('Test Services DashboardApp', function() {
	beforeEach(module('dashboardApp'));

	var $controller;
	var service 
	var $httpBackend;

	describe('widgetCircleService test', function() {
		beforeEach(inject(function(_$controller_,widgetCircleService){
		    // The injector unwraps the underscores (_) from around the parameter names when matching
		    $controller = _$controller_;
		    service = widgetCircleService;
		}));

		it('Json data widget circle 1 expect percentage,title != null ', function() {
			service.getInfo().success(function(data){
				$scope.json = data.widgetCircle1; 
				$scope.percentage = $scope.json.percentage;
				expect($scope.title).not.toBe(null);
				expect($scope.percentage).not.toBe(null);
			});
		});
		it('test checkLevel function', function() {
			var result;
			expect(service.checkLevel(75)).toMatch("success");
			expect(service.checkLevel(50)).toMatch("medium");
			expect(service.checkLevel(25)).toMatch("warning");
			expect(service.checkLevel(5)).toMatch("error");
		});
	});


	describe('widgetMapService test', function() {
		beforeEach(inject(function(_$controller_,widgetMapFactory){
		    // The injector unwraps the underscores (_) from around the parameter names when matching
		    $controller = _$controller_;
		    service = widgetMapFactory;
		}));

		it('expects location > 0 ', function() {
			// expect(service.getLocations().length>0).toBe(true);
			expect(service.getLocations().length).toBeGreaterThan(0); //true
		});
	});


	describe('widgetChartBar test', function() {
		beforeEach(inject(function(_$controller_,widgetBarService){
		    // The injector unwraps the underscores (_) from around the parameter names when matching
		    $controller = _$controller_;
		    service = widgetBarService;
		}));

		it('expects labels > 0', function() {
			// expect(service.getLocations().length>0).toBe(true);
			expect(service.getLabels().length).toBeGreaterThan(0); //true
		});
	});

	describe('widgetChartPolar test', function() {
		beforeEach(inject(function(_$controller_,widgetDoughnutService){
		    // The injector unwraps the underscores (_) from around the parameter names when matching
		    $controller = _$controller_;
		    service = widgetDoughnutService;
		}));

		it('expects labels,colors, > 0', function() {
			// expect(service.getLocations().length>0).toBe(true);
			expect(service.getLabels().length).toBeGreaterThan(0); //true
		});

	});


});
