// Generated on 2019-10-14 using generator-angular 0.16.0
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var openURL = require('open');
var rimraf = require('rimraf');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');

var yeoman = require('./yeoman');
var paths = require('./paths');
var args = require('./args');
var host = `http://localhost:${args.port}`

////////////////////////
// Reusable pipelines //
////////////////////////

var {
  lintScripts,
  styles
} = require('./reusablePipelines');
///////////
// Tasks //
///////////

gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(styles());
});

gulp.task('lint:scripts', function () {
  return gulp.src(paths.scripts)
    .pipe(lintScripts());
});

gulp.task('clean:tmp', function (cb) {
  rimraf('./.tmp', cb);
});

gulp.task('start:client', ['start:server', 'styles'], function () {
  openURL(host);
});

gulp.task('start:server', function () {
  $.connect.server({
    root: [yeoman.app, '.tmp'],
    livereload: true,
    // Change this to '0.0.0.0' to access the server from outside.
    port: args.port,
    middleware: function (connect, opt) {
      return [
        ['/bower_components',
          connect["static"]('./bower_components')
        ]
      ]
    }
  });
});

gulp.task('start:server:test', function () {
  $.connect.server({
    root: ['test', yeoman.app, '.tmp'],
    livereload: true,
    port: Number(args.port) + 1,
    middleware: function (connect, opt) {
      return [
        ['/bower_components',
          connect["static"]('./bower_components')
        ]
      ]
    }
  });
});

gulp.task('watch', function () {
  $.watch(paths.styles)
    .pipe($.plumber())
    .pipe(styles())
    .pipe($.connect.reload());

  $.watch(paths.views.files)
    .pipe($.plumber())
    .pipe($.connect.reload());

  $.watch(paths.scripts)
    .pipe($.plumber())
    .pipe(lintScripts())
    .pipe($.connect.reload());

  $.watch(paths.test)
    .pipe($.plumber())
    .pipe(lintScripts());

  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('serve', function (cb) {
  runSequence('clean:tmp',
    ['lint:scripts'],
    ['start:client'],
    'watch', cb);
});

gulp.task('serve:prod', function () {
  $.connect.server({
    root: [yeoman.dist],
    livereload: true,
    port: args.port
  });
});

gulp.task('testE2E', ['start:server:test'], function (callback) {
  var testToFiles = paths.testRequire.concat(paths.testE2E);
  console.log(testToFiles)
  return gulp.src(testToFiles)
    .pipe($.angularProtractor({
      'configFile': paths.protractor,
      'args': ['--baseUrl', `http://127.0.0.1:${args.port}`],
      'debug': false,
      'autoStartStopServer': true,
      'verbose': false,
      'webDriverUpdate': {
        'browsers': [ 'chrome']
      }
    }))
    .on('error', function (e) {
      console.log(e);
    })
    .on('end', callback);
});


gulp.task('test', ['start:server:test'], function () {
  var testToFiles = paths.testRequire.concat(paths.test);
  console.log(testToFiles)
  return gulp.src(testToFiles)
    .pipe($.karma({
      configFile: paths.karma,
      action: 'watch'
    }));
});

// inject bower components
gulp.task('bower', wiredep);
gulp.task('wiredep', wiredep);


function wiredep() {

  return gulp.src(paths.views.main)
    .pipe(wiredep({
      directory: /*yeoman.app +*/ 'bower_components',
      ignorePath: '..'
    }))
    .pipe(gulp.dest(yeoman.app));
}


///////////
// Build //
///////////

gulp.task('clean:dist', function (cb) {
  rimraf('./dist', cb);
});

gulp.task('client:build', ['html', 'styles'], function () {
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');

  return gulp.src(paths.views.main)
    .pipe($.useref({
      searchPath: [yeoman.app, '.tmp']
    }))
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.minifyCss({
      cache: true
    }))
    .pipe(cssFilter.restore())
    .pipe($.rev())
    .pipe($.revReplace())
    .pipe(gulp.dest(yeoman.dist));
});

gulp.task('html', function () {
  return gulp.src(yeoman.app + '/views/**/*')
    .pipe(gulp.dest(yeoman.dist + '/views'));
});

gulp.task('images', function () {
  return gulp.src(yeoman.app + '/assets/images/**/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(yeoman.dist + '/assets/images'));
});

gulp.task('copy:extras', function () {
  return gulp.src(yeoman.app + '/*/.*', {
      dot: true
    })
    .pipe(gulp.dest(yeoman.dist));
});

gulp.task('copy:fonts', function () {
  return gulp.src(yeoman.app + '/assets/fonts/**/*')
    .pipe(gulp.dest(yeoman.dist + '/assets/fonts'));
});

gulp.task('build', ['clean:dist'], function () {
  runSequence(['images', 'copy:extras', 'copy:fonts', 'client:build']);
});

gulp.task('default', ['build']);
