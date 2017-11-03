const express = require('express')
const router = express.Router()
const fs = require("fs-extra")

const studentController = require('./controllers/StudentController')
const heroController = require('./controllers/HeroController')

//Example route with multiple parameters
//Request example: authors/erradi/books/1234678g
router.get('/api/authors/:author/books/:isbn', (req, res) => {
    console.log(req.params.author)
    console.log(req.params.isbn)

    //This returns the received parameters as a json object
    res.json(req.params)
})

// Students Web API
router.get('/api/students', studentController.getStudents );
router.get('/api/students/:id', studentController.getStudent )

//Heroes Web API
router.route('/api/heroes')
    .get( heroController.getHeroes )
    .post( heroController.addHero )

router.route('/api/heroes/:id')
    .get( heroController.getHero )
    .put( heroController.updateHero )
    .delete( heroController.deleteHero )

//Routes returning views
router.get('/', (req, res) => res.render('index') )

router.route('/login')
    .get( (req, res) => res.sendFile(__dirname + "/views/login.html") )
    .post( (req, res) => {
        const userInfo = req.body
        console.log("router.post.req.body", userInfo)

        //Return an accessCount cookie to the client -- expires is optional
        const duration24H = 24*60*60*1000
        res.cookie('username', userInfo.username, { expires: new Date(Date.now() + duration24H) })
        res.redirect('/')
    })

router.get('/logout', (req, res) => {
    //clear cookie
    res.cookie('username', '', {expires: new Date(0)})
    res.redirect("/")
})

//Middleware to intercept requests and redirect to the login page if the user is not logged-in
router.use( (req, res, next) => {
    if (!req.cookies.username) {
        res.redirect("/login")
    }
    else {
        const username = req.cookies.username
        console.log("Current username", username)

        //Allows accessing username variable from handlebars template
        res.locals.username = username
        return next()
    }
})

router.get('/students', studentController.index )

router.route('/heroes')
    .get( heroController.index )
    .post( heroController.postHero )

router.get('/heroes/:id', heroController.heroForm )

module.exports = router

//Middleware to intercept requests and redirect to the login page if the user is not logged-in. Only apllies to /students and /heroes
/*function isAuthenticated(req, res, next) {
     const username = req.cookies.username
     console.log("isAuthenticated.username", username)
     if (!username) {
        res.redirect("/login")
     } else {
        return next()
     }
 }*/