'use strict';

var mongoose = require('mongoose');

var animalSchema = mongoose.Schema({
  name: String,
  image: String,
  species: String,
  breed: String,
  age: Number,
  gender: String,
  description: String,
  isAdopted: {type: Boolean, default: false}
});

module.exports = mongoose.model('Animal', animalSchema);
