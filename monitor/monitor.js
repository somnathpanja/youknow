var monitor = {};
var CONF = require('./public/conf');
var http = require('http');
var MONGO = require('./mongo');
var List = require('jscollection').List;

let getRoundedDate = (minutes, ts) => {
  let ms = 1000 * 60 * minutes; // convert minutes to ms
  let roundedDate = new Date(Math.round(ts / ms) * ms);
  return roundedDate.getTime();
};

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
    const { statusCode } = response;

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
    console.error(`Failed to: ${e.message}, make sure worker in node is running in ${node.host}`);
  });
};

monitor._insertIn2Db = function (node, data) {
  List.exeAsync((next) => {
    monitor._saveAs('cpu', node, data, next);
  }, (next) => {
    monitor._saveAs('memoryMB', node, data, next);
  }, (next) => {
    monitor._saveStaticData('static', node, data, next);
  });
};


monitor._saveStaticData = function (profileType, node, data, cb) {
  var collectionName = [node.host, profileType].join(':');
  let processName = 'SYS';
  let staticData = {
    host: node.host,
    ts: data.ts,
    disk_size: data[processName]['hardDrive'].total,
    disk_used: data[processName]['hardDrive'].used,
    mem_total: data[processName]['totalMemoryMB'],
    mem_used: data[processName]['memoryMB'],
    sys_uptime: data[processName]['sysUptime'],
    cpu: Math.round(data[processName]['cpu']),
    cpu_count: data[processName]['cpuCount'],
    platform: data[processName]['platform'],
    loadavg1: data[processName]['loadavg1'],
    loadavg5: data[processName]['loadavg5'],
    loadavg15: data[processName]['loadavg15'],
    processMem: [],
    processCpu: []
  };

  var processNames = Object.keys(node.process);

  processNames.forEach(function (processName) {
    if (processName !== 'SYS') {
      staticData.processMem.push({
        x: processName,
        y: Math.round(data[processName]['memoryMB'])
      });

      staticData.processCpu.push({
        x: processName,
        y: Math.round(data[processName]['cpu'])
      });
    }
  });

  MONGO.updateOne(collectionName, { host: node.host }, { $set: staticData }, function (err) {
    cb();
  });
}

monitor._saveAs = function (profileType, node, data, cb) {
  var collectionNameRaw = [node.host, profileType].join(':');
  var collectionNameMinute = [node.host, 'minute', profileType].join(':');
  var collectionNameHour = [node.host, 'hour', profileType].join(':');
  var collectionNameDay = [node.host, 'day', profileType].join(':');

  var processNames = Object.keys(node.process);
  var insertData = { ts: data.ts };

  processNames.unshift('SYS');

  processNames.forEach(function (processName) {
    if (data[processName]) {
      insertData[processName] = data[processName][profileType];
    } else {
      delete insertData[processName];
    }

    if (processName === 'SYS') {
      switch (profileType) {
        case 'memoryMB':
          insertData[processName + '_TOTAL'] = data[processName]['totalMemoryMB'];
          break;
        case 'cpu':
          insertData[processName + '_LOAD_AVG1'] = data[processName]['loadavg1'];
          insertData[processName + '_LOAD_AVG5'] = data[processName]['loadavg5'];
          insertData[processName + '_LOAD_AVG15'] = data[processName]['loadavg15'];
          break;
        case 'disk':
          insertData[processName + '_STORAGE_SIZE_TOTAL'] = data[processName]['hardDrive'].total;
          insertData[processName + '_STORAGE_SIZE_USED'] = data[processName]['hardDrive'].used;
          break;
      }
    }
  });


  List.exeAsync((next) => {
    MONGO.insert(collectionNameRaw, insertData, next);
  }, (next) => {
    // Cleanup data for aggregation
    delete insertData.ts;
    delete insertData._id;
    insertData.count = 1;
    insertData = { $inc: insertData };
    next();
  }, (next) => {
    var aggregationTs = getRoundedDate(1, data.ts);
    MONGO.updateOne(collectionNameMinute, { ts: aggregationTs }, insertData, next);
  }, (next) => {
    var aggregationTs = getRoundedDate(60, data.ts);
    MONGO.updateOne(collectionNameHour, { ts: aggregationTs }, insertData, next);
  }, (next) => {
    var aggregationTs = getRoundedDate(24 * 60, data.ts);
    MONGO.updateOne(collectionNameDay, { ts: aggregationTs }, insertData, next);
  }, () => cb());

  // MONGO.insert(collectionNameRaw, insertData, function (err) {
  //   cb();
  // });
};

monitor.start();
module.exports = monitor;