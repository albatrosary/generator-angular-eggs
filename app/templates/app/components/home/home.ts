/// <reference path="../../typings/angularjs/angular.d.ts" />

/**
 * Home Components module.
 *
 * @module <%= appname %>.components.home
 */
module home {
  'use strict';

  export class HomeController {

    constructor () {
      console.log('HomeController Constructor');
    };

    public static $inject = [];

    public canActivate(): boolean {
      console.log('HomeController canActivate Method');
      return true;
    };

    public activate(): void {
      console.log('HomeController activate Method');
    };

    public canDeactivate(): boolean {
      console.log('HomeController canDeactivate Method');
      return true;
    };

    public deactivate(): void {
      console.log('HomeController deactivate Method');
    };
  };

  angular
    .module('<%= appname %>.components.home', [])
    .controller('HomeController', HomeController);

};