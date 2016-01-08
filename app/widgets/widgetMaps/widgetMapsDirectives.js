app.directive("widgetmap",function(){
  return{
    restrict : "E",
    replace : true,
    scope: {},
    templateUrl: "widgets/widgetMaps/view.html",
    controller: 'widgetMapsController'
  }
});