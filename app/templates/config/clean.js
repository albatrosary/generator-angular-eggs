(function() {
  'use strict';

  module.exports = {
    dist: {
      files: [{
        dot: true,
        src: [
          '.tmp',
          '<%%= paths.dist %>/*',
          '!<%%= paths.dist %>/.git*'
        ]
      }]
    },
    server: '.tmp',
    doc: 'docs'
  };
})();
