const express = require('express');
const CONF = require('./conf');
const app = express();
var List = require('jscollection').List;
var PROCESS = require('./process');
var os = require('os-utils');

require('http').globalAgent.maxSockets = 2;

var multiProcess = 'sum';
process.name = process.title = 'youknow-worker';

app.get('/', (req, res) => res.send('ok'));

function collectStats(req, res) {
  var retVal = {
    ts: Date.now()
  };

  var pConf = JSON.parse(req.query.process);
  var processNames = Object.keys(pConf);
  processNames.unshift('SYS');

  PROCESS.getProcesses(processNames, function (err, process) {

    if (multiProcess === 'sum') {
      var pGroup = process.groupBy('name');
      pGroup.eachAsync(function (group, gId, nextProcessGroup) {
        var pName = group.key;
        var processData = new List();
        var lastStats;
        var finalStats = {};

        group.value.eachAsync(function (pro, idx, nextProcess) {
          PROCESS.getStats(pro.pid, function (err, stats) {
            processData.add(stats);
            lastStats = stats;
            nextProcess();
          });
        }, function onDone(err) {
          // console.log(err);
          Object.keys(lastStats).forEach(function (field) {
            finalStats[field] = processData.sum(field);
          });
          retVal[pName] = finalStats;
          nextProcessGroup();
        });

      }, function onDone() {
        PROCESS.getSysStats(function (sysStats) {
          retVal['SYS'] = sysStats;
          res.send(retVal);
          //console.log('\n\nFINAL', retVal);
        });
      });
    } else {
      process.eachAsync(function (process, id, next) {
        PROCESS.getStats(process.pid, function (err, stats) {
          retVal[process.name] = stats;
          next();
        });
      }, function onDone() {
        PROCESS.getSysStats(function (sysStats) {
          retVal['SYS'] = sysStats;
          res.send(retVal);
          // console.log('\n\nFINAL', retVal);
        });
      });
    }
  });
  global.gc();
}

collectStats({query: {process: JSON.stringify({"chrome": {}, "youknow-worker": {}})}}, {send: function () {}});
app.get('/process/stats', collectStats);
app.listen(CONF.http_port, () => console.log('Example app listening on port ' + CONF.http_port));
