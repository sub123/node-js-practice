var net = require("net");
var sockets = [];
console.log("Server Running");
var server = net.createServer(function(socket){
	sockets.push(socket);
	socket.write("Welcome to bootstrap chat server !!\n");
	socket.write("close window to exit\n");
	socket.write("Type in text and hit enter to send text message to all connected users\n");
	socket.on("data",function(data){
		for(var i=0; i<sockets.length ; i++)
		{
			if(sockets[i]==socket)continue;
			sockets[i].write(data);
		}
	});
	socket.on("end",function(){
		var i = sockets.indexOf(socket);
		sockets.splice(i,1);
	});
});
server.listen(1337);