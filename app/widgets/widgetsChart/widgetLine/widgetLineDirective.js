app.directive("widgetline",function(){
  return{
    restrict : "E",
    replace : true,
    scope: {},
    templateUrl: "widgets/widgetsChart/widgetLine/widgetLineView.html",
    controller: 'widgetLineController'
  }

});
