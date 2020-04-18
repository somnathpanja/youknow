var conf = require('./../conf.json');

module.exports = function (app) {
  app.get('/worker/:agent_ip/:agent_id/config', function (req, res) {
    let retConfig = conf.agent[req.params.agent_id];
    Object.assign(retConfig, req.params);
    res.send(retConfig);
  });

  app.post('/worker/:agent_ip/:agent_id/push/os', function (req, res) {
    console.log('OS=>', req.body);
    res.send({ ok: 1 });
  });

  app.post('/worker/:agent_ip/:agent_id/push/process', function (req, res) {
    console.log('STATS=>', req.body);
    res.send({ ok: 1 });
  });
};