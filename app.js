var express = require('express');
var app 	= express();
var port 	= 8889;

module.exports.app 		= app;
module.exports.express 	= express;

routes = require('./routes');
config = require('./config');

app.listen(port, function () {
	console.log('Listening on HTTP port ' + port);
});
