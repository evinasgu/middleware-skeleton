var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var graphQLHttpHandler = require("express-graphql");
var cors = require('cors');
var schema = require("./graphql_schemas/schema");
var { productRoot } = require("./resolvers/product_resolver"); 
var { getClientRoot } = require("./resolvers/client_resolver");
const MongoHandler = require("./data/db");

const config = require("./config.js");
const environment = config.getEnvironment(process.env.MIDDLEWARE_ENVIRONMENT)
const port = config.serverProperties[environment].port;

var app = express();

var db;

async function main() {
  db = await new MongoHandler();
  var root = { ...productRoot, ...getClientRoot(db) };

  app.use(
    "/graphql",
    graphQLHttpHandler({
      schema: schema,
      rootValue: root,
      graphiql: true
    })
  );

  app.listen(port);
  
}
main();


app.use(cors());

app.use(logger('dev'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.set('view engine', 'jade');

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
