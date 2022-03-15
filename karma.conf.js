// Karma configuration
// Generated on Mon Sep 10 2018 16:52:24 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    // plugins used
    plugins: [
      'karma-chai',
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-browserstack-launcher'
      ],


    // list of files / patterns to load in the browser
    files: [
      'js/*.js',
      'test/*.js',
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['BrowserStack'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    browserStack: {
      username: 'brianohalloran_WVeqXR',
      accessKey: 'kyW1cK2DinUJzNUZ6jd3'
    },

    // define browsers
    customLaunchers: {
      bs_chrome_windows: {
        base: 'BrowserStack',
        browser: 'chrome',
        browser_version: '72.0',
        os: 'Windows',
        os_version: '10'
      },
      bs_safari_mac_big_sur: {
        base: 'BrowserStack',
        browser_version: '14.0',
        os: 'OS X',
        os_version: 'Big Sur',
        browser: 'safari',
      }
    },

    browsers: ['bs_chrome_windows'],
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
