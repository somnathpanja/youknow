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

  /**
   * @description Clone this server object
   */
  public static clone(server: any) {
    return new Server(server.agent_id as string || '',
      server.ip || '',
      server.cpu_count || 0,
      server.platform || '',
      server.stats_interval_ms || 5000,
      server.watch_process || [],
      server.last_updated_ts || 0);
  }

  /**
   * @description Update reference of this server with the updated data
   * @param server 
   */
  public update(server: Server) {
    return new Server(this.agent_id as string, server.ip, server.cpu_count, server.platform,
      server.stats_interval_ms, server.watch_process, server.last_updated_ts);
  }

}
