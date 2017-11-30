app.directive("widgettile",function(){
	return{
		restrict : "E",
		replace : true,
		scope: {
			widgetcode :'@widgetcode',
			widgetTileClass : '@widgetTileClass',
			widgetTileIcon : '@widgetTileIcon'
		},
		templateUrl: "widgets/widgetTile/widgetTileView.html",
		controller: 'widgetTileController'
	}
});







