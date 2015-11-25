'use strict';

app.controller('widgetWeatherController', [ "$scope","$rootScope","$http","$compile",
  function ($scope, $rootScope, $http, $compile) {
    $scope.title="Weather";


// var newPos=getPosition();

//San Francisco
var newPos = {
    lat: 37.774929, 
    lng: -122.419416
};

// Carbonia
// var newPos = {
//   lat: 39.164428, 
//   lng: 8.522885
// };


// Milano
//  var newPos = {
//   lat: 45.46542, 
//   lng: 9.18592
// };





$http.get("http://api.openweathermap.org/data/2.5/weather?lat="+newPos.lat+"&lon="+newPos.lng+"&appid=2de143494c0b295cca9337e1e96b00e0").success(function(data){

  console.log('preso:'+JSON.stringify(data));

  var json= JSON.parse(JSON.stringify(data));

  $scope.temperature= json.main.temp;
  $scope.code = json.weather[0].id;

 $scope.description = json.weather[0].description;


  $scope.location = json.name;

}).error(function(data){

});


}]);



function getPosition(){

//default weather - San Francisco
var weatherPos = {
  lat: 37.774929, 
  lng: -122.419416
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    weatherPos.lat = position.coords.latitude,
    weatherPos.lng = position.coords.longitude;
    alert("lat:"+ weatherPos.lat +"long:"+weatherPos.lng);

  }, function() {
   console.log('found :)');
 });
} else {
 console.log('Browser does not support Geolocation');
}
return weatherPos;
};

