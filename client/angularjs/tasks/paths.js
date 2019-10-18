var path = require('path')
var yeoman = require('./yeoman')

var appSource = path.join(yeoman.app, 'src');


var appScripts = [
  appSource + '/app.module.js',
  appSource + '/app.routers.js',
  appSource + '/**/*.js'
]

var paths = {
  scripts: appScripts.concat([
    "!" + appSource + '/**/*.mock.js',
    "!" + appSource + '/**/*.k.js',
    "!" + appSource + '/**/*.p.js'
  ]),
  styles: [appSource + '/**/*.scss'],
  test: [appSource + '/**/*.spec.js', appSource + '/**/*.k.js'],
  testE2E: [appSource + '/**/*.e2e.js', appSource + '/**/*.p.js'],
  testRequire: [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/angular/angular.js',
    'bower_components/bootstrap/dist/js/bootstrap.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-cookies/angular-cookies.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'bower_components/angular-resource/angular-resource.js',
    'bower_components/angular-route/angular-route.js',
    'bower_components/angular-sanitize/angular-sanitize.js',
    'bower_components/angular-touch/angular-touch.js',
    ...appScripts,
    appSource + '/**/*.mock.js'
  ],
  karma: 'karma.conf.js',
  protractor: 'protractor.conf.js',
  views: {
    main: yeoman.app + '/index.html',
    files: [appSource + '/**/*.html']
  }
};

module.exports = paths;
