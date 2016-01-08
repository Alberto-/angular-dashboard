app.directive("widgetweather",function(){
  return{
    restrict : "E",
    replace : true,
    scope: {},
    templateUrl: "widgets/widgetWeather/widgetWeatherView.html",
    controller: 'widgetWeatherController'
  }

});
