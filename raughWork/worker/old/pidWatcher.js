/**
 * Created by somnath on 11/9/17.
 */

(function () {
  'use strict';

  var async = require('async'),
    List = require('jscollection').List,
    pusage = require('pidusage'),
    os = require('os-utils');

  var PidWatcher = function () {
    this._config;
    this._processNames;
    this._intervalInMS;
    this.onData;
    this._mongo = {};
  };

  PidWatcher.prototype.setConfig = function (processConf) {
    var self = this;
    this._config = processConf;

    if (processConf["mongod"] && processConf["mongod"].db) {
      processConf["mongod"].db.forEach(function (dbName) {
        self._initMongoDB(dbName);
      });
    }
  };

  PidWatcher.prototype.setProcessNames2Watch = function (processNames) {
    this._processNames = new List(processNames);
  };

  PidWatcher.prototype.setWatchInterval = function (intervalInMs) {
    this._intervalInMS = intervalInMs;
  };

  /**
   * @description Get the selective process by process pid & process name and
   * @param processNames
   * @param cb
   */
  PidWatcher.prototype.getProcesses = function (processNames, cb) {
    //var command = 'pgrep -l Cns\\|mongo\\|postgres\\|rabbit | sort -k 2 -r';
    var command = 'pgrep -l ' + processNames.join('\\|') + ' | sort -k 2 -r';
    require('child_process').exec(command, function (error, stdout, stderr) {
      if (error || stdout === '') {
        return cb(null, new List());
      }

      var lines = stdout.split("\n");
      var list = new List();
      for (var l = 0; l <= lines.length; l++) {
        var line = lines[l] ? lines[l].split(' ') : '';
        if (line.length >= 1) list.add({pid: Number(line[0]), name: line[1]});
      }

      cb(null, list);
    });
  };

  PidWatcher.prototype.startWatch = function () {
    var self = this;

    if (!this._processNames) {
      console.error('Please push config before starting watch');
      return;
    }

    self._watchStarted = true;
    var ts = Date.now();
    self.getProcesses(this._processNames, function (err, process) {
      // process.printInConsoleAsTable();
      process.eachAsync(function (ps, idx, next) {
        pusage.stat(ps.pid, {advanced: true}, function (err, stat) {
          if (err) {
            console.log(err);
            next();
            return;
          }

          if (!self._watchStarted) {
            next();
            return;
          }

          ps.ts = ts; //
          ps.start = stat.start; // - `start` time process was started
          ps.cpu_per = stat.cpu; // - `cpu` cpu percent
          ps.memoryBytes = stat.memory;  // - `memory` memory bytes
          // ps.time = stat.time; // - `time` user + system time

          if (ps.name === 'mongod') {
            self._getMongoDbStats(function (stats) {
              ps.dbStats = stats;
              self.onData(ps);
              next();
            });
          } else {
            self.onData(ps);
            next();
          }
        });
      }, function done() {
        os.cpuUsage(function (cpu) {
          if (!self._watchStarted) {
            return;
          }

          self.onData({
            name: 'system',
            ts: ts,
            platform: os.platform(),
            cpuCount: os.cpuCount(),
            cpu: Number(cpu).toFixed(4),
            freemem: os.freemem(),
            totalmem: os.totalmem(),
            freememPercentage: os.freememPercentage(),
            sysUptime: os.sysUptime(),
            processUptime: os.processUptime(),
            loadavg1: os.loadavg(1),
            loadavg5: os.loadavg(5),
            loadavg15: os.loadavg(15)
          });
        });

        if (self._watchStarted) {
          setTimeout(function () {
            self.startWatch();
          }, self._intervalInMS);
        }
      });
    });
  };

  PidWatcher.prototype.stopWatch = function () {
    this._watchStarted = false;
  };

  PidWatcher.prototype._getMongoDbStats = function (cb) {
    var self = this,
      stats = {};
    async.forEachOf(self._mongo, function (db, dbName, callback) {
      self._mongo[dbName].command(self._config['mongod'].commands, function (err, results) {
        if (err) {
          callback();
          stats[dbName] = {err: err};
          return;
        }

        stats[dbName] = results;
        callback();
      });
    }, function (err) {
      if (err) console.error(err.message);
      // configs is now a map of JSON data
      cb(stats);
    });
  };

  PidWatcher.prototype._initMongoDB = function (dbName) {
    var self = this;
    var MongoClient = require('mongodb').MongoClient;

    // Initialize connection once
    MongoClient.connect("mongodb://localhost:27017/" + dbName, {
      reconnectInterval: 5000,
      reconnectTries: 900000,
      bufferMaxEntries: 0
    }, function (err, database) {
      if (err) {
        console.error('MongoDb', dbName, 'Failed to initialized.', err);
        return;
      }

      self._mongo[dbName] = database;
      console.log('MongoDb', dbName, ' Initialized.');
    });
  };

  module.exports = new PidWatcher();
  // setTimeout(function () {
  //   new PidWatcher().getProcesses([],function (err, process) {
  //     process.printInConsoleAsTable();
  //   });
  // }, 1000);
})();
