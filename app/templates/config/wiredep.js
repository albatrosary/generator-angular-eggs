(function(){
  'use strict';

  module.exports = {
    app: {
      ignorePath: /^<%%= paths.app %>\/|\.\.\//,
      src: ['<%%= paths.app %>/index.html'],<% if (includeSass) { %>
      exclude: ['bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js']<% } else { %>
      exclude: ['bower_components/bootstrap/dist/js/bootstrap.js']<% } %>
    }<% if (includeSass) { %>,
    sass: {
      src: ['<%%= paths.app %>/styles/{,*/}*.{scss,sass}'],
      ignorePath: /(\.\.\/){1,2}bower_components\//
    }<% } %>
  };
})();