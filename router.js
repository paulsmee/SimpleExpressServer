// This file will handle all the routing for the server
'use-strict'

var express = require('express') // This will load the 'express' package so that it can be used with this file.
var router = express.Router() // Create a variable so we can use the 'Router' function within the 'express' package.

router.get('/', function(req, res) { // When the root webpage i.e. http://localhost:8000/ is called the function is run giving the below 'res'ponse.
  res.sendFile(__dirname + '/index.html') //Web page root directory and the name of the file to display to the users browser.
  console.log("Access Detected!") //Displays this alert on the server each time the page is accessed.
});

module.exports = router // This will export the functions to be able to be used in our server.js file.
