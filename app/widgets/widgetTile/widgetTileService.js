app.factory('widgetTileService', ["$http", function($http){

	return {
		getInfo: function(){
			return $http.get('./app/widgets/widgetTile/details.json');
		}
	}

}]);

