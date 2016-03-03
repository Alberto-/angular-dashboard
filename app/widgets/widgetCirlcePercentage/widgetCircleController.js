app.controller('widgetCircleController', ["$scope", "$rootScope", "$http", "$compile", "widgetCircleService",

	function ($scope, $rootScope, $http, $compile, widgetCircleService) {
		widgetCircleService.getInfo().success(function(data){
			$scope.json = data[$scope.widgetcode]; 
			$scope.percentage = $scope.json.percentage;
			$scope.description = $scope.json.description;
			$scope.title=$scope.json.title;
			$scope.colorBar=widgetCircleService.checkLevel($scope.percentage);
		}).error(function(data){
			console.error("error loading windget Circle: " + $scope.widgetcode);
	});

}]);