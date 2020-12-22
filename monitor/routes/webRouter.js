var conf = require('./../conf.json');
var moment = require('moment');
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
      res.send(agents);
    }).catch((err) => {
      res.status(500).send({ err: err });
    });
  });

  app.post('/agent/:agent_ip/add', function (req, res) {
    let data = req.body;
    data.agent_id = req.params.agent_id;
    webCtrl.addORUpdateAgent(data).then(agents => {
      res.send('ok');
    }).catch((err) => {
      res.status(500).send({ err: err });
    });
  });

  app.post('/agent/:agent_ip/update', function (req, res) {
    let data = req.body;
    data.agent_id = req.params.agent_id;
    webCtrl.addORUpdateAgent(data).then(agents => {
      res.send('ok');
    }).catch((err) => {
      res.status(500).send({ err: err });
    });
  });
};