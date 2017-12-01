let mongoose = require('mongoose');

let storeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    city: {type: String, required: true},
});

let Store = mongoose.model('Store', storeSchema)
module.exports= Store;