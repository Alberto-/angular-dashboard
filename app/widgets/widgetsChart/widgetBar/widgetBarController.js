'use strict';
app.controller('widgetBarController', [ "$scope","$rootScope","$http","$compile","widgetBarService",
  function ($scope, $rootScope, $http, $compile, widgetBarService) {
    $scope.title="Leads chart";
    $scope.desc="Leads chart description";

    widgetBarService.getInfo().success(function(data){
      //console.debug(data); 

      //main chart label
      $scope.chartBarLabels = ["Customers" + " - " + "Leads"];
      $scope.chartBarColours = ['#ae9bce', "#9d9d9d"];

      //data series
      $scope.series = widgetBarService.getLabels();

      //chart data
      $scope.chartBarData = [
      [data.customers.total],
      [data.leads.total]
      ];
    }).error(function(data){
      console.error("error loading windget Bar chart");

    });


    $scope.chartBarOptions = {
      //barValueSpacing: 150,
      //barDatasetSpacing: -10,
    };
  }]);








