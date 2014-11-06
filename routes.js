app = module.parent.exports.app;

// controllers 
var homeController	= require('./controllers/home');

app.get('/', homeController.index);