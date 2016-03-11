var fs = require("fs");
console.log("Starting");
fs.readFile("sample.txt",function(error,data){
	console.log("Contents:"+data);
});
console.log("done");
fs.watchFile("sample.txt",function(current,previous){
	console.log("\nchanged\n");
	console.log(current);
});