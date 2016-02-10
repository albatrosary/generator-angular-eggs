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
    .component('aboutController', {
      controller: AboutController,
      templateUrl: 'components/about/about.html',
      $canActivate: $canActivate
    });

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
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  function $canActivate () {
    console.log('AboutController canActivate Method');
    return true;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method $onInit
   */
  AboutController.prototype.$onInit = function() {
    console.log('AboutController $onInit');

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
