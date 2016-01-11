app.factory('widgetCircleService', ["$http", function($http){

	var labels = ["success","medium","warning","error"];

	function checkLevelColors (val){

		console.log('\n\nchecking'+val);

		switch(true){
			case val>=75:
			return labels[0];
			break;
			case val>=50 && val<75:
			return  labels[1];
			break;
			case val>=25 && val<50:
			return  labels[2];
			break;
			case  val<25:
			return  labels[3];
			break;
			default:
			return  labels[1];
			break;
		}
	};

	return {
		getInfo: function(){
			return $http.get('widgets/widgetCirlcePercentage/details.json');
		},
		checkLevel: function(val){
			return checkLevelColors(val);
		}
	}

}]);

