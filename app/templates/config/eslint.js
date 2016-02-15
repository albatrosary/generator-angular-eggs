(function() {
  'use strict';

  module.exports = {
    options: {
      configFile: '.eslintrc'
    },
    target: [
      'Gruntfile.js',
      '<%%= paths.app %>/{,*/}**/*.js',
      'test/{,**/}*.js',
      'e2e/{,**/}*.js',
      'server/{,**/}*.js'
    ]
  };
})();
