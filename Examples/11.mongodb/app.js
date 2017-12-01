const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

/* Very important
 This makes Mongoose async operations, like .save() and queries,
 return ES6 Promises. This means that you can do things like MyModel.findOne({}).then()
 */
mongoose.Promise = global.Promise

const app = express()

const port = 9090 //process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const bookController = require('./controllers/BookController')

app.get('/api/books/initdb', (req, res) => bookController.initDb(req, res))

app.get('/api/stores', (req, res) => bookController.getStores(req, res))
app.get('/api/categories', (req, res) => bookController.getCategories(req, res))

app.get('/api/books', (req, res) => bookController.getBooks(req, res))
app.get('/api/books/:bookId', (req, res) => bookController.getBook(req, res))

app.post('/api/books', (req, res) => bookController.addBook(req, res))
app.post('/api/books/:bookId/reviews', (req, res) => bookController.addReview(req, res))

app.put('/api/books/:bookId', (req, res) => bookController.updateBook(req, res))
app.put('/api/books/:bookId/reviews/:reviewId', (req, res) => bookController.updateReview(req, res))
app.delete('/api/books/:bookId', (req, res) => bookController.deleteBook(req, res))


app.get('/', function(req, res){
    res.send('Welcome to Books API available @ http://localhost:9090/api/books')
})

const dbConnection = mongoose.connect('mongodb://localhost/books', function(err) {
    if (err) {
        console.log("Failed to connect to monogoDb " + err)
        return
    }
    else {
        bookController.initDb()

        app.listen(port, () => {
            console.log(`Book Service running on http://localhost:${port}/api/books`)
        })
    }
})