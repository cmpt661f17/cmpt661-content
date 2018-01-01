const express	   =  require('express')
const bodyParser   =  require('body-parser')
const cookieParser =  require('cookie-parser')
const handlebars   =  require('express-handlebars')

const app = express();

app.use( express.static( __dirname ) )
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use( cookieParser() )
app.engine( 'hbs', handlebars( {defaultLayout: 'main', extname: '.hbs'} ) )
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')



//Mount the routes to the app
const routes = require('./routes')
app.use('/', routes)

const port = 3030
app.listen(port, () => {
    const host = "localhost"
    console.log(`Surah Explorer is running @ http://${host}:${port}`)
})