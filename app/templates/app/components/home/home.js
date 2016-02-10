/**
 * Home Components module.
 *
 * @module <%= appname %>.components.home
 */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.components.home', [])
    .component('homeController', {
      controller: HomeController,
      templateUrl: 'components/home/home.html',
      $canActivate: $canActivate
    });

  HomeController.$inject = [];

  var ctrl;

  /**
   * HomeController
   *
   * @class HomeController
   * @constructor
   */
  function HomeController() {
    console.log('HomeController Constructor');
    ctrl = this;
  }

  function $canActivate() {
    console.log('HomeController $canActivate');
    return true;
  }

  HomeController.prototype.$onInit = function() {
    console.log('HomeController $onInit');
  };
})();
