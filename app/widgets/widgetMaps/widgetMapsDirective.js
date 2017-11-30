app.directive("widgetmap",function(){
  return{
    restrict : "E",
    replace : true,
    scope: {},
    templateUrl: "./app/widgets/widgetMaps/view.html",
    controller: 'widgetMapsController'
  }
});