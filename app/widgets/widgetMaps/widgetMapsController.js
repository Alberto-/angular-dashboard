'use strict';
app.controller('widgetMapsController', [ "$scope","$rootScope","$http","$compile","widgetMapFactory",
  function ($scope, $rootScope, $http, $compile, widgetMapFactory) {
    $scope.title="Mappa";


     function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        // California State
        center: {lat: 36.778261, lng: -119.417932},
          scrollwheel: false
          // draggable: false
    });
      setMarkers(map);
  }

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var locations = widgetMapFactory.getLocations();

function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var imagePoint = {
      /*point perfect centered*/
      url: 'assets/img/map-marker-icon-32.png',
      // url: 'map-marker-icon.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(32, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(16, 32)
  };

 var imageHeart = {
      url: 'assets/img/heart32.png',
      size: new google.maps.Size(32, 32),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(16, 32)
  };

// sets all points in the map
    for (var i = 0; i < locations.length; i++) {
      var beach = locations[i];
      if(beach[4]==="preferite"){
        var marker = new google.maps.Marker({
          position: {lat: beach[1], lng: beach[2]},
          map: map,
          icon: imageHeart,
          title: beach[0],
          zIndex: beach[3]
        });
      }else{
       var marker = new google.maps.Marker({
        position: {lat: beach[1], lng: beach[2]},
        map: map,
        icon: imagePoint,
        title: beach[0],
        zIndex: beach[3]
      });
     }
    }


}

initMap();

}]);

