const express		 =	require('express')
const session		 =	require('express-session')
const bodyParser   = 	require('body-parser')
const cookieParser = 	require('cookie-parser')

const handlebars   =  require('express-handlebars')
const app			 =	express()

/* Configure handlebars:
 set extension to .hbs so handlebars knows what to look for
 set the defaultLayout to 'main' so that all partial templates will be rendered and inserted in the main's {{{body}}}
 the main.hbs defines define page elements such as the menu and imports all the common css and javascript files
 */
app.engine( 'hbs', handlebars( {defaultLayout: 'main', extname: '.hbs'} ) )

// Register handlebars as the view engine to be used to render the templates
app.set('view engine', 'hbs')

//Set the location of the view templates
app.set('views', __dirname + '/views')

//Allow serving static files
app.use( express.static(__dirname) )

const idleTimeoutMilliseconds = 20 * 60 * 1000 //20 minutes
//secret: secret is used to hash the session id to make it hard to guess
//Resave: Forces the session to be saved back to the session store, even if the session was never modified during the request.
//saveUninitialized: Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
//Session expires if no request received within the specified maxAge time limit
app.use( session( {
        secret: 'mysecret',
        saveUninitialized: false, resave: false,
        cookie: { maxAge: idleTimeoutMilliseconds }
    }) )

app.use( cookieParser() )
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended: true}) )

const appController = require('./AppController')

//Middleware to intercept requests and redirect to the login page if the user is not logged-in
function isAuthenticated(req, res, next) {
    if (!req.session.user) {
        //Store this Url to redirect to it after successful login
        req.session.prevUrl = req.originalUrl;
        console.log('User not logged-in', req.session.user)
        res.render('login')
    } else {
        return next()
    }
}

app.use( (req, res, next) => {
    if (req.session.user) {
        //Allows accessing Express.js session from handlebars template
        res.locals.session = req.session;
    }
    return next();
});

app.get('/', (req,res) => res.redirect('/hala'))

app.post('/login', (req, res) => appController.login(req, res))

app.get('/hala', (req, res) => appController.hala(req, res))

app.get('/shopls', (req, res) => res.render('shop-localstorage') )

//Need to login first before allowing the user to shop
app.get('/shop', isAuthenticated, (req, res) => res.render('shop', {shoppingCart: req.session.shoppingCart}) )

app.post('/shop', isAuthenticated, (req, res) => appController.addItemToCart(req, res))

app.get('/logout', (req, res) => appController.logout(req, res))

const port = 3000
app.listen(port, () => {
	console.log('App running @ http://localhost:' + port)
})