/**
 * Gruntfiles Service module.
 *
 * @module <%= appname %>.service.gruntfiles
 */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.service.gruntfiles', [
      'ngResource'
    ])
    .factory('GruntfilesService', GruntfilesService);

  GruntfilesService.$inject = ['$resource'];

  /**
   * @class GruntfilesService
   * @constructor
   */
  function GruntfilesService($resource) {
    return $resource('/api/gruntfiles');
  }
})();
