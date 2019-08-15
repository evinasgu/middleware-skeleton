const assert = require("assert");
const client = require("mongodb").MongoClient;
const config = require("../config");

let _db;

function initDB(callback) {
  if (_db) {
    console.warn("Initializing the database again...");
    return callback(null, _db);
  }

  function connected(err, db) {
    if(err) {
      return callback(err);
    }
    console.log("Connected to: " + config.mongoProperties.local.connectionString);
    _db = db;
    return callback(null, _db);
  }

  return client.connect(config.mongoProperties.local.connectionString,
		 config.mongoProperties.local.options,
		 connected);  
}

function getDB() {
  assert.ok(_db, "Database is not initialized yet. Please init the connection first");
  return _db;
}

module.exports = {
  getDB,
  initDB
};
