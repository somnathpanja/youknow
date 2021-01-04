var conf = require('./../conf.json');
var moment = require('moment');
var workerCtrl = require('./../controller/workerCtrl');

module.exports = function (app) {
  // app.get('/worker/:agent_ip/:agent_id/config', function (req, res) {
  //   let retConfig = conf.agent[req.params.agent_id];
  //   Object.assign(retConfig, req.params);
  //   console.log(`${moment().format()}> ${req.params.agent_id} collected its config.`);
  //   res.send(retConfig);
  // });

  app.get('/worker/:agent_ip/:agent_id/config', function (req, res) {
    workerCtrl.getConfig(req.params.agent_id).then(aConfig => {
      conf.agent[req.params.agent_id] = aConfig;
      let retConfig = conf.agent[req.params.agent_id];
      Object.assign(retConfig, req.params);
      console.log(`${moment().format()}> ${req.params.agent_id} collected its config.`);
      res.send(retConfig);
    }).catch((err) => {
      return res.status(500).send({ message: err });
    });
  });

  app.post('/worker/:agent_ip/:agent_id/push/os', function (req, res) {
    workerCtrl.pushOSData(req.params.agent_id, req.body).then((err) => {
      console.log(`${moment().format()}> ${req.params.agent_id} os data pushed successfully.`);
      res.send({ ok: 1 });
    }).catch((err) => {
      console.log(`${moment().format()}> ${req.params.agent_id} failed to push OS data.`, err);
      res.send({ ok: 0 });
    });
  });

  app.post('/worker/:agent_ip/:agent_id/push/process', function (req, res) {
    workerCtrl.pushProcessData(req.params.agent_id, req.body).then((err) => {
      console.log(`${moment().format()}> ${req.params.agent_id} process data pushed successfully.`);
      res.send({ ok: 1 });
    }).catch((err) => {
      console.log(`${moment().format()}> ${req.params.agent_id} failed to push Process data.`, err);
      res.send({ ok: 0 });
    });
  });

  app.get('/worker/cmd', function (req, res) {
    console.dir('ok===>', req.body);
    res.send('( hostname ; hostname -i )');
  });

  app.post('/worker/raw/system', function (req, res) {
    console.dir('ok===>', req.body);
    res.send({ ok: 0 });
  });

  app.post('/worker/raw/process', function (req, res) {
    console.dir('ok===>', req.body);
    res.send({ ok: 0 });
  });
};