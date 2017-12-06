var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
let cleanCSS = require('gulp-clean-css');

gulp.task('compressJS', function () {
    gulp.src([
        './bower_components/jquery/dist/jquery.js',
        './bower_components/jquery-ui/jquery-ui.js',
        './app/assets/lib/jquery.ui.touch-punch.min.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js',
        './app/assets/lib/bootstrap-material-design/js/material.min.js',
        './app/assets/lib/bootstrap-material-design/js/ripples.min.js',
        './bower_components/angular/angular.min.js',
        './bower_components/angular-ui-sortable/sortable.js',
        './bower_components/angular-route/angular-route.min.js',
        './app/assets/lib/chart-js/Chart.min.js',
        './app/assets/lib/angular-chart-js/angular-chart.min.js',
        './app/assets/lib/raphael/raphael.js',
        './app/assets/lib/morris/morris.min.js',
        './app/assets/lib/crypto.js',
        './app/assets/lib/canvas-gauge/gauge.min.js',
        './app/dashboard.js',
        './app/app.js',
        './app/widgets/**/*Service.js',
        './app/widgets/**/**/*Service.js',
        './app/widgets/**/*Controller.js',
        './app/widgets/**/**/*Controller.js',
        './app/widgets/**/*Directive.js',
        './app/widgets/**/**/*Directive.js',
        './app/widgets/**/*Filter.js',
        './app/widgets/**/**/*Filter.js'
    ]).pipe(concat('main.js'))
        .pipe(minify({ noSource: true }))
        .pipe(gulp.dest('./app/dist/'));
});

gulp.task('compressCSS', function () {
    gulp.src([
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
        '../app/assets/lib/bootstrap-material-design/css/material.min.css',
        './app/assets/lib/bootstrap-material-design/css/material-fullpalette.min.css',
        './app/assets/lib/bootstrap-material-design/css/ripples.min.css',
        './app/assets/lib/bootstrap-material-design/css/roboto.min.css',
        './app/assets/lib/angular-chart-js/angular-chart.css',
        './app/assets/lib/morris/morris.css',
        './app/assets/lib/weather-icons-master/css/weather-icons.css',
        './app/assets/lib/css-percentage-circle/circle.css',
        './app/assets/css/dashboard.css'
    ]).pipe(concat('main.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./app/dist/'));
});