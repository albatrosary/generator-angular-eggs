(function() {
  'use strict';

  describe('Controller: Contact Component', function () {

    beforeEach(module('<%= appname %>.components.contact'));

    var Controller;

    beforeEach(inject(function ($controller) {
      Controller = $controller('ContactController');
    }));

    describe('Contact Controller', function() {
      it('Test Case', function () {
        Controller.activate();
      });
    });
  });
})();
