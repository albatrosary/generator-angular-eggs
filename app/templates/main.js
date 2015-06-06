// jshint devel:true
(function () {
  'use strict';

  function AppController () {}

  angular.module('<%= appname %>', [
    'ngNewRouter',
    '<%= appname %>.home',
    '<%= appname %>.about',
    '<%= appname %>.contact',
    ])
    .controller('AppController', [AppController]);

  AppController.$routeConfig = [
    { path: '/',       redirectTo: '/home' },
    { path: '/home',    component: 'home' },
    { path: '/about',   component: 'about' },
    { path: '/contact', component: 'contact' }
  ];
})();