(function() {
  'use strict';

  module.exports = {
    options: {
      options : {
        jshint : '<%%= jshintrc.app %>'
      }
    },
    app:{
      files: {
        'report/plato/application': ['app/**/*.js']
      }
    },
    test:{
      files: {
        'report/plato/unit_test': ['test/**/*.js']
      }
    }
  };
})();
