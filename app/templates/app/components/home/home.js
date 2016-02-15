/**
 * Home Components module.
 *
 * @module <%= appname %>.components.home
 */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.components.home', [])
    .component('home', {
      controller: Controller,
      templateUrl: 'components/home/home.html',
      $canActivate: $canActivate
    });

  Controller.$inject = [];

  var ctrl;

  /**
   * Controller
   *
   * @class Controller
   * @constructor
   */
  function Controller() {
    console.log('Home Controller Constructor');
    ctrl = this;
  }

  function $canActivate() {
    console.log('Home Controller $canActivate');
    return true;
  }

  Controller.prototype.$onInit = function() {
    console.log('Home Controller $onInit');
  };
})();
