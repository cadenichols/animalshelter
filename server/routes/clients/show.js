'use strict';

var active = require ('../../views/helpers/active');
var Clients = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    Clients.findOne({_id:request.params.clientId}, function(err, client) {
      reply.view('templates/clients/show', {path:'/clients', active:active, client:client});
    });
  }
};
