var fs = require("fs");
var PythonShell = require("python-shell");
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
sockets=[];
app.get('/',function(request,response){
	response.sendFile(__dirname + '/index.html');
});
console.log("Starting");
io.on('connection',function(socket){
	console.log('client connected');
	sockets.push(socket);
	fs.readFile("score.txt",function(error,data){
	if (error) {
  		throw error;
  		console.log(error);
  	};
	console.log("contents:"+data);
	io.emit('change',data.toString());	
	});
	socket.on("end",function(){
		var i = sockets.indexOf(socket);
		sockets.splice(i,1);
	});
});
setInterval(function(){
	PythonShell.run('livescore.py', function (err,results) {
  	if (err) {
  		throw err;
  		console.log(err);
  	};
  	//console.log(results.toString());
  	//console.log(results);
  	//fs.writeFileSync("score.txt",results);
  	//console.log(results);
	});

	/*fs.readFile("./python/score.txt",function(error,data){
		if(error)
		{
			console.log("gadbad");
		}
		console.log("contents:"+data);
		io.emit('change',data.toString());
	});*/


	fs.watchFile("score.txt",function(current,previous){
	fs.readFile("score.txt",function(error,data){
		if(error)
		{
			console.log("gadbad");
		}
		console.log("contents:"+data);
		io.emit('change',data.toString());
	});
});
},30000);
http.listen(1337,function(){
	console.log('listening ');
});
