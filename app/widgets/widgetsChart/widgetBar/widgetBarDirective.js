app.directive("widgetbar",function(){
  return{
    restrict : "E",
    replace : true,
    scope: {},
    templateUrl: "./app/widgets/widgetsChart/widgetBar/widgetBarView.html",
    controller: 'widgetBarController'
  }

});
