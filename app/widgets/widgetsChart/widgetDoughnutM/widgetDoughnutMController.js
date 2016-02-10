app.controller('widgetDoughnutMController', ["$scope", "$rootScope", "$http", "$compile", "widgetDoughnutMService",

 function ($scope, $rootScope, $http, $compile, widgetDoughnutMService) {
  $scope.title="Advertising";
  $scope.description="People reached with email advertising";

  console.log('Loading chart ...');

  $scope.chartPolarLabels = widgetDoughnutMService.getLabels();
  $scope.chartPolarColours = widgetDoughnutMService.getColors();

  widgetDoughnutMService.getInfo().success(function(data){


  }).error(function(data){
    console.log("error loading windget Polar");
  });

    Morris.Donut({
      element: 'widgetDoughnutM',
      resize: true,
      data: [

        {value: 60, label: 'Opened'},
        {value: 25, label: 'Visit website'},
        {value: 10, label: 'Registered'},
        {value: 5, label: 'Deleted'}

      ],
      formatter: function (x) { return x + "%"}
    }).on('click', function(i, row){
      console.log(i, row);
    });


}]);