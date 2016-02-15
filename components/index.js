'use strict';

var join = require('path').join;
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    var text = arguments[0][0];
    this.text = text;
    this.name = text.toLowerCase();
    this.className = text.charAt(0).toUpperCase() + text.slice(1);

  },
  js: function () {
    this.copy('_components.js', 'app/components/'+this.name+'/'+this.name+'.js');
  },
  html: function () {
    this.copy('_components.html', 'app/components/'+this.name+'/'+this.name+'.html');
  },
  test: function () {
    this.copy('_components.spec.js', 'test/components/'+this.name+'/'+this.name+'.spec.js');
  }
});
