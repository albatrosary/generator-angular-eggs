# Angular app generator [![Build Status](https://secure.travis-ci.org/albatrosary/generator-angular-egg.svg?branch=master)](http://travis-ci.org/albatrosary/generator-angular-egg)

This generator are using Angular1, NewRouter and Express on Node.js. Angular we have emphasized the development life cycle.It supports the next thing for that.

* Unit Test
* End-to-End Test
* Documentation
* Coverage
* Metric


## Usage

Install: `npm install -g generator-angular-egg`

Make a new directory and `cd` into it:
```
mkdir [app-name] && cd $_
```
This [app-name] is used as ng-app="[app-name]"

Run `yo angular-egg`:
```
yo angular-egg
```

## Generators

Available generators:

- angular-egg:components [name]
- angular-egg:service [name]
- angular-egg:directive [name]
- angular-egg:server [name]

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

