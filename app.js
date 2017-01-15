console.log("This is a website called A Green Cat.");

var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

//app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

// Tell express to listen for requests
app.listen(3000, function(){
	console.log("Server has started on port 3000...");
})

// Define routes
app.get("/", function(req, res){
	console.log("Request made to /.");
	res.sendfile(__dirname + '/index.html');
	console.log("Response sent to IP.");
})

app.get("/dog", function(req,res){
	res.send("Cats and dogs can get along!");
	console.log("Request made to /dog.");
})

app.get("/know", function(req,res){
	res.send("What do you want to know?");
	console.log("Request made to /know.");
})

app.get("/do", function(req,res){
	console.log("Request made to /do.");
	var criteria = [ 
		{what: "great", who: "you"},
		{what: "innovative", who: "you"},
		{what: "problem solving", who: "you"},
		{what: "boring", who: "not you"},
	];
	res.render("do", {criteria: criteria});
})

app.get("/users/:userid", function(req,res){
	var userid = req.params.userid;
	res.render("home", {username: userid});
	console.log("Request made to users/" + userid + ".");
})
//app.get("/ihanpihalla", function(req,res){
//	res.render('index.html');
	// res.sendFile(path.join(__dirname+'views/index.html'));
//})
// For everything else
app.get("*", function(req,res){
	res.send("This page has not been created yet. What do you think should go here?");
	console.log("Request made to an undefined location.");
})

