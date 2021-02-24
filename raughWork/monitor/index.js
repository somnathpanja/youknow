const CONF = require('./public/conf.json');
const express = require('express');
const app = express();
var MONITOR = require('./monitor');
var MONGO = require('./mongo');
var List = require('jscollection').List;

app.use(express.static(__dirname + '/public'));

// Get static system data
app.get('/stats/system/static', function (req, res) {
  var ts = Number(req.query.ts);
  var host = req.query.host;

  MONGO.findOne([host, 'static'].join(':'), { host }, function (err, data) {
    res.send(data);
  });
});

app.get('/stats/loadavg', function (req, res) {
  var ts = Number(req.query.ts);
  var host = req.query.host;

  var dataSeries = [];
  var processNames = ['SYS_LOAD_AVG1', 'SYS_LOAD_AVG5', 'SYS_LOAD_AVG15'];

  MONGO.read([host, 'cpu'].join(':'), ts, function (err, data) {
    var rows = new List(data);
    processNames.forEach(function (processName, index) {
      dataSeries[index] = {
        type: 'stackedArea',
        name: processName,
        toolTipContent: "<strong><span style='\"'color: {color};'\"'>{name}:</span></strong> {x} | <strong>{y}</strong>",
        lineThickness: 1,
        showInLegend: true,
        yValueFormatString: "##0.00",
        xValueType: "dateTime",
        dataPoints: rows.select(function (row) {
          return {
            x: parseInt(row.ts),
            y: row[processName]
          };
        }).toArray()
      };
    });

    res.send(dataSeries);
  });
});

app.get('/stats/cpu', function (req, res) {
  getProcessHistoryData(req, res, 'cpu');
});

app.get('/stats/mem', function (req, res) {
  getProcessHistoryData(req, res, 'memoryMB');
});

function getProcessHistoryData(req, res, field) {
  var fromTs = Number(req.query.fromTs);
  var toTs = Number(req.query.toTs);
  var unit = req.query.unit;
  var host = req.query.host;
  var collectionName = (unit === 'raw') ? [host, field].join(':') : [host, unit, field].join(':');
  var sampling = (unit !== 'raw');

  var dataSeries = [];
  var node = new List(CONF.nodes).where(function (node) {
    return node.host === host;
  }).first();

  var processNames = Object.keys(node.process);
  processNames.unshift('SYS');
  processNames.unshift('SYS_TOTAL');

  MONGO.readRange(collectionName, fromTs, toTs, function (err, data) {
    var rows = new List(data);
    processNames.forEach(function (pName, index) {
      //if (pName === 'SYS_TOTAL' && field === 'memoryMB') return;

      dataSeries[index] = {
        type: (pName === 'SYS_TOTAL') ? ((field == 'cpu') ? 'line' : 'area') : 'stackedArea',
        name: pName,
        toolTipContent: "<strong><span style='\"'color: {color};'\"'>{name}:</span></strong> {x} | <strong>{y}</strong>",
        lineThickness: 1,
        showInLegend: (field == 'cpu'),
        yValueFormatString: "##0.00",
        xValueType: "dateTime",
        dataPoints: rows.select(function (row) {
          return {
            x: parseInt(row.ts),
            y: Math.round(sampling ? (row[pName] / row.count) : row[pName])
          };
        }).toArray()
      };
    });

    res.send(dataSeries);
  });
}

app.get('/servers', function (req, res) {
  res.send(new List(CONF.nodes).select('host').toArray());
});

MONITOR.start();
app.listen(CONF.monitor.http_port, () => console.log('Example app listening on port ' + CONF.monitor.http_port));
