app.factory('widgetTileService', ["$http", function($http){

	return {
		getInfo: function(){
			return $http.get('widgets/widgetTile/details.json');
		}
	}

}]);

