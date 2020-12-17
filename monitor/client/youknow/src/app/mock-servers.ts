import { Server } from './server';

export const SERVERS: Server[] = [
    {
        agent_id: 'NOC_BOX_1', ip: '127.0.0.1', cpu_count: 4,
        platform: 'Linux 64', stats_interval_ms: 5000, last_updated_ts: Date.now(),
        watch_process: ['mongo', 'rabbitmq', 'mysql']
    },
    {
        agent_id: 'NOC_BOX_2', ip: '127.0.0.3', cpu_count: 4,
        platform: 'Linux 64', stats_interval_ms: 5000, last_updated_ts: Date.now(),
        watch_process: ['mongo', 'rabbitmq', 'mysql']
    }
];
