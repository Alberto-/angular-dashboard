app.directive("widgetbar",function(){
  return{
    restrict : "E",
    replace : true,
    templateUrl: "widgets/widgetsChart/widgetBar/widgetBarView.html",
    controller: 'widgetBarController'
  }

});
