var express = require('express');
var fs = require('fs');
var app = express();

var palestras = require('./data').palestras;

app.use('/', express.static('client/'));

app.get('/palestras', function (req, res) {
	var _palestras = palestras.map(function (palestra) {
		return {id: palestra.id, titulo: palestra.titulo};
	});
	res.json(_palestras);
});

app.get('/palestras/:id', function (req, res) {
	var id = req.params.id;

	var found = palestras.some(function (palestra) {
		return palestra.id == id;
	});

	if (!found) {
		res.status(404).send();
		return;
	}

	fs.readFile('photos/' + id + '.jpg', function (err, data) {
		var foto = 'data:image/jpg;base64,' + data.toString('base64');
		var palestra = palestras.filter(function (palestra) {
			return palestra.id == id;
		})[0];
		palestra.palestrante.foto = foto;
		res.json(palestra);
	});
});

app.listen(3000);