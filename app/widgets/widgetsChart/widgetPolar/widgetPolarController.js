app.controller('widgetPolarController', ["$scope", "$rootScope", "$http", "$compile", "widgetPolarService",

 function ($scope, $rootScope, $http, $compile, widgetPolarService) {
    $scope.title="Grafico 6";
    $scope.desc="grafico descrizione 123456";

    console.log('ricarico grafico');


    $scope.contractsLabels = widgetPolarService.getLabels();


    widgetPolarService.getInfo().success(function(data){
      console.log(data); 

      $scope.json = data; 

      $scope.totalActive = $scope.json.active;
      $scope.totalNotActive =  $scope.json.notActive;
      $scope.totalCancelled =  $scope.json.cancelled;
      $scope.totalTerminated =  $scope.json.terminated;

      $scope.contractsData = [
      $scope.totalActive,
      $scope.totalNotActive,
      $scope.totalCancelled,
      $scope.totalTerminated
      ];

      $scope.contractsColours = [
      "#9ED54C",
      "#91C249",
      "#EC2A2D",
      "#8D0521"
      ];

  }).error(function(data){
      console.log("error loading windget Polar");
  });



}]);