/**
 * This is <%= appname %> module.
 *
 * @module <%= appname %>
 */
(function () {
  'use strict';

  angular
    .module('<%= appname %>', [
      'ngNewRouter',
      '<%= appname %>.config',
      '<%= appname %>.components.home',
      '<%= appname %>.components.about',
      '<%= appname %>.components.contact'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    { path: '/',       redirectTo: '/home' },
    { path: '/home',    component: 'home' },
    { path: '/about',   component: 'about' },
    { path: '/contact', component: 'contact' }
  ];

  AppController.$inject = [];  

  /**
   * AppController
   *
   * @class AppController
   * @main <%= appname %>
   * @constructor
   */
  function AppController () {}
})();