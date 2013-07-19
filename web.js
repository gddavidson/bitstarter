var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var myRead = fs.readFileSync('index.html');
    response.send(myRead.toString());

});


app.get('/appscreen.jpeg', function(request, response) {
    var myFile = fs.readFileSync('appscreen.jpeg');
    response.send(myFile);
});

app.get('/clouds1.jpeg', function(request, response) {
    var myFile = fs.readFileSync('clouds1.jpeg');
    response.send(myFile);
});

app.get('/clouds2.jpeg', function(request, response) {
    var myFile = fs.readFileSync('clouds2.jpeg');
    response.send(myFile);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
