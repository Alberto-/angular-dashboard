app.factory("widgetBarService",["$http", function( $http) {

	labels = ["Customers", "Leads"];
	return {
		getInfo: function () {
			return $http.get('./app/widgets/widgetsChart/widgetBar/details.json');
		},
		getLabels: function(){
			return labels;
		}
	};
	
}]);