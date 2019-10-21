
var lazypipe = require('lazypipe');
var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

var lintScripts = lazypipe()
  .pipe($.jshint, '.jshintrc')
  .pipe($.jshint.reporter, 'jshint-stylish');

var styles = lazypipe()
  .pipe($.sass, {
    outputStyle: 'expanded',
    precision: 10
  })
  .pipe($.autoprefixer, 'last 1 version')
  .pipe(gulp.dest, '.tmp/styles');


module.exports = {
  lintScripts,
  styles
};
