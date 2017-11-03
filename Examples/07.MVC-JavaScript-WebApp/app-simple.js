const express = require('express');
const path = require('path');
const heroRespository = require('./models/HeroRepository');
const handlebars   =  require('express-handlebars');

const app = express();

//Allow serving static files from public folder
app.use( express.static('public') );

//Configure handlebars engine
app.engine( 'hbs', handlebars( { extname: '.hbs'} ) );

// Register handlebars as the view engine to be used to render the templates
app.set('view engine', 'hbs');

//Set the location of the view templates
app.set('views', __dirname + '/views');

app.get('/heroes', async (req, res) => {
    let heroes = await heroRespository.getHeroes();
    res.render('heroes-simple', { title: 'Heroes list', heroes });
});

app.get('/', (req, response) => {
    let responseText = 'السلام عليكم ورحمة الله وبركاته';
    responseText += '<br><a href="heroes">Heroes</a>'
    responseText += '<br><a href="quote">Quote</a>'
    responseText += '<br><a href="cats.jpg">Cats</a>'
    response.send(responseText);
});

app.get('/quote', (req, res) => {
    res.sendFile( path.join( __dirname, 'public', 'quote.txt') );
});

app.get('/*', (req, res) => {
    res.status(404);
    res.send('Not found');
});

const port = 4000;
app.listen(port, () => {
    const host = "localhost";
    console.log(`App is running and available @ http://${host}:${port}`);
});