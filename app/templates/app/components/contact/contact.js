/**
 * Contact Components module.
 *
 * @module <%= appname %>.components.contact
 */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.components.contact', [])
    .component('contact', {
      controller: Controller,
      templateUrl: 'components/contact/contact.html',
      $canActivate: $canActivate
    });

  Controller.$inject = [];

  /**
   * Controller
   *
   * @class Controller
   * @constructor
   */
  function Controller() {
    console.log('Contact Controller Constructor');
    ctrl = this;
    ctrl.name = 'Contact';
  }

  function $canActivate() {
    console.log('Contact Controller $canActivate');
    return true;
  }

  Controller.prototype.$onInit = function() {
    console.log('Contact Controller $onInit');
    ctrl.onInit = 'Success';
    ctrl.case1 = 20;
    someMethod();
  };

  /**
   * @property ctrl
   * @private
   */
  var ctrl;

  /**
   * @method someMethod
   * @private
   */
  var someMethod = function () {
    ctrl.case2 = 10;
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
