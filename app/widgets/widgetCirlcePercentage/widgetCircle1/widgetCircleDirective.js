app.directive("widgetpolar",function(){
  return{
    restrict : "E",
    replace : true,
    templateUrl: "widgets/widgetsChart/widgetPolar/widgetPolarView.html",
    controller: 'widgetPolarController'
  }

});
