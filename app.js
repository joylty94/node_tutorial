const http = require('http'); // 1

// http.createServer((request, response) => { // 2
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');
//     response.end(`${circle.area(4)}`);
// }).listen(8000); // 3
//var server = http.createServer();
// server.listen(8888);
//console.log('Server running at http://127.0.0.1:3000/');

// callback function
function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");