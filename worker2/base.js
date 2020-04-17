const https = require('https');
const conf = require('./conf.json');
const EventEmitter = require('events');

class Base extends EventEmitter {
  constructor(url, pullInterval) {
    super();
    var self = this;
    this._url = url;

    this.on('data', (data) => { self._send(data); });

    setInterval(() => { self._pullData(); }, pullInterval);
  }

  _send(data) {
    let self = this;
    data = JSON.stringify(data)

    const options = {
      hostname: conf.host,
      port: conf.port,
      path: self._url, //'/todos',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }

    const req = https.request(options, res => {
      console.log(`statusCode: ${res.statusCode}`)

      res.on('data', d => {
        process.stdout.write(d);
      })
    })

    req.on('error', error => {
      console.error(error);
    })

    req.write(data)
    req.end();
  }
}

module.exports = Base;