# YouKnow Monitor 2.0
## Install YouKnow Monitor
  YouKnow runs on node.js thats the only dependency. You need to install node.js manually in the monitor server.

  ```
  sudo wget https://github.com/somnathpanja/youknow/raw/master/install_youknow_monitor.sh -O install_youknow_monitor.sh && sudo chmod +rwx install_youknow_monitor.sh && sudo ./install_youknow_monitor.sh
  ```
## Start Monitor Server

  ```
  cd monitor
  sudo node start.js
  ```
## Default port of Monitor
  By default monitor listen to the port 2600
# YouKnow Agent
  Agent will be running in the system to monitor 

## How to install YouKnow agent
  ```
  sudo wget https://github.com/somnathpanja/youknow/raw/master/agent/install_youknow.sh -O install_youknow.sh && sudo chmod +rwx install_youknow.sh && sudo ./install_youknow.sh
```
## How to start the agent

```
./youknow SYSTEM_UNIQUE_NAME MONITOR_IP MONITOR_PORT
```

Example: ./youknow "server1" 127.0.0.1 2600

## GOOD LUCK
