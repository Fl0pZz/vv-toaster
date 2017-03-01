var webpackConfig = require('testing.webpack.js');
module.exports=function(config) {
  config.set({
    coverageReporter: {
      dir:'tmp/coverage/',
      reporters: [
        { type:'html', subdir: 'report-html' },
        { type:'lcov', subdir: 'report-lcov' }
      ],
      instrumenterOptions: {
        istanbul: { noCompact:true }
      }
    },
    // spec файлы, условимся называть по маске **_*.spec.js_**
    files: [
      'src/**/*.spec.js'
    ],
    frameworks: [ 'jasmine' ],
    reporters: ['mocha', 'coverage'],
    preprocessors: {
      'src/**/*.spec.js': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-jasmine', 'karma-mocha', 'karma-coverage',
      'karma-webpack', 'karma-phantomjs-launcher',
      'karma-mocha-reporter', 'karma-sourcemap-loader'
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo:true
    }
  });
};

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: [
      './../../node_modules/babel-polyfill/dist/polyfill.js',
      './index.js'
    ],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
