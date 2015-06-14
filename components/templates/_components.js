/**
 * 
 *
 * @deprecated 
 * @module components/<%= name %>
 */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.<%= name %>', [])
    .controller('<%= className %>Controller', <%= className %>Controller);

  <%= className %>Controller.$inject = [];
  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function <%= className %>Controller() {
  	console.log('<%= className %>Controller Constructor');
    vm = this;
  }

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  */
  <%= className %>Controller.prototype.activate = function() {
  	console.log('<%= className %>Controller activate Method');
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

})();
