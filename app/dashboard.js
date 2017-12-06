/*
  -dashboard utilities object-

  You can insert here the other general stuff you need
  to use globally in the dashboard

*/

'use strict';

(function (root) {

    var dashboardFullPathName = window.location.pathname;
    var dashboardFullPathNameArray = dashboardFullPathName.split("/");
    var dashboardPortalName = dashboardFullPathNameArray[1];
    var dashboardHost = window.location.protocol + "//" + window.location.host + "/" + dashboardPortalName;

    root.dashboard = {
        dashboardHost: dashboardHost,
        dashboardPortalName: dashboardPortalName,
        dashboardAPIBaseUrl: dashboardHost + "API_PATH",
    };

})(this);

/**You need a GOOGLE API Key - this will work only on the demo site*/
var GMAPS_APIKEY = "YOUR_GOOGLE_API_KEY";

/**You need an API KEY from http://openweathermap.org/api (it's FREE) - this will work only on the demo site*/
var API_KEY_OPEN_WEATHER = "YOUR_OPEN_WEATHER_API_KEY"; 
