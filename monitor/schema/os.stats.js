
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
        { name: 'cpu_count', type: 'INTEGER', default: 0 },
        { name: 'cpu_percent', type: 'REAL', default: 0 },
        { name: 'cpu_percent2', type: 'REAL', default: 0 },
        { name: 'disk_total', type: 'REAL', default: 0 },
        { name: 'disk_used', type: 'REAL', default: 0 },
        { name: 'disk_free', type: 'REAL', default: 0 },
        { name: 'loadavg1', type: 'REAL', default: 0 },
        { name: 'loadavg15', type: 'REAL', default: 0 },
        { name: 'loadavg5', type: 'REAL', default: 0 },
        { name: 'mem_free_mb', type: 'REAL', default: 0 },
        { name: 'mem_free_percent', type: 'REAL', default: 0 },
        { name: 'mem_total_mb', type: 'REAL', default: 0 },
        { name: 'mem_used_mb', type: 'REAL', default: 0 },
        { name: 'uptime_sec', type: 'REAL', default: 0 },
        { name: 'mem_virt', type: 'REAL', default: 0 },
        { name: 'mem_res', type: 'REAL', default: 0 },
        { name: 'ppid', type: 'INTEGER', default: 0 },
        { name: 'pid', type: 'INTEGER', default: 0 },
        { name: 'mem_used_percent', type: 'REAL', default: 0 },
        { name: 'count', type: 'INTEGER', default: 1 }
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