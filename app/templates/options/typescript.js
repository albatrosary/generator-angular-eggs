(function() {
  'use strict';

  module.exports = {
    base: {
      src: ['<%%= paths.app %>/**/*.ts'],
      dest: '<%%= paths.dist %>/scripts/main.js',
      options: {
        experimentalDecorators: true,
        module: 'amd', //or commonjs
        target: 'es5', //or es3
        sourceMap: true,
        declaration: true,
        references: [
          '<%%= paths.app %>/typings/**/*.d.ts'
        ]
      }
    }
  };
})();