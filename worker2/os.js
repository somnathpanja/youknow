var os = require('os-utils');
var async = require('async');
const Base = require('base');

class OS extends Base {
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

  _getDiskSize(cb) {
    var cmd = 'TERM=xterm df -k -m |tail -n+1 | awk \'{n+=1} {t+=$2} {u+=$3} {f+=$4} {print "["t","u","f"]"}\' | tail -1';
    require('child_process').exec(cmd, function (error, stdout, stderr) {
      if (error || stdout === '') {
        return cb(null, [0, 0, 0]);
      }
      let df = JSON.parse(stdout.trim());

      cb(null, df[0], df[1], df[2]);
    });
  }
}

module.exports = OS;