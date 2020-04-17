var conf = require('./../conf.json');

module.exports = function (app) {
  app.get('/worker/:agent_ip/:agent_id/config', function (req, res) {
    let retConfig = conf.agent[req.param.agent_id];
    res.send(retConfig);
    Object.assign(retConfig, req.param);
  });

  app.post('/worker/:agent_ip/:agent_id/push/os', function (req, res) {
    console.log('OS=>', req.data);
    res.send('hello');
  });

  app.post('/worker/:agent_ip/:agent_id/push/process', function (req, res) {
    res.send('hello');
  });
};