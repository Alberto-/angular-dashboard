
app.controller('widget5Controller', function ($scope, $rootScope, $http, $compile) {
    $scope.title="Grafico 5";
     $scope.desc="grafico descrizione 123456";
     
    $scope.customerLabels = ["customers" + " - " + "Leads"];
          $scope.series = ["Customers", "Leads"];
          $scope.customerData = [
              [55],
              [100]
          ];

          $scope.customerOptions = {
              //                    barValueSpacing: 150,
              //                    barDatasetSpacing: -10,
          };

    
});