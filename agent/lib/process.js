var OS = require('./os');

class Process {
  constructor() {
  }

  static getData() {
    return OS.usageByNames(process.CONFIG.watch_process);
  }
}

module.exports = Process;