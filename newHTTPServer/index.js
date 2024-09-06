const http = require("http");
const port = 8081;
const fs = require("fs");
const requestHandler = (req,res)=>{
	// res.write("<h1>Hello From Server</h1>")
	// res.write("<p>Name :- Manav Prajapati</p>")
	// res.write("<p>Age :- 19</p>")
let fileName = ""
	switch(req.url){
	case '/' :
		fileName = "index.html";
		break;
	case '/about' :
		fileName = "about.html";
		break;
	case '/contact' :
		fileName = "contact.html";
		break;
	case '/categories':
		fileName = "categories.html";
		break;
	default :
		fileName = "error.html";
	}

	fs.readFile(fileName,(err,result)=>{
		if (!err) {
			res.end(result);
		}
	})
}

const server = http.createServer(requestHandler);

server.listen(port,(err)=>{
	if (err) {
		console.log("Server is not started on port !!")
	}

	console.log("Server is started on port :-"+ port);
})