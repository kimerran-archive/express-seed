app 		= module.parent.exports.app;
express		= module.parent.exports.express;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));