var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());




app.set('views', path.join(__dirname, './public'));


app.use(express.static(path.join(__dirname, './public')));

app.use('/products', productRouter);

app.use('*',indexRouter);

// app.get('/',(req,res,next) => {
//     res.redirect("e-commerce");
// });

//
//
// app.get('/e-commerce/product/*(?<!(css|js|map|woff|ttf))$',(req,res) => {
//   res.sendFile(path.join(__dirname, './public','index.html'));
// });
//
// app.get('/e-commerce/product/:filename$',(req,res) => {
//     res.sendFile(path.join(__dirname, './public',req.params.filename));
// })





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
  res.send(err.message);
});

module.exports = app;
