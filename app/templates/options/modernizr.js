(function() {
  'use strict';

  module.exports = {
    dist: {
      devFile: 'bower_components/modernizr/modernizr.js',
      outputFile: '<%%= paths.dist %>/scripts/vendor/modernizr.js',
      files: {
        src: [
          '<%%= paths.dist %>/scripts/{,*/}*.js',
          '<%%= paths.dist %>/styles/{,*/}*.css',
          '!<%%= paths.dist %>/scripts/vendor/*'
        ]
      },
      uglify: true
    }
  };
})();
