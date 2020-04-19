var _ = require('lodash');

class SchemaBase {
  constructor(schema, name) {
    this.schemaName = name;
    Object.assign(this, schema);

    this.fields = schema.fields.map(f => { return f.name; });
    this.fieldsSupportsAggregation = this.fields.filter(f => { return (schema.noAggregation.indexOf(f) === -1); });
    this.fieldsString = schema.fields.map(fld => { return `${fld.name} ${fld.type}`; }).join();
    this.fieldValuesDummy = schema.fields.map(fld => { return `?`; }).join();
    this.keysString = schema.keys.map(key => { return key; }).join();
  }

  pick(data) {
    let retVal = [];
    for (let idx in this.fields) {
      retVal.push(data[this.fields[idx]] || 0);
    }
    return retVal;
  }
}

module.exports = SchemaBase;