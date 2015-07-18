(function() {
  'use strict';

  module.exports = {
    dist: {
      files: [{
        expand: true,
        cwd: '<%%= config.app %>/images',
        src: '{,*/}*.svg',
        dest: '<%%= paths.dist %>/images'
      }]
    }
  };
})();
