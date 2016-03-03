app.controller('widgetDoughnutMController', ["$scope", "$rootScope", "$http", "$compile", "widgetDoughnutMService",

 function ($scope, $rootScope, $http, $compile, widgetDoughnutMService) {
  $scope.title="Advertising";
  $scope.description="People reached with email advertising";

  // console.info('Loading chart ...');

  widgetDoughnutMService.getInfo().success(function(data){
  // console.debug('Chart M data: ' + data);
    Morris.Donut({
      element: 'widgetDoughnutM',
      resize: true,
      data: data,
      formatter: function (x) { return x + "%"}
    }).on('click', function(i, row){
      console.log(i, row);
    });

  }).error(function(data){
    console.error("error loading windget Polar");
  });


}]);