const express = require('express');
const CONF = require('./conf');
const app = express();
var PROCESS = require('./process');
var os = require('os-utils');

app.get('/process/stats', function (req, res) {

  var retVal = {
    ts: Date.now()
  };

  var pConf = JSON.parse(req.query.process);
  var processNames = Object.keys(pConf);
  processNames.unshift('SYS');

  PROCESS.getProcesses(processNames, function (err, process) {
    process.eachAsync(function (process, id, next) {
      PROCESS.getStats(process.pid, function (err, stats) {
        retVal[process.name] = stats;
        next();
      });
    }, function () {
      PROCESS.getSysStats(function (sysStats) {
        retVal['SYS'] = sysStats;
        res.send(retVal);
        console.log('data sent');
      });
    });
  });
});

app.listen(CONF.http_port, () => console.log('Example app listening on port ' + CONF.http_port));
