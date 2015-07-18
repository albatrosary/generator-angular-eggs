(function() {
  'use strict';

  module.exports = {
    options: {
      sourceMap: true,
      includePaths: ['bower_components'],
      loadPath: 'bower_components'
    },
    dist: {
      files: [{
        expand: true,
        cwd: '<%%= paths.app %>/styles',
        src: ['*.{scss,sass}'],
        dest: '.tmp/styles',
        ext: '.css'
      }]
    },
    server: {
      files: [{
        expand: true,
        cwd: '<%%= paths.app %>/styles',
        src: ['*.{scss,sass}'],
        dest: '.tmp/styles',
        ext: '.css'
      }]
    }
  };
})();
