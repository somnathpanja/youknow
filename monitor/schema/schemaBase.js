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
    this.fields4Upsert = schema.fields.filter(f => { return f.upsert; });
  }

  // Pick field value into an array
  pick(data) {
    let retVal = [];
    for (let idx in this.fields) {
      retVal.push(data[this.fields[idx]] || (_.isFunction(this.fields[idx].default) ? this.fields[idx].default() : this.fields[idx].default));
    }
    return retVal;
  }

  // Pick field value into an array
  pick4Upsert(data) {
    let retVal = [];
    for (let idx in this.fields4Upsert) {
      retVal.push(data[this.fields[idx]] || (_.isFunction(this.fields[idx].default) ? this.fields[idx].default() : this.fields[idx].default));
    }

    return retVal;
  }
}

module.exports = SchemaBase;