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
      ['bower.json', /"name": "tmp"/],
      ['package.json', /"private": true/]
    ];
    var expected = [
      '.editorconfig',
      '.gitignore',
      '.gitattributes',
      'package.json',
      'bower.json',
      'Gruntfile.js',
      'app/favicon.ico',
      'app/robots.txt',
      'app/index.html'
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


    console.log(path.join(__dirname, '../app'));  

    it('creates expected files', function (done) {
      runGen.withOptions(options).on('end', function () {

        assert.file([].concat(
          expected,
          'app/styles/main.css',
          'app/scripts/main.js'
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

        assert.fileContent([
          ['Gruntfile.js', /modernizr/],
          ['app/index.html', /modernizr/],
          ['bower.json', /modernizr/],
          ['package.json', /modernizr/],
        ]);

        assert.file([
          'config/modernizr.js'
        ]);

        done();
      });
    });

    it('creates expected bootstrap components', function (done) {
      runGen.withOptions(options).withPrompt({features: ['includeBootstrap']})
      .on('end', function () {

        assert.fileContent([
          ['app/index.html', /bootstrap/],
          ['bower.json', /bootstrap/]
        ]);

        done();
      });
    });

    it('creates expected Sass files', function (done) {
      runGen.withOptions(options).withPrompt({
        features: ['includeSass']
      }).on('end', function () {

        assert.fileContent([
          ['package.json', /grunt-sass/],
          ['config/watch.js', /sass/]
        ]);

        assert.noFileContent([
          ['Gruntfile.js', /bootstrap-sass-official/]
        ]);

        done();
      });
    });

    it('creates expected Sass and Bootstrap components', function (done) {
      runGen.withOptions(options).withPrompt({
        features: ['includeSass', 'includeBootstrap']
      }).on('end', function () {

        // assert.fileContent([
        //   ['app/index.html', /Sass is a mature/],
        //   ['bower.json', /bootstrap-sass-official/]
        // ]);

        done();
      });
    });
  });
});
