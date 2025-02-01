//create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Create a new file to store the comments
fs.open('comments.txt', 'a', function (err, fd) {
  if (err) throw err;
  fs.close(fd, function (err) {
    if (err) throw err;
  });
});

app.use(express.static('public'));
