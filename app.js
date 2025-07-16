var express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const artisanRouter = require('./routes/artisan');
const mongodb = require('./db/mongo');

mongodb.initClientDbConnection();

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(cors({
    exposerHeaders: ['Authorisation'],
    origin: '*' 
}));

app.get('/', (req, res) => {
    res.render('login');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.get('/users-page', (req, res) => {
    res.render('user');
});

app.get('/artisans-page', (req, res) => {
    res.render('artisan');
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/artisans', artisanRouter);


app.use(function(req, res, next) {
    res.status(404).json({name: 'API', version: '1.0', status: '404', message: 'not_found'})
});

module.exports = app;