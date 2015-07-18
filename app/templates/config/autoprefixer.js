(function() {
  'use strict';

  module.exports = {
    options: {
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']<% if (includeSass) { %>,
      map: {
        prev: '.tmp/styles/'
      }<% } %>
    },
    dist: {
      files: [{
        expand: true,
        cwd: '.tmp/styles/',
        src: '{,*/}*.css',
        dest: '.tmp/styles/'
      }]
    }
  };
})();
