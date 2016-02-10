(function() {
  'use strict';

  var historyApiFallback = require('connect-history-api-fallback');
  var proxyMiddleware = require('http-proxy-middleware');
  var proxy = proxyMiddleware('/api', {target: 'http://localhost:8000/'});

  module.exports = {
    options: {
      notify: false,
      background: true
    },
    dev: {
      options: {
        files: [
          '<%%= paths.app %>/{,*/}*.html',
          '<%%= paths.app %>/{,directives,components}/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%%= paths.app %>/images/{,*/}*',
          '<%%= paths.app %>/scripts/{,*/}*.js'
        ],
        server: {
          baseDir: ['.tmp', '<%%= paths.app %>'],
          routes: {
            '/bower_components': './bower_components',
            '/node_modules': './node_modules'
          },
          /* SPA html5 mode support */
          middleware: [historyApiFallback(), proxy]
        }
      }
    },
    coverage: {
      options: {
        background: false,
        livereload: false,
        server: 'report/coverage'
      }
    },
    doc: {
      options: {
        background: false,
        livereload: false,
        server: 'docs'
      }
    },
    dist: {
      options: {
        server: {
          baseDir: ['<%%= paths.dist %>'],
          middleware: [historyApiFallback(), proxy]
        },
        background: false
      }
    },
    e2e: {
      options: {
        port: 9001,
        livereload: false,
        open: false,
        server: {
          baseDir: ['.tmp', '<%%= paths.app %>'],
          routes: {
            '/bower_components': './bower_components',
            '/node_modules': './node_modules'
          },
          /* SPA html5 mode support */
          middleware: [historyApiFallback(), proxy]
        }
      }
    },
    metricApp: {
      options: {
        background: false,
        livereload: false,
        server: 'report/plato/application'
      }
    },
    metricTest: {
      options: {
        background: false,
        livereload: false,
        server: 'report/plato/unit_test'
      }
    }
  };
})();
