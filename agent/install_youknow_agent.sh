

wget https://github.com/somnathpanja/youknow/raw/master/agent/build/usr/local/bin/youknow -O /usr/local/bin/youknow
sudo chmod +rwx /usr/local/bin/youknow

wget https://github.com/somnathpanja/youknow/raw/master/agent/build/etc/init.d/youknow.sh -O /etc/init.d/youknow.sh
sudo chmod +rwx /etc/init.d/youknow.sh

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
fi

echo "Youknow Installed..."
echo "Starting Youknow Service..."

sudo service youknow start

