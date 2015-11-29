/**
 * This is <%= appname %> module.
 *
 * @module <%= appname %>
 */
module main {
   'use strict';

  export class AppController {
    constructor () {}

    static $inject = [];

    static $routeConfig = [
      {path: '/',       redirectTo: '/home'},
      {path: '/home',    component: 'home'},
      {path: '/about',   component: 'about'},
      {path: '/contact', component: 'contact'}
    ];
  }

  angular
    .module('<%= appname %>', [
      'ngNewRouter',
      '<%= appname %>.config',
      '<%= appname %>.components.home',
      '<%= appname %>.components.about',
      '<%= appname %>.components.contact'
    ])
    .controller('AppController', AppController);
}