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


    Morris.Donut({
      element: 'graph',
      resize: true,
      data: [
      {value: 70, label: 'foo'},
      {value: 15, label: 'bar'},
      {value: 10, label: 'baz'},
      {value: 5, label: 'A really really long label'}
      ],
      formatter: function (x) { return 20 + "%"}
    }).on('click', function(i, row){
      console.log(i, row);
    });

    $scope.chartBarOptions = {
      //barValueSpacing: 150,
      //barDatasetSpacing: -10,
    };
  }]);








