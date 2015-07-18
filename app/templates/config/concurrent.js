(function() {
  'use strict';

  module.exports = {
    server: [
      <% if (includeSass) { %>'sass:server'<% } else { %>'copy:styles'<% } %>
    ],
    test: [<% if (!includeSass) { %>
      'copy:styles'
    <% } %>],
    dist: [
      <% if (includeSass) { %>'sass',<% } else { %>'copy:styles',<% } %>
      'imagemin',
      'svgmin'
    ]
  };
})();
