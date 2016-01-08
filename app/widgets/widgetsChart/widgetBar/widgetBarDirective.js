app.directive("widgetbar",function(){
  return{
    restrict : "E",
    replace : true,
    scope: {},
    templateUrl: "widgets/widgetsChart/widgetBar/widgetBarView.html",
    controller: 'widgetBarController'
  }

});
