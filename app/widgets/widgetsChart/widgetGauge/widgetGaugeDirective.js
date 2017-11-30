app.directive("widgetgauge",function(){
  return{
    restrict : "E",
    replace : true,
    scope: {},
    templateUrl: "./app/widgets/widgetsChart/widgetGauge/widgetGaugeView.html",
    controller: 'widgetGaugeController'
  }

});
