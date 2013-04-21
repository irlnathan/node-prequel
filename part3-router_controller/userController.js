function index(res) {
	console.log("Rquest action index was called.");
	res.writeHead(200, {"Content-Type": "text/plain"});

	var Users = {
		user1: "John Doe",
		user2: "John Smith",
		user3: "John Wayne"
	};

	for (user in Users) {
		console.log(Users[user]);
		res.write(Users[user]+"\n");
	}
	  res.end();

}

function show(res) {
	console.log("Request action show was called");
	res.writeHead(200, {"Content-Type": "text/plain"});


	var Users = {
		user1: "John Doe",
		user2: "John Smith",
		user3: "John Wayne"
	};

	var id = setTimeout(function() {
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.write(Users.user1);
		res.end();
	}, 10000);

	
}

exports.index = index;
exports.show = show;