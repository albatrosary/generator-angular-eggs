'use strict';

var join = require('path').join;
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

function dashCase(str) {
    return str.replace(/[A-Z]/g, function (match) { return '-' + match.toLowerCase(); });
}

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    var text = arguments[0][0];
    this.text = text;
    this.dashCase = dashCase(text);
    this.name = text.toLowerCase();
    this.className = text.charAt(0).toUpperCase() + text.slice(1);
  },
  prompting: function () {
    var done = this.async();

    var prompts = [{
      type: 'input',
      name: 'directory',
      message: 'What do you want to do a directory?',
      default: 'components/' + this.name
    }];

    this.prompt(prompts, function (props) {
      this.directory = props.directory;

      done();
    }.bind(this));
  },
  js: function () {
    this.copy('_components.js', 'app/'+this.directory+'/'+this.name+'.js');
  },
  html: function () {
    this.copy('_components.html', 'app/'+this.directory+'/'+this.name+'.html');
  },
  test: function () {
    this.copy('_components.spec.js', 'test/'+this.directory+'/'+this.name+'.spec.js');
  }
});
