var app = angular.module('dashboardApp',['ngRoute','ui.sortable','chart.js']);


app.config(function ($httpProvider) {
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});


app.controller('mainController', function ($scope, $rootScope, $http, $compile) {
  $scope.test="test";

  $scope.sortableOptions = {
    connectWith: ".draggable",
    handle: ".portlet-content, .portlet-header",
    cancel: ".portlet-toggle",
    placeholder: "portlet-placeholder ui-corner-all",
    receive: function( event, ui ) {
      console.log(event);
      console.log(ui);
      var listaId=this.id;
      var cardId=ui.item[0].id;
      alert("update verso colonna :"+listaId+"\n elemento id: "+cardId);
      reloadChart(cardId)
//            $scope.moveCard(cardId,listaId);
    },
  start: function( event, ui ) {
    // $(".draggable").addClass("showBorders");
    // $("#showBorders").prop('checked', true);
    corticaFireResize();
  },
  stop: function( event, ui ) {
     // $(".draggable").removeClass("showBorders");
     //  $("#showBorders").prop('checked', false);
       corticaFireResize();
   }
  /** OTHER CONTROLS ON START AND STOP DRAGGING
  start: function( event, ui ) {
    console.log(event.target);
    angular.element(this).addClass('dragging-element');
  },
  stop: function( event, ui ) {
    console.log(event.target);
     angular.element(this).removeClass('dragging-element');
   },***/
  };

});




function reloadChart(id){
  corticaFireResize();
}


function corticaFireResize(){
if (document.createEvent) { // W3C
  var ev = document.createEvent('Event');
  ev.initEvent('resize', true, true);
  window.dispatchEvent(ev);
}
else { // IE
  element=document.documentElement;
  var event=document.createEventObject();
  element.fireEvent("onresize",event);
}
};


$(function() {
  // $( ".portlet" )
  // .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
  // .find( ".portlet-header" )
  // .addClass( "ui-widget-header ui-corner-all" )
  // .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

  // $( ".portlet-toggle" ).click(function() {
  //   var icon = $( this );
  //   icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
  //   icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
  // });

  $(".borders").click(function () {
   $(".draggable").toggleClass("showBorders");
 });
});



