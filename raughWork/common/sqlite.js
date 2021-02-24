if (global._SQLite) {
  module.exports = global._SQLite;
}

var sqlite3 = require('sqlite3');

class SQLite {
  static init() {
    this._instance = {};
  }

  getFileDb(fileName) {
    var self = this;

    return new Promise((resolve, reject) => {
      let path = __dirname + `${fileName}.db`;

      if (self._instance[path]) {
        return resolve(self._instance[path]);
      }

      let db = new sqlite3.Database(__dirname + `${fileName}.db`, (err) => {
        if (err) {
          reject(err);
          return console.error(err.message);
        }

        self._instance[path] = db;
        console.log('Connected to the database:', path);
        resolve(db);
      });
    });
  }

   getMemoryDb() {
    return new Promise((resolve, reject) => {
      let db = new sqlite3.Database(':memory:', (err) => {
        if (err) {

          console.error(err.message);
          return reject(err);
        }

        console.log('Connected to the in-memory SQlite database.');
        resolve(db);
      });
    });
  }
}

global._SQLite = new SQLite();

module.exports = global._SQLite;