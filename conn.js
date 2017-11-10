var http = require('http');
var fs = require('fs');
var connect = require('connect');
var app = connect();

function images(request, response, next) {
  console.log("This is the first function");
  response.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream('./index.html').pipe(response);
  //next();
}

function software(request, response, next) {
  console.log("This is the second fucntion");
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello world, this is Software page');
  response.end();
  // next();
}

app.use('/images', images);
app.use('/software', software);
http.createServer(app).listen(8081);
console.log("The server is running using the connect framework");