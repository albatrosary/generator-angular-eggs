[![NPM version](http://img.shields.io/npm/v/generator-angular-eggs.svg?style=flat-square)](https://npmjs.org/package/generator-angular-eggs) [![Build Status](https://secure.travis-ci.org/albatrosary/generator-angular-eggs.svg?branch=master)](http://travis-ci.org/albatrosary/generator-angular-eggs) [![Coverage Status](https://coveralls.io/repos/albatrosary/generator-angular-eggs/badge.png?branch=master)](https://coveralls.io/r/albatrosary/generator-angular-eggs?branch=master) [![Dependency Status](https://david-dm.org/albatrosary/generator-angular-eggs.svg)](https://david-dm.org/albatrosary/generator-angular-eggs) [![devDependency Status](https://david-dm.org/albatrosary/generator-angular-eggs/dev-status.svg)](https://david-dm.org/albatrosary/generator-angular-eggs#info=devDependencies) [![peerDependency Status](https://david-dm.org/albatrosary/generator-angular-eggs/peer-status.svg)](https://david-dm.org/albatrosary/generator-angular-eggs#info=peerDependencies)

# Angular 1.5.0, Component Router, Bootstrap v4-alpha and TingoDB(like MongoDB) App Generator 

This generator are using Angular1.5, Angular Component Router, Bootstrap v4(alpha) and Express on Node.js. Instead of MongoDB, it will use the lighter [TingoDB](http://www.tingodb.com/).  

Angular we have emphasized the development life cycle. It supports the next thing for that.

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
- yo angular-eggs:server [name]
 
## Notes

`yo angular-eggs:components [name]` command creates a file as follows:

```bash
app/components/[name]/[name].html
app/components/[name]/[name].js
test/components/[name]/[name].spec.js
```

When `name` is `appName`:

```bash
app/components/appname/appname.html
app/components/appname/appname.js
test/components/appname/appname.spec.js
```

Component name is `appName`. So CustomTag name is `app-name`

### Components

Generates an Angular Components, as the Angular Module name is Sample.

Example:

```
yo angular-eggs:components mycomponents
```

## Tasks

- npm start
- npm run serve:dist
- npm run build
- npm test
- npm run test:watch
- npm run test:coverage
- npm run e2e
- npm run doc
- npm run metric
- npm run metric:test

## License

[MIT License](http://opensource.org/licenses/MIT)

