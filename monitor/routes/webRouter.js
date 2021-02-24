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
      if(agents.length){
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
};