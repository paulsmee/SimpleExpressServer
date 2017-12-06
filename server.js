// This is the base server which also routes functions to the user.
'use-strict' // 'use-strict' will ensure the file will fail if there are any errors, it's a quick way to ensure your code is correct (though it still might not do what you expected).

var express = require('express') // This loads the 'express' package so we can use the functions within it.
var server = express()

server.use(express.static('public'))
server.use(require('./router')) // Connect our router function from router.js (the module we exported at the bottom).

var port = 8000 // Specify which port to listen on
server.listen(port, function() {  //This is the action our server will take once it is ready to serve.
  console.log('The server is listening on port ' + port) // This message is displayed on the host machine when the server is started.
})
