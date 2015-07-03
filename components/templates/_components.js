/**
 * @module <%= appname %>.components.<%= name %>
 */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.components.<%= name %>', [])
    .controller('<%= className %>Controller', <%= className %>Controller);

  <%= className %>Controller.$inject = [];

  /**
   * <%= className %>Controller
   *
   * @class <%= className %>Controller
   * @constructor
   */
  function <%= className %>Controller() {
  	console.log('<%= className %>Controller Constructor');
  }

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  */
  <%= className %>Controller.prototype.activate = function() {
  	console.log('<%= className %>Controller activate Method');
    vm = this;
  };

  /**
   * My property description.  Like other pieces of your comment blocks, 
   * this can span multiple lines.
   * 
   * @property vm
   * @type {Object}
   */
  var vm;
})();
