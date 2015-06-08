(function () {
  'use strict';
  
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

  angular.module('<%= appname %>.service.<%= name %>',[
    '<%= appname %>.service.<%= name %>'
  ]).factory('<%= className %>Service', <%= className %>Service);

  <%= className %>Service.$inject = [];
})();


