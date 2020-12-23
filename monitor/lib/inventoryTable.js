var Sqlite = require('./sqlite');
var Agent = require('./agent');

if (global._Inventory) {
  module.exports = global._Inventory;
  return;
}

class Inventory {
  constructor() {
    this.tableName = 'agents';
    this.fileName = 'inventory';
    this.schema = require('./../schema/inventory')
  }

  /**
   * @description Ensure table exist for the current time stamp
   * @param {*} ts 
   * @param {*} tableName 
   */
  _ensureTable() {
    let self = this;
    return new Promise((resolve, reject) => {
      Sqlite.getFileDb(self.fileName).then(db => {
        let query = `CREATE TABLE IF NOT EXISTS ${self.tableName} (${self.schema.fieldsString}, ${self.schema.keysString})`;

        db.run(query, [], function (err) {
          if (err) {
            console.log(query, err.message);
            return reject(err);
          }

          // console.log(`> table ${unit} created.`);
          resolve(db);
        });
      });
    });
  }

  /**
   * @description Push the same value and perform continuous aggregation for a unit
   * @param {*} app 
   * @param {*} xValue nothing but timestamp
   * @param {*} yValue actual value
   * @param {AGGREGATION_DEPTH} unit 
   */
  _push(data) {
    let self = this;
    let values = self.schema.pick(data);

    // https://www.sqlite.org/lang_UPSERT.html
    let query = `INSERT INTO ${self.tableName}(${self.schema.fields}) VALUES (${self.schema.fieldValuesDummy}) ` +
      `ON CONFLICT (${self.schema.upsertKey.join()}) DO UPDATE SET ` +
      self.schema.fields4Upsert.map((fld => {
        values.push(data[fld.name])
        return `${fld.name} = ?`;
      })).join();

    return new Promise((resolve, reject) => {
      self._ensureTable().then((db) => {
        db.run(query, values, function (err) {
          if (err) {
            console.log(query, err.message);
            return reject(err);
          }

          // Get the last insert id
          // console.log(this.changes ? 'UPDATED' : `INSERTED INTO`, ` ${unit} ${this.lastID}`);
          resolve(this.lastID);
        });
      }).catch(() => {
        reject(err);
      });
    });
  }

  /**
   * @description Push the same value and perform continuous aggregation for a unit
   * @param {*} app 
   * @param {*} xValue nothing but timestamp
   * @param {*} yValue actual value
   * @param {AGGREGATION_DEPTH} unit 
   */
  update(agentId, data) {
    let self = this;
    let values = self.schema.pick(data);
    values.push(agentId);

    // https://www.sqlite.org/lang_UPSERT.html
    let query = `UPDATE ${self.tableName} SET ${self.schema.fieldsUpdateString} ` +
      `WHERE agent_id=?`;

    return new Promise((resolve, reject) => {
      self._ensureTable().then((db) => {
        db.run(query, values, function (err) {
          if (err) {
            console.log(query, err.message);
            return reject(err);
          }

          resolve(this.lastID);
        });
      }).catch(() => {
        reject(err);
      });
    });
  }

  upsert(data) {
    return this._push(data);
  }

  listAgents() {
    let query = `SELECT ${this.schema.fields} FROM ${this.tableName};`;
    return this._select(query);
  }

  getAgent(agent_id) {
    let query = `SELECT ${this.schema.fields} FROM ${this.tableName} WHERE agent_id = ?;`;
    return this._select(query, [agent_id]);
  }

  getAgentConfig(agent_id) {
    let self = this;
    let query = `SELECT * FROM ${self.tableName} WHERE agent_id = ?;`;
    return this._select(query, [agent_id]).then(data => {
      if (!data.length) return Promise.reject('not registered');

      return Promise.resolve({
        stats_interval_ms: data[0].stats_interval_ms,
        watch_process: JSON.parse(data[0].watch_process)
      });
    });
  }

  _run(query, values) {
    let self = this;

    return new Promise((resolve, reject) => {
      self._ensureTable().then((db) => {
        db.run(query, values, function (err, data) {
          if (err) {
            console.log(query, err.message);
            return reject(err);
          }

          resolve(data);
        });
      }).catch(() => {
        reject(err);
      });
    });
  }

  _select(query, values) {
    let self = this;

    return new Promise((resolve, reject) => {
      self._ensureTable().then((db) => {
        db.all(query, values, function (err, data) {
          if (err) {
            console.log(query, err.message);
            return reject(err);
          }

          resolve(data);
        });
      }).catch(() => {
        reject(err);
      });
    });
  }
}

global._Inventory = new Inventory();

module.exports = global._Inventory;