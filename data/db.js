const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const config = require('../config');

const environment = config.getEnvironment(process.env.MIDDLEWARE_ENVIRONMENT);
const mongoUri = config.mongoProperties[environment].connectionString;
const dbName = config.mongoProperties[environment].dbName;
const options = config.mongoProperties[environment].options;

function MongoHandler() {
  var _this = this;
  _this.mongoClient = new MongoClient(mongoUri, options);

  return new Promise(function(resolve, reject) {
    _this.mongoClient.connect(function(err, client) {
      assert.equal(err, null);
      console.log("Mongo client succesfully connected \n");
      _this.dbConnection = _this.mongoClient.db(dbName);
      resolve(_this);
    });
  });
}

MongoHandler.prototype.readCollection = function(collectionName) {
  return this.dbConnection.collection(collectionName).find();
}

MongoHandler.prototype.insertDocument = function(collectionName, document, callback) {
  var _this = this;
  this.dbConnection.collection(collectionName).insertOne(document, function(err, result) {
    assert.equal(null, err);
    console.log("Document inserted succesfully!");
    callback();
  });
}

MongoHandler.prototype.updateDocument = function(collectionName, document, targetDocument, callback) {
  var _this = this;
  this.dbConnection.collection(collectionName).updateMany(document, targetDocument, function(err, result) {
    assert.equal(null, err);
    console.log(result.result.ok + " document updated succesfully!");
    callback();
  });
}

MongoHandler.prototype.deleteDocument = function(collectionName, document, callback) {
  this.dbConnection.collection(collectionName).deleteOne(document, function(err, result) {
    assert.equal(null, err);
    console.log(result.result.ok + " document deleted succesfully");
    callback();
  });
}

module.exports = MongoHandler;
