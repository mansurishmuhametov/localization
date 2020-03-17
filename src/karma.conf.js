// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, '../coverage'),
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true,
            thresholds: {
                emitWarning: true, // set to `true` to not fail the test command when thresholds are not met
                // thresholds for all files
                global: {
                    statements: 50,
                    branches: 35,
                    functions: 40,
                    lines: 50
                },
                // thresholds per file
                each: {
                    statements: 50,
                    branches: 35,
                    functions: 40,
                    lines: 50
                }
            }
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        captureTimeout: 210000,
        browserDisconnectTolerance: 3, 
        browserDisconnectTimeout : 210000,
        browserNoActivityTimeout : 210000
  });
};
