app.factory('widgetDoughnutMService', ["$http", function($http){

	return {
		getInfo: function(){
			return $http.get('./app/widgets/widgetsChart/widgetDoughnutM/details.json');
		}
	}

}]);

