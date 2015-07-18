(function() {
  'use strict';

  module.exports = {
    options: {
      keepAlive: true, // If false, the grunt process stops when the test fails.
      noColor: false // If true, protractor will not use colors in its output.
    },
    accept: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
      options: {
        configFile: 'e2e/protractor.conf.js',
      }
    }
  };
})();
