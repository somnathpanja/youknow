# YouKnow Monitor 2.0
## Install YouKnow Monitor
  YouKnow runs on node.js thats the only dependency. You need to install node.js manually in the monitor server.

  ```
  sudo wget https://github.com/somnathpanja/youknow/raw/master/install_youknow_monitor.sh -O install_youknow_monitor.sh && sudo chmod +rwx install_youknow_monitor.sh && sudo ./install_youknow_monitor.sh && sudo rm install_youknow_monitor.sh && sudo rm youknow_monitor.zip
  ```
## Start Monitor Server

  ```
  cd youknow-master/monitor
  sudo node start.js
  ```
## Edit Monitor Server config if required

```
nano youknow-master/monitor/conf.json
```

## Default port of Monitor
  By default monitor listen to the port 2600
# YouKnow Agent
  Agent will be running in the system to monitor 

## How to install YouKnow agent
  ```
  sudo wget https://github.com/somnathpanja/youknow/raw/master/agent/install_youknow_agent.sh -O install_youknow_agent.sh && sudo chmod +rwx install_youknow_agent.sh && sudo ./install_youknow_agent.sh && sudo rm install_youknow_agent.sh
```
## How to start the agent

```
./youknow SYSTEM_UNIQUE_NAME MONITOR_IP MONITOR_PORT
```

Example: ./youknow "server1" 127.0.0.1 2600

## GOOD LUCK
