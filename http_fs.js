var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});
	fs.readFile('photos/1.jpg', function (err, data) {
		var photo = data.toString('base64');
		var body = JSON.stringify({
			data: 'data:image/jpg;base64,' + photo
		});
		res.write(body);
		res.end();
	});
});

server.listen(3000);