const _ = require('lodash');
const async = require('async');
const TimeTable = require('./../lib/timeTable');
const InventoryTable = require('./../lib/inventoryTable');
const OSStatsSchema = require('./../schema/os.stats');

class WorkerCtrl {
  static getConfig(agent_id) {
    return InventoryTable.getAgentConfig(agent_id);
  }

  static updateAgentInInventory(agentId, data) {
    return InventoryTable.upsert(agentId, data);
  }

  static pushOSData(agent_id, data) {
    return TimeTable.push(agent_id, OSStatsSchema, data);
  }

  static pushProcessData(agent_id, data) {
    var tasks = []
    for (let pid in data) {
      tasks.push(TimeTable.push(agent_id, OSStatsSchema, data[pid]));
    }

    return Promise.all(tasks);
  }

  static parseMemoryToKiloByteValue(value) {
    let lastDigit = value.substr(value.length - 1);
    switch (lastDigit) {
      case 'm':
        value = value.substr(0, value.length - 1);
        return Number(value) * 1048.58;
        break;
      case 'g':
        value = value.substr(0, value.length - 1);
        return Number(value) * 1.074e+6;
        break;
      case 't':
        value = value.substr(0, value.length - 1);
        return Number(value) * 1.1e+9;
        break;
      case 'p':
        value = value.substr(0, value.length - 1);
        return Number(value) * 1.126e+12;
        break;
      case 'k':
      default:
        value = value.substr(0, value.length - 1);
        return Number(value) * 1.024;
        break;
    }
  }
}

module.exports = WorkerCtrl;