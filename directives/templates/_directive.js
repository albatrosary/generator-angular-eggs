(function () {
  'use strict';

  angular
    .module('<%= appname %>.directive.<%= name %>',[])
    .directive('<%= appname.toLowerCase() %><%= className %>', <%= className %>Directive);

  <%= name %>Directive.$inject = ['$timeout'];

  /**
   * 
   * @class <%= name %>Directive
   * @constructor
   */
  function <%= name %>Directive($timeout){
    function <%= name %>Link(scope, element){

    }

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/<%= name %>/<%= name %>.html',
      scope: {
        title: '=',
        message: '='
      },
      link: <%= name %>Link
    };
  }

})();
