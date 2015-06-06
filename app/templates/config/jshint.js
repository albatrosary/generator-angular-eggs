(function(){
  'use strict';

  module.exports = {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
    },
    all: [
      'Gruntfile.js',
      '<%%= paths.app %>/{,*/}**/*.js',
      //'!<%= config.app %>/scripts/vendor/*',
      'test/{,**/}*.js',
      'e2e/{,**/}*.js'
    ]
  };
})();
