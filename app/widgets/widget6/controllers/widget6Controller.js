app.controller('widget6Controller', function ($scope, $rootScope, $http, $compile) {
    $scope.title="Grafico 6";
    $scope.desc="grafico descrizione 123456";
    
    //CHART 1) NUMERO CONTRATTI
    $scope.contractsLabels = [
        "Total Active",
        "Total Not Active",
        "Total Cancelled",
        "Total Terminated",
    ];
    
    $scope.totalActive = 5;
    $scope.totalNotActive = 2;
    $scope.totalCancelled = 3;
    $scope.totalTerminated = 1;
    
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


$scope.reloadChart = function(){
    
$scope.totalActive = 5;

}



});