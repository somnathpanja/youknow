
if (global._OSStatsSchema) {
  module.exports = global._OSStatsSchema;
  return;
}

var SchemaBase = require('./schemaBase');
var _ = require('lodash');

class OSStatsSchema extends SchemaBase {
  constructor() {
    super({
      fields: [
        { name: 'app', type: 'TEXT', default: 'os' },
        { name: 'timestamp', type: 'INTEGER', default: 0 },
        { name: 'count', type: 'INTEGER', default: 1 },
        // FOR OS
        { name: 'uptime', type: 'REAL', default: 0 },
        
        { name: 'load_avg1', type: 'REAL', default: 0 },
        { name: 'load_avg5', type: 'REAL', default: 0 },
        { name: 'load_avg15', type: 'REAL', default: 0 },

        { name: 'cpu_us', type: 'REAL', default: 0 },
        { name: 'cpu_sy', type: 'REAL', default: 0 },
        { name: 'cpu_ni', type: 'REAL', default: 0 },
        { name: 'cpu_id', type: 'REAL', default: 0 },
        { name: 'cpu_wa', type: 'REAL', default: 0 },
        { name: 'cpu_hi', type: 'REAL', default: 0 },
        { name: 'cpu_si', type: 'REAL', default: 0 },
        { name: 'cpu_st', type: 'REAL', default: 0 },

        { name: 'mem_total', type: 'INTEGER', default: 0 },
        { name: 'mem_free', type: 'INTEGER', default: 0 },
        { name: 'mem_used', type: 'INTEGER', default: 0 },
        { name: 'mem_buff_cache', type: 'INTEGER', default: 0 },

        { name: 'mem_swap_total', type: 'INTEGER', default: 0 },
        { name: 'mem_swap_free', type: 'INTEGER', default: 0 },
        { name: 'mem_swap_used', type: 'INTEGER', default: 0 },
        { name: 'mem_swap_avail', type: 'INTEGER', default: 0 },

        { name: 'disk_total', type: 'REAL', default: 0 },
        { name: 'disk_used', type: 'REAL', default: 0 },
        { name: 'disk_free', type: 'REAL', default: 0 },

        // For APPS
        { name: 'pid', type: 'INTEGER', default: 0 },
        { name: 'mem_virt', type: 'INTEGER', default: 0 },
        { name: 'mem_res', type: 'INTEGER', default: 0 },
        { name: 'cpu_percent', type: 'REAL', default: 0 },
        { name: 'mem_used_percent', type: 'REAL', default: 0 }
      ],
      keys: [
        `PRIMARY KEY (app, timestamp)`
      ],
      upsertKey: ['app', 'timestamp'],
      noAggregation: ['count', 'ppid', 'pid', 'app', 'timestamp']
    }, 'OSStatsSchema');
  }
}

module.exports = global._OSStatsSchema = new OSStatsSchema();