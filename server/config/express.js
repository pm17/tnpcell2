// importing modules or dependencies
var express  = require('express');
var app      = express();
var bodyParser   = require('body-parser');
var path = require('path');
var configDb = require('./mongoDB');
var mongoose = require('mongoose');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connect to database
mongoose.connect(configDb.url);

// Point static path to dist
app.use(express.static(path.join(__dirname,'../../', 'dist')));


// API routes
require('../app/routes/routes.js')(app);



module.exports = app;