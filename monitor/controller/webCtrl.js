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
}

module.exports = WebCtrl;