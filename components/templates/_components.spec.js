(function() {
  'use strict';

  describe('Controller: <%= className %> Controller', function() {

    beforeEach(module('<%= appname %>.components.<%= name %>'));

    var Controller;

    beforeEach(inject(function($controller) {
      Controller = $controller('Controller');
    }));

    describe('<%= className %> Controller', function() {
      it('Test Case', function() {
        Controller.$canActivate();
      });
    });
  });
})();
