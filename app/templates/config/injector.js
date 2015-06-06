(function(){
  'use strict';

  module.exports = {
    options: {
      // Task-specific options go here.
    },
    scripts: {
      options: {
        template: '<%%= paths.app %>/index.html',
        transform: function(filePath) {
          filePath = filePath.replace('/app/', '');
          filePath = filePath.replace('/.tmp/', '');
          return '<script src="' + filePath + '"></script>';
        },
        starttag: '<!-- injector:js -->',
        endtag: '<!-- endinjector -->'
      },
      files: {
        '<%%= paths.app %>/index.html': [
            ['<%%= paths.app %>/**/*.js',
             '!<%%= paths.app %>/scripts/main.js']
          ]
      }
    },
    css: {
      options: {
        template: '<%%= paths.app %>/index.html',
        transform: function(filePath) {
          filePath = filePath.replace('/app/', '');
          filePath = filePath.replace('/.tmp/', '');
          return '<link rel="stylesheet" href="' + filePath + '" />';
        },
        starttag: '<!-- injector:css -->',
        endtag: '<!-- endinjector -->'
      },
      files: {
        '<%%= paths.app %>/index.html': [
            ['<%%= paths.app %>/**/*.css',
             '!<%%= paths.app %>/styles/main.css']
          ]
      }
    }
  };
})();
