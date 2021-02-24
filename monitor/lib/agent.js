
var _ = require('lodash');

class Agent {
  constructor(conf) {
    this.agent_id = conf.agent_id;
    this.config = {
      stats_interval_ms: 5000,
      watch_process: _.isString(conf.watch_process) ? JSON.parse(conf.watch_process) : conf.watch_process
    }
  }


save(){
  let query = `CREATE TABLE IF NOT EXISTS agents (${self.schema.fieldsString}, ${self.schema.keysString})`;

  db.run(query, [], function (err) {
    if (err) {
      console.log(query, err.message);
      return reject(err);
    }

    // console.log(`> table ${unit} created.`);
    resolve(db);
  });
}
}

module.exports = Agent;