// var http = require('http');
// function onRequest(request, response) {
//   console.log("The Request from the Client: " + request.url);
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('Hello World');
//   response.end();
// }
// http.createServer(onRequest).listen(8081);
// console.log("The server is working successfully!");
// 
// 

var http = require('http');
var fs = require('fs');

function response_404(response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write("Sorry, the page you are looking for, is not anywhere!");
  response.end(); 
}
function onRequest(request, response) {
  console.log("We got a request from the Client.");
  if (request.method == "GET" && request.url == "/") {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('./index.html').pipe(response);    
  } else {
    response_404(response);
  }
}
http.createServer(onRequest).listen(8081);
console.log("The Server is working successfully");