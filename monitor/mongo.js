const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'youknow';
var mongoDb;

var MONGO = {};

MONGO.insert = function (collectionName, data, callback) {
  var collection = mongoDb.collection(collectionName);
  collection.createIndex({ ts: 1 });
  collection.createIndex({ ts: -1 });
  collection.insert(data, callback);
};

MONGO.updateOne = function (collectionName, where, data, callback) {
  var collection = mongoDb.collection(collectionName);
  collection.createIndex({ ts: 1 });
  collection.createIndex({ ts: -1 });
  collection.updateOne(where || {}, data, { upsert: true }, callback);
};

// Read all the data greater than ts
MONGO.read = function (collectionName, ts, callback) {
  var collection = mongoDb.collection(collectionName);
  var findQ;
  if (!ts || ts === 0) {
    findQ = { ts: { $lt: Date.now() } };
  } else {
    findQ = { ts: { $gt: ts } };
  }

  collection.find(findQ).sort({ ts: 1 }).limit(10).toArray(function (err, docs) {
    callback(err, docs);
  });
};

// Read all the data in range
MONGO.readRange = function (collectionName, fromTs, toTs, callback) {
  var collection = mongoDb.collection(collectionName);
  var findQ = { ts: { $gt: fromTs, $lt: toTs } };

  collection.find(findQ).sort({ ts: 1 }).toArray(function (err, docs) {
    callback(err, docs);
  });
};

// Read all the data greater than ts
MONGO.findOne = function (collectionName, find, callback) {
  var collection = mongoDb.collection(collectionName);
  collection.findOne(find || {}, function (err, doc) {
    callback(err, doc);
  });
};

MONGO.connect = function (callback) {
  // Connect using MongoClient
  MongoClient.connect(url, {
    autoReconnect: true,
    keepAlive: true,
    reconnectTries: Number.POSITIVE_INFINITY
  }, function (err, client) {
    // Use the admin database for the operation
    mongoDb = client.db(dbName);

    callback(err);
  });
};

module.exports = MONGO;
