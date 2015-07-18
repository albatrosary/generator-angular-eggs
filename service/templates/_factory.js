/**
 * <%= className %> Service module.
 *
 * @module <%= appname %>.service.<%= name %>
 */
(function() {
  'use strict';

  angular
    .module('<%= appname %>.service.<%= name %>', [])
    .factory('<%= className %>Service', <%= className %>Service);

  <%= className %>Service.$inject = [];

  /**
   * <%= className %>Service
   *
   * @class <%= className %>Service
   * @constructor
   */
  function <%= className %>Service() {

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */
    var someProperty = {};

    var <%= name %>Service = {
      someMethod: function() {
        return;
      }
    };

    return <%= name %>Service;
  }

})();
