/**
 * About Components module.
 *
 * @module <%= appname %>.components.about
 */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.components.about', [
      '<%= appname %>.service.gruntfiles'
    ])
    .component('about', {
      controller: Controller,
      templateUrl: 'components/about/about.html',
      $canActivate: $canActivate
    });

  Controller.$inject = ['GruntfilesService'];

  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function Controller(GruntfilesService) {
    console.log('About Controller Constructor');

    this.GruntfilesService = GruntfilesService;
  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  function $canActivate () {
    console.log('About Controller canActivate Method');
    return true;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method $onInit
   */
  Controller.prototype.$onInit = function() {
    console.log('About Controller $onInit');

    ctrl = this;
    var grunt = this.GruntfilesService.query().$promise;
    grunt
      .then(setlist)
      .catch(error);
  };

  /**
   * Angular ViewModel
   *
   * @property ctrl
   * @private
   */
  var ctrl;

  /**
   * Setting the retrieved Gruntfile list to ViewModel
   *
   * @method setlist
   * @param {Object} list Gruntfile list
   * @private
   */
  var setlist = function (list) {
    ctrl.list = list;
  };

  /**
   * It will capture the error at the time of Gruntfile data acquisition
   *
   * @method error
   * @param {Object} e error message
   * @private
   */
  var error = function (e) {
    ctrl.error = e;
  };
})();
