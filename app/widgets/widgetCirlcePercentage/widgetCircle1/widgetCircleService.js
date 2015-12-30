app.factory('widgetPolarService', ["$http", function($http){

	labels=[
		"Total Active",
		"Total Not Active",
		"Total Cancelled",
		"Total Terminated"
	];

	return {
		getInfo: function(){
			return $http.get('widgets/widgetsChart/widgetPolar/details.json');
		},
		getLabels: function(){
			return labels;
		}
	}

}]);

