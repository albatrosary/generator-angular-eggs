/**
 * 
 *
 * @deprecated 
 * @module components/about
 */
(function () {
  'use strict';

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
    
    var _self = this;

    return this.GruntfilesService.query().$promise.then(
      function(list){
      _self.list = list;
    }).catch(function(e){
      console.log(e);
    });
  };

  angular.module('<%= appname %>.about', [
    '<%= appname %>.service.gruntfiles'
  ])
    .controller('AboutController', AboutController);

  AboutController.$inject = ['GruntfilesService'];
})();
