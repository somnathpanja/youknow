var conf = require('./../conf.json');
var async = require('async');
var moment = require('moment');
var workerCtrl = require('./../controller/workerCtrl');
var EventEmitter = require('events');
const EventTypes = require('../public/assets/common/eventTypes.json');
const { worker } = require('cluster');

class workerRoute extends EventEmitter {
  constructor(app) {
    super();
    this.app = app;
    this.initRoutes();
  }

  initRoutes() {
    let self = this;
    this.app.get('/status', function (req, res) {
      res.send('YouKnow Monitor Communication: OK')
    });

    this.app.get('/worker/:agent_ip/:agent_id/config', function (req, res) {
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

    this.app.post('/worker/:agent_ip/:agent_id/push/os', function (req, res) {
      workerCtrl.pushOSData(req.params.agent_id, req.body).then((err) => {
        console.log(`${moment().format()}> ${req.params.agent_id} os data pushed successfully.`);
        res.send({ ok: 1 });
      }).catch((err) => {
        console.log(`${moment().format()}> ${req.params.agent_id} failed to push OS data.`, err);
        res.send({ ok: 0 });
      });
    });

    this.app.post('/worker/:agent_ip/:agent_id/push/process', function (req, res) {
      workerCtrl.pushProcessData(req.params.agent_id, req.body).then((err) => {
        console.log(`${moment().format()}> ${req.params.agent_id} process data pushed successfully.`);
        res.send({ ok: 1 });
      }).catch((err) => {
        console.log(`${moment().format()}> ${req.params.agent_id} failed to push Process data.`, err);
        res.send({ ok: 0 });
      });
    });

    this.app.get('/worker/watchlist/:agent_id', function (req, res) {
      // req.params.agent_id
      workerCtrl.getConfig(req.params.agent_id).then(config => {
        let regex = config.watch_process.join('\\|');
        res.send(regex ? regex : 'unknown');
      }).catch(e => {
        res.send('unknown');
      });
    });

    this.app.get('/worker/cmd', function (req, res) {
      console.dir('ok===>', req.body);
      res.send('( hostname ; hostname -i )');
    });

    this.app.post('/worker/raw/system', function (req, res) {
      console.dir('ok===>', req.body);
      let lines = req.body.trim().split('\n');
      let agent_id = lines.shift();
      let hostname = lines.shift();
      let ip = lines.shift().split(' ')[0];
      let system_cpu_line = lines.shift();

      // Parse CPU
      let system_cpu_parts = system_cpu_line.substring(8, system_cpu_line.length).split(',');
      let system_cpu = { 'app': 'sys' };
      system_cpu_parts.forEach(element => {
        let parts = element.trim().split(' ');
        system_cpu['cpu_' + parts[1].trim()] = Number(parts[0].trim());
      });

      system_cpu.cpu_percent = system_cpu.cpu_us;
      // CPU Parse End

      for (let idx = 0; idx < lines.length; idx++) {
        try {
          lines[idx] = JSON.parse(lines[idx]);
        } catch (e) {
          console.error('ERROR_DATA=', lines[idx]);
          console.error(e);
        }
      }

      let cpu_count = lines.shift();
      let platform = lines.shift().platform;
      let uptime = lines.shift();

      let inventory = Object.assign({ agent_id, hostname, ip, last_updated_ts: Date.now(), platform }, cpu_count, uptime);

      let sys = Object.assign({ agent_id }, uptime);     // uptime
      sys = Object.assign(sys, lines.shift()); // disk
      sys = Object.assign(sys, lines.shift()); // load avg
      sys = Object.assign(sys, system_cpu); // cpu
      sys = Object.assign(sys, lines.shift()); // memory
      sys = Object.assign(sys, lines.shift()); // swap

      if (sys.mem_swap_avail > sys.mem_swap_total) {
        sys.mem_swap_avail = sys.mem_swap_free;
      }

      sys.mem_res = sys.mem_used;
      sys.mem_used_percent = Number(((sys.mem_used / sys.mem_total) * 100).toFixed(2));

      workerCtrl.updateAgentInInventory(inventory).catch((err) => {
        console.log(`${moment().format()}> ${agent_id} failed to push Inventory data.`, err);
      }).then(() => {
        return workerCtrl.pushOSData(agent_id, sys).then((err) => {
          console.log(`${moment().format()}> ${agent_id} os data pushed successfully.`);
        }).catch((err) => {
          console.log(`${moment().format()}> ${agent_id} failed to push OS data.`, err);
          res.send('');
        });
      }).then(() => {
        return new Promise((resolve) => {
          async.eachSeries(lines, function (item, next) {
            item.agent_id = agent_id;

            // Sometimes app command returns a path
            if (item.app.includes('/')) {
              item.app = item.app.split('/');
              item.app = item.app[item.app.length - 1];
            } else {
              item.app += item.args.join('');
            }

            item.mem_virt = workerCtrl.parseMemoryToKiloByteValue(item.mem_virt);
            item.mem_res = workerCtrl.parseMemoryToKiloByteValue(item.mem_res);

            workerCtrl.pushOSData(agent_id, item).then((err) => {
              console.log(`${moment().format()}> ${agent_id} process(${item.app}) data pushed successfully.`);
              next();
            }).catch((err) => {
              console.log(`${moment().format()}> ${agent_id} process(${item.app}) failed to push.`, err);
              next();
            });
          }, () => {
            resolve();
          });
        });
      }).then(() => {
        res.send(Math.floor(Math.random() * 101) + '%');
        self.emit(EventTypes.OS_UPDATE, { agent_id, sys, lines })
      });
    });

    this.app.post('/worker/raw/process', function (req, res) {
      console.dir('ok===>', req.body);
      res.send({ ok: 0 });
    });
  }
}



module.exports = workerRoute;