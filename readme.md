[![NPM version](http://img.shields.io/npm/v/generator-angular-eggs.svg?style=flat-square)](https://npmjs.org/package/generator-angular-eggs) [![Build Status](https://secure.travis-ci.org/albatrosary/generator-angular-eggs.svg?branch=master)](http://travis-ci.org/albatrosary/generator-angular-eggs) [![Coverage Status](https://coveralls.io/repos/albatrosary/generator-angular-eggs/badge.png?branch=master)](https://coveralls.io/r/albatrosary/generator-angular-eggs?branch=master) [![Dependency Status](https://david-dm.org/albatrosary/generator-angular-eggs.svg)](https://david-dm.org/albatrosary/generator-angular-eggs) [![devDependency Status](https://david-dm.org/albatrosary/generator-angular-eggs/dev-status.svg)](https://david-dm.org/albatrosary/generator-angular-eggs#info=devDependencies) [![peerDependency Status](https://david-dm.org/albatrosary/generator-angular-eggs/peer-status.svg)](https://david-dm.org/albatrosary/generator-angular-eggs#info=peerDependencies)

# Angular 1.4.5 and Angular New Router App Generator 

This generator are using Angular1.4, Angular New Router and Express on Node.js. Angular we have emphasized the development life cycle.It supports the next thing for that.

* Unit Test
* End-to-End Test
* Documentation
* Coverage
* Metric


## Usage

Install: `npm install -g generator-angular-eggs`

Make a new directory and `cd` into it:
```
mkdir [app-name] && cd $_
```
This [app-name] is used as ng-app="[app-name]"

Run `yo angular-eggs`:
```
yo angular-eggs
```

## Generators

Available generators:

- yo angular-eggs:components [name]
- yo angular-eggs:service [name]
- yo angular-eggs:resource [name]
- yo angular-eggs:directives [name]
- yo angular-eggs:server [name]
 

### Components

Generates an Angular Components, as the Angular Module name is Sample.

Example:

```
yo angular-eggs:components mycomponents
```

Produces `app/components/mycomponent/mycomponent.js`:
```javascript
/**
 * Mycomponents Components module.
 *
 * @module Sample.components.mycomponents
 */
(function () {
  'use strict';

  angular
    .module('Sample.components.mycomponents', [])
    .controller('MycomponentsController', MycomponentsController);

  MycomponentsController.$inject = [];

  /**
   * MycomponentsController
   *
   * @class MycomponentsController
   * @constructor
   */
  function MycomponentsController() {
    console.log('MycomponentsController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic 
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  MycomponentsController.prototype.activate = function() {
    console.log('MycomponentsController activate Method');
    vm = this;
  };

  /**
   * Angular ViewModel
   * 
   * @property vm
   * @type {Object}
   */
  var vm;
})();
```

Produces `app/components/mycomponents/mycomponents.html`:
```html
<div>mycomponents.html</div>
```

Produces `test/components/mycomponents/mycomponents.spec.js`:
```javascript
(function(){
  'use strict';

  describe('Controller: MycomponentsController', function () {

    beforeEach(module('Sample.components.mycomponents'));

    var MycomponentsController;

    beforeEach(inject(function ($controller) {
      MycomponentsController = $controller('MycomponentsController');
    }));

    describe('MycomponentsController',function(){
      it('Test Case', function () {
        Mycomponents.activate();
      });
    });
  });
})();
```

### Service

Generates an Angular Service, as the Angular Module name is Sample.

Example:

```
yo angular-eggs:service myservice
```

Produces `app/service/myservice/myservice.js`:
```javascript
/**
 * Myservice Service module.
 *
 * @module Sample.service.myservice
 */
(function () {
  'use strict';
  
  angular
    .module('Sample.service.myservice', [])
    .factory('MyserviceService', MyserviceService);

  MyserviceService.$inject = [];

  /**
   * MyserviceService
   *
   * @class MyserviceService
   * @constructor
   */
  function MyserviceService () {
    
    /**
     * My property description.  Like other pieces of your comment blocks, 
     * this can span multiple lines.
     * 
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */
    var someProperty = {};

    var myserviceService = {
      someMethod: function () {
        return;
      }
    };
    
    return myserviceService;
  }

})();
```

Produces `test/service/myservice/myservice.mock.js`:
```javascript
(function(){
  'use strict';

  angular
    .module('Sample.mock.service.myservice',[])
    .factory('MyserviceService', MyserviceService);

  var result = {};

  function MyserviceService(){
    
    var someSpy = jasmine.createSpy().and.returnValue({
      then: function(cb){
        cb(result);
        return {
          catch: function (ccb) {
            /* Default Case Not Exeption; */
            ccb();
          }
        };
      }
    });

    return {
      some: someSpy
    };
  }
})();
```

Produces `test/service/myservice/myservice.spec.js`:
```javascript
(function () {
  'use strict';

  describe('Service: MyserviceService', function () {

    var MyserviceService, $rootScope;

    beforeEach(module('Sample.service.myservice'));

    beforeEach(inject(function (_$rootScope_, _MyserviceService_) {
      MyserviceService = _MyserviceService_;
      $rootScope = _$rootScope_;
    }));

    describe('someThing',function(){
      it('someThing',function(){

      });
    });
  });
})();
```

### CRUD($resource) Service

Generates an Angular CRUD Service, as the Angular Module name is Sample.

Example:

```
yo angular-eggs:resource myresource
```

Produces `app/service/myresource/myresource.js`:
```javascript
/**
 * Myresource Service module.
 *
 * @module Sample.service.myresource
 */
(function () {
  'use strict';
  
  angular
    .module('Sample.service.myresource', [
      'ngResource'
    ])
    .factory('MyresourceService', MyresourceService);

  MyresourceService.$inject = ['$resource'];

  /**
   * MyresourceService
   *
   * @class MyresourceService
   * @constructor
   */
  function MyresourceService ($resource) {
    return $resource('/api/myresource', {});
  }
})();
```

Produces `test/service/myresource/myresource.mock.js`:
```javascript
(function(){
  'use strict';

  angular
    .module('Sample.mock.service.myresource',[])
    .factory('MyresourceService', MyresourceService);

  var result = {};

  function MyresourceService(){
    
    var someSpy = jasmine.createSpy().and.returnValue({
      then: function(cb){
        cb(result);
        return {
          catch: function (ccb) {
            /* Default Case Not Exeption; */
            ccb();
          }
        };
      }
    });

    return {
      some: someSpy
    };
  }
})();
```

Produces `test/service/myresource/myresource.spec.js`:
```javascript
(function () {
  'use strict';

  describe('Service: MyresourceService', function () {

    var MyresourceService, $rootScope;

    beforeEach(module('Sample.service.myresource'));

    beforeEach(inject(function (_$rootScope_, _MyresourceService_) {
      MyresourceService = _MyresourceService_;
      $rootScope = _$rootScope_;
    }));

    describe('someThing',function(){
      it('someThing',function(){

      });
    });
  });
})();
```

### Directives

Generates an Angular Directive, as the Angular Module name is Sample.

Example:

```
yo angular-eggs:directives mydirectives
```

Produces `app/directives/mydirectives/mydirectives.js`:
```javascript
/**
 * Mydirectives Directive module.
 *
 * @module Sample.directive.mydirectives
 */
(function () {
  'use strict';

  angular
    .module('Sample.directive.mydirectives',[])
    .directive('sampleMydirectives', MydirectivesDirective);

  MydirectivesDirective.$inject = [];

  /** 
   * MydirectivesDirective
   *
   * @class MydirectivesDirective
   * @constructor
   */
  function MydirectivesDirective(){
    function mydirectivesLink(scope, element){

    }

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/mydirectives/mydirectives.html',
      scope: {
        title: '=',
        message: '='
      },
      link: mydirectivesLink
    };
  }

})();
```

Produces `app/directives/mydirectives/mydirectives.html`:
```html
<div>mydirectives.html</div>
```

Produces `test/directives/mydirectives/mydirectives.spec.js`:
```javascript
'use strict';

describe('Directive: mydirectivesDirective', function () {

  beforeEach(module('Sample.directive.mydirectives'));

  var element, scope, $rootScope, $compile;
  var compareHTML   = '';
  var resultHTML    = '<div>' + compareHTML + '</div>';
  var directiveHTML = '';

  beforeEach(inject(function (_$rootScope_, _$compile_, $templateCache) {
    $rootScope = _$rootScope_;
    scope = _$rootScope_.$new();
    $compile = _$compile_;
    $templateCache.put('directives/mydirectives/mydirectives.html', resultHTML);
  }));

  describe('someThing', function () {

    beforeEach(function Compile() {

    });

    it ('someThing', function () {
    
    });
  });
});
```

### Server

Generates an Express Server.

Example:

```
yo angular-eggs:server myserver
```

Produces `server/api/myserver.js`:
```javascript
'use strict';

exports = module.exports = function(app) {

  var myserver = require('../data/myserver.json');

  app.get('/api/myserver', function(req, res) {
    // something
    res.status(200).json(myserver);
  });

  app.get('/api/myserver/:id', function(req, res) {
    var id = req.params.id;
    // something

    res.status(200).json(myserver);
  });

  app.post('/api/myserver', function(req, res) {
    // something
    res.sendStatus(200);
  });

  app.put('/api/myserver', function(req, res) {
    // something
    res.sendStatus(200);
  });

  app.delete('/api/myserver/:id', function(req, res) {
    var id = req.params.id;
    // something

    res.sendStatus(200);
  });

  app.delete('/api/myserver', function(req, res) {
    // something
    res.sendStatus(200);
  });
};
```

Produces `server/data/myserver.json`:
```json
[
  {}
]
```

## Tasks

- grunt serve
- grunt serve:dist
- grunt build
- grunt test
- grunt test:watch
- grunt test:coverage
- grunt e2e
- grunt doc
- grunt metric
- grunt metric:test

## License

[MIT License](http://opensource.org/licenses/MIT)

