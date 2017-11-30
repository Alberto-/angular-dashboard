app.directive("widgetline",function(){
  return{
    restrict : "E",
    replace : true,
    scope: {},
    templateUrl: "./app/widgets/widgetsChart/widgetLine/widgetLineView.html",
    controller: 'widgetLineController'
  }

});
