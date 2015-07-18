(function() {
  'use strict';

  module.exports = {
    compile: {
      name: '<%%= pkg.name %>',
      description: '<%%= pkg.description %>',
      version: '<%%= pkg.version %>',
      url: '<%%= pkg.homepage %>',
      options: {
        paths: [
          '<%%= paths.app %>/components',
          '<%%= paths.app %>/directives',
          '<%%= paths.app %>/service',
          'server'
        ],
        outdir: 'docs'
      }
    }
  };
})();
