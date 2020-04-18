const https = require('https');
const http = require('http');

class Request {
  constructor() {

  }

  static post(path, data) {
    return new Promise((accept, reject) => {
      data = JSON.stringify(data);

      const options = {
        hostname: process.CONFIG.monitor.host,
        port: process.CONFIG.monitor.port,
        path: path,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length
        }
      };

      let protocol = process.CONFIG.monitor.protocol === 'https' ? https : http;
      const req = protocol.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)

        res.on('data', d => {
          d = JSON.parse(d.toString());
          accept(d);
        });
      });

      req.on('error', error => {
        reject(error);
      });

      req.write(data);
      req.end();
    });
  }

  static get(path) {
    return new Promise((accept, reject) => {
      const options = {
        hostname: process.CONFIG.monitor.host,
        port: process.CONFIG.monitor.port,
        path: path,
        method: 'GET'
      };

      let protocol = process.CONFIG.monitor.protocol === 'https' ? https : http;
      const req = protocol.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', d => {
          d = JSON.parse(d.toString());
          accept(d);
        });
      });

      req.on('error', error => {
        reject(error);
      });

      req.end();
    });
  }
}

module.exports = Request;