app.factory('widgetLineService', ["$http", function($http){


	return {
		getInfo: function(){
			return $http.get('./app/widgets/widgetsChart/widgetLine/details.json');
		}
	}

}]);

