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

  var someSpy = jasmine.createSpy().and.returnValue(
    function(cb) {
      return result;
    }
  );

  var result = {};
})();
