(function(){
  'use strict';

  describe('Controller: HomeController', function () {

    beforeEach(module('<%= appname %>.components.home'));

    var HomeController;

    beforeEach(inject(function ($controller) {
      HomeController = $controller('HomeController');
    }));

    describe('HomeController',function(){
      it('Test Case', function () {
        HomeController.activate();
      });
    });
  });
})();