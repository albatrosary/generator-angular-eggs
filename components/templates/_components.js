/**
 * <%= className %> Components module.
 *
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
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  <%= className %>Controller.prototype.activate = function() {
    console.log('<%= className %>Controller activate Method');
    vm = this;
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
