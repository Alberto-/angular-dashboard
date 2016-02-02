app.controller('widgetDoughnutMController', ["$scope", "$rootScope", "$http", "$compile", "widgetDoughnutMService",

 function ($scope, $rootScope, $http, $compile, widgetDoughnutMService) {
  $scope.title="Doughnut chart";
  $scope.desc="Doughnut chart description";

  console.log('Loading chart ...');


  $scope.chartPolarLabels = widgetDoughnutMService.getLabels();
  $scope.chartPolarColours = widgetDoughnutMService.getColors();


  widgetDoughnutMService.getInfo().success(function(data){
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



    Morris.Donut({
      element: 'widgetDoughnutM',
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


}]);