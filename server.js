const express = require('express');
const app = express();
const PORT = process.env.PORT  || 3000

//routes


//root
app.get('/', function(req,res) {
  res.send('Hello Worl!')
})

//timestamps
app.get('/:query',function(req, res) {
  let query = req.params.query;
  res.json(makeTimestamp(query));
})

function makeTimestamp(timestamp) {
  var result {
    unix: null,
    natural: null
  }
}

let date;
if(!isNaN(ParseInt(timestamp))) {
  date = new Date(parseInt(timestamp)); 
} else {
  date = new Date(timestamp);
}

if(!isNaN(date.getTime())) {
  result.unix = date.getTime();
  result.natural = getNatural(date);
}

function getNaturalDate(date){
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December'];

  return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}
// port
app.listen(PORT, function() {
  console.log('Server running at ' + PORT)
});
