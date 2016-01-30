app.controller('widgetPolarController', ["$scope", "$rootScope", "$http", "$compile", "widgetPolarService",

 function ($scope, $rootScope, $http, $compile, widgetPolarService) {
  $scope.title="Polar chart";
  $scope.desc="Polar chart description";

  console.log('Loading chart ...');


  $scope.chartPolarLabels = widgetPolarService.getLabels();
  $scope.chartPolarColours = widgetPolarService.getColors();


  widgetPolarService.getInfo().success(function(data){
    console.log(data); 

    $scope.json = data; 

    $scope.totalActive = $scope.json.active;
    $scope.totalNotActive =  $scope.json.notActive;
    $scope.totalCancelled =  $scope.json.cancelled;
    $scope.totalTerminated =  $scope.json.terminated;

    $scope.chartPolarData = [
    $scope.totalActive,
    $scope.totalNotActive,
    $scope.totalCancelled,
    $scope.totalTerminated
    ];


  }).error(function(data){
    console.log("error loading windget Polar");
  });



}]);