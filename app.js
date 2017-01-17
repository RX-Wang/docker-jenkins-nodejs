var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	console.log('\n',1);
	res.end('Hello Docker!测试初始化PM2时，也就是初始没有pm2进程，然后进行pm2 stop会不会报错！');
}).listen(9001);
