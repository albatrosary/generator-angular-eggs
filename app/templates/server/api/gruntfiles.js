'use strict';

exports = module.exports = function(app) {
  app.get('/api/gruntfiles', function(req, res) {
    var json = require('../data/app.json');
    res.json(json);
  });
};