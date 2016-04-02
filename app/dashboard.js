/*
  -dashboard utilities object-

  You can insert here the other general stuff you need
  to use globally in the dashboard

*/

'use strict';

(function(root){
    
    var dashboardFullPathName = window.location.pathname;
    var dashboardFullPathNameArray = dashboardFullPathName.split("/");
    var dashboardPortalName = dashboardFullPathNameArray[1];
    var dashboardHost = window.location.protocol + "//" + window.location.host + "/" + dashboardPortalName;

    root.dashboard = {
        dashboardHost : dashboardHost,
        dashboardPortalName : dashboardPortalName,
        dashboardAPIBaseUrl : dashboardHost + "API_PATH",
    };

})(this);


