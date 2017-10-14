let express = require('express')

let router = express.Router()
const fs = require("fs-promise")

let studentController = require('./controllers/StudentController')
let heroController = require('./controllers/HeroController')

router.get("/api/heroes2", (req, res) => heroController.getHeroes(req, res))

//Example route with multiple parameters
//Request example: authors/erradi/books/1234678g
router.get('/api/authors/:author/books/:isbn', (req, res) => {
    console.log(req.params.author)
    console.log(req.params.isbn)

    //This returns the received parameters as a json object
    res.json(req.params)
})

// Students Web API
router.get('/api/students', (req, res) => studentController.getStudents (req, res) )
router.get('/api/students/:id', (req, res) => studentController.getStudent(req, res) )

//Heroes Web API
router.route('/api/heroes')
    .get( (req, res) => heroController.getHeroes(req, res) )
    .post( (req, res) => heroController.addHero(req, res) )

router.route('/api/heroes/:id')
    .get( (req, res) => heroController.getHero(req, res) )
    .put( (req, res) => heroController.updateHero(req, res) )
    .delete( (req, res) => heroController.deleteHero(req, res) )

//Routes returning views
router.get('/', (req, res) => res.render('index') )

router.route('/login')
    .get( (req, res) => res.sendFile(__dirname + "/views/login.html") )
    .post( (req, res) => {
        let userInfo = req.body
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
        console.log("isAuthenticated.username", username)

        //Allows accessing username variable from handlebars template
        res.locals.username = username
        return next()
    }
})

router.get('/students', (req, res) => studentController.index(req, res) )

router.route('/heroes')
    .get( (req, res) => heroController.index(req, res) )
    .post( (req, res) => heroController.postHero(req, res) )

router.get('/heroes/:id', (req, res) => heroController.heroForm(req, res) )

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