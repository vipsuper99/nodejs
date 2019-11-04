var express = require('express');
var bodyParser = require('body-parser'); //bodyparser
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');

var authMiddleware = require('./middlewares/auth.Middleware');
var port = 3000;//express

var  app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');//pug
app.set('views', './views');//folder view
app.use(cookieParser());

app.use(express.static('public'));

app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);


app.listen(port, ()=> {
    console.log('server listening on port' + port);
});