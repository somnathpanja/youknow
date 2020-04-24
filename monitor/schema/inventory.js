if (global._InventorySchema) {
  module.exports = global._InventorySchema;
  return;
}

var SchemaBase = require('./schemaBase');

class InventorySchema extends SchemaBase {
  constructor() {
    super({
      fields: [
        { name: 'agent_id', type: 'TEXT', default: 'os' },
        { name: 'ip', type: 'TEXT', default: 'os', upsert: true },
        { name: 'cpu_count', type: 'INTEGER', default: 0, upsert: true },
        { name: 'platform', type: 'TEXT', default: 0, upsert: true },
        { name: 'stats_interval_ms', type: 'INTEGER', default: 5000, upsert: true },
        { name: 'watch_process', type: 'TEXT', default: '[]', upsert: true },
        { name: 'last_updated_ts', type: 'INTEGER', default: () => { return Date.now(); }, upsert: true }
      ],
      keys: [
        `PRIMARY KEY (agent_id)`
      ],
      upsertKey: ['agent_id']
    }, 'inventorySchema');
  }
}

module.exports = global._InventorySchema = InventorySchema;