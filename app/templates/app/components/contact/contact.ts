/// <reference path="../../typings/angularjs/angular.d.ts" />

/**
 * Contact Components module.
 *
 * @module <%= appname %>.components.contact
 */
module contact {
  'use strict';

  export class ContactController {

    private case1: number;
    private case2: number;

    private mathod(): void {
      this.case2 = 10
    };

    constructor () {
      console.log('ContactController Constructor');
    };

    public static $inject = [];

    public canActivate(): boolean {
      console.log('ContactController canActivate Method');
      return true;
    };

    public activate(): void {
      console.log('ContactController activate Method');
      this.case1 = 20;
    };

    public canDeactivate(): boolean {
      console.log('ContactController canDeactivate Method');
      return true;
    };

    public deactivate(): void {
      console.log('ContactController deactivate Method');
    };
  };

  angular
    .module('<%= appname %>.components.contact', [])
    .controller('ContactController', ContactController);

};