(function() {
  'use strict';

  describe('Controller: About Component', function () {

    beforeEach(module('<%= appname %>.components.about'));
    beforeEach(module('<%= appname %>.mock.service.gruntfiles'));

    var Controller;

    beforeEach(inject(function ($controller) {
      Controller = $controller('Controller');
    }));

    describe('AboutController', function() {
      it('Set Grunt List', function() {
        Controller.activate();
        expect(Controller.list[0].name).toEqual('connect-history-api-fallback');
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
