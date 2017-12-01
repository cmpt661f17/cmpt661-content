class BookController {
    constructor() {
        this.bookRespository = require('../models/BookRepository')
    }

    async getStores(req, res) {
        let stores = await this.bookRespository.getStores()
        res.json(stores)
    }

    async getCategories(req, res) {
        let categories = await this.bookRespository.getBookCategories()
        console.log("getCategories", categories)
        res.json(categories)
    }

    async addBook(req, res) {
        let book = await this.bookRespository.addBook(req.body)
        res.status(201).send(book)
    }

    /*
    Example:
     {
         "author": "Soft Reviewer",
         "rating": 4,
         "reviewText": "Fun but scary book :)"
     }
    */
    addReview(req, res) {
        this.bookRespository.addReview(req.params.bookId, req.body).then(book => {
            res.status(200).send(book)
        })
    }

    updateReview(req, res) {
        this.bookRespository.updateReview(req.params.bookId, req.params.reviewId, req.body).then(book => {
            res.status(200).send(book)
        })
    }

    //to pass the category parameter use /api/books?category=Programming
    //to pass the isbn parameter use /api/books?isbn=123
    //to pass the isbn parameter use /api/books?author=authorName
    getBooks(req, res) {
        if (req.query.isbn) {
            this.getBookByIsbn(req, res)
        }

        if (req.query.author) {
            this.getBooksByAuthor(req, res)
        }

        this.bookRespository.getBooks(req.query.category)
            .then(books => res.json(books))
            .catch(err => res.status(500).send(err))
    }

    getBook(req, res) {
        this.bookRespository.getBook(req.params.bookId)
            .then(book => {
                console.log('getBook.book', book)
                if (book) {
                    res.json(book)
                }
                else {
                    res.status(404).send('no book found')
                }
            })
            .catch(err => res.status(500).send(err))
    }

    getBookByIsbn(req, res) {
        this.bookRespository.getBookByIsbn(req.query.isbn)
            .then(book => {
                if (book) {
                    res.json(book)
                }
                else {
                    res.status(404).send('no book found')
                }
            })
            .catch(err => res.status(500).send(err))
    }

    getBooksByAuthor(req, res) {
        this.bookRespository.getBooksByAuthor(req.query.author)
            .then(books => res.json(books))
            .catch(err => res.status(500).send(err))
    }

    updateBook (req, res) {
        this.bookRespository.updateBook(req.params.bookId, req.body)
            .then((updateResult) => {
                console.log("Controller.updateBook", updateResult)
                res.status(200).send("Book saved")
            })
            .catch(err => res.status(500).send(err))
    }

    deleteBook (req, res) {
        this.bookRespository.deleteBook(req.params.bookId)
            .then(() => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    async initDb (req, res) {
        await this.bookRespository.initDb()
        if (res) {
            res.status(200).send('done')
        }
    }
}

module.exports = new BookController()