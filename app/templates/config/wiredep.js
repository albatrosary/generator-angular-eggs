(function() {
  'use strict';

  module.exports = {
    app: {
      ignorePath: /^<%%= paths.app %>\/|\.\.\//,
      src: ['<%%= paths.app %>/index.html'],
      exclude: ['bower_components/bootstrap/dist/js/bootstrap.js']
    },
    test: {
      devDependencies: true,
      src: '<%%= paths.karma.config %>',
      ignorePath:  /\.\.\//,
      fileTypes:{
        js: {
          block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
          detect: {
            js: /'(.*\.js)'/gi
          },
          replace: {
            js: '\'{{filePath}}\','
          }
        }
      }
    }<% if (includeSass) { %>,
    sass: {
      src: ['<%%= paths.app %>/styles/{,*/}*.{scss,sass}'],
      ignorePath: /(\.\.\/){1,2}bower_components\//
    }<% } %>
  };
})();
