var db = require('../db');
var express = require('express');
var path = require('path');

var parser = require('body-parser');
var morgan = require('morgan');
var router = require('./routes.js');
var app = express();
module.exports.app = app;


app.set('port',process.env.PORT || 5468);
app.use(morgan('dev'));
app.use(parser.json());
app.use(router);
app.use(express.static(path.join(__dirname, '/../client')));
app.use('/node_modules', express.static(path.join(__dirname, '/../node_modules')));


if(!module.parent) {
  app.listen(app.get('port'));
  console.log('PassLock Listening on ', app.get('port'));
}