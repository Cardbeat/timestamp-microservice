const express = require('express');
const app = express();


//routes

app.get('/', function(req,res) {
  res.send('Hello Worl!')
})


app.listen(3000, function() {
  console.log('Server running at localhost:3000')
});
