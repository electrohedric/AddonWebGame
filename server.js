var express = require('express');
var app = express();
var server = app.listen(80);

app.use(express.static('public'));

console.log("Yolo amiright");