const express = require('express');
const CONF = require('./public/conf');
const app = express();
var MONITOR = require('./monitor');
var MONGO = require('./mongo');
var List = require('jscollection').List;

app.use(express.static('public'))

app.get('/stats/cpu', function (req, res) {

  var ts = Number(req.query.ts);
  var host = req.query.host;

  var dataSeries = [];
  var node = new List(CONF.nodes).where(function (node) {
    return node.host === host;
  }).first();

  var processNames = Object.keys(node.process);
  processNames.unshift('SYS');

  MONGO.read([host, 'cpu'].join(':'), ts, function (err, data) {
    var rows = new List(data);
    processNames.forEach(function (processName, index) {
      dataSeries[index] = {
        type: 'line',
        name: processName,
        toolTipContent: "<strong><span style='\"'color: {color};'\"'>{name}:</span></strong> {x} | <strong>{y}%</strong>",
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

app.get('/stats/loadavg', function (req, res) {

  var ts = Number(req.query.ts);
  var host = req.query.host;

  var dataSeries = [];
  var processNames = ['SYS_LOAD_AVG1', 'SYS_LOAD_AVG5', 'SYS_LOAD_AVG15'];

  MONGO.read([host, 'cpu'].join(':'), ts, function (err, data) {
    var rows = new List(data);
    processNames.forEach(function (processName, index) {
      dataSeries[index] = {
        type: 'line',
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


app.get('/stats/mem', function (req, res) {

  var ts = Number(req.query.ts);
  var host = req.query.host;

  var dataSeries = [];
  var node = new List(CONF.nodes).where(function (node) {
    return node.host === host;
  }).first();

  var processNames = Object.keys(node.process);
  processNames.unshift('SYS');
  processNames.unshift('SYS_TOTAL');

  MONGO.read([host, 'memoryMB'].join(':'), ts, function (err, data) {
    var rows = new List(data);
    processNames.forEach(function (pName, index) {
      dataSeries[index] = {
        type: 'stackedColumn',
        name: pName,
        toolTipContent: "<strong><span style='\"'color: {color};'\"'>{name}</span></strong> {x} | <strong>{y}</strong>",
        showInLegend: true,
        lineThickness: 1,
        yValueFormatString: "#######.00 MB",
        xValueType: "dateTime",
        dataPoints: rows.select(function (row) {
          return {
            x: parseInt(row.ts),
            y: row[pName]
          };
        }).toArray()
      };

      if (pName === 'SYS_TOTAL') {
        dataSeries[index].type = 'area';
        dataSeries[index].fillOpacity = .3;
        dataSeries[index].toolTipContent = "<span style='\"'color: {color};'\"'>Total Memory:</span> {x} | <strong>{y}</strong>";
      } else if (pName === 'SYS') {
        dataSeries[index].type = 'area';
        dataSeries[index].fillOpacity = .3;
        dataSeries[index].toolTipContent = "<span style='\"'color: {color};'\"'>Used Memory:</span> {x} | <strong>{y}</strong>";
      }
    });

    res.send(dataSeries);
  });
});


app.get('/servers', function (req, res) {
  res.send(new List(CONF.nodes).select('host').toArray());
});

MONITOR.start();
app.listen(CONF.monitor.http_port, () => console.log('Example app listening on port ' + CONF.monitor.http_port));
