/**
 * <%= className %> Components module.
 *
 * @module <%= appname %>.components.<%= name %>
 */
/* global angular */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.components.<%= name %>', [])
    .component('<%= name %>Controller', {
      controller: <%= className %>Controller,
      templateUrl: 'components/<%= name %>/<%= name %>.html',
      $canActivate: $canActivate
    });

  <%= className %>Controller.$inject = [];

  var ctrl;

  function <%= className %>Controller() {
    console.log('<%= className %>Controller Constructor');
    ctrl = this;
  }

  function $canActivate() {
    console.log('<%= className %>Controller $canActivate');
    return true;
  }

  <%= className %>Controller.prototype.$onInit = function() {
    console.log('<%= className %>Controller $onInit');
    ctrl.name = '<%= className %>';
  };
})();
