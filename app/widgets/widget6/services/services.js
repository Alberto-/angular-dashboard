app.factory('widget6Factory', ["$http", function($http){

	labels=[
		"Total Active",
		"Total Not Active",
		"Total Cancelled",
		"Total Terminated"
	];

	return {
		getInfo: function(){
			return $http.get('widgets/widget6/services/details.json');
		},
		getLabels: function(){
			return labels;
		}
	}

}]);

