const express	   =  require('express')
const bodyParser   =  require('body-parser')
const cookieParser =  require('cookie-parser')
const handlebars   =  require('express-handlebars')


const app		   =   express()

//Allow serving static files from __dirname which is the current folder
app.use( express.static( __dirname ) )

/*
 body-parser extracts the entire body portion of an incoming request and assigns it to req.body.
 Parses the body text as URL encoded data (which is how browsers send form data from forms
 with method set to POST)
 and exposes the resulting object (containing the keys and values) on req.body.

 The extended option allows to choose between parsing the URL-encoded data
 with the querystring library (when false) or the qs library (when true).
 The "extended" syntax allows for rich objects and arrays to be encoded
 into the URL-encoded format, allowing for a JSON-like experience
 with URL-encoded. For more information, please see the qs library.
 */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//If the body of incoming request is a json object then assign it to req.body property
app.use(bodyParser.json())

app.use( cookieParser() )

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

//Mount the routes to the app
const routes = require('./routes')
app.use('/', routes)

const port = 9080
app.listen(port, () => {
    const host = "localhost"
    console.log(`Students App is running @ http://${host}:${port}`)
})