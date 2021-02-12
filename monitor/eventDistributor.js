var async = require('async');

class EventDistributor {
  constructor() {
    this.events = {};
  }

  _key(data) {
    return data.event + ':' + data.agent_id;
  }

  _subscribe(data, ws) {
    let key = this._key(data);
    this.events[key] = this.events[key] || new Set();
    this.events[key].add(ws);
  }

  _unsubscribe(data, ws) {
    let key = this._key(data);
    this.events[key].delete(ws);
  }

  unsubscribeAll(ws) {
    async.eachOfSeries(this.events, function (item, key, next) {
      item.delete(ws);
      next();
    });
  }

  /**
   * @description process the incoming requests
   * @param {*} data 
   * @param {*} ws 
   */
  process(data, ws) {
    switch (data.action) {
      case 'subscribe':
        this._subscribe(data, ws);
        break;
      case 'unsubscribe':
        this._unsubscribe(data, ws);
        break;
    }
  }

  distribute(event, data) {
    data.event = event;
    let clients = this.events[this._key(data)];
    if (clients) {
      async.eachSeries(clients, function (ws, next) {
        try {
          ws.send(JSON.stringify({event, data}));
        } catch (e) {
          console.error(e)
        }
       
        next();
      });
    }

  }
}

module.exports = new EventDistributor();