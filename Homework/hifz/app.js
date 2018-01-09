const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/trips', { useMongoClient: true });

// Get Mongoose to use native promises
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;

db.on('error', function() {
  console.log("Connection to MongoDB database failed");
  process.exit(1);
});

db.once('open', function() {
  const hifzRepository = require('./server/models/HifzRepository');
  //hifzRepository.initDb();
});

const app = express();

//Allow serving static files
app.use(express.static(__dirname + '/dist' ));

const port = process.env.PORT || 9090;
exports.port = port;

app.use(bodyParser.urlencoded({extended:true}));
//aut-deserialize the body of incoming request to a json object
app.use(bodyParser.json());

const router = require('./server/controllers/routes');
app.use('/api', router);

app.all('*', (req, res) => res.redirect('/'));

app.listen(port, function(){
  console.log('Hifz App is running my app on http://localhost:' + port);
});
