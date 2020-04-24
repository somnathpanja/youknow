const _ = require('lodash');
const async = require('async');
const TimeTable = require('../lib/timeTable');
const InventoryTable = require('./../lib/inventoryTable');
const OSStatsSchema = require('../schema/os.stats');

class WebCtrl {

  static addORUpdateAgent(data) {
    return InventoryTable.addORUpdateAgent(data);
  }

  static listAgents() {
    return InventoryTable.listAgents(data);
  }
}

module.exports = WebCtrl;