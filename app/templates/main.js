// jshint devel:true
(function () {
  'use strict';

  angular
    .module('<%= appname %>', [
      'ngNewRouter',
      '<%= appname %>.components.config',
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

  function AppController () {}
})();