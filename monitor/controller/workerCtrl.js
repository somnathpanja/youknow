const _ = require('lodash');
const async = require('async');
const TimeTable = require('./../lib/timeTable');
const InventorySchema = require('./../schema/inventory');
const OSStatsSchema = require('./../schema/os.stats');

class WorkerCtrl {

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