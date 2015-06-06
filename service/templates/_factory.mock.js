(function(){
  'use strict';

  function <%= className %>Service(){
    
    var mockData = {
          $valid: true
        };

    var someSpy = jasmine.createSpy().and.returnValue({
      then:function(cb){
        cb(mockData);
        return {
          catch: function () {
            /* Default Case Not Exeption; */
          }
        };
      }
    });

    return {
      some: someSpy,
      mockData: mockData
    };
  }

  angular.module('<%= appname %>.mock.service.<%= name %>',[])
    .factory('<%= className %>Service', <%= className %>Service);
})();