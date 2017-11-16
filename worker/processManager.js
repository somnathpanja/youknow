/**
 * Created by somnath on 11/9/17.
 */

(function () {
  'use strict';
  var async = require('async'),
    PidWatcher = require('./pidWatcher');

  var ProcessManager = function () {
    var self = this;
    this._dataInterval = 30;
    this._isConfigSet = false;

    PidWatcher.onData = function (data) {
      self.sendResponse('STATS_DATA', data, function ack(err) {
        if(err){
          console.error(err);
          console.log('Stopping watch fourcefully, will start once we receive stats req again');
          PidWatcher.stopWatch(); // Will start watch once we receive stats req again
        }
      });
    };
  };

  ProcessManager.prototype.attachWebSock = function (ws) {
    var self = this;
    self._ws = ws;
    ws.on('message', function incoming(message) {
      self._onIncomingMessage(JSON.parse(message));
    });
  };

  ProcessManager.prototype._onIncomingMessage = function (message) {
    var self = this;
    switch (message.cmd) {
      case 'SET_CONFIG':
        this.setConfig(message.payload);
        self.sendResponse('SET_CONFIG_OK');
        break;
      case 'START_STATS':
        PidWatcher.startWatch();
        self.sendResponse('START_STATS_OK');
        break;
      case 'STOP_STATS':
        PidWatcher.stopWatch();
        self.sendResponse('STOP_STATS_OK');
        break;
    }
  };

  ProcessManager.prototype.sendResponse = function (status, msg, cb) {
    if (this._ws) {
      this._ws.send(JSON.stringify({status: status, msg: msg || ''}), function ack(err) {
        if(cb) cb(err);
      });
    }
  };

  ProcessManager.prototype.detachWebSock = function () {
    // this._ws.removeAllListeners('error');
    // this._ws.removeAllListeners('open');
    // this._ws.removeAllListeners('connected');
    // this._ws.removeAllListeners('disconnected');
    this._ws = null;
  };

  ProcessManager.prototype.setConfig = function (config) {
    var self = this;
    self._dataInterval = config.dataInterval || self._dataInterval;

    PidWatcher.setProcessNames2Watch(config.process);
    PidWatcher.setWatchInterval(self._dataInterval);
    self._isConfigSet = true;
  };

  module.exports = new ProcessManager();
})();
