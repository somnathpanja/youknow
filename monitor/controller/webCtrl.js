const _ = require('lodash');
const async = require('async');
const TimeTable = require('../lib/timeTable');
const InventoryTable = require('./../lib/inventoryTable');

class WebCtrl {
  static addAgent(data) {
    return InventoryTable.upsert(data);
  }

  static updateAgent(agentId, data) {
    return InventoryTable.update(agentId, data);
  }

  static listAgents() {
    return InventoryTable.listAgents();
  }

  static getAgent(agent_id) {
    return InventoryTable.getAgent(agent_id);
  }

  static getHistory(agent_id, req) {
    let startTs = Number(req.query.startTs);
    let endTs = Number(req.query.endTs);
    let apps = req.query.apps ? req.query.apps.split(',') : [];
    let fields = req.query.fields ? req.query.fields.split(',') : [];
    let unit = req.query.unit;

    return TimeTable.read(agent_id, startTs, endTs, apps, req.query.fields + ',timestamp', unit).then(data => {
      let series = {};
      if (apps.length == 0 && fields.length == 1) {
        let series = {};

        data.forEach(row => {
          series[row.app] = series[row.app] || { name: row.app, points: [] };
          series[row.app].points.push({ xValue: row.timestamp, plotAs: 'line', yValue: row[fields[0]] });
        });

        return Promise.resolve(Object.values(series));
      } else if (apps.length == 1 && fields.length >= 1) {
        let series = {};

        data.forEach(row => {
          fields.forEach(field => {
            series[field] = series[field] || { name: field, points: [] };
            series[field].points.push({ xValue: row.timestamp, plotAs: 'line', yValue: row[field] });
          });
        });

        return Promise.resolve(Object.values(series));
      } else if (fields.length == 1 && apps.length >= 1) {
        data.forEach(row => {
          apps.forEach(appName => {
            series[appName] = series[appName] || { name: appName, plotAs: 'line', points: [] };
            series[appName].points.push({ xValue: row.timestamp, yValue: row[field] });
          });
        });

        return Promise.resolve(Object.values(series));
      }
    });
  }
}

module.exports = WebCtrl;