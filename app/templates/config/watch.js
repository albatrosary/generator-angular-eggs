(function() {
  'use strict';

  module.exports = {
    bower: {
      files: ['bower.json'],
      tasks: ['wiredep']
    },
    js: {
      files: ['<%%= paths.app %>/{,directives,service,components}/{,*/}*.js'],
      tasks: ['eslint', 'jscs'],
      options: {
        livereload: true
      }
    },
    html: {
      files: ['<%%= paths.app %>/{,directives,service,components}/{,*/}*.html'],
      options: {
        livereload: true
      }
    },
    jstest: {
      files: ['karma/**/*.js'],
      tasks: ['test:watch']
    },
    gruntfile: {
      files: ['Gruntfile.js']
    },<% if (includeSass) { %>
    sass: {
      files: ['<%%= paths.app %>/styles/{,*/}*.{scss,sass}'],
      tasks: ['sass:server', 'autoprefixer']
    },<% } %>
    styles: {
      files: ['<%%= paths.app %>/styles/{,*/}*.css'],
      tasks: ['newer:copy:styles', 'autoprefixer']
    }
  };
})();
