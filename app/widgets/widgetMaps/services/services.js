app.factory("widgetMapFactory",["$http", function( $http) {

	var locations = [
		['Cagliari', 39.223841, 9.121661, 1, "preferite"],
		['San Francisco', 37.774929, -122.419416, 2 ,null],
		['San Diego', 32.715738, -117.161084, 3 ,null],
		['Los Angeles', 34.052234, -118.243685, 4 ,null],
	];
	return {
		getLocations: function () {
			return locations;
		}
	};
}]);