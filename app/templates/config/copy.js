(function() {
  'use strict';

  module.exports = {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%%= paths.app %>',
        dest: '<%%= paths.dist %>',
        src: [
          '*.{ico,png,txt}',
          'images/{,*/}*.webp',
          'components/{,*/}*.html',
          'directives/{,*/}*.html',
          '{,*/}*.html',
          'styles/fonts/{,*/}*.*'
        ]
      }<% if (includeBootstrap) { %>, {
        expand: true,
        dot: true,
        cwd: '<% if (includeSass) {
            %>.<%
          } else {
            %>bower_components/bootstrap/dist<%
          } %>',
        src: '<% if (includeSass) {
            %>bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*<%
          } else {
            %>fonts/*<%
          } %>',
        dest: '<%%= paths.dist %>'
      }<% } %>]
    }<% if (!includeSass) { %>,
    styles: {
      expand: true,
      dot: true,
      cwd: '<%%= paths.app %>/styles',
      dest: '.tmp/styles/',
      src: '{,*/}*.css'
    }<% } %>
  };
})();
