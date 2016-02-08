app.controller('widgetGaugeController', ["$scope", "$rootScope", "$http", "$compile", "widgetGaugeService",

 function ($scope, $rootScope, $http, $compile, widgetGaugeService) {
  $scope.title="Stock products";
  $scope.desc="Gauge chart description";

  console.log('Loading Gauge ...');

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
var parentHeight = 0;
var parentWidth = 0;

parentHeight = $("#widgetGauge").parent().height();
parentWidth = $("#widgetGauge").parent().width();


console.log('height : ' + parentHeight + "  width : " + parentWidth);

var gauge = new Gauge({

  renderTo  : 'widgetGauge',
  // width     : parentWidth,
  height    : parentHeight,
  glow      : true,
  units     : 'Mbps',
  title     : 'Upload',
  strokeTicks : false,
  highlights : [{
    from  : 40,
    to    : 60,
    color : 'PaleGreen'
  }, {
    from  : 60,
    to    : 80,
    color : 'Khaki'
  }, {
    from  : 80,
    to    : 100,
    color : 'LightSalmon'
  }],
  animation : {
    delay : 10,
    duration: 300,
    fn : 'bounce'
  }
});


      gauge.setValue( 60);
  gauge.draw();

}


 
$scope.loadGauge();

}]);


