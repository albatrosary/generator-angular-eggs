/**
 * 
 *
 * @deprecated 
 * @module components/contact
 */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.contact', [])
    .controller('ContactController', ContactController);

  ContactController.$inject = [];
  
  /**
   * ContactController
   *
   * @class ContactController
   * @constructor
   */
  function ContactController() {
  	console.log('ContactController Constructor');
  }

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  * @param {String} foo Argument 1
  * @param {Object} config A config object
  * @param {String} config.name The name on the config object
  * @param {Function} config.callback A callback function on the config object
  * @param {Boolean} [extra=false] Do extra, optional work
  * @return {Boolean} Returns true on success
  */
  ContactController.prototype.activate = function() {
  	console.log('ContactController activate Method');
    vm = this;
    vm.case1 = 20;
    someMethod();
  };

  /**
   * Static property
   */

  /**
   * Static method, assigned to class
   */

  /**
   * Private property
   */
   
   var vm;

  /**
   * Private Method
   */
   var someMethod = function () {
     vm.case2 = 10;
   };
})();
