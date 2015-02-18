'use strict';

var active = require ('../../views/helpers/active');
var Animal = require('../../models/animal');

module.exports = {
  handler: function(request, reply) {
    Animal.find({isAdopted:false}, function(err, animals) {
      reply.view('templates/animals/index', {path:'/animals', active:active, animals:animals});
    });
  }
};
