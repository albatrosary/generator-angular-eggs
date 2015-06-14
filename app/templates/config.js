// jshint devel:true
(function () {
  'use strict';

  angular
    .module('<%= appname %>.config', [])
    .config(AppConfig);

  function AppConfig($locationProvider){
    /*
      # Hashbang Mode
      http://www.example.com/#/aaa/
      # HTML5 Mode
      http://www.example.com/aaa/
    */
    $locationProvider.html5Mode(true);
  }

  AppConfig.$inject = ['$locationProvider'];
})();