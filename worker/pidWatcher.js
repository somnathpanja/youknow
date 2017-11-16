/**
 * Created by somnath on 11/9/17.
 */

(function () {
  'use strict';

  var List = require('jscollection').List,
    pusage = require('pidusage'),
    os = require('os-utils');

  var PidWatcher = function () {
    this._processNames;
    this._intervalInMS;
    this.onData;
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
          self.onData(ps);
          next();
        });
      }, function done() {
        os.cpuUsage(function (cpu) {
          if (!self._watchStarted) {
            return;
          }

          self.onData({
            cpu: Number(cpu).toFixed(4),
            platform: os.platform(),
            cpuCount: os.cpuCount(),
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

  module.exports = new PidWatcher();
  // setTimeout(function () {
  //   new PidWatcher().getProcesses([],function (err, process) {
  //     process.printInConsoleAsTable();
  //   });
  // }, 1000);
})();
