/**
 * 
 *
 * @deprecated 
 * @module components/contact
 */
(function () {
  'use strict';

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
  };

  angular.module('<%= appname %>.contact', [])
    .controller('ContactController', ContactController);

  ContactController.$inject = [];
})();
