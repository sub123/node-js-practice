var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/',function(request,response){
	response.sendFile(__dirname + '/index.html');
});
io.on('connection',function(socket){
	console.log('client connected');
	socket.on('chat message',function(message){
		console.log('message:' + message);
		io.emit('chat message',message);
	});
});
http.listen(1337,function(){
	console.log('listening ');
});
