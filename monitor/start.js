var WebSocketServer = require("ws").Server;
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const https = require('https');
const fs = require('fs');
const conf = require('./conf.json');
const EventTypes = require('./public/assets/common/eventTypes.json');
var EventDistributor = require('./eventDistributor');
var workerRoute;

process.dataDir = __dirname + conf.data;

var allowCrossDomain = function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}

function rawBody(req, res, next) {
  req.setEncoding('utf8');
  req.rawBody = '';
  req.on('data', function (chunk) {
    req.rawBody += chunk;
  });
  req.on('end', function () {
    next();
  });
}

app.use(allowCrossDomain);

// to support URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.text());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

workerRoute = new (require('./routes/workerRoute'))(app);
require('./routes/webRouter')(app);

var server;

if (conf.protocol === 'https') {
  var sslOptions = {
    key: fs.readFileSync(__dirname + '/cert/server.key'),
    cert: fs.readFileSync(__dirname + '/cert/server.crt')
  };

  server = https.createServer(sslOptions, app);
} else {
  server = http.createServer(app);
}

var wss = new WebSocketServer({ server: server, path: "/youknow/ws" });
wss.getUniqueID = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4();
};

wss.on('connection', function connection(ws) {
  ws.id = wss.getUniqueID();
  ws.on('message', function incoming(message) {
    message = JSON.parse(message);

    if (message.cmd) {
      console.log('received: cmd %s', message);
    } else if (message.event) {
      EventDistributor.process(message, ws);
      console.log('received: event %s', message);
    } else {
      console.log('received: %s', message);
    }
  });

  ws.on('close', function close() {
    EventDistributor.unsubscribeAll(ws);
  });
});

workerRoute.on(EventTypes.OS_UPDATE, (data) => { 
  EventDistributor.distribute(EventTypes.OS_UPDATE, data); 
});

server.listen(conf.port, function () {
  console.log(`App is listening listening on port ${conf.port}! > on `, conf.protocol);
});