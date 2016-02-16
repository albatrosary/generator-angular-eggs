(function() {
  'use strict';

  describe('Component: home', function () {

    var controller, compile, rootScope;

    beforeEach(module('<%= appname %>.components.home'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile, $componentController) {
      controller = $componentController;
      compile = $compile;
      rootScope = $rootScope;
    }));

    describe('Home Controller', function() {
      it('Test Case', function () {
        var $scope = {};

        // Controllerの生成
        var ctrl = controller('home', {$scope: $scope});
        expect(ctrl.name).toEqual('Home');

        // $onInitの実行
        ctrl.$onInit();
        expect(ctrl.onInit).toEqual('Success');
      });
    });

    // selector
    describe('Home templateUrl', function() {
      it('Test Case', function () {
        var factory = compile('<home></home>');
        var scope = rootScope.$new();
        var element = factory(scope);
        scope.$digest();
        console.log(element);
      });
    });
  });
})();
