var http = require("http"); // node.js의 내부모듈
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var query = url.parse(request.url, true).query;
        console.log("Request parameter is ", query);
        route(handle, pathname);
        // response.writeHead(200, { "Content-Type": "text/html" });
        // response.write(`<div>pathname : ${pathname}</div><div>query : `+ JSON.stringify(query) +`</div>`);
        response.writeHead(200, { "Content-Type": "text/plain" });
        var content = route(handle, pathname)
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;