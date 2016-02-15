(function() {
  'use strict';

  describe('Controller: HomeController', function () {

    beforeEach(module('<%= appname %>.components.home'));

    var Controller;

    beforeEach(inject(function ($controller) {
      Controller = $controller('HomeController');
    }));

    describe('HomeController', function() {
      it('Test Case', function () {
        Controller.activate();
      });
    });
  });
})();
