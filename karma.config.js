const argv = require('yargs').argv;

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    singleRun: !argv.watch, // just run once by default
    frameworks: ['mocha'],
    reporters: ['spec'],
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './test/**/*.spec.js'
    ],
    preprocessors: {
      './test/**/*.spec.js': ['webpack']
    },
    webpack: {
      node: {
        fs: 'empty'
      },
      resolve: {
        // allow us to avoid including extension name
        extensions: ['', '.js', '.jsx'],

        // required for enzyme to work properly
        alias: {
          'sinon': 'sinon/pkg/sinon'
        }
      },
      module: {
        // don't run babel-loader through the sinon module
        noParse: [
          /node_modules\/sinon\//
        ],
        // run babel loader for our tests
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {compact: false}
        }]
      },
      // required for enzyme to work properly
      externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    // tell karma all the plugins we're going to be using
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ]
  });
};
