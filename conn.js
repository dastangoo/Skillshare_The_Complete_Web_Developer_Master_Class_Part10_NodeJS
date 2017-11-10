var http = require('http');
var connect = require('connect');

var app = connect();
http.createServer(app).listen(8081);
console.log("The server is running using the connect framework");