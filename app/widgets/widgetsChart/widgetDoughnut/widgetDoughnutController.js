app.controller('widgetDoughnutController', ["$scope", "$rootScope", "$http", "$compile", "widgetDoughnutService",

 function ($scope, $rootScope, $http, $compile, widgetDoughnutService) {
  $scope.title="Polar chart";
  $scope.desc="Polar chart description";

  console.log('Loading chart ...');


  $scope.chartPolarLabels = widgetDoughnutService.getLabels();
  $scope.chartPolarColours = widgetDoughnutService.getColors();


  widgetDoughnutService.getInfo().success(function(data){
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