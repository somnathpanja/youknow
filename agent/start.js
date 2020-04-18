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

    setInterval(() => { process.nextTick(() => self._loadConfig()); }, process.CONFIG.conf_refresh_interval_ms);
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
    var self = this;
    var timestamp = new Date();

    Promise.all([OS.getData(), Process.getData(process.CONFIG.watch_process)]).then(function ([osStats, processStats]) {
      osStats.timestamp = timestamp;
      processStats.timestamp = timestamp;
      request.post(`/worker/${process.IP}/${process.CONFIG.unique_id}/push/os`, osStats)
        .then(request.post(`/worker/${process.IP}/${process.CONFIG.unique_id}/push/process`, processStats)).then(() => {
          console.log('> data pushed @ ', new Date(timestamp));
          setTimeout(() => { process.nextTick(() => self._startPushData()); }, process.CONFIG.stats_interval_ms);
        }).catch(err => {
          console.log('> failed to push data! \n', err.message);
          setTimeout(() => { process.nextTick(() => self._startPushData()); }, process.CONFIG.stats_interval_ms);
        });
    });
  }
}

let worker = new Worker();
worker.start();

process.on('unhandledRejection', (reason, p) => {
  console.error(reason, 'Unhandled Rejection at Promise', p);
}).on('uncaughtException', err => {
  console.error(err, 'Uncaught Exception thrown');
  process.exit(1);
});