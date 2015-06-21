var gulp = require('gulp');

var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

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
    'restart'
]);
