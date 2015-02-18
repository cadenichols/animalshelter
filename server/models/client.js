'use strict';

var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
  name: String,
  address: String,
  phonenumber: String,
  age: Number,
  gender: String
});

module.exports = mongoose.model('Client', clientSchema);
