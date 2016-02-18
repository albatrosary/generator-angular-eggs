(function() {
  'use strict';

  describe('Component: <%= name %>', function () {

    var controller, compile, rootScope;

    beforeEach(module('<%= appname %>.components.<%= name %>'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile, $componentController) {
      controller = $componentController;
      compile = $compile;
      rootScope = $rootScope;
    }));

    describe('<%= className %> Controller', function() {
      it('Test Case', function () {
        var $scope = {};

        // Controllerの生成
        var ctrl = controller('<%= name %>', {$scope: $scope});
        expect(ctrl.name).toEqual('<%= className %>');

        // $onInitの実行
        ctrl.$onInit();
        expect(ctrl.onInit).toEqual('Success');
      });
    });

    // selector
    describe('<%= className %> templateUrl', function() {
      it('Test Case', function () {
        var factory = compile('<<%= dashCase %>></<%= dashCase %>>');
        var scope = rootScope.$new();
        var element = factory(scope);
        scope.$digest();
        console.log(element);
      });
    });
  });
})();

