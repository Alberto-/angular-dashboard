app.factory('widgetLineService', ["$http", function($http){


	return {
		getInfo: function(){
			return $http.get('widgets/widgetsChart/widgetLine/details.json');
		}
	}

}]);

