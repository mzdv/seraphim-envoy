var gulp = require('gulp');
var path = require('path');

var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var browserify = require('gulp-browserify');

gulp.task('watch', function() {
    gulp.src(__dirname)
        .pipe(watch(path.join(__dirname, '/public/css')))
        .pipe(watch(path.join(__dirname, '/public/js')))
        .pipe(watch(path.join(__dirname, '/views')))
        .pipe(livereload());
});

gulp.task('react', function() {
    gulp.src(['bin/main.js'])                                   // try some refactoring here
        .pipe(browserify({
            debug: true,
            transform: ['reactify']
        }))
        .pipe(gulp.dest(path.join(__dirname, '/public/js')));   // and here
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
    'react',
    'restart'
]);