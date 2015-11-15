
app.factory("widget5Factory",["$http", function( $http) {

	labels = ["Customers", "Leads"];
	return {
		getInfo: function () {
			return $http.get('widgets/widget5/services/details.json');
		},
		getLabels: function(){
			return labels;
		}
	};
}]);