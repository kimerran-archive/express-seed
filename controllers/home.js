exports.index = function(req,res) {
	res.render('home/index', {
		title: 'Welcome to my express seed',
		message: 'Oh! Welcome there!'
	});
}

exports.hello = function (req,res) {
	res.send('Just saying hello!');
}