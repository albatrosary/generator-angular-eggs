// Protractor configuration
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js
'use strict';

exports.config = {
  directConnect: true,
  chromeOnly: true,
  capabilities: {
    'browserName': 'chrome'
  },

  allScriptsTimeout: 11000,

  baseUrl: 'http://localhost:9001',
  specs: [
    '../e2e/spec/**/*.spec.js'
  ],
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  // コンポーネント設定(todo helper)
  onPrepare : function() {
    browser.driver.manage().window().setSize(1280, 720);
    global.po = require('./pageObject.conf');
  },
};
