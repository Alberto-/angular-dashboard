app.controller('widgetGaugeController', ["$scope", "$rootScope", "$http", "$compile", "widgetGaugeService",

 function ($scope, $rootScope, $http, $compile, widgetGaugeService) {

  var minCanvasHeightToRemove = 50;

  widgetGaugeService.getInfo().success(function(data){
   $scope.title = data.title;
   $scope.description = data.description;
   $scope.gaugeValue = data.gaugeValue;
   // console.debug('######## ->' + data.gaugeValue);
   // console.debug('success');
   $scope.loadGauge();

 }).error(function(data){
   console.error('error');
 });


 if(window.addEventListener) {
    window.addEventListener('changeDashboard', function() {
      //console.info('addEventListener - changeDashboard');
      $scope.loadGauge();
    }, true);
  }
  else {
    console.warn('your browser does not support - changeDashboard');
  }

  $scope.loadGauge = function(){
   //console.debug('Loading Gauge ...');
   var parentHeight = 0;
   var parentWidth = 0;

   parentHeight = $("#widgetGauge").parent().parent().height() - minCanvasHeightToRemove;
   parentWidth = $("#widgetGauge").parent().width();
   // console.debug('height : ' + parentHeight + "  width : " + parentWidth);
   // console.debug('gauge height : ' + $("#widgetGauge").height());

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

  };

}]);


