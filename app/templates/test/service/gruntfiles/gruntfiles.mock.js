(function() {
  'use strict';

  angular
    .module('<%= appname %>.mock.service.gruntfiles', [])
    .factory('GruntfilesService', GruntfilesService);

  function GruntfilesService() {
    return {
      query: querySpy
    };
  }

  var querySpy = jasmine.createSpy().and.returnValue({
    $promise: {
      then: function(cb) {

        cb(json);

        return {
          catch:function(ccb) {
            ccb(false);
          }
        };
      }
    }
  });

  var json = [
    {
      'name': 'connect-history-api-fallback',
      'version': '^1.1.0',
      'desc': 'Provides a fallback for non-existing directories so that the HTML 5 history API can be used.'
    },
    {
      'name': 'grunt',
      'version': '^0.4.5',
      'desc': 'The JavaScript Task Runner'
    },
    {
      'name': 'grunt-autoprefixer',
      'version': '^3.0.1',
      'desc': 'Parse CSS and add vendor-prefixed CSS properties using the Can I Use database. Based on Autoprefixer.'
    }
  ];
})();
