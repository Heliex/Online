/*
 * This files is the web server, it's handle all request from client and responses all data which the client asked
 * Creation date : 29/05/2017
 * Last modification date : 30/05/2017
 * Author : c.gerard(Heliex)
 */
var express = require('express');
var app = express();
var port = 8080;
var mongoose = require('mongoose');
var Histoire = require('./api/models/histoire');
var bodyParser = require('body-parser');
var path    = require("path");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/online');

app.use(bodyParser.urlencoded({extented : true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

var routes = require('./api/routes/histoireRoutes');
routes(app);
app.listen(port);

console.log(' RESTFUL API is waiting for client request on port : ' + port);