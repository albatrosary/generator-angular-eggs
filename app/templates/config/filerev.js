(function() {
  'use strict';

  module.exports = {
    dist: {
      src: [
        '<%%= paths.dist %>/scripts/{,*/}*.js',
        '<%%= paths.dist %>/styles/{,*/}*.css',
        '<%%= paths.dist %>/images/{,*/}*.*',
        '<%%= paths.dist %>/styles/fonts/{,*/}*.*',
        '<%%= paths.dist %>/*.{ico,png}'
      ]
    }
  };
})();
