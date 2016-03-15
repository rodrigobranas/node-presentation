var http = require('http');
var fs = require('fs');

var toBase64 = function (data) {
	return 'data:image/jpg;base64,' + data.toString('base64');
};

var server = http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});
	var dir = 'photos/';
	fs.readFile(dir + '1.jpg', function (err, data1) {
		fs.readFile(dir + '2.jpg', function (err, data2) {
			fs.readFile(dir + '3.jpg', function (err, data3) {
				fs.readFile(dir + '4.jpg', function (err, data4) {
					fs.readFile(dir + '5.jpg', function (err, data5) {
						fs.readFile(dir + '6.jpg', function (err, data6) {
							var body = JSON.stringify({
								data1: toBase64(data1),
								data2: toBase64(data2),
								data3: toBase64(data3),
								data4: toBase64(data4),
								data5: toBase64(data5),
								data6: toBase64(data6)
							});
							res.write(body);
							res.end();
						});
					});
				});
			});
		});
	});		
});

server.listen(3000);