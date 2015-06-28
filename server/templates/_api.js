'use strict';

exports = module.exports = function(app) {

  var <%= name %> = require('../data/<%= name %>.json');

  app.get('/api/<%= name %>', function(req, res) {
    // something
    res.status(200).json(<%= name %>);
  });

  app.get('/api/<%= name %>/:id', function(req, res) {
    var id = req.params.id;
    // something

    res.status(200).json(<%= name %>);
  });

  app.post('/api/<%= name %>', function(req, res) {
    // something
    res.sendStatus(200);
  });

  app.put('/api/<%= name %>', function(req, res) {
    // something
    res.sendStatus(200);
  });

  app.delete('/api/<%= name %>/:id', function(req, res) {
    var id = req.params.id;
    // something

    res.sendStatus(200);
  });

  app.delete('/api/<%= name %>', function(req, res) {
    // something
    res.sendStatus(200);
  });
};