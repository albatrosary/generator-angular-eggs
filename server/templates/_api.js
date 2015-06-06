'use strict';

exports = module.exports = function(app) {

  app.get('/api/<%= name %>', function(req, res) {
    // something
  });

  app.post('/api/<%= name %>', function(req, res) {
    // something
  });

  app.put('/api/<%= name %>', function(req, res) {
    // something
  });

  app.delete('/api/<%= name %>/:id', function(req, res) {
    // something
  });
};