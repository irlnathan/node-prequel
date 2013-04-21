var server = require("./server");
var router = require("./router");
var UserController = require("./userController");

var routes = {}
routes["/index"] = UserController.index;
routes["/show"] = UserController.show;

server.example(router.route, routes);
