var express = require('express');
var app 	= express();
var port 	= 8888;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));

app.get('/', function(req,res){
	res.render('home/index', {
		title: 'Welcome to my express seed',
		message: 'Oh! Welcome there!'
	});
});

app.listen(port,function () {
	console.log('Listening on HTTP port ' + port);
});