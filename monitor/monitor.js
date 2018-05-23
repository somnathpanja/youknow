var monitor = {};
var CONF = require('./public/conf');
var http = require('http');
var MONGO = require('./mongo');
var List = require('jscollection').List;

monitor.start = function () {
  MONGO.connect(function (err) {
    if (err) {
      console.log('Failed to connect to mongo', err);
      return;
    }

    monitor._pullDataFromAllNodes();
  });
};

monitor._pullDataFromAllNodes = function () {
  CONF.nodes.forEach(function (node) {
    monitor._pullDataFromNode(node);
  });

  setTimeout(monitor._pullDataFromAllNodes, CONF.monitor.dataIntervalInSec)
};

monitor._pullDataFromNode = function (node) {
  http.get({
    hostname: node.host,
    port: node.port,
    path: '/process/stats?process=' + JSON.stringify(node.process),
    agent: false,  // create a new agent just for this one request,
    useNewUrlParser: true
  }, (response) => {
    const {statusCode} = response;

    if (statusCode !== 200) {
      console.log('node:', node.host, 'returned. HTTP_CODE:', statusCode);
      return;
    }

    // Continuously update stream with data
    var body = '';

    response.on('data', function (d) {
      body += d;
    });

    response.on('end', function () {
      // Data received, let us parse it using JSON!
      var parsed = JSON.parse(body);
      console.log(parsed);
      monitor._insertIn2Db(node, parsed);
    });

    response.on('error', function (err) {
      console.log(err);
    });
  }).on('error', (e) => {
    console.error(`Failed to: ${e.message}, make sure worker in node is running`);
  });
};

monitor._insertIn2Db = function (node, data) {
  List.exeAsync((next) => {
    monitor._insertAs('cpu', node, data, next);
  }, (next) => {
    monitor._insertAs('memoryMB', node, data, next);
  });
};

monitor._insertAs = function (profileType, node, data, cb) {
  var collectionName = [node.host, profileType].join(':');
  var processNames = Object.keys(node.process);
  var insertData = {ts: data.ts};

  processNames.unshift('SYS');

  processNames.forEach(function (processName) {
    if (data[processName]) {
      insertData[processName] = data[processName][profileType];
    } else {
      insertData[processName] = null;
    }

    if (processName === 'SYS') {
      if (profileType === 'memoryMB') {
        insertData[processName + '_TOTAL'] = data[processName]['totalMemoryMB'];
      } else if (profileType === 'cpu') {
        insertData[processName + '_LOAD_AVG1'] = data[processName]['loadavg1'];
        insertData[processName + '_LOAD_AVG5'] = data[processName]['loadavg5'];
        insertData[processName + '_LOAD_AVG15'] = data[processName]['loadavg15'];
      }
    }
  });

  MONGO.insert(collectionName, insertData, function (err) {
    cb();
  })
};

monitor.start();
module.exports = monitor;