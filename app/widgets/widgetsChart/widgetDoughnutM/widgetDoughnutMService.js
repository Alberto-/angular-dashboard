app.factory('widgetDoughnutMService', ["$http", function($http){

	return {
		getInfo: function(){
			return $http.get('widgets/widgetsChart/widgetDoughnutM/details.json');
		}
	}

}]);

