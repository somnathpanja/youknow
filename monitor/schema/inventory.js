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
        { name: 'ip', type: 'TEXT', default: 'os' },
        { name: 'cpu_count', type: 'INTEGER', default: 0 }, // nothing but ts
        { name: 'platform', type: 'TEXT', default: 0 }
      ],
      keys: [
        `PRIMARY KEY (agent_id)`
      ],
      upsertKey: ['agent_id']
    }, 'inventorySchema');
  }
}

module.exports = global._InventorySchema = InventorySchema;