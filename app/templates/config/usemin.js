(function() {
  'use strict';

  module.exports = {
    options: {
      assetsDirs: [
        '<%%= paths.dist %>',
        '<%%= paths.dist %>/images',
        '<%%= paths.dist %>/styles'
      ]
    },
    html: ['<%%= paths.dist %>/{,*/}*.html'],
    css: ['<%%= paths.dist %>/styles/{,*/}*.css']
  };
})();
