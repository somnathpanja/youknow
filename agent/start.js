process.CONFIG = require('./conf.json');
process.name = process.title = 'youknow-worker';

var async = require('async');
var ip = require("ip");
var request = require('./lib/request');
var OS = require('./lib/os');
var Process = require('./lib/process');

class Worker {
  constructor() {
    process.IP = ip.address();
  }

  start() {
    var self = this;

    this._loadConfig().then(() => {
      return self._startPushData();
    }).catch((err) => {
      console.log('> filed to load config from monitor. ', err.message);
      console.log('> will try in 5 seconds.');

      setTimeout(() => { process.nextTick(() => self.start()); }, 5000);
    });
  }

  /**
   * @description Load the config from monitor server
   */
  _loadConfig() {
    return request.get(`/worker/${process.IP}/${process.CONFIG.unique_id}/config`).then((conf) => {
      return Object.assign(process.CONFIG, conf);
    });
  }

  /**
   * @description start pushing data to monitor server
   */
  _startPushData() {
    setInterval(() => {
      var timestamp = new Date();

      Promise.all([OS.getData(), Process.getData()], function ([osStats, processStats]) {
        osStats.timestamp = timestamp;
        processStats.timestamp = timestamp;
        request.post(`/worker/${process.IP}/${process.CONFIG.unique_id}/push/os`, osData)
          .then(request.post(`/worker/${process.IP}/${process.CONFIG.unique_id}/push/process`, osData)).then(() => {
            console.log('> data pushed @ ', new Date(timestamp));
          }).catch(err => {
            console.log('> failed to push data! \n', err.message);
          });
      });
    });
  }
}

let worker = new Worker();
worker.start();