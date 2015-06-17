'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var _ = require('lodash');

describe('Angular Eggs generator', function () {

  // not testing the actual run of generators yet
  it('the generator can be required without throwing', function () {
    this.app = require('../app');
  });

  describe('run test', function () {

    var expectedContent = [
      ['.bowerrc', /"directory": "bower_components"/],
      ['.editorconfig', /root = true/],
      ['.gitattributes', /text=auto/],
      ['.gitignore', /node_modules/],
      ['.jshintrc', /"node": true/],
      ['bower.json', /"name": "tmp"/],
      ['Gruntfile.js', /generator-angular-eggs/],
      ['package.json', /"private": true/]
    ];
    var expected = [
      '.editorconfig',
      '.gitignore',
      '.gitattributes',
      '.jshintrc',
      'bower.json',
      'Gruntfile.js',
      'package.json',
      'app/favicon.ico',
      'app/robots.txt',
      'app/index.html'
    ];

    var expectedApp = [
      'app/components/about/about.html',
      'app/components/about/about.js',
      'app/components/contact/contact.html',
      'app/components/contact/contact.js',
      'app/components/footer/footer.html',
      'app/components/header/header.html',
      'app/components/home/home.html',
      'app/components/home/home.js',
      'app/scripts/main.js',
      'app/scripts/config.js',
      'app/service/gruntfiles/gruntfiles.js'
    ];

    var expectedConfig = [
      'config/autoprefixer.js',
      'config/browserSync.js',
      'config/clean.js',
      'config/concurrent.js',
      'config/copy.js',
      'config/express.js',
      'config/filerev.js',
      'config/htmlmin.js',
      'config/imagemin.js',
      'config/injector.js',
      'config/jshint.js',
      'config/karma.js',
      'config/plato.js',
      'config/protractor.js',
      'config/run.js',
      'config/svgmin.js',
      'config/usemin.js',
      'config/useminPrepare.js',
      'config/watch.js',
      'config/wiredep.js',
      'config/yuidoc.js'
    ];

    var expectedE2e = [
      'e2e/spec/exists.spec.js',
      'e2e/pageObject.conf.js',
      'e2e/protractor.conf.js'
    ];

    var expectedServer = [
      'server/api/gruntfiles.js',
      'server/data/app.json',
      'server/app.js'
    ];

    var expectedTest = [
      'test/components/about/about.spec.js',
      'test/components/contact/contact.spec.js',
      'test/components/home/home.spec.js',
      'test/service/gruntfiles/gruntfiles.mock.js',
      'test/service/gruntfiles/gruntfiles.spec.js',
      'test/karma.conf.js',
      'test/main.spec.js'
    ];

    var expectedDir = [
      'app/components',
      'app/components/about',
      'app/components/contact',
      'app/components/footer',
      'app/components/home',
      'app/images',
      'app/scripts',
      'app/service',
      'app/styles',
      'config',
      'e2e',
      'e2e/spec',
      'server',
      'server/api',
      'server/data',
      'test',
      'test/components',
      'test/components/about',
      'test/components/contact',
      'test/components/home',
      'test/service',
      'test/service/gruntfiles'
    ];

    var options = {
      'skip-install-message': true,
      'skip-install': true,
      'skip-welcome-message': true,
      'skip-message': true
    };


    var runGen;

    beforeEach(function () {
      runGen = helpers
        .run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withGenerators([[helpers.createDummyGenerator(), 'mocha:app']]);
    });

    it('creates expected files', function (done) {
      runGen.withOptions(options).on('end', function () {

        assert.file([].concat(
          expected,
          expectedDir,
          expectedApp,
          expectedConfig,
          expectedE2e,
          expectedServer,
          expectedTest
        ));
        
        assert.fileContent(expectedContent);

        assert.noFileContent([
          ['Gruntfile.js', /modernizr/],
          ['app/index.html', /modernizr/],
          ['bower.json', /modernizr/],
          ['package.json', /modernizr/],
          ['Gruntfile.js', /bootstrap/],
          ['app/index.html', /bootstrap/],
          ['bower.json', /bootstrap/],
          ['Gruntfile.js', /sass/],
          ['app/index.html', /Sass/],
          ['.gitignore', /\.sass-cache/],
          ['package.json', /grunt-contrib-sass/],
          ['package.json', /grunt-sass/],
          ['Gruntfile.js', /bootstrap-sass-official/],
          ['app/index.html', /Sass is a mature/],
          ['bower.json', /bootstrap-sass-official/]
        ]);
        done();
      });
    });

    it('creates expected modernizr components', function (done) {
      runGen.withOptions(options).withPrompt({features: ['includeModernizr']})
      .on('end', function () {

        assert.file([].concat(
          expected,
          expectedDir,
          expectedApp,
          expectedConfig,
          expectedE2e,
          expectedServer,
          expectedTest,
          'config/modernizr.js'
        ));

        assert.fileContent([
          ['Gruntfile.js', /modernizr/],
          ['app/index.html', /modernizr/],
          ['bower.json', /modernizr/],
          ['package.json', /modernizr/],
        ]);


        done();
      });
    });

    it('creates expected bootstrap components', function (done) {
      runGen.withOptions(options).withPrompt({features: ['includeBootstrap']})
      .on('end', function () {

        assert.fileContent([
          ['app/index.html', /bootstrap/],
          ['bower.json', /bootstrap/],
          ['config/copy.js', /dest/]
        ]);

        assert.file([].concat(
          expected,
          expectedDir,
          expectedApp,
          expectedConfig,
          expectedE2e,
          expectedServer,
          expectedTest
        ));

        done();
      });
    });

    it('creates expected Sass files', function (done) {
      runGen.withOptions(options).withPrompt({
        features: ['includeSass']
      }).on('end', function () {

        assert.fileContent([
          ['package.json', /grunt-sass/],
          ['config/watch.js', /sass/],
          ['config/concurrent.js', /sass:server/],
          ['config/concurrent.js', /sass/],
          ['config/watch.js', /sass:serve/],
          ['config/wiredep.js', /bootstrap-sass-official/],
          ['config/wiredep.js', /ignorePath/]
        ]);

        assert.file([].concat(
          expected,
          expectedDir,
          expectedApp,
          expectedConfig,
          expectedE2e,
          expectedServer,
          expectedTest,
          'app/styles/main.scss'
        ));

        assert.noFileContent([
          ['Gruntfile.js', /bootstrap-sass-official/],
          ['config/concurrent.js', /copy:styles/],
          ['config/copy.js', /styles: {/],
          ['config/wiredep.js', /dist/]
        ]);

        done();
      });
    });

    it('creates expected Sass and Bootstrap components', function (done) {
      runGen.withOptions(options).withPrompt({
        features: ['includeSass', 'includeBootstrap']
      }).on('end', function () {

        assert.fileContent([
          ['bower.json', /bootstrap-sass-official/],
          ['config/copy.js', /bootstrap-sass-official/]
        ]);

        assert.file([].concat(
          expected,
          expectedDir,
          expectedApp,
          expectedConfig,
          expectedE2e,
          expectedServer,
          expectedTest,
          'app/styles/main.scss'
        ));

        done();
      });
    });

    it('creates expected modernizr components', function (done) {
      runGen.withOptions(options).withPrompt({features: ['includeModernizr']})
      .on('end', function () {

        assert.file([].concat(
          expected,
          expectedDir,
          expectedApp,
          expectedConfig,
          expectedE2e,
          expectedServer,
          expectedTest,
          'config/modernizr.js'
        ));

        assert.fileContent([
          ['Gruntfile.js', /modernizr/],
          ['app/index.html', /modernizr/],
          ['bower.json', /modernizr/],
          ['package.json', /modernizr/],
        ]);


        done();
      });
    });

    it('creates expected files', function (done) {

      options = {
        'skip-install-message': false,
        'skip-install': false,
        'skip-welcome-message': false,
        'skip-message': false
      };
      runGen.withOptions(options).on('end', function () {

        assert.file([].concat(
          expected,
          expectedDir,
          expectedApp,
          expectedConfig,
          expectedE2e,
          expectedServer,
          expectedTest
        ));
        
        assert.fileContent(expectedContent);

        assert.noFileContent([
          ['Gruntfile.js', /modernizr/],
          ['app/index.html', /modernizr/],
          ['bower.json', /modernizr/],
          ['package.json', /modernizr/],
          ['Gruntfile.js', /bootstrap/],
          ['app/index.html', /bootstrap/],
          ['bower.json', /bootstrap/],
          ['Gruntfile.js', /sass/],
          ['app/index.html', /Sass/],
          ['.gitignore', /\.sass-cache/],
          ['package.json', /grunt-contrib-sass/],
          ['package.json', /grunt-sass/],
          ['Gruntfile.js', /bootstrap-sass-official/],
          ['app/index.html', /Sass is a mature/],
          ['bower.json', /bootstrap-sass-official/]
        ]);
        done();
      });
    });
  });
});
