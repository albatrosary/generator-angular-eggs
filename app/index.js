'use strict';

var join = require('path').join;
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var wiredep = require('wiredep');
var mkdirp = require('mkdirp');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.pkg = require('../package.json');
    this.appname = this.appname.replace(/\s+/g, '');

    this.option('skip-welcome-message', {
      desc: 'Skips the welcome message',
      type: Boolean
    });

    this.option('skip-install-message', {
      desc: 'Skips the message after the installation of dependencies',
      type: Boolean
    });
  },

  askFor: function () {
    var done = this.async();

    // welcome message
    if (!this.options['skip-welcome-message']) {
      this.log(require('yosay')());
      this.log(chalk.magenta(
        'Out of the box I include HTML5 Boilerplate, jQuery, and a ' +
        'Gruntfile.js to build your app.'
      ));
    }

    var prompts = [{
      type: 'checkbox',
      name: 'features',
      message: 'What more would you like?',
      choices: [{
        name: 'Bootstrap',
        value: 'includeBootstrap',
        checked: true
      },{
        name: 'Sass',
        value: 'includeSass',
        checked: false
      },{
        name: 'Modernizr',
        value: 'includeModernizr',
        checked: false
      }]
    }];

    this.prompt(prompts, function (answers) {
      var features = answers.features;

      function hasFeature(feat) {
        return features && features.indexOf(feat) !== -1;
      }

      this.includeSass = hasFeature('includeSass');
      this.includeBootstrap = hasFeature('includeBootstrap');
      this.includeModernizr = hasFeature('includeModernizr');

      done();
    }.bind(this));
  },

  gruntfile: function () {
    this.template('Gruntfile.js');
  },

  packageJSON: function () {
    this.template('_package.json', 'package.json');
  },

  git: function () {
    this.template('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');
  },
  bower: function () {
    var angularVersion = '~1.4.5';
    var bower = {
      name: this.appname,
      private: true,
      dependencies: {},
      overrides: {},
      devDependencies: {}
    };

    if (this.includeBootstrap) {
      var bs = 'bootstrap' + (this.includeSass ? '-sass-official' : '');
      bower.dependencies[bs] = '~3.3.5';
    } else {
      bower.dependencies.jquery = '~2.1.4';
    }

    if (this.includeModernizr) {
      bower.dependencies.modernizr = '~2.8.3';
    }

    bower.dependencies.angular = angularVersion;
    bower.dependencies['angular-new-router'] = '~0.5.3';
    bower.dependencies['angular-resource'] = angularVersion;

    bower.overrides['angular-new-router'] = {};
    bower.overrides['angular-new-router'].main = 'dist/router.es5.js';

    if (this.includeBootstrap && !this.includeSass) {
      bower.overrides['bootstrap'] = {};
      bower.overrides['bootstrap'].main = 'dist/css/bootstrap.css';
    }

    bower.devDependencies['angular-mocks'] = angularVersion;

    this.copy('bowerrc', '.bowerrc');
    this.write('bower.json', JSON.stringify(bower, null, 2));
  },

  jscsrc: function () {
    this.copy('jscsrc', '.jscsrc');
  },

  yorc: function () {
    this.copy('yo-rc.json', '.yo-rc.json');
  },

  jshint: function () {
    this.copy('jshintrc', '.jshintrc');
  },

  editorConfig: function () {
    this.copy('editorconfig', '.editorconfig');
  },

  mainStylesheet: function () {
    var css = 'main.' + (this.includeSass ? 's' : '') + 'css';
    this.template(css, 'app/styles/' + css);
  },

  writeIndex: function () {
    var bsPath;

    // path prefix for Bootstrap JS files
    if (this.includeBootstrap) {
      if (this.includeSass) {
        bsPath = '/bower_components/bootstrap-sass/assets/javascripts/bootstrap/';
      } else {
        bsPath = '/bower_components/bootstrap/js/';
      }
    }

    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('app/index.html'),
      {
        appname: this.appname,
        includeSass: this.includeSass,
        includeBootstrap: this.includeBootstrap,
        includeModernizr: this.includeModernizr,
        bsPath: bsPath,
        bsPlugins: [
          'affix',
          'alert',
          'dropdown',
          'tooltip',
          'modal',
          'transition',
          'button',
          'popover',
          'carousel',
          'scrollspy',
          'collapse',
          'tab'
        ]
      }
    );
  },

  app: function () {

    this.directory('app');
    mkdirp('app/scripts');
    mkdirp('app/styles');
    mkdirp('app/images');
    mkdirp('app/directives');

    //this.write('app/index.html', this.indexFile);

    this.copy('main.js',   'app/scripts/main.js');
    this.copy('config.js', 'app/scripts/config.js');
  },
  config: function () {
    this.directory('config');

    if (this.includeModernizr) {
      this.copy('options/modernizr.js', 'config/modernizr.js');
    }

    if (this.includeSass) {
      this.copy('options/sass.js', 'config/sass.js');
    }
  },
  e2e: function () {
    this.directory('e2e');
  },
  server: function () {
    this.directory('server');
  },
  test: function () {
    this.directory('test');
  },
  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      skipMessage: this.options['skip-install-message']
    });
  },
  end: function () {
    var bowerJson = this.fs.readJSON(this.destinationPath('bower.json'));
    var howToInstall =
      '\nAfter running ' +
      chalk.yellow.bold('npm install && bower install') +
      ', inject your' +
      '\nfront end dependencies by running ' +
      chalk.yellow.bold('grunt wiredep') +
      '.';

    if (this.options['skip-install']) {
      this.log(howToInstall);
      return;
    }

    // wire Bower packages to .html
    wiredep({
      bowerJson: bowerJson,
      src: 'app/index.html',
      exclude: ['bootstrap.js'],
      ignorePath: /^(\.\.\/)*\.\./
    });

    if (this.includeSass) {
      // wire Bower packages to .scss
      wiredep({
        bowerJson: bowerJson,
        src: 'app/styles/*.scss',
        ignorePath: /^(\.\.\/)+/
      });
    }
  }
});
