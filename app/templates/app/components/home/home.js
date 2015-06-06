/**
 * 
 *
 * @deprecated 
 * @module components/home
 */
(function () {
  'use strict';

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
  HomeController.prototype.activate = function() {
    console.log('HomeController activate Method');
  };

  angular.module('<%= appname %>.home', [])
    .controller('HomeController', HomeController);

  HomeController.$inject = [];
})();
