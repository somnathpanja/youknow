const _ = require('lodash');
const async = require('async');
const TimeTable = require('./../lib/timeTable');
const InventoryTable = require('./../lib/inventoryTable');
const OSStatsSchema = require('./../schema/os.stats');

class WorkerCtrl {

  static getConfig(agent_id){
    return InventoryTable.getAgentConfig(agent_id);
  }

  static pushOSData(agent_id, data) {
    return TimeTable.push(agent_id, OSStatsSchema, data);
  }

  static pushProcessData(agent_id, data) {
    var tasks = []
    for (let pid in data){
      tasks.push(TimeTable.push(agent_id, OSStatsSchema, data[pid]));
    }
    
    return Promise.all(tasks);
  }
}

module.exports = WorkerCtrl;