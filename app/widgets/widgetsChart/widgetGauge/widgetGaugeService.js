app.factory('widgetGaugeService', ["$http", function($http){

	return {
		getInfo: function(){
			return $http.get('widgets/widgetsChart/widgetGauge/details.json');
		}	
	}

}]);

