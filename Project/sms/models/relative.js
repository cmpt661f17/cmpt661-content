const mongoose = require('mongoose');

const relativeSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    dateOfBirth:Date,
    gender:String,
    nationalId:String,
    homePhone:String,
    mobile:String,
    email:String,
    password:String,
    street:String,
    city:String,
    country:String,
    occupation:String,
    nameOfEmployer:String,
    employerCity:String,
    employerCountry:String,
    employerPhone:String,
    relationWithStudent:String,
    isPrimary:{type:Boolean, default:false}

});


module.exports = mongoose.model('Relative', relativeSchema);