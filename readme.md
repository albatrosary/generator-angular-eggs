[![NPM version](http://img.shields.io/npm/v/generator-angular-eggs.svg?style=flat-square)](https://npmjs.org/package/generator-angular-eggs) [![Build Status](https://secure.travis-ci.org/albatrosary/generator-angular-eggs.svg?branch=master)](http://travis-ci.org/albatrosary/generator-angular-eggs) [![Coverage Status](https://coveralls.io/repos/albatrosary/generator-angular-eggs/badge.png?branch=master)](https://coveralls.io/r/albatrosary/generator-angular-eggs?branch=master) [![Dependency Status](https://david-dm.org/albatrosary/generator-angular-eggs.svg)](https://david-dm.org/albatrosary/generator-angular-eggs) [![devDependency Status](https://david-dm.org/albatrosary/generator-angular-eggs/dev-status.svg)](https://david-dm.org/albatrosary/generator-angular-eggs#info=devDependencies) [![peerDependency Status](https://david-dm.org/albatrosary/generator-angular-eggs/peer-status.svg)](https://david-dm.org/albatrosary/generator-angular-eggs#info=peerDependencies)

# Angular app generator 

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
- yo angular-eggs:directives [name]
- yo angular-eggs:server [name]
 

### components

Generates an AngularJS service.

Example:

```
yo angular:components mycomponent
```
Produces `app/components/mycomponent/mycomponent.js`:

```javascript
(function () {
  'use strict';
  
  angular
    .module('app-name.mycomponent', [])
    .service('MycomponentController', MycomponentController);
  
  MycomponentController.$inject = [];
  
  function MycomponentController() {
    ...
  }
  
  MycomponentController.prototype.activate = function() {
    ...
  };
  
})();
```

Produces `app/components/mycomponent/mycomponent.html`:
```html
<div>mycomponent.html</div>
```

Produces `test/components/mycomponent/mycomponent.spec.js`:
```javascript
(function(){
  'use strict';

  describe('Controller: MycomponentController', function () {

    beforeEach(module('app-name'));

    var MycomponentController;

    beforeEach(inject(function ($controller) {
      MycomponentController = $controller('MycomponentController');
    }));

    describe('MycomponentController',function(){
      it('Test Case', function () {

      });
    });
  });
})();
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

[BSD license](http://opensource.org/licenses/bsd-license.php)

