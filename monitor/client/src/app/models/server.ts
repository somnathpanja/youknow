export class Server {
  agent_id?: string;
  ip: string;
  cpu_count: number;
  platform: string;
  stats_interval_ms: number;
  watch_process: string[];
  last_updated_ts: number;

  constructor(agent_id: string, ip: string, cpu_count: number, platform: string,
    stats_interval_ms: number, watch_process: string[], last_updated_ts: number) {
    this.agent_id = agent_id;
    this.ip = ip;
    this.cpu_count = cpu_count;
    this.platform = platform;
    this.stats_interval_ms = stats_interval_ms;
    this.watch_process = watch_process;
    this.last_updated_ts = last_updated_ts;
  }


}
