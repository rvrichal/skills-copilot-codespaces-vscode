// create a web server to handle comments
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/comments', function(req, res) {
  res.json(comments);
});
app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.json(req.body);
});
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});