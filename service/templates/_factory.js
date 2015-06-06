(function () {
  'use strict';
  
  /**
   * 
   * @class <%= className %>Service
   * @constructor
   */
  function <%= className %>Service(){
    
    var someProperty={};

    var cartitemService = {
      someMethod: function () {
        return;
      }
    };
    return cartitemService;
  }

  angular.module('<%= appname %>.service.<%= name %>',[
    '<%= appname %>.service.<%= name %>'
  ]).factory('<%= className %>Service', <%= className %>Service);

  <%= className %>Service.$inject = [];
})();


