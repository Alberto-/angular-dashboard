module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
    'assets/bower_components/angular/angular.min.js',
    'assets/bower_components/angular-ui-sortable/sortable.js',
    'assets/bower_components/angular-route/angular-route.min.js',
    'assets/bower_components/angular/angular.min.js',
    'assets/bower_components/Chart.js/Chart.js',
    'assets/bower_components/angular-chart.js/angular-chart.js',
    'assets/bower_components/angular-mocks/angular-mocks.js',
    'assets/bower_components/jquery/dist/jquery.js',
    '*.js',
    'widgets/**/**/*.js',
    'test/unit/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-jasmine'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};