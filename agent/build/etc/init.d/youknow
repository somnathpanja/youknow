#!/bin/bash

case "$1" in 
start)
   /usr/local/bin/youknow `cat /etc/youknow/youknow.conf` > /var/log/youknow.log &
   echo $!>/var/run/youknow.pid
   ;;
stop)
   kill `cat /var/run/hit.pid`
   rm /var/run/youknow.pid
   ;;
restart)
   $0 stop
   $0 start
   ;;
status)
   if [ -e /var/run/youknow.pid ]; then
      echo youknnow is running, pid=`cat /var/run/youknow.pid`
   else
      echo youknow.sh is NOT running
      exit 1
   fi
   ;;
*)
   echo "Usage: $0 {start|stop|status|restart}"
esac

exit 0