/**
 * 
 *
 * @deprecated 
 * @module components/about
 */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.about', [
      '<%= appname %>.service.gruntfiles'
    ])
    .controller('AboutController', AboutController);

  AboutController.$inject = ['GruntfilesService'];

  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function AboutController(GruntfilesService) {
    console.log('AboutController Constructor');
  
    this.GruntfilesService = GruntfilesService;
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
    console.log('AboutController Method activate');

    vm = this;
    var grunt = this.GruntfilesService.query().$promise;
    grunt
      .then(setlist)
      .catch(error);
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
  var setlist = function (list) {
    vm.list = list;
  };

  var error = function () {
  };
})();
