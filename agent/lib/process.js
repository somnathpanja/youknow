var OS = require('./os');

class Process {
  constructor() {
  }

  static getData() {
    return OS.usageByNames(process.CONFIG.watchList);
  }
}

module.exports = Process;