/**
 * This is <%= appname %> module.
 *
 * @module <%= appname %>
 */
(function () {
  'use strict';

  angular
    .module('<%= appname %>', [
      'ngComponentRouter',
      '<%= appname %>.config',
      '<%= appname %>.components.home',
      '<%= appname %>.components.about',
      '<%= appname %>.components.contact'
    ])
    .controller('AppController', AppController);

  AppController.$inject = ['$rootRouter'];

  /**
   * AppController
   *
   * @class AppController
   * @main <%= appname %>
   * @constructor
   */
  function AppController ($rootRouter) {
    $rootRouter.config([
      {
        path: '/home',
        name:'Home',
        component: 'home',
        useAsDefault: true
      },
      {
        path: '/about',
        name:'About',
        component: 'about'
      },
      {
        path: '/contact',
        name:'Contact',
        component: 'contact'
      }
    ]);
  }
})();
