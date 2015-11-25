app.directive("widgetweather",function(){
  return{
    restrict : "E",
    replace : true,
    templateUrl: "widgets/widgetWeather/widgetWeatherView.html",
    controller: 'widgetWeatherController'
  }

});
