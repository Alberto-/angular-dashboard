app.directive("widgetdoughnut",function(){
  return{
    restrict : "E",
    replace : true,
    scope: {},
    templateUrl: "./app/widgets/widgetsChart/widgetDoughnut/widgetDoughnutView.html",
    controller: 'widgetDoughnutController'
  }

});
