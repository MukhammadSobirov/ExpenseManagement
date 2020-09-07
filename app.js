var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
dotenv.config();
app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


//MongoDB Connection
mongoose.connect(
  'mongodb://localhost/expensesData', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('connect to db')
);
app.listen(port, () => console.log('Server is start'));


module.exports = app;