var express = require('express');
var app = express();
app.use(express.static('web'));
app.use(express.static('fonts'));
app.listen(2345, function () {
	console.log('listening on 2345');
});

