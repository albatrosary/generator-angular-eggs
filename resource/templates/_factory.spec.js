(function () {
  'use strict';

  describe('Service: <%= className %>Service', function() {

    var <%= className %>Service, $rootScope;

    beforeEach(module('<%= appname %>.service.<%= name %>'));

    beforeEach(inject(function (_$rootScope_, _<%= className %>Service_) {
      <%= className %>Service = _<%= className %>Service_;
      $rootScope = _$rootScope_;
    }));

    describe('someThing', function() {
      it('someThing', function() {

      });
    });
  });
})();
