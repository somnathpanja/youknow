
if (process._os) {
  module.exports = process._os;
  return;
}

var os = require('os-utils');
var async = require('async');
var pidusage = require('pidusage');

class OS {
  constructor() {
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

  getData() {
    let self = this;
    return new Promise((accept, reject) => {
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
        }], function (err) {
          if (err) return reject(err);
          accept(self._stats);
        });
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

  /**
   * 
   * @param {Array | Number} pid 
   * @param {*} cb 
   * @return Promise
   * [{pid: 1916, virt: 8404972, res: 6.013g, cpu: 113.3, mem: 38.4, cmd: "mongod"}
      {pid: 11149, virt: 1301820, res: 111244, cpu: 0.0, mem: 0.7, cmd: "CnsWebServer"}]
   */
  static top(pid, grep) {
    return new Promise(accept, reject => {
      pid = pid && Array.isArray(pid) ? pid : [pid];

      var cmd = `top -b -n 1 ` + (pid ? `-p ${pid.join()}` : '') +
        ` -n1 | awk '$1 ~ /^[[:digit:]]/ {print "{pid: " $1 ", virt: " $5 ", res: " $6 ", cpu: " $9 ", mem: " $10 ", cmd: \"" $12 "\"}" }'` +
        (grep ? ` | grep ${grep} ` : '');

      require('child_process').exec(cmd, function (error, stdout, stderr) {
        if (error || stdout === '') {
          return reject(null, []);
        }

        var data = stdout.split("\n").map(element => {
          return JSON.parse(element);
        });;

        accept(data);
      });
    });
  }

  /**
   * @description returns all process names
   */
  static processNames() {
    return this.top().then((process) => {
      Promise.accept(process.map(p => p.cmd));
    })
  }

  /**
  * @description returns all process names
  */
  static usageByNames(pNames) {
    return new Promise(accept, reject => {
      return this.top(null, pNames.join('\\|')).then((process) => {
        let pids = process.map(p => p.pid);

        pidusage(pids).then(stats => {
          for (let idx in process) {
            Object.assign(stats[process[idx].pid], process[idx]);
          }

          accept(stats);
        }).catch(err => {
          reject(err);
        });
      });
    });
  }
}

process._os = new OS();
module.exports = process._os;