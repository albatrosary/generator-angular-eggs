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
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  <%= className %>Controller.prototype.canActivate = function() {
    console.log('<%= className %>Controller canActivate Method');
    return true;
  };

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
   * The controller canDeactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canDeactivate
   */
  <%= className %>Controller.prototype.canDeactivate = function() {
    console.log('<%= className %>Controller canDeactivate Method');
    return true;
  };

  /**
   * The controller deactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method deactivate
   */
  <%= className %>Controller.prototype.deactivate = function() {
    console.log('<%= className %>Controller deactivate Method');
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
