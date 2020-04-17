var sqlite3 = require('sqlite3');

class SQLite {
  static getFileDb(fileName) {
    return new Promise((resolve, reject) => {
      console.log('PATH=', __dirname + `${fileName}.db`);
      let db = new sqlite3.Database(__dirname + `${fileName}.db`, (err) => {
        if (err) {
          reject(err);
          return console.error(err.message);
        }

        console.log('Connected to the chinook database.');
        resolve(db);
      });
    });
  }

  static getMemoryDb() {
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

module.exports = SQLite;