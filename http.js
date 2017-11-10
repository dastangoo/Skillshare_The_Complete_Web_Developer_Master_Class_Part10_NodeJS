var http = require('http');
function onRequest(request, response) {
  console.log("The Request from the Client: " + request.url);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World');
  response.end();
}
http.createServer(onRequest).listen(8081);
console.log("The server is working successfully!");