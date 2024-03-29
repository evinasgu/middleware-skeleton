var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var graphQLHttpHandler = require("express-graphql");
var cors = require('cors');
var schema = require("./graphql_schemas/schema");
var { productRoot } = require("./resolvers/product_resolver"); 
var { clientRoot } = require("./resolvers/client_resolver");

const config = require("./config.js");

// Lets build our Root
var root = { ...productRoot, ...clientRoot };

var app = express();

app.use(cors());
app.use(
  "/graphql",
  graphQLHttpHandler({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.use(logger('dev'));

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

app.listen(4000);
console.log("  PROMART skeleton graphql api is running!!!");

module.exports = app;
