var client = {};
var List = require('jscollection').List;
var pidusage = require('pidusage');
var os = require('os-utils');

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

client.getCPU = function (pid, cb) {
  var cmd = "TERM=xterm top -b -n 1 -p " + pid + " -n1 | awk '/ " + pid + " /{print $9}'";
  require('child_process').exec(cmd, function (error, stdout, stderr) {
    if (error || stdout === '') {
      return cb(null, 0);
    }

    cb(null, Number(stdout.trim()));
  });
}

client.getDiskSize = function (cb) {
  var cmd = 'TERM=xterm df -k -m |tail -n+1 | awk \'{n+=1} {t+=$2} {u+=$3} {f+=$4} {print "["t","u","f"]"}\' | tail -1';
  require('child_process').exec(cmd, function (error, stdout, stderr) {
    if (error || stdout === '') {
      return cb(null, [0, 0, 0]);
    }
    let df = JSON.parse(stdout.trim());

    cb(null, df[0], df[1], df[2]);
  });
}

client.getSysStats = function (cb) {
  os.cpuUsage(function (cpu) {
    client.getDiskSize(function (err, total, used, free) {
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
        cpu: cpu * 100,
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

module.exports = client;