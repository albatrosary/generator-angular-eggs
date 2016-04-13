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
    var ctrl = this;
    ctrl.name = 'About';
    ctrl.GruntfilesService = GruntfilesService;
  }

  /**
   * The controller canActivate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method canActivate
   */
  function $canActivate () {
    console.log('About Controller canActivate');
    return true;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method $onInit
   */
  Controller.prototype.$onInit = function() {
    var ctrl = this;
    console.log('About Controller $onInit');
    ctrl.onInit = 'Success';
    var grunt = this.GruntfilesService.query().$promise;
    grunt
      .then(setlist)
      .catch(error);
  };

  /**
   * Setting the retrieved Gruntfile list to ViewModel
   *
   * @method setlist
   * @param {Object} list Gruntfile list
   * @private
   */
  var setlist = function (list) {
    var ctrl = this;
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
    var ctrl = this;
    ctrl.error = e;
  };

  Controller.prototype.$routerOnActivate = function() {
    console.log('About Controller $routerOnActivate');
  };

  Controller.prototype.$routerCanReuse = function () {
    console.log('About Controller $routerCanReuse');
    return true;
  }

  Controller.prototype.$routerOnReuse = function() {
    console.log('About Controller $routerOnReuse');
  };

  Controller.prototype.$routerCanDeactivate = function () {
    console.log('About Controller $routerCanDeactivate');
    return true;
  }

  Controller.prototype.$routerOnDeactivate = function() {
    console.log('About Controller $routerOnDeactivate');
  };
})();
