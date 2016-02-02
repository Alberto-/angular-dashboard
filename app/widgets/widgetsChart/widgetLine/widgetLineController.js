app.controller('widgetLineController', ["$scope", "$rootScope", "$http", "$compile", "widgetLineService",

 function ($scope, $rootScope, $http, $compile, widgetLineService) {
  $scope.title="Sales";
  $scope.desc="Polar chart description";

  console.log('Loading chart ...');

$scope.options = {
    bezierCurve : false
}
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Sales 2015'];
  $scope.data = [
    [50000, 80000, 60000, 50000, 70000, 90000, 150000]
   
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

}]);