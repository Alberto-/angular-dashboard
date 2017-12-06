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

/**You need a GOOGLE API Key - this will work only on the demo site*/
var GMAPS_APIKEY = "AIzaSyA8U6jPDUV3vrsIWbVvSXnfMh0aOJT2I2U";

/**You need an API KEY from http://openweathermap.org/api (it's FREE) - this will work only on the demo site*/
var API_KEY_OPEN_WEATHER = "528b737fd7f101e5f15733bb9926b0bc";

$(document).ready(function () {
    // GRAVATAR
    var hash = CryptoJS.MD5("albe45313@gmail.com");
    document.getElementById("authorPhoto").src = "http://www.gravatar.com/avatar/" + hash;
    // MATERIAL INIT
    $.material.init();
});


