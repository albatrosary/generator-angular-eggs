(function () {
  'use strict';
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
        appIsShow: '=',
        title: '=',
        message: '=',
        type: '='
      },
      link: <%= name %>Link
    };
  }

  angular.module('<%= appname %>.directive.<%= name %>',[])
    .directive('<%= appname %><%= className %>', <%= name %>Directive);

  <%= name %>Directive.$inject = ['$timeout'];
})();
