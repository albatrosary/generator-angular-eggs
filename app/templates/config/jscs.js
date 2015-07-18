(function() {
  'use strict';

  module.exports = {
    src: [
      'app/**/*.js',
      'test/**/*.js',
      'e2e/**/*.js',
      'server/**/*.js',
      'config/**/*.js'
    ],
    options: {
      config: '.jscsrc',
      requireCurlyBraces: ['if']
    }
  };
})();
