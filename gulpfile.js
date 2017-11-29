var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
let cleanCSS = require('gulp-clean-css');


gulp.task('compress',['minify-css'], function() {
  gulp.src(['./assets/js/*.js'])
    .pipe(concat('main.js'))
    .pipe(minify({noSource :true}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify-css', function() {
  return gulp.src('./assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('listen', ['compress'], function () {
    // watch for JS changes
    gulp.watch('js/*.js', function () {
        // run compress task
        gulp.run('compress');
    });
});

