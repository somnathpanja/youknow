
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
      app : 'os',
      cpu_percent: 0,
      platform: os.platform(),
      cpu_count: os.cpuCount(),
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
          self._stats.mem_used_mb = self._stats.mem_total_mb - self._stats.mem_free_mb;
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
  top(pid, grep) {
    return new Promise((accept, reject) => {
      if (pid !== null) pid = pid && Array.isArray(pid) ? pid : [pid];

      var cmd = `top -b -n 1 ` + (pid ? `-p ${pid.join()}` : '') +
        ` -n1 | awk '$1 ~ /^[[:digit:]]/ {print "{\\"pid\\": " $1 ", \\"mem_virt\\": " $5 ", \\"mem_res\\": " $6 ", \\"cpu_percent\\": " $9 ", \\"mem_used_percent\\": " $10 ", \\"app\\": \\"" $12 "\\"}" }'` +
        (grep ? ` | grep '${grep}' ` : '');

      require('child_process').exec(cmd, function (error, stdout, stderr) {
        if (error || stdout === '') {
          return reject(null, []);
        }

        var data = stdout.split("\n").filter(e => { return !!e; }).map(element => {
          let k = JSON.parse(element);;
          return k;
        });

        accept(data);
      });
    });
  }

  /**
   * @description returns all process names
   */
  processNames() {
    return this.top().then((process) => {
      Promise.accept(process.map(p => p.cmd));
    })
  }

  /**
  * @description returns all process names
  */
  usageByNames(pNames) {
    var self = this;
    return new Promise((accept, reject) => {
      self.top(null, pNames.join('\\|')).then((process) => {
        let pids = process.map(p => p.pid);

        // => {
        //   cpu: 10.0,            // percentage (from 0 to 100*vcore)
        //   memory: 357306368,    // bytes
        //   ppid: 312,            // PPID
        //   pid: 727,             // PID
        //   ctime: 867000,        // ms user + system time
        //   elapsed: 6650000,     // ms since the start of the process
        //   timestamp: 864000000  // ms since epoch
        // }
        pidusage(pids).then(stats => {
          for (let idx in process) {
            Object.assign(stats[process[idx].pid], process[idx]);
            stats[process[idx].pid].mem_used_mb = stats[process[idx].pid].memory / 1048576;
            delete stats[process[idx].pid].memory;

            stats[process[idx].pid].uptime_sec = stats[process[idx].pid].elapsed;
            delete stats[process[idx].pid].elapsed;

            stats[process[idx].pid].cpu_percent2 = stats[process[idx].pid].cpu;
            delete stats[process[idx].pid].cpu;
          }

          accept(stats);
        }).catch(err => {
          reject(err);
        });
      }).catch(err => {
        reject(err);
      });
    });
  }
}

process._os = new OS();
module.exports = process._os;