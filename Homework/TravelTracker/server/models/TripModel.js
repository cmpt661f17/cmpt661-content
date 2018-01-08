const mongoose = require('mongoose');

const landmarkSchema = new mongoose.Schema({
  name: {type: String},
  rating: {type: Number}
});

const TripSchema = new mongoose.Schema({
  country: {type: String},
  city: {type: String},
  visitDate : {type : Date},
  visitType : {type : String},
  totalCost : {type : Number},
  landmarks: [{type: landmarkSchema}]
});

module.exports = mongoose.model('Trip', TripSchema);
