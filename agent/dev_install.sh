
sudo rm /usr/local/bin/youknow

sudo cp build/usr/local/bin/youknow /usr/local/bin/youknow
sudo chmod +rwx /usr/local/bin/youknow

sudo cp build/etc/init.d/youknow-service /etc/init.d/youknow-service
sudo chmod +rwx /etc/init.d/youknow-service

sudo cp build/etc/systemd/system/youknow.service /etc/systemd/system/youknow.service
sudo chmod +rwx /etc/systemd/system/youknow.service

sudo mkdir /etc/youknow/

CONF_FILE=/etc/youknow/youknow.conf

if test -f "$CONF_FILE"; then
  echo "$CONF_FILE exists.."
else
  echo "Enter this server unique name:"
  read agent_id  
  echo "Enter monitor host name/ip:" 
  read monitor_host
  echo "Enter monitor port(default:80):"
  read monitor_port

  echo "$agent_id $monitor_host $monitor_port" > /etc/youknow/youknow.conf
  echo "AGENT_ID=$agent_id\nHOST=$monitor_host\nPORT=$monitor_port" > /etc/youknow/youknow.progconf
fi

echo "Youknow Installed..."
echo "Starting Youknow Service..."

sudo systemctl daemon-reload
sudo systemctl enable youknow
sudo service youknow stop
sudo service youknow start

