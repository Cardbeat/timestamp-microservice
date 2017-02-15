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
  var time = new Date()
  var day = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();
  res.send(month+ " " + day + ", " + year)
})


// port
app.listen(PORT, function() {
  console.log('Server running at ' + PORT)
});
