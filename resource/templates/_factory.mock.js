(function() {
  'use strict';

  angular
    .module('<%= appname %>.mock.service.<%= name %>', [])
    .factory('<%= className %>Service', <%= className %>Service);

  function <%= className %>Service() {
    return {
      some: someSpy
    };
  }

  var someSpy = jasmine.createSpy().and.returnValue({
    $resource: {
      then: function(cb) {
        cb(result);
        return {
          catch: function(ccb) {
            /* Default Case Not Exeption; */
            ccb();
          }
        };
      }
    }
  });

  var result = {};

})();
