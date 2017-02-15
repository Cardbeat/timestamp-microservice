const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT  || 3000
const makeTimestamp = require('./timestamp.js')


//routes

//midleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './app/views');
app.set('view engine', 'pug');

//root
app.get('/', function(req,res) {
  res.render('index', { title: 'timestamp micro-service'});
})

//get query for timestamp
app.get('/:query',function(req, res) {
  let query = req.params.query;
  res.json(makeTimestamp(query));
})

// port
app.listen(PORT, function() {
  console.log('Server running at ' + PORT)
});
