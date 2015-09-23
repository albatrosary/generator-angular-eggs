/**
 * Home Components module.
 *
 * @module <%= appname %>.components.home
 */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.components.home', [])
    .controller('HomeController', HomeController);

  HomeController.$inject = [];

  /**
   * HomeController
   *
   * @class HomeController
   * @constructor
   */
  function HomeController() {
    console.log('HomeController Constructor');
  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  HomeController.prototype.canActivate = function() {
    console.log('HomeController canActivate Method');
    return true;
  };

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  HomeController.prototype.activate = function() {
    console.log('HomeController activate Method');
  };

  /**
   * The controller canDeactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canDeactivate
   */
  HomeController.prototype.canDeactivate = function() {
    console.log('HomeController canDeactivate Method');
    return true;
  };

  /**
   * The controller deactivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method deactivate
   */
  HomeController.prototype.deactivate = function() {
    console.log('HomeController deactivate Method');
  };

})();
