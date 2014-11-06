app = module.parent.exports.app;

// controllers 
var homeController	= require('./controllers/home');

app.get('/', homeController.index);
app.get('/hello', homeController.hello);