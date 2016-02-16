(function() {
  'use strict';

  describe('Component: about', function () {

    var controller, compile, rootScope;

    beforeEach(module('<%= appname %>.components.about'));
    beforeEach(module('<%= appname %>.mock.service.gruntfiles'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile, $componentController) {
      controller = $componentController;
      compile = $compile;
      rootScope = $rootScope;
    }));

    describe('About Controller', function() {
      it('Test Case', function () {
        var $scope = {};

        // Controllerの生成
        var ctrl = controller('about', {$scope: $scope});
        expect(ctrl.name).toEqual('About');

        // $onInitの実行
        ctrl.$onInit();
        expect(ctrl.onInit).toEqual('Success');
      });
    });

    // selector
    describe('About templateUrl', function() {
      it('Test Case', function () {
        var factory = compile('<about></about>');
        var scope = rootScope.$new();
        var element = factory(scope);
        scope.$digest();
        console.log(element);
      });
    });
  });
})();
