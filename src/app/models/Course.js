const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: 'hahaha' },
    description: { type: String, maxLenght: 255},
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Course',Course);