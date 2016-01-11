app.controller('widgetCircleController_II', ["$scope", "$rootScope", "$http", "$compile", "widgetCircleService",

	function ($scope, $rootScope, $http, $compile, widgetCircleService) {


		widgetCircleService.getInfo().success(function(data){

			$scope.json = data.widgetCircle2; 
			$scope.percentage = $scope.json.percentage;
			$scope.title=$scope.json.title;
		$scope.colorBar=widgetCircleService.checkLevel($scope.percentage);

		}).error(function(data){
			console.log("error loading windget Circle II");
		});


	}]);