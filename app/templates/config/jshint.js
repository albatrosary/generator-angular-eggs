(function() {
  'use strict';

  module.exports = {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
    },
    all: [
      'Gruntfile.js',
      '<%%= paths.app %>/{,*/}**/*.js',
      'test/{,**/}*.js',
      'e2e/{,**/}*.js',
      'server/{,**/}*.js'
    ]
  };
})();
