/**
 * <%= className %> Components module.
 *
 * @module <%= appname %>.components.<%= text %>
 */
/* global angular */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.components.<%= text %>', [])
    .component('<%= text %>', {
      controller: Controller,
      templateUrl: 'components/<%= name %>/<%= name %>.html',
      $canActivate: $canActivate
    });

  Controller.$inject = [];

  var ctrl;

  function Controller() {
    console.log('<%= text %> Controller Constructor');
    ctrl = this;
    ctrl.name = '<%= text %>';
  }

  function $canActivate() {
    console.log('<%= text %> Controller $canActivate');
    return true;
  }

  Controller.prototype.$onInit = function() {
    console.log('<%= text %> Controller $onInit');
    ctrl.onInit = '<%= text %>';
  };
})();
