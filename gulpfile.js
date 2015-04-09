var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

//React stuff
var watchify = require('watchify');
var browserify = require('browserify');
var reactify = require('reactify');

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js jade'
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed('/views');
    }, 500);
  });
});

gulp.task('default', [
  'develop'
]);
