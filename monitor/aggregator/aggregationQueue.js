var SQLite = require('./../../common/sqlite');

var FIELDS = {
  ts: { type: 'INTEGER', default: 0 },
  key: { type: 'TEXT', default: 0 },
  interval: { type: 'INTEGER', default: 0 },
  field: { type: 'TEXT', default: 0 },
  lastVal: { type: 'REAL', default: 0 },
  sum: { type: 'REAL', default: 0 },
  max: { type: 'INTEGER', default: 0 },
  min: { type: 'INTEGER', default: 0 },
  avg: { type: 'INTEGER', default: 0 },
  avg_non_0: { type: 'INTEGER', default: 0 },
  count: { type: 'INTEGER', default: 0 },
  count_non_0: { type: 'INTEGER', default: 0 }
};

class AggregationQueue {
  constructor(interval, onReady) {
    let self = this;
    this._db = null;

    SQLite.getFileDb('aggregation_' + interval).then((db) => {
      self._db = db;
      self._createTable().then(onReady).catch(onReady);
    }).catch((err) => {
      onReady(err);
    });
  }

  /**
   * TABLE STRUCTURE
   * 
   * ts | interval | key | field | lastVal | sum | max | min | avg | count
   * 
   */
  _createTable() {
    let self = this;
    let query = `CREATE TABLE IF NOT EXISTS queue (` +
      `ts INTEGER, ` +
      `key TEXT, ` +
      `interval INTEGER DEFAULT 0, ` +
      `field TEXT, ` +
      `lastVal REAL DEFAULT 0, ` +
      `sum REAL DEFAULT 0, ` +
      `max REAL DEFAULT 0, ` +
      `min REAL DEFAULT 0, ` +
      `avg REAL DEFAULT 0, ` +
      `avg_non_0 REAL DEFAULT 0, ` +
      `count INTEGER DEFAULT 0, ` +
      `count_non_0 INTEGER DEFAULT 0, ` +
      `PRIMARY KEY (ts, key, interval, field)` +
      `);`;

    return new Promise((resolve, reject) => {
      self._db.run(query, [], function (err) {
        if (err) {
          console.log(err.message);
          return reject();
        }

        // get the last insert id
        console.log(`Table created`);
        resolve();
      });
    });
  }

  /**
   * @description Push into AggregationQueue
   * @param {Number} ts 
   * @param {String} key Unique Key
   * @param {String} field Field
   * @param {Number} value 
   * @param {Object} reqAggregations {sum : true, avg : true, max : true, min : true}
   */
  push(ts, key, field, interval, value, reqAggregations) {
    let data = [ts, key, field, interval, value, value, value, value, value, value, 1, (value ? 1 : 0),
      value,
    ];

    // insert one row into the langs table
    db.run(`INSERT OR IGNORE INTO 
       queue (ts, key, interval, field, lastVal, sum, max, min, avg, count, avg_non_0, count_non_0)
       VALUES(?,?,?,?,?,?,?,?,?,?,?,?)
       UPDATE queue SET 
         lastVal = ?,
         [sum] = [sum] + ?, 
         [max] = max([max], ?),
         [min] = min([min], ?),
         [avg] = (([avg] * count) + ?)/(count+1)), 
         avg_non_0 = (CASE WHEN (? == 0) THEN avg_non_0 ELSE (([avg] * count) + ?)/(count+1))), 
         count = count + 1, 
         count_non_0 = count_non_0 + (CASE WHEN (? == 0) THEN 0 ELSE 1), 
       WHERE ts=? AND key=? AND interval=? AND field=?`, data, function (err) {
        if (err) {
          return console.log(err.message);
        }

        // Get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
      });
  }
}

var agf = new AggregationQueue(1, function () {
  console.log('Hello ready!');
});

