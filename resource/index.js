'use strict';

var join = require('path').join;
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    var text = arguments[0][0];
    this.name = text.toLowerCase();
    this.className = text.charAt(0).toUpperCase() + text.slice(1);

  },
  js: function () {
    this.copy('_factory.js', 'app/service/'+this.name+'/'+this.name+'.js');
  },
  test: function () {
    this.copy('_factory.spec.js', 'test/service/'+this.name+'/'+this.name+'.spec.js');
  },
  mock: function () {
    this.copy('_factory.mock.js', 'test/service/'+this.name+'/'+this.name+'.mock.js');
  }
});
