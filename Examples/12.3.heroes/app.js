const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    open = require('open');

mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

// Get Mongoose to use native promises
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;

db.on('error', function() {
  console.log("Connection to MongoDB database failed");
  process.exit(1);
  //console.error.bind(console, 'connection error:');
});

db.once('open', function() {
  const heroRepository = require('./server/models/HeroRepository');
  heroRepository.initDb();
});

const app = express();

//Allow serving static files
app.use(express.static(__dirname + '/dist' ));

const port = process.env.PORT || 9080;

app.use(bodyParser.urlencoded({extended:true}));
//aut-deserialize the body of incoming request to a json object
app.use(bodyParser.json());

const heroRouter = require('./server/routes/HeroRoutes');
app.use('/api/heroes', heroRouter);
app.all('*', (req, res) => res.redirect('/'));

app.listen(port, function(){
  console.log('Hero App is running my app on http://localhost:' + port);
  //open('http://localhost:' + port);
});
