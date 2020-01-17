var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');

const app = express()

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

const PORT=8080; 

http.createServer(app).listen(PORT);