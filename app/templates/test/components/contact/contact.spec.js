(function() {
  'use strict';

  describe('Component: contact', function () {

    var controller, compile, rootScope;

    beforeEach(module('<%= appname %>.components.contact'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile, $componentController) {
      controller = $componentController;
      compile = $compile;
      rootScope = $rootScope;
    }));

    describe('Contact Controller', function() {
      it('Test Case', function () {
        var $scope = {};

        // Controllerの生成
        var ctrl = controller('contact', {$scope: $scope});
        expect(ctrl.name).toEqual('Contact');

        // $onInitの実行
        ctrl.$onInit();
        expect(ctrl.onInit).toEqual('Success');
      });
    });

    // selector
    describe('Contact templateUrl', function() {
      it('Test Case', function () {
        var factory = compile('<contact></contact>');
        var scope = rootScope.$new();
        var element = factory(scope);
        scope.$digest();
        console.log(element);
      });
    });
  });
})();
