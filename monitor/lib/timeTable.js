var SQLite = require('./sqlite');
const EventEmitter = require('events');
var moment = require('moment');
var AGGREGATION_DEPTH = {
  Year: 'year',
  Month: 'month',
  Quarter: 'quarter',
  Week: 'week',
  Day: 'day',
  Hour: 'hour',
  Minute: 'minute',
  Second: 'second'
};

var FIELDS = [
  { name: 'app', type: 'TEXT', default: 'os' },
  { name: 'xValue', type: 'INTEGER', default: 0 }, // nothing but ts
  { name: 'yValue', type: 'REAL', default: 0 },
  { name: 'count', type: 'INTEGER', default: 1 },
];

var schema = {
  fields: [
    { name: 'app', type: 'TEXT', default: 'os' },
    { name: 'xValue', type: 'INTEGER', default: 0 }, // nothing but ts
    { name: 'yValue', type: 'REAL', default: 0 },
    { name: 'count', type: 'INTEGER', default: 1 }
  ],
  keys: [
    `PRIMARY KEY (app, xValue)`
  ]
}


var TABLE_KEYS = `PRIMARY KEY (app, xValue)`;

global._timeTables = {};

class TimeTable extends EventEmitter {
  /**
   * @description
   * @param {String} agent_id
   * @param {String} property @Example CPU
   * @param {raw or Interval} type 
   */
  constructor(agent_id, schema) {
    super();
    var self = this;
    this.agent_id = agent_id;
    this.schema = schema;
  }

  static push(agent_id, schema, data) {
    return new Promise((resolve) => {
      let table = TimeTable.instance(agent_id, schema);
      resolve(table.push(data));
    });
  }

  /**
   * @description Push the raw data and continuos aggregation automatically happens
   * @param {*} app
   * @param {*} xValue
   * @param {*} yValue
   */
  push(data) {
    return Promise.all([
      this._pushAggregation(data, AGGREGATION_DEPTH.Second),
      this._pushAggregation(data, AGGREGATION_DEPTH.Minute),
      this._pushAggregation(data, AGGREGATION_DEPTH.Hour),
      this._pushAggregation(data, AGGREGATION_DEPTH.Day),
      this._pushAggregation(data, AGGREGATION_DEPTH.Week),
      this._pushAggregation(data, AGGREGATION_DEPTH.Quarter),
      this._pushAggregation(data, AGGREGATION_DEPTH.Month),
      this._pushAggregation(data, AGGREGATION_DEPTH.Year)
    ]);
  }

  /**
   * @description Get the db references
   * @param {*} ts 
   */
  _db(ts) {
    // A new DB file will be created in every AGGREGATION_DEPTH.Year
    var tsDay = moment(ts).startOf(AGGREGATION_DEPTH.Year).valueOf();
    var dbFile = `${this.agent_id}_${tsDay}`;

    return SQLite.getFileDb(dbFile);
  }

  /**
   * @description Ensure table exist for the current time stamp
   * @param {*} ts 
   * @param {*} tableName 
   */
  _ensureTable(ts, unit) {
    let self = this;
    return new Promise((resolve, reject) => {
      self._db(ts).then(db => {
        let query = `CREATE TABLE IF NOT EXISTS ${unit} (${self.schema.fieldsString}, ${self.schema.keysString})`;

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
  _pushAggregation(data, unit) {
    let self = this;
    data.count = 1;
    data.timestamp = moment(data.timestamp).startOf(unit).valueOf();
    let values = self.schema.pick(data);

    // https://www.sqlite.org/lang_UPSERT.html
    let query = `INSERT INTO ${unit}(${self.schema.fields}) VALUES (${self.schema.fieldValuesDummy}) ` +
      `ON CONFLICT (${self.schema.upsertKey.join()}) DO UPDATE SET ` +
      self.schema.fieldsSupportsAggregation.map((fldName => {
        values.push(data[fldName])
        return `${fldName} = ((${fldName} * count) + ?)/(count+1)`;
      })).join() + ', count = count + 1';

    return new Promise((resolve, reject) => {
      self._ensureTable(data.timestamp, unit).then((db) => {
        db.run(query, values, function (err) {
          if (err) {
            return console.log(query, err.message);
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

  static instance(agent_id, schema) {
    let key = agent_id + '_' + schema.schemaName;

    if (global._timeTables[key]) {
      return global._timeTables[key];
    } else {
      global._timeTables[key] = new TimeTable(agent_id, schema);
      return global._timeTables[key];
    }
  }
}

module.exports = TimeTable;