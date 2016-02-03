app.controller('widgetTileController', ["$scope", "$rootScope", "$http", "$compile", "widgetTileService",

	function ($scope, $rootScope, $http, $compile, widgetTileService) {


		widgetTileService.getInfo().success(function(data){

			$scope.json = data[$scope.widgetcode]; 
			$scope.title=$scope.json.title;
			$scope.description = $scope.json.description;
			$scope.total=$scope.json.value;

		}).error(function(data){
			console.log("error loading windget Tile: " + $scope.widgetcode);
		});


	}]);