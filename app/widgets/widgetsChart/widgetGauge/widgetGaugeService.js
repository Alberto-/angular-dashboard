app.factory('widgetGaugeService', ["$http", function($http){

	return {
		getInfo: function(){
			return $http.get('./app/widgets/widgetsChart/widgetGauge/details.json');
		}	
	}

}]);

