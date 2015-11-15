var app = angular.module('dashboardApp',['ngRoute','ui.sortable','chart.js']);


app.config(function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});



app.controller('mainController', function ($scope, $rootScope, $http, $compile) {
    $scope.test="test";
    
    $scope.sortableOptions = {
        connectWith: ".draggable",
        handle: ".portlet-header",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all",
        receive: function( event, ui ) {
            console.log(event);
            console.log(ui);
            var listaId=this.id;
            var cardId=ui.item[0].id;
            alert("update verso colonna :"+listaId+"\n elemento id: "+cardId);
            reloadChart(cardId);
//            $scope.moveCard(cardId,listaId);
            
            
$( ".draggable" ).sortable( "refreshPositions" );
$(".draggable").sortable( "refresh" );     
  
        }
    };

});




  function reloadChart(id){
    console.log(id);
    // angular.element(document.getElementById(id)).scope().loadChart();

console.log("resize2");
   //   $( window ).resize();

   // $('#widget6Controller').resize();
   // $('#doughnut_contracts').resize();

   //  $('#riga_2').resize();

  }




 $(function() {

      $( ".portlet" )
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
      .addClass( "ui-widget-header ui-corner-all" )
      .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

      $( ".portlet-toggle" ).click(function() {
        var icon = $( this );
        icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
        icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
      });

     $(".borders").click(function () {
         $(".draggable").toggleClass("showBorders");
     });

});



