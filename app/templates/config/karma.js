(function() {
  'use strict';

  module.exports = {
    single: { // single run testing
      configFile: 'test/karma.conf.js'
    },
    watch: { // livereload testing
      configFile: 'test/karma.conf.js',
      autoWatch: true,
      singleRun: false
    }
  };
})();
