app.directive("widgetpolar",function(){
  return{
    restrict : "E",
    replace : true,
    scope: {},
    templateUrl: "widgets/widgetsChart/widgetPolar/widgetPolarView.html",
    controller: 'widgetPolarController'
  }

});
