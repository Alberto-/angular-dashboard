module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'assets/lib/angularjs/angular.min.js',
      'assets/lib/angularjs/angular-route.min.js',
      'assets/lib/angularjs/sortable.js',
      'assets/lib/chartjs/*.js',
      'assets/lib/angular-chart/*.js',
      'assets/lib/angular-mocks/angular-mocks.js',
//       'assets/lib/angular-mocks/*.js',
      'assets/lib/jquery-1.11.3.min.js',
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