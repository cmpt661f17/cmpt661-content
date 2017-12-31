const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  text: {type: String}
});

const heroSchema = new mongoose.Schema({
    name: {type: String},
    heroType: {type: String},
    quotes: [{type: quoteSchema}]
});

module.exports = mongoose.model('Hero', heroSchema);
