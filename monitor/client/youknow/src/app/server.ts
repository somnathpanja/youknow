export interface Server {
    agent_id: String,
    ip: String,
    cpu_count: Number,
    platform: String,
    stats_interval_ms: Number,
    last_updated_ts: Number,
    watch_process: String[]
}