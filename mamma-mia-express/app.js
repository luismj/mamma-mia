var express = require('express');
var app = express();
app.use(express.static('public')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/

const fetch = require("node-fetch");

app.get('/', function(req, res){
  res.sendFile('index.html');
}); 

app.get('/get_dishes', function(req, res, next) {
  fetch('http://localhost:3000/food.json')
    .then(result => result.json())
    .then(resBody => { res.json({ message: resBody}) });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
