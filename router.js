// This file will handle all the routing for the server
'use strict'

// This will load the 'express' package so that it can be used with this file.
var express = require('express')
// Create a variable so we can use the 'Router' function within the 'express'package.
var router = express.Router()

// When the root webpage i.e. http://localhost:8000/ is called the function is run giving the below 'res'ponse.
router.get('/', function(req, res) {
  //Web page root directory and the name of the file to display to the users browser.
  res.sendFile(__dirname + '/index.html')
  //Displays this alert on the server each time the page is accessed.
  console.log("Access Detected!")
});

// This will export the functions to be able to be used in our server.js file.
module.exports = router
