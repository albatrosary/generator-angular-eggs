/**
 * <%= className %> Service module.
 *
 * @module <%= appname %>.service.<%= name %>
 */
(function() {
  'use strict';

  angular
    .module('<%= appname %>.service.<%= name %>', [
      'ngResource'
    ])
    .factory('<%= className %>Service', <%= className %>Service);

  <%= className %>Service.$inject = ['$resource'];

  /**
   * <%= className %>Service
   *
   * @class <%= className %>Service
   * @constructor
   */
  function <%= className %>Service ($resource) {
    return $resource('/api/<%= name %>', {});
  }
})();
