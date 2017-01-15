var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	console.log('\n',1);
	res.end('Hello Docker!');
}).listen(3000);
