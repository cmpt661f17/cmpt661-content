let mongoose = require('mongoose')

let reviewSchema = new mongoose.Schema({
    author: String,
    rating: {type: Number, required: true, min: 0, max: 5},
    reviewText: String,
    createdOn: {type: Date, default : Date.now}
})

let bookSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    authors: [String],
    publisher: {name: String, country: String},
    category: String,
    pages: Number,
    read: {type: Boolean, default:false, required: true},
    createdOn : {
        type : Date,
        default : Date.now
    },
    reviews: [reviewSchema],
    store : [{ type : mongoose.Schema.ObjectId, ref : 'Store' }]
})

//Custom Validtor
bookSchema.path('isbn').validate( value => value.length >= 3 )

module.exports = mongoose.model('Book', bookSchema)