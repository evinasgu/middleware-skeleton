const assert = require("assert");
const client = require("mongodb").MongoClient;
const config = require("../config");

let _db;

function initDB(callback) {
    if (_id) {
        console.warn("Initializing the database again...");
        return callback(null, _db);
    }
}

function connected(err, db) {
    if(err) {
        return callback(err);
    }
    console.log("Connected to: " + config.db.mongoConnectionString.split("@")[1]);
    _db = db;
    return callback(null, _db);
}

function getDB() {
    assert.ok(_db, "Database is not initialized yet. Please init the connection first");
    return _db;
}

client.connect(config.db.mongoConnectionString, config.db.connectionOptions, connected);


module.exports = {
    getDB,
    initDB
};