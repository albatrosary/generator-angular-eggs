'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('general', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withOptions({'skip-install': true})
      .withPrompts({features: []})
      .on('end', done);
  });

  // not testing the actual run of generators yet
  it('can be required without throwing', function () {
    this.app = require('../app');
  });

  it('creates expected files', function () {
    assert.file([
      'app/components/about/about.html',
      'app/components/about/about.js',
      'app/components/contact/contact.html',
      'app/components/contact/contact.js',
      'app/components/footer/footer.html',
      'app/components/header/header.html',
      'app/components/home/home.html',
      'app/components/home/home.js',
      'app/directives',
      'app/images',
      'app/scripts/config.js',
      'app/scripts/main.js',
      'app/service/gruntfiles/gruntfiles.js',
      'app/styles',
      'app/favicon.ico',
      'app/index.html',
      'app/robots.txt',
      'config/clean.js',
      'config/filerev.js',
      'config/jscs.js',
      'config/protractor.js',
      'config/useminPrepare.js',
      'config/concurrent.js',
      'config/htmlmin.js',
      'config/eslint.js',
      'config/run.js',
      'config/watch.js',
      'config/autoprefixer.js',
      'config/copy.js',
      'config/imagemin.js',
      'config/karma.js',
      'config/svgmin.js',
      'config/wiredep.js',
      'config/browserSync.js',
      'config/express.js',
      'config/injector.js',
      'config/plato.js',
      'config/usemin.js',
      'config/yuidoc.js',
      'e2e/spec/exists.spec.js',
      'e2e/pageObject.conf.js',
      'e2e/protractor.conf.js',
      'server/api/gruntfiles.js',
      'server/data/app.json',
      'server/app.js',
      'test/components/about/about.spec.js',
      'test/components/contact/contact.spec.js',
      'test/components/home/home.spec.js',
      'test/service/gruntfiles/gruntfiles.mock.js',
      'test/service/gruntfiles/gruntfiles.spec.js',
      'test/karma.conf.js',
      'test/main.spec.js',
      '.bowerrc',
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.jscsrc',
      '.eslintrc',
      '.yo-rc.json',
      'bower.json',
      'Gruntfile.js',
      'package.json'
    ]);
  });
});