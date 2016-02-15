// Generated on 2015-04-16 using
// generator-angular-eggs 0.0.1
'use strict';

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  var options = {
    // Configurable paths
    paths: {
      app: 'app',
      dist: 'dist',
      karma: {
        config: 'test/karma.conf.js'
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    jshintrc: {
      app: grunt.file.readJSON('.eslintrc')
    } 
  };

  var configs = require('load-grunt-configs')(grunt, options);
  
  // Define the configuration for all the tasks
  grunt.initConfig(configs);

  grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }
    if (target === 'dist') {
      return grunt.task.run([
      'build', 
      'express:dev',
      'browserSync:dist']);
    }

    grunt.task.run([
      'clean:server',
      'injector',
      'wiredep',
      'eslint',
      'jscs',
      'concurrent:server',
      'autoprefixer',
      'express:dev',
      'browserSync:dev',
      'watch'
    ]);
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });

  grunt.registerTask('test', function (target) {
    if (target === 'watch') {
      grunt.task.run([
        'wiredep:test',
        'injector:test',
        'karma:watch'
      ]);
    } else if (target === 'coverage') {
      grunt.task.run([
        'wiredep:test',
        'injector:test',
        'eslint',
        'jscs',
        'karma:single',
        'browserSync:coverage'
      ]);
    } else {
      grunt.task.run([
        'wiredep:test',
        'injector:test',
        'eslint',
        'jscs',
        'karma:single'
      ]);
    }
  });

  grunt.registerTask('build', [
    'clean:dist',
    'injector',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',<% if (includeModernizr) { %>
    'modernizr',<% } %>
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:eslint',
    'test',
    'build',
    'e2e'
  ]);

  grunt.registerTask('doc', [
    'eslint',
    'clean:doc',
    'yuidoc',
    'browserSync:doc'
  ]);

  grunt.registerTask('e2e', [
    'express:dev',
    'browserSync:e2e',
    'protractor:accept'
  ]);


  grunt.registerTask('metric', function (target) {
    if (target === 'test') {
      return grunt.task.run([
      'plato:test', 
      'browserSync:metricTest'
      ]);
    }

    grunt.task.run([
      'plato:app',
      'browserSync:metricApp'
    ]);
  });

};
