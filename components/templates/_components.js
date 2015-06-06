/**
 * 
 *
 * @deprecated 
 * @module components/<%= name %>
 */
(function () {
  'use strict';

  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function <%= className %>Controller() {
  	console.log('<%= className %>Controller Constructor');
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

  angular.module('<%= appname %>.<%= name %>', [])
    .controller('<%= className %>Controller', <%= className %>Controller);

  <%= className %>Controller.$inject = [];
})();
