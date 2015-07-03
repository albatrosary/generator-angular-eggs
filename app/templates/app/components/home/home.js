/**
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
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  */
  HomeController.prototype.activate = function() {
    console.log('HomeController activate Method');
  };

})();
