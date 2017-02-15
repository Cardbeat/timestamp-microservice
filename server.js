const express = require('express');
const app = express();
const PORT = process.env.PORT  || 3000
const makeTimestamp = require('./timestamp.js')


//routes


//root
app.get('/', function(req,res) {
  res.send('Hello Worl!')
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
