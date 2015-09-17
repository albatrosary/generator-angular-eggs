/**
 * Gruntfiles Server module.
 *
 * url:
 * * get: /api/gruntfiles
 *
 * @module server.api.gruntfiles
 */
'use strict';

exports = module.exports = function(app) {

  var json = require('../data/app.json');
  var Db = require('tingodb')().Db;

  var db = new Db('./server/data/', {});
  var fs = require('fs');

  if (!fs.existsSync('./server/data/gruntfiles')) {
    var collection = db.collection('gruntfiles');
    collection.insert(json, {w:1}, function(err, result) {
      console.log(err);
    });
  }
};
