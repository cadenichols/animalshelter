'use strict';

var active = require ('../../views/helpers/active');
var Client = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    Client.find({}, function(err, clients) {
      reply.view('templates/clients/index', {path:'/clients', active:active, clients:clients});
    });
  }
};
