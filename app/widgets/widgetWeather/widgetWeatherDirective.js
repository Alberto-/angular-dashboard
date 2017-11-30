app.directive("widgetweather",function(){
  return{
    restrict : "E",
    replace : true,
    scope: {},
    templateUrl: "./app/widgets/widgetWeather/widgetWeatherView.html",
    controller: 'widgetWeatherController'
  }

});
