// This file will handle all the routing for the server

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
  console.log("Access Detected!");
});

module.exports = router
