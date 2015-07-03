(function(){
  'use strict';

  angular
    .module('<%= appname %>.mock.service.<%= name %>',[])
    .factory('<%= className %>Service', <%= className %>Service);

  var result = {};

  function <%= className %>Service(){
    
    var someSpy = jasmine.createSpy().and.returnValue({
      then: function(cb){
        cb(result);
        return {
          catch: function (ccb) {
            /* Default Case Not Exeption; */
            ccb();
          }
        };
      }
    });

    return {
      some: someSpy
    };
  }
})();