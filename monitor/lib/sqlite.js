if (global._SQLite) {
  module.exports = global._SQLite;
  return;
}

var sqlite3 = require('sqlite3');

class SQLite {
   constructor() {
    this._instance = {};
  }

  getFileDb(fileName) {
    var self = this;

    return new Promise((resolve, reject) => {
      let path = process.dataDir + `/${fileName}.db`;

      if (self._instance[path]) {
        return resolve(self._instance[path]);
      }

      let db = self._instance[path] = new sqlite3.Database(path, (err) => {
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