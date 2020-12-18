const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const https = require('https');
const fs = require('fs');
const conf = require('./conf.json');
process.dataDir = __dirname + conf.data;

var allowCrossDomain = function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}

app.use(allowCrossDomain);

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));
// to support URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/workerRoute')(app);
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

server.listen(conf.port, function () {
  console.log(`App is listening listening on port ${conf.port}! > on `, conf.protocol);
});