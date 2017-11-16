/**
 * Created by somnath on 11/16/17.
 */

(function () {
  'use strict';
  var CONFIG = require('./conf.json');
  var Node = require('./node');

  var WorkerManager = function () {
  };

  WorkerManager.prototype.start = function () {
    CONFIG.nodes.forEach(function (aNodeConf) {
      var node = new Node(aNodeConf);
    });
  };

  module.exports = new WorkerManager();
})();
