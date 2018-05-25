var process = {};
var List = require('jscollection').List;
var pusage = require('pidusage');
var os = require('os-utils');

/**
 * @description Get the selective process by process pid & process name and
 * @param processNames
 * @param cb
 */
process.getProcesses = function (processNames, cb) {
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

    setTimeout(function () {
      cb(null, list);
    }, 1000);
  });
};

process.getStats = function (pid, cb) {
  var retVal = {};
  pusage(pid, function (err, stat) {
    if (err) {
      console.log(err);
      cb(err);
      return;
    }
    retVal.pid = pid;
    retVal.start = stat.timestamp; // - `start` time process was started
    retVal.cpu = stat.cpu; // - `cpu` cpu percent
    retVal.memoryMB = stat.memory/1048576;  // - `memory` memory bytes
    cb(err, retVal);
  });
};

process.getSysStats = function (cb) {
  os.cpuUsage(function (cpu) {
    os.harddrive(function (total, free, used) {
      cb({
        name: 'SYS',
        ts: Date.now(),
        platform: os.platform(),
        cpuCount: os.cpuCount(),
        sysUptime: os.sysUptime(),
        processUptime: os.processUptime(),
        freememPercentage: os.freememPercentage(),
        loadavg1: os.loadavg(1),
        loadavg5: os.loadavg(5),
        loadavg15: os.loadavg(15),
        cpu: 1 - cpu,
        memoryMB: os.totalmem() - os.freemem(),
        totalMemoryMB: os.totalmem(),
        hardDrive: {
          total: total,
          free: free,
          used: used
        }
      });
    });
  });
};

module.exports = process;