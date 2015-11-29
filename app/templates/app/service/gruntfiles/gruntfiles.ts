/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />

/**
 * Gruntfiles Service module.
 *
 * @module SampleApp.service.gruntfiles
 */
module Gruntfiles {
  'use strict';

  export class GruntfilesService {

    constructor ($resource) {
      console.log('GruntfilesService Constructor');
      var gruntfiles = $resource('/api/gruntfiles', {
        query: {
          transformResponse: function (data) {
            return angular.fromJson(data);
          }
        }
      });
      return gruntfiles;
    };

    public static $inject = ['$resource'];
  }

  angular
    .module('SampleApp.service.gruntfiles', [
      'ngResource'
    ])
    .factory('GruntfilesService', GruntfilesService);
};
