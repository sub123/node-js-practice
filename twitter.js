var https = require("https");
var options = {
	host:'stream.twitter.com',
	path:'/1.1/statues/filter.json?track=bieber',
	method:'GET',
	headers:{
		"Authorization":"Basic" + new Buffer("username:password").toString("base64")
	}
};
var request = https.request(options,function(response){
	var body = "";
	response.on("data",function(chunk){
		var tweet = JASON.parse(chunk);
		console.log("tweet : "+tweet.text);
	});
	response.on("end",function(){
		console.log("Disconnected");
	});
});