var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users/users');
var localeRouter = require('./routes/locale/locale');
var countryRouter = require('./routes/country/country');

var app = express();

app.all('*', function(req, res, next) {
  console.log("Query: ", JSON.stringify(req.query, replacer) + ", Body: ", JSON.stringify(req.body, replacer)); 
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, PATCH, DELETE');
  res.setHeader("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Max-Age', '3600'); 
  res.setHeader('Access-Control-Expose-Headers', 'x-access-token, x-idp-token, closeOtherSession');
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/locale', localeRouter);
app.use('/rest/v2',countryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var server = app.listen(8000, function () {
  console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});

function replacer(key, value) {
  if (typeof value === "string") {
      if (value.length <= 40) {
      return value;
      } else {
      return value.substr(0, 40) + " ... (length=" + value.length + ")";
      }
  }
  return value;
}

module.exports = app;
