'use strict';

var join = require('path').join;
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.pkg = require('../package.json');
    this.appname = this.appname.replace(/\s+/g, '');
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
    var angularVersion = '~1.4.3';
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
    this.indexFile = this.engine(
      this.readFileAsString(join(this.sourceRoot(), 'index.html')),
      this
    );
  },

  app: function () {

    this.directory('app');
    this.mkdir('app/scripts');
    this.mkdir('app/styles');
    this.mkdir('app/images');
    this.mkdir('app/directives');

    this.write('app/index.html', this.indexFile);

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
    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies({
          skipMessage: this.options['skip-install-message'],
          skipInstall: this.options['skip-install']
        });
      }
    });
  }
});
