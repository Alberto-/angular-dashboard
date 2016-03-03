var app = angular.module('dashboardApp',['ngRoute','ui.sortable','chart.js']);


app.config(function ($httpProvider) {
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('mainController', function ($scope, $rootScope, $http, $compile) {

// if is not a mobile device enable draggable interface
if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )) {

  console.info("NOT mobile: activating draggable..");

  // angular.element(document.getElementById('mainController')).scope().makeDraggable();

  $scope.sortableOptions = {
    connectWith: ".draggable",
    handle: ".move, .portlet-header",
    cancel: ".portlet-toggle",
    placeholder: "portlet-placeholder ui-corner-all",
    cursor: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAA3lBMVEUAAAAnk8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8Ink8J5sPN9AAAASXRSTlMAAQIDBAUGBwgODxESFBUZGxwfIywuMTQ2ODk7PD1AQ0dQVFVWWVxfYWNka21zdYOGjo+XmqWmq7Cyt7nAwcPI0dri6O3z9/n718TKMwAAALxJREFUGBl1wddWwkAARdEzKYJYKCo2jJSAvYuiqKCGCff/fwgWEBwf2JvVPD9s3zc2ouOQjPcgpfZ9LCnZLRpmbtU5sZuUPv2SpO8CkI+SAdwA5zAs5HpfsDWSelADahDBgXxeP4L1Lo6qQmwbLnFUFaIYznDsK0AxHOFoCX6u+a/bhytbxGXSDpg3W8axrQrgvaQV/tTlMWWexzssPfWZMY82IPN7wZyvQxbyili401KyRmavGc+d5lhhAtNfGTQkXlpjAAAAAElFTkSuQmCC'), pointer",
    cursorAt: { left : 200 },
    receive: function( event, ui ) {
      console.debug(event);
      console.debug(ui);
      var listaId=this.id;
      var cardId=ui.item[0].id;
      console.debug("-->update to column :"+listaId+"\n Element id: "+cardId);
      reloadChart();
  //$scope.moveCard(cardId,listaId);
},
start: function( event, ui ) {
   angular.element(".draggable").addClass("draggable_min_height");
       // $(".draggable").addClass("showBordersMobile");
      // $("#showBorders").prop('checked', true);
      reloadChart();
    },
    stop: function( event, ui ) {
      angular.element(".draggable").removeClass("draggable_min_height");
       // $(".draggable").removeClass("showBordersMobile");
       //  $("#showBorders").prop('checked', false);
       reloadChart();
       window.dispatchEvent(changeDashboard);
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

 }else{
  $scope.sortableOptions = {
    disabled: true
  }
}

 angular.element("#showBordersButton").click(function () {
  console.info('Show/hide template ...')
   angular.element(".draggable").toggleClass("showBorders");
 });

});

var changeDashboard = document.createEvent('Event');
changeDashboard.initEvent('changeDashboard', true, true);

function reloadChart(){
   angular.element(window).trigger('resize');

  if (document.createEvent) { // W3C
    var ev = document.createEvent('Event');
    ev.initEvent('resize', true, true);
    //Throw event 
    window.dispatchEvent(ev);
  }
  else { // IE
    element=document.documentElement;
    var event=document.createEventObject();
    element.fireEvent("onresize",event);
  }
};


