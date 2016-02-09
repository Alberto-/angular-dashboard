app.controller('widgetGaugeController', ["$scope", "$rootScope", "$http", "$compile", "widgetGaugeService",

 function ($scope, $rootScope, $http, $compile, widgetGaugeService) {


  widgetGaugeService.getInfo().success(function(data){
   $scope.title = data.title;
   $scope.description = data.description;
   $scope.gaugeValue = data.gaugeValue;

   console.log('######## ->' + data.gaugeValue);

   console.log('success');

   $scope.loadGauge();

 }).error(function(data){
   console.log('error');
 });


 if(window.addEventListener) {
  window.addEventListener('resize', function() {
    console.log('addEventListener - resize');
    $scope.loadGauge();
  }, false);
}
else {
  console.log('your browser does not support - resize');
}


$scope.loadGauge = function(){
 console.log('Loading Gauge ...');
 var parentHeight = 0;
 var parentWidth = 0;

 parentHeight = $("#widgetGauge").parent().height();
 parentWidth = $("#widgetGauge").parent().width();


 console.log('height : ' + parentHeight + "  width : " + parentWidth);

 var gauge = new Gauge({
      valueBox: {
        visible: false
      },
      valueText: {
        visible: false
      },

      renderTo  : 'widgetGauge',
      // width     : parentWidth,
      height    : parentHeight,
      glow      : true,
      // units     : 'Mbps',
      // title     :  $scope.description,
      strokeTicks : false,
      highlights : [{
        from  : 00,
        to    : 60,
        color : '#4caf50'
      }, {
        from  : 60,
        to    : 80,
        color : '#FF9800'
      }, {
        from  : 80,
        to    : 100,
        color : '#f44336'
      }],
      animation : {
        delay : 10,
        duration: 300,
        fn : 'bounce'
      }
});


 gauge.setValue($scope.gaugeValue);
 gauge.draw();

}




}]);


