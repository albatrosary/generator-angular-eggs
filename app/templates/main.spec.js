(function(){
  'use strict';

  describe('Controller: BooksController', function () {

    beforeEach(module('app'));

    var AppController;

    beforeEach(inject(function ($controller) {
      AppController = $controller('AppController');
    }));

    describe('AppController',function(){
      it('存在チェック', function () {
        expect(AppController).not.toBeUndefined();
      });
    });
  });
})();