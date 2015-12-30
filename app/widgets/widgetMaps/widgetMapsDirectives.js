app.directive("widgetmap",function(){
  return{
    restrict : "E",
    replace : true,
    templateUrl: "widgets/widgetMaps/view.html",
    controller: 'widgetMapsController'
  }
});