var http = require("http");
var url = require("url");

function example(route) {
  function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Request for " + pathname + " received.");
    res.end();
    route(pathname);
  }
  http.createServer(onRequest).listen(1337);
  console.log('Server running at http://127.0.0.1:1337/');
}
exports.example = example;