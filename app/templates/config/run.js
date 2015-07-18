(function() {
  'use strict';

  module.exports = {
    options: {
      wait: false
    },
    backend: {
      cmd: 'node',
      args: ['server/app.js']
    },
    webdriverUpdate: {
      cmd: 'node_modules/protractor/bin/webdriver-manager',
      args: ['update']
    }
  };
})();
