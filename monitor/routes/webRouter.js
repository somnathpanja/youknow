var conf = require('./../conf.json');
var moment = require('moment');
var fs = require('fs');
var webCtrl = require('../controller/webCtrl');

module.exports = function (app) {
  app.get('/agents', function (req, res) {
    webCtrl.listAgents().then(agents => {
      res.send(agents);
    }).catch((err) => {
      res.status(500).send({ err: err });
    });
  });

  app.get('/agent/:agent_id/', function (req, res) {
    webCtrl.getAgent(req.params.agent_id).then(agents => {
      if (agents.length) {
        res.send(agents[0]);
      } else {
        res.status(200).send({ err: 'Agent not found with agent id!' });
      }
    }).catch((err) => {
      res.status(500).send({ err: err });
    });
  });

  app.post('/agent/add', function (req, res) {
    let data = req.body;
    webCtrl.addAgent(data).then(lastId => {
      res.send({ success: true, lastId });
    }).catch((err) => {
      res.status(500).send({ err: err });
    });
  });

  app.post('/agent/update/:agent_id', function (req, res) {
    let data = req.body;
    webCtrl.updateAgent(req.params.agent_id || '', data).then(lastId => {
      res.send({ success: true, lastId });
    }).catch((err) => {
      res.status(500).send({ err: err });
    });
  });

  app.get('/', function (req, res) {
    fs.readFile(__dirname + '/../public/index.html', 'utf8', function (err, content) {
      res.send(content);
    });
  });

  app.get('/server', function (req, res) {
    fs.readFile(__dirname + '/../public/index.html', 'utf8', function (err, content) {
      res.send(content);
    });
  });

  // Delivers all the history details
  app.get('/agent/:agent_id/history', function (req, res) {
    webCtrl.getHistory(req.params.agent_id, req).then(data => {
      if (data.length) {
        res.send(data);
      } else {
        res.status(200).send({ err: 'History not found with agent id!' });
      }
    }).catch((err) => {
      res.status(500).send({ err: err });
    });
  });

  // app.use(function(req, res) {
  //   // Use res.sendfile, as it streams instead of reading the file into memory.
  //   res.sendfile(__dirname + '/../public/index.html');
  // });
};