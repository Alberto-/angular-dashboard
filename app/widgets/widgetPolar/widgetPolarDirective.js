app.directive("widgetpolar",function(){
  return{
    restrict : "E",
    replace : true,
    templateUrl: "widgets/widgetPolar/widgetPolarView.html",
    controller: 'widgetPolarController'
  }

});
