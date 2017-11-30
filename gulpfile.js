var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('compress', function () {
    gulp.src(['./app/widgets/**/*Service.js',
        './app/widgets/**/**/*Service.js',
        './app/widgets/**/*Controller.js',
        './app/widgets/**/**/*Controller.js',
        './app/widgets/**/*Directive.js',
        './app/widgets/**/**/*Directive.js',
        './app/widgets/**/*Filter.js',
        './app/widgets/**/**/*Filter.js'
    ])
        .pipe(concat('main.js'))
        .pipe(minify({ noSource: true }))
        .pipe(gulp.dest('./app/dist/'));
});

