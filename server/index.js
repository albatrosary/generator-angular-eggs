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
    this.copy('_api.js', 'server/api/'+this.name+'.js');
    this.copy('_data.json', 'server/data/'+this.name+'.json');
  }
});
