'use strict';
app.controller('widgetBarController', [ "$scope","$rootScope","$http","$compile","widgetBarService",
  function ($scope, $rootScope, $http, $compile, widgetBarService) {
    $scope.title="Bar chart";
    $scope.desc="Bar chart description";

    widgetBarService.getInfo().success(function(data){
      console.log(data); 

      //main chart label
      $scope.chartBarLabels = ["Customers" + " - " + "Leads"];

      //data series
      $scope.series = widgetBarService.getLabels();

      //chart data
      $scope.chartBarData = [
      [data.customers.total],
      [data.leads.total]
      ];
    }).error(function(data){
      console.log("error loading windget Bar chart");

    });


    $scope.chartBarOptions = {
      //barValueSpacing: 150,
      //barDatasetSpacing: -10,
    };
  }]);








