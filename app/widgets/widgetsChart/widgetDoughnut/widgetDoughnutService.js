app.factory('widgetDoughnutService', ["$http", function($http){

	labels = [
	"Total Active",
	"Total Not Active",
	"Total Cancelled",
	"Total Terminated"
	];


	colors =  [
	"#8ac249",
	"#ffeb3b",
	"#fe9700",
	"#f34236"
	];

	return {
		getInfo: function(){
			return $http.get('widgets/widgetsChart/widgetDoughnut/details.json');
		},
		getLabels: function(){
			return labels;
		},
		getColors: function(){
			return colors;
		}
	}

}]);

