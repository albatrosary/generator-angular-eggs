/**
 * <%= className %> Components module.
 *
 * @module <%= appname %>.components.<%= text %>
 */
/* global angular */
(function () {
  'use strict';

  angular
    .module('<%= appname %>.components.<%= text %>'<% if (sub===undefined) { %>, [])
    .component('<%= text %>', {<% } else { %>)
    .component('<%= sub %>', {<% } %>
      controller: Controller,
      templateUrl: 'components/<%= name %>/<%= filename %>.html',
      $canActivate: $canActivate
    });

  Controller.$inject = [];

  var ctrl;

  function Controller() {
    console.log('<%= text %> <%= sub %> Controller Constructor');
    ctrl = this;
    ctrl.name = '<%= text %> <%= sub %>';
  }

  function $canActivate() {
    console.log('<%= text %> <%= sub %> Controller $canActivate');
    return true;
  }

  Controller.prototype.$onInit = function() {
    console.log('<%= text %> <%= sub %> Controller $onInit');
    ctrl.onInit = 'Success';
  };
})();
