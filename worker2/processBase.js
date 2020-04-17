let child_process = require('child_process');
var pidusage = require('pidusage');
var pidtree = require('pidtree');
const EventEmitter = require('events');

class ProcessBase extends EventEmitter {
  constructor(pid) {
    this.pid = pid;
  }

  static allUsingPS(grep) {
    return new Promise(resolve, reject => {
      let cmd = `ps -eo "fname,ppid,pid,etimes,rss,vsize,%mem,%cpu,cmd" --sort=-%cpu,-%mem | sed '` +
        `s/[\"]/\\&/g` +
        `s/  */,/;s/  */,/;s/  */,/;s/  */,/;s/  */,/;s/  */,/;s/  */,/;s/  */,"/` +
        `s/$/"/'`;

      child_process.exec(cmd, function (error, stdout, stderr) {
        if (error) return reject(error, stderr);
        resolve()
      });
    });
  }

  stats() {
    let self = this;
    return new Promise(resolve, reject => {
      Promise.all([self._name(), self._usage()]).then(function ([stats, name]) {
        stats.name = name;
        return stats;
      }).then(stats => {
        resolve(stats);
      }).catch(err => {
        console.error('ProcessBase=>', err);
        reject(err);
      });
    });
  }

  /**
   * @description get process name of a this process
   */
  _name() {
    return ProcessBase.name(this.pid);
  }

  /**
   * @description get process name of a pid
   * @param {*} pid 
   */
  static name(pid) {
    let pid = Array.isArray(pid) ? pid : [pid];

    return new Promise(resolve, reject => {
      child_process.exec(`ps -p ${pid.join(',')} -o pid= -o comm=`, function (error, pName, stderr) {
        if (error) return reject(error, stderr);

        pName = pName.trim();

        if (pName) { // if empty then pid not found
          resolve(pName);
        } else {
          reject(new Error(`${pid} crashed.`));
        }
      });
    });
  }

  /**
   * @returns {Object}
   *  {
        cpu: 10.0,            // percentage (from 0 to 100*vcore)
        memory: 357306368,    // bytes
        ppid: 312,            // PPID
        pid: 727,             // PID
        ctime: 867000,        // ms user + system time
        elapsed: 6650000,     // ms since the start of the process
        timestamp: 864000000  // ms since epoch
       }
   */
  _usage() {
    let self = this;
    return new Promise((resolve, reject) => {
      pidusage(self.pid, function (err, stats) {
        if (err) return reject(err);
        resolve(stats);
      });
    });
  }

  static getPidTree() {
    // Include PPID in the results
    pidtree(1, { advanced: true }, function (err, pids) {
      // console.log(pids); // // => [{ppid: 1, pid: 530}, {ppid: 1, pid: 42}, ..., {ppid: 1, pid: 41241}]
      if (err) return reject(err);
      pids = new List(pids);
      pids.groupBy('pid');

      resolve()
    });
  }

  /**
   * @description get all pids from system in a array
   * @returns [530, 42, ..., 41241]
   */
  static allPID() {
    return new Promise(accept, reject => {
      pidtree(-1, function (err, pids) {
        if (err) return reject(err);
        accept(pids);
      });
    });
  }
}

module.exports = ProcessBase;