var http = require('http');

var server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});
	var body = JSON.stringify({
		photos: ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg']
	});
	res.write(body);
	res.end();
});

server.listen(3000);