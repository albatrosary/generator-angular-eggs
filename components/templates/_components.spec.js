(function(){
  'use strict';

  describe('Controller: <%= className %>Controller', function () {

    beforeEach(module('<%= appname %>'));

    var <%= className %>Controller;

    beforeEach(inject(function ($controller) {
      <%= className %>Controller = $controller('<%= className %>Controller');
    }));

    describe('<%= className %>Controller',function(){
      it('Test Case', function () {

      });
    });
  });
})()