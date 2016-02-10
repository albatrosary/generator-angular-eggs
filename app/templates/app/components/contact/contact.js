/**
 * Contact Components module.
 *
 * @module <%= appname %>.components.contact
 */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.components.contact', [])
    .component('contactController', {
      controller: ContactController,
      templateUrl: 'components/contact/contact.html',
      $canActivate: $canActivate
    });

  ContactController.$inject = [];

  /**
   * ContactController
   *
   * @class ContactController
   * @constructor
   */
  function ContactController() {
    console.log('ContactController Constructor');
    ctrl = this;
  }

  function $canActivate() {
    console.log('ContactController $canActivate');
    return true;
  }

  ContactController.prototype.$onInit = function() {
    console.log('ContactController $onInit');

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
})();
