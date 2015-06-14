(function () {
  'use strict';
  
  angular
    .module('<%= appname %>.service.<%= name %>',[])
    .factory('<%= className %>Service', <%= className %>Service);

  <%= className %>Service.$inject = [];

  /**
   * 
   * @class <%= className %>Service
   * @constructor
   */
  function <%= className %>Service(){
    
    var someProperty={};

    var <%= name %>Service = {
      someMethod: function () {
        return;
      }
    };
    return <%= name %>Service;
  }

})();


