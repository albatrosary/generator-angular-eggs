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
    ctrl.name = 'Home';
  }

  function $canActivate() {
    console.log('Home Controller $canActivate');
    return true;
  }

  Controller.prototype.$onInit = function() {
    console.log('Home Controller $onInit');
    ctrl.onInit = 'Success';
  };

  Controller.prototype.$routerOnActivate = function() {
    console.log('Contact Controller $routerOnActivate');
  };

  Controller.prototype.$routerCanReuse = function () {
    console.log('Contact Controller $routerCanReuse');
    return true;
  }

  Controller.prototype.$routerOnReuse = function() {
    console.log('Contact Controller $routerOnReuse');
  };

  Controller.prototype.$routerCanDeactivate = function () {
    console.log('Contact Controller $routerCanDeactivate');
    return true;
  }

  Controller.prototype.$routerOnDeactivate = function() {
    console.log('Contact Controller $routerOnDeactivate');
  };
})();
