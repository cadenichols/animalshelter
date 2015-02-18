'use strict';

var Client = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    var client = new Client(request.payload);
    console.log(client);
    client.save(function() {
      reply.redirect('/clients');
    });
  }
};
