app.directive("widgetgauge",function(){
  return{
    restrict : "E",
    replace : true,
    scope: {},
    templateUrl: "widgets/widgetsChart/widgetGauge/widgetGaugeView.html",
    controller: 'widgetGaugeController'
  }

});
