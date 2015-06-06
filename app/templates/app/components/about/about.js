/**
 * 
 *
 * @deprecated 
 * @module components/contact
 */
(function () {
  'use strict';

  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function AboutController() {
  	console.log('AboutController Constructor');
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
  AboutController.prototype.activate = function() {
  	console.log('AboutController activate Method');
  };

  angular.module('<%= appname %>.about', [])
    .controller('AboutController', AboutController);

  AboutController.$inject = [];
})();
