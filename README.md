# YouKnow Monitor 2.0
## Install YouKnow Monitor
  YouKnow runs on node.js thats the only dependency. You need to install node.js manually in the monitor server.

  ```
  sudo wget https://github.com/somnathpanja/youknow/raw/master/install_youknow_monitor.sh -O install_youknow_monitor.sh && sudo chmod +rwx install_youknow_monitor.sh && sudo ./install_youknow_monitor.sh && sudo rm install_youknow_monitor.sh
  ```
### Start Monitor 

  ```
  cd youknow-master/monitor
  sudo node start.js
  ```
### Edit Monitor config if required

```
nano youknow-master/monitor/conf.json
```

### Default port of Monitor
  By default monitor listen to the port 2600
# YouKnow Agent
  Agent will be running in the system to be monitored

### Install YouKnow agent
  ```
  sudo wget https://github.com/somnathpanja/youknow/raw/master/agent/install_youknow_agent.sh -O install_youknow_agent.sh && sudo chmod +rwx install_youknow_agent.sh && sudo ./install_youknow_agent.sh && sudo rm install_youknow_agent.sh
```
### How to start/stop/restart the agent manually

```
sudo service youknow start
sudo service youknow stop
sudo service youknow restart
```
### How to configure agent settings

```
sudo service youknow-service config
```

## GOOD LUCK
