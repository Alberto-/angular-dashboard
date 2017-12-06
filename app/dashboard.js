/*
  -dashboard utilities object-

  You can insert here the other general stuff you need
  to use globally in the dashboard.

  At the bottom you can find the APIKEY to change in your app.

*/

(function (root) {
    'use strict';

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

/**You need a GOOGLE API Key */
var GMAPS_APIKEY = "YOUR_GOOGLE_API_KEY";

/**You need an API KEY from http://openweathermap.org/api (it's FREE)*/
var API_KEY_OPEN_WEATHER = "YOUR_OPEN_WEATHER_API_KEY";

$(document).ready(function () {
    // GRAVATAR
    var hash = CryptoJS.MD5("albe45313@gmail.com");
    document.getElementById("authorPhoto").src = "http://www.gravatar.com/avatar/" + hash;
    // MATERIAL INIT
    $.material.init();
});


