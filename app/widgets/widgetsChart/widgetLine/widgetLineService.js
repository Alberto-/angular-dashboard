app.factory('widgetLineService', ["$http", function($http){

	labels = [
	"Total Active",
	"Total Not Active",
	"Total Cancelled",
	"Total Terminated"
	];


	colors =  [
	"#9ED54C",
	"#91C249",
	"#EC2A2D",
	"#8D0521"
	];

	return {
		getInfo: function(){
			return $http.get('widgets/widgetsChart/widgetLine/details.json');
		},
		getLabels: function(){
			return labels;
		},
		getColors: function(){
			return colors;
		}
	}

}]);

