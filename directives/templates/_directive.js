/**
 * <%= className %> Directive module.
 *
 * @module <%= appname %>.directive.<%= name %>
 */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.directive.<%= name %>', [])
    .directive('<%= appname.toLowerCase() %><%= className %>', <%= className %>Directive);

  <%= className %>Directive.$inject = [];

  /**
   * <%= className %>Directive
   *
   * @class <%= className %>Directive
   * @constructor
   */
  function <%= className %>Directive() {
    function <%= name %>Link(scope, element) {

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
