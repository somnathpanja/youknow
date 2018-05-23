
(function () {
  'use strict';

  var Readable = require('stream').Readable;
  var util = require('util');

  /**
   * @description Worker Stream
   * @param writableStream
   * @param headers
   * @constructor
   */
  var WStream = function (writableStream) {
    Readable.call(this);
    this.pipe(writableStream);
  };

  util.inherits(WStream, Readable);

  WStream.prototype._read = function () {
  };

  WStream.prototype.send = function (rowData, cb) {
    var self = this;

    process.nextTick(function () {
      if (!self._end) {
        self.push(rowData);
      }
      cb && cb();
    });
  };

  WStream.prototype.end = function () {
    var self = this;
    setTimeout(function () {
      if(!self._end){
        self.push(null);
        self._end = true;
      }
    }, 100);
  };

  module.exports = WStream;
})();