/*********** SETUP WEB SERVER ************/
var express = require('express');
var app = express();

let port = process.env.PORT;
if (port == null || port == "") { // if on prod server, then run on the required port, otherwise run on 8000 test port
  port = 8000;
}
var server = app.listen(port);

app.use(express.static('public'));

console.log("...Node server started...");