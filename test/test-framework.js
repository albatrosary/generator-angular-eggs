'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-assert');

describe('test framework', function () {
  describe('karma', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withPrompts({features: []})
        .on('end', done);
    });

    it('adds the Grunt plugin', function () {
      assert.fileContent('package.json', '"grunt-karma"');
    });

    it('adds the Grunt task', function () {
      assert.fileContent('Gruntfile.js', 'karma');
    });
  });

  describe('jasmine', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(__dirname, '.tmp'))
        .withPrompts({features: []})
        .on('end', done);
    });

    it('adds the Grunt plugin', function () {
      assert.fileContent('package.json', '"jasmine-core"');
      assert.fileContent('package.json', '"karma-jasmine"');
    });
  });
});