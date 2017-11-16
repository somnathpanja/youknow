/**
 * Created by somnath on 11/16/17.
 */

(function () {
  'use strict';

  const WebSocket = require('ws');
  var db;

  var Node = function (config) {
    var self = this;
    self._nodeConfig = config;
    self.initMongoDB(function (err) {
      self._start(config);
    })
  };

  Node.prototype._start = function (config) {
    var self = this;
    var ws = new WebSocket('ws://' + config.host + ':' + config.ws_port);
    this._ws = ws;

    ws.on('open', function open() {
      self.sendCMD('SET_CONFIG', self._nodeConfig);
    });

    ws.on('message', function incoming(data) {
      console.log(data);
      data = JSON.parse(data);
      switch (data.status) {
        case 'SET_CONFIG_OK':
          setTimeout(function(){
            self.sendCMD('START_STATS');
          }, 2000);
          break;
        case 'START_STATS_OK':
          break;
        case 'STATS_DATA':
          self._insertInMongoDb(data.msg);
          break;
        case 'STOP_STATS_OK':
          break;
      }
    });
  };

  Node.prototype.sendCMD = function (cmd, msg) {
    if (this._ws) {
      this._ws.send(JSON.stringify({cmd: cmd, payload: msg || ''}), function ack(err) {
        if (err) console.error(err);
      });
    }
  };

  Node.prototype._insertInMongoDb = function (appStat) {

    var collection = db.collection(appStat.name);

    collection.createIndex({name: 1, ts: 1, pid: 1}, {
      unique: true,
      expireAfterSeconds: 2 * 24 * 3600 // Delete after 2 days
    });

    collection.insertOne(appStat, function (err, result) {
      if (err) console.error(err);
    });
  };

  Node.prototype.initMongoDB = function (cb) {
    var MongoClient = require('mongodb').MongoClient;

    // Initialize connection once
    MongoClient.connect("mongodb://localhost:27017/server_stats", {
      reconnectInterval: 5000,
      reconnectTries: 900000,
      bufferMaxEntries: 0
    }, function (err, database) {
      if (err) throw err;
      db = database;
      cb();
    });
  };

  module.exports = Node;
})();
