const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
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
    role:String
});


module.exports = mongoose.model('staff', staffSchema);
