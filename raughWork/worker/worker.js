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
        var lastStats = {};
        var finalStats = {};

        group.value.eachAsync(function (pro, idx, nextProcess) {
          PROCESS.getStats(pro.pid, function (err, stats) {
            if(stats) {
              processData.add(stats);
              lastStats = stats;
            }
            nextProcess();
          });
        }, function onDone(err) {
          // console.log(err);
          Object.keys(lastStats).forEach(function (field) {
            try{
              finalStats[field] = processData.sum(field);
            } catch(e){
              console.log('processData:');
              processData.printInConsole();
            }
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
      process.eachAsync(function (aProcess, id, next) {
        PROCESS.getStats(aProcess.pid, function (err, stats) {
          retVal[aProcess.name] = stats;
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

  if(global.gc) global.gc();
}

app.get('/process/stats', collectStats);
app.listen(CONF.http_port, () => console.log('Example app listening on port ' + CONF.http_port));

// TEST
//collectStats({query: {process: JSON.stringify({"chrome": {}, "youknow-worker": {}})}}, {send: function () {}});
