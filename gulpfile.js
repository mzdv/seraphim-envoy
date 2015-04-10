var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var path = require('path');

//React stuff
var watchify = require('watchify');
var browserify = require('browserify');
var reactify = require('reactify');

gulp.task('watch', function() {
    gulp.src(__dirname)
        .pipe(watch(path.join(__dirname, '/public/css')))
        .pipe(watch(path.join(__dirname, '/public/js')))
        .pipe(watch(path.join(__dirname, '/views')))
        .pipe(livereload());
});

gulp.task('restart', function () {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js jade'
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed(__dirname);
    }, 500);
  });
});



gulp.task('default', [
    'watch',
    'restart'
]);