app.directive("widgetdoughnut",function(){
  return{
    restrict : "E",
    replace : true,
    scope: {},
    templateUrl: "widgets/widgetsChart/widgetDoughnut/widgetDoughnutView.html",
    controller: 'widgetDoughnutController'
  }

});
