app.directive("widgetcircle",function(){
	return{
		restrict : "E",
		replace : true,
		scope: {
			widgetcode :'@widgetcode'
		},
		templateUrl: "./app/widgets/widgetCirlcePercentage/widgetCircleView.html",
		controller: 'widgetCircleController'
	}
});







