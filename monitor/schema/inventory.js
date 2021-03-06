var SchemaBase = require('./schemaBase');

class InventorySchema extends SchemaBase {
  constructor() {
    super({
      fields: [
        { name: 'agent_id', type: 'TEXT', default: 'na', notNull: true },
        { name: 'hostname', type: 'TEXT', default: 'na', notNull: true },
        { name: 'ip', type: 'TEXT', default: 'ip', upsert: true },
        { name: 'uptime', type: 'REAL', default: 0, upsert: true },
        { name: 'details', type: 'TEXT', default: '', upsert: true },
        { name: 'cpu_count', type: 'INTEGER', default: 0, upsert: true },
        { name: 'platform', type: 'TEXT', default: 0, upsert: true },
        { name: 'stats_interval_ms', type: 'INTEGER', default: 5000, upsert: true },
        { name: 'watch_process', type: 'TEXT', default: '["mongod","beam.smp","Cns"]', upsert: true },
        { name: 'last_updated_ts', type: 'INTEGER', default: () => { return Date.now(); }, upsert: true }
      ],
      keys: [
        `PRIMARY KEY (agent_id)`
      ],
      upsertKey: ['agent_id'],
      noAggregation: ['agent_id', 'hostname', 'ip', 'cpu_count', 'platform', 'stats_interval_ms', 'watch_process', 'last_updated_ts']
    }, 'inventorySchema');
  }
}

module.exports = new InventorySchema();