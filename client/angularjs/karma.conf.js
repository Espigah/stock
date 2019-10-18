var paths = require('./tasks/paths');




module.exports = function (config) {
  config.set({
    basePath: "",
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-spec-reporter',
      'karma-jasmine',
      'karma-coverage'
    ],
    frameworks: ["jasmine"],
    files: [],
    exclude: ["node_modules", "bower_components"],
    preprocessors: {
      '**/*.js': 'coverage'
    },
    reporters: ["progress", "kjhtml", "coverage", "spec"],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["PhantomJS", 'Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
