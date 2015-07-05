(function(){
  'use strict';

  describe('Controller: AboutController', function () {

    beforeEach(module('<%= appname %>.components.about'));
    beforeEach(module('<%= appname %>.mock.service.gruntfiles'));

    var AboutController;

    beforeEach(inject(function ($controller) {
      AboutController = $controller('AboutController');
    }));

    describe('AboutController',function(){
      it('Set Grunt List', function () {
        AboutController.activate();
        expect(AboutController.list[0].name).toEqual('connect-history-api-fallback');
      });
    });

    describe('suite', function() {
      it('spec', function() {
        // setup
        var obj = {
            method: function() {
                console.log('obj#method()');
            }
        };

        spyOn(obj, 'method');

        // exercise
        obj.method();

        // verify
        expect(obj.method).toHaveBeenCalled();
      });
    });

    describe('suite 2', function() {
      it('tracks the context', function() {
        var spy = jasmine.createSpy('spy');
        var baz = {
          fn: spy
        };
        var quux = {
          fn: spy
        };
        baz.fn(123);
        quux.fn(456);

        expect(spy.calls.first().object).toBe(baz);
        expect(spy.calls.mostRecent().object).toBe(quux);
      });
    });
  });
})();