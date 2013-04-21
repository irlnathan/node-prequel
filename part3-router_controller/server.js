var http = require("http");
var url = require("url");

function example(route, routes) {
  function onRequest(req, res) {

    // This handles parsing the URL
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname, routes, res);

  }

  http.createServer(onRequest).listen(1337);
  console.log('Server running at http://127.0.0.1:1337/');
}

exports.example = example;