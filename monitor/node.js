/**
 * Created by somnath on 11/16/17.
 */

(function () {
  'use strict';

  const WebSocket = require('ws');

  var Node = function (config) {
    this._nodeConfig = config;
    this._start(config);
  };

  Node.prototype._start = function (config) {
    var self = this;
    var ws = new WebSocket('ws://' + config.host + ':' + config.ws_port);
    this._ws = ws;

    ws.on('open', function open() {
      self.sendCMD('SET_CONFIG', self._nodeConfig);
    });

    ws.on('message', function incoming(data) {
      console.log(data);
      data = JSON.parse(data);
      switch (data.status) {
        case 'SET_CONFIG_OK':
          self.sendCMD('START_STATS');
          break;
        case 'START_STATS_OK':
          break;
        case 'STATS_DATA':
          break;
        case 'STOP_STATS_OK':
          break;
      }
    });
  };

  Node.prototype.sendCMD = function (cmd, msg) {
    if (this._ws) {
      this._ws.send(JSON.stringify({cmd: cmd, payload: msg || ''}), function ack(err) {
        if (err) console.error(err);
      });
    }
  };

  module.exports = Node;
})();
