(function(){
  'use strict';

  describe('Controller: <%= className %>Controller', function () {

    beforeEach(module('<%= appname %>.components.<%= name %>'));

    var <%= className %>Controller;

    beforeEach(inject(function ($controller) {
      <%= className %>Controller = $controller('<%= className %>Controller');
    }));

    describe('<%= className %>Controller',function(){
      it('Test Case', function () {
        <%= className %>Controller.activate();
      });
    });
  });
})();