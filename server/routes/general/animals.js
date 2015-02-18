'use strict';

var active = require ('../../views/helpers/active');

module.exports = {
  handler: function(request, reply) {
    reply.view('templates/general/animals', {path:'/animals', active:active});
  }
};
