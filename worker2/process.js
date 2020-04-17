var os = require('os-utils');
var async = require('async');
const Base = require('base');

class Process extends Base {
  constructor(url, pullInterval) {
    super(url, pullInterval);

    this._stats = {
      cpu_percent: 0,
      platform: 0,
      cpuCount: 0,
      uptime_sec: 0,

      disk_total: 0,
      disk_used: 0,
      disk_free: 0,

      loadavg1: 0,
      loadavg5: 0,
      loadavg15: 0,

      mem_free_percent: 0,
      mem_total_mb: 0,
      mem_free_mb: 0,
      mem_used_mb: 0
    };
  }

  _pullData() {
    let self = this;

    async.waterfall([
      function (next) {
        os.cpuUsage(function (cpu) {
          self._stats.cpu_percent = cpu * 100;
          next();
        });
      }, function (next) {
        self._getDiskSize(function (err, total, used, free) {
          self._stats.disk_total = total;
          self._stats.disk_used = used;
          self._stats.disk_free = free;
          next();
        });
      }, function (next) {
        self._stats.uptime_sec = os.sysUptime();
        self._stats.loadavg1 = os.loadavg(1);
        self._stats.loadavg5 = os.loadavg(5);
        self._stats.loadavg15 = os.loadavg(15);
        self._stats.mem_free_percent = os.freememPercentage();
        self._stats.mem_total_mb = os.totalmem();
        self._stats.mem_free_mb = os.freemem();
        self._stats.mem_used_mb = self.mem_total_mb - self.mem_free_mb;
        next();
      }], function () {
        self.emit('data', self._stats);
      });
  }

  
/**
 * @description Get the selective process by process pid & process name and
 * @param processNames
 * @param cb
 */
client.getProcesses = function (processNames, cb) {
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
      if (line.length >= 1) list.add({ pid: Number(line[0]), name: line[1] });
    }

    setTimeout(function () {
      cb(null, list);
    }, 1000);
  });
};

client.getStats = function (pid, cb) {
  var retVal = {};
  pusage(pid, function (err, stat) {
    if (err) {
      console.log(err.toString());
      cb(err);
      return;
    }
    retVal.pid = pid;
    retVal.start = stat.timestamp;    // - `start` time process was started
    retVal.cpu = stat.cpu;            // - `cpu` cpu percent
    retVal.memoryMB = stat.memory / 1048576;  // - `memory` memory bytes

    client.getCPU(pid, function (err, cpu) {
      retVal.cpu = cpu;
      cb(err, retVal);
    });
  });
};

getCPU = function (pid, cb) {
  var cmd = "TERM=xterm top -b -n 1 -p " + pid + " -n1 | awk '{print $9}'";
  require('child_process').exec(cmd, function (error, stdout, stderr) {
    if (error || stdout === '') {
      return cb(null, 0);
    }

    cb(null, Number(stdout.trim()));
  });
}
}

module.exports = OS;