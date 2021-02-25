#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <fstream>
#include <stdlib.h>
#include <unistd.h>
#include <string>
#include <vector>

using namespace std;

std::vector<std::string> &Arguments()
{
  static std::vector<std::string> arguments;
  return arguments;
}

string getCMD(void)
{
  string nextCMD;
  // Read from the text file
  ifstream MyReadFile("/tmp/youknow_cmd.tmp");

  // Use a while loop together with the getline() function to read the file line by line
  while (getline(MyReadFile, nextCMD))
  {
    // Output the text from the file
    cout << nextCMD;
  }

  // Close the file
  MyReadFile.close();

  return nextCMD;
}

int main(int argc, char *argv[])
{
  string host;
  string port;
  string monitor;
  string agent_id = argv[1];

  if (argv[2])
  {
    host = argv[2];
    port = argv[3] ? argv[3] : "80";
  }
  else
  {
    host = "127.0.0.1";
    port = "2600";
  }

  monitor = "http://" + host + ((port == "80") ? "" : ":" + port);

  cout << "Youknow is started successfully"
       << endl;
  cout << "Monitor host:" << host << " port:" << port << endl;
  cout << "\n"
       << endl;

  system((string("curl ") + string(monitor) + string("/status")).c_str());

  //static const string top = "(COLUMNS=9999 top -b -c -n 1 -n1 > /tmp/youknow_top.tmp ; cat /tmp/youknow_top.tmp  | head -n 5 > /tmp/youknow_sys.tmp)";
  //string agentId = "if [[ \"" + agent_id + "\" == \"na\" ]]; then dmidecode -t system | grep UUID | awk '{print $2 }'; else echo \"" + agent_id + "\"; fi";
  string agentId = "echo \"" + agent_id + "\"";
  string top = "COLUMNS=9999 top -b -c -n2 > /tmp/youknow_top.tmp";
  string optimizeTop = "one=1 ; lineno=$(cat /tmp/youknow_top.tmp | fgrep -n \"load average\" | tail -1 | cut -f1 -d:) ; lineno=$(( $lineno - $one )) ;  sed -i '1,'\"$lineno\"' d' /tmp/youknow_top.tmp";
  string copySys = "cat /tmp/youknow_top.tmp | head -n 5 > /tmp/youknow_sys.tmp";
  string cpuCount = "cat /proc/cpuinfo | grep processor | wc -l | awk -v QT='\"' '{print \"{\" QT \"cpu_count\" QT \":\" $1 \"}\"}'";

  string platform = "uname -s -m | awk -v QT='\"' '{print \"{\" QT \"platform\" QT \":\" QT $1 \" \" $2 QT \"}\"}'";

  string disk = "TERM=xterm df -k -m |tail -n+1 | awk -v QT='\"' '{n+=1} {t+=$2} {u+=$3} {f+=$4} {print \"{\" QT \"disk_total\" QT \":\"t\",\" QT \"disk_used\" QT \":\"u\",\" QT \"disk_free\" QT \":\"f\"}\"}' | tail -1";
  // top -b -c -n 1 -n1 | awk 'FNR==1 {print "{ \"up_time\":" $5 "\"load_avg1\":" $10 "\"load_avg5\":" $11 "\"load_avg15\":" $12 " }"}'
  string uptime = "awk -v QT='\"' '{print \"{\" QT \"uptime\" QT \":\" $1 \"}\"}' /proc/uptime ";
  string loadAvg = "cat /proc/loadavg | awk -v QT='\"' 'FNR==1 { print \"{\" QT \"app\" QT \":\" QT \"sys\" QT \",\" QT \"load_avg1\" QT \":\" $1 \",\" QT \"load_avg5\" QT \":\" $2 \",\" QT \"load_avg15\" QT \":\" $3 \"}\"}'";
  // top -b -c -n 1 -n1 | awk 'FNR==3 {print "{ \"cpu_us\":" $2 ", \"cpu_sy\":" $4 ", \"cpu_ni\":" $6 ", \"cpu_id\":" $8 ", \"cpu_wa\":" $10 ", \"cpu_hi\":" $12 ", \"cpu_si\":" $14 "}"}'
  string topCPUPercentage = "cat /tmp/youknow_sys.tmp | awk -v QT='\"' 'FNR==3 {print \"{\" QT \"app\" QT \":\" QT \"sys\" QT \", \" QT \"cpu_us\" QT \":\" $2 \", \" QT \"cpu_sy\" QT \":\" $4 \", \" QT \"cpu_ni\" QT \":\" $6 \", \" QT \"cpu_id\" QT \":\" $8 \", \" QT \"cpu_wa\" QT \":\" $10 \", \" QT \"cpu_hi\" QT \":\" $12 \", \" QT \"cpu_si\" QT \":\" $14 \", \" QT \"cpu_st\" QT \":\" $16 \"}\"}'";

  string topMemory = "cat /tmp/youknow_sys.tmp | awk -v QT='\"' 'FNR==4 {print \"{\" QT \"app\" QT \":\" QT \"sys\" QT \", \" QT \"mem_total\" QT \":\" $4*1.024 \", \" QT \"mem_free\" QT \":\" $6*1.024 \", \" QT \"mem_used\" QT \":\" $8*1.024 \", \" QT \"mem_buff_cache\" QT \":\" $10*1.024 \"}\"}'";
  string topSwapMemory = "cat /tmp/youknow_sys.tmp | awk -v QT='\"' 'FNR==5 {print \"{\" QT \"app\" QT \":\" QT \"sys\" QT \", \" QT \"mem_swap_total\" QT \":\" $3*1.024 \", \" QT \"mem_swap_free\" QT \":\" $5*1.024 \", \" QT \"mem_swap_used\" QT \":\" $7*1.024 \", \" QT \"mem_swap_avail\" QT \":\" $9*1.024 \"}\"}'";

  string upload = "curl --silent -H \"Content-Type: text/plain\" -X POST --data-binary @- " + monitor + "/worker/raw/system";

  string process = "watchlist=$(curl --silent " + monitor + "/worker/watchlist/" + agent_id + "); cat /tmp/youknow_top.tmp | grep \"$watchlist\" | awk -v QT='\"' '$1 ~ /^[[:digit:]]/ {print \"{\" QT \"pid\" QT \": \" $1 \", "
                   "\" QT \"mem_virt\" QT \": \" QT $5 QT \", "
                   "\" QT \"mem_res\" QT \": \" QT $6 QT \", "
                   "\" QT \"cpu_percent\" QT \": \" $9 \", "
                   "\" QT \"mem_used_percent\" QT \": \" $10 \", "
                   "\" QT \"app\" QT \": \" QT $12 QT \", "
                   "\" QT \"args\" QT \": [\" QT $13 QT \",\" QT $14 QT \",\" QT $15 QT \"]\""
                   "\"}\" }'";
  //string uploadProcess = "curl -H \"Content-Type: text/plain\" -X POST --data-binary @- " + monitor + "/worker/raw/process";

  while (true)
  {
    sleep(5);

    system(top.c_str());
    system(optimizeTop.c_str());
    system(copySys.c_str());

    system(("( " + agentId + " ; hostname ; hostname -I ; " + cpuCount +
            "; " + platform +
            "; " + uptime +
            "; " + disk +
            "; " + loadAvg +
            "; " + topCPUPercentage +
            "; " + topMemory +
            "; " + topSwapMemory +
            "; " + process +
            ") | " + upload + " | awk 'FNR==1 { {printf \"\rUPLOAD STATUS: %s              \",$0} }'; tput civis;")
               .c_str());

    // system((process + " | " + uploadProcess).c_str());
  }

  // POST A SINGLE FILE CONTENT
  //system("curl --data-binary \"@/tmp/youknow_sys.tmp\" http://localhost:2600/worker");

  // Print Host name and IP
  // system("hostname && hostname -i > /tmp/youknow_host.tmp");

  // system("curl http://localhost:2600/worker/cmd > /tmp/youknow_cmd.tmp");
  // system(getCMD().append(" | curl -H \"Content-Type: text/plain\" -X POST --data-binary @- http://localhost:2600/worker/raw/system").c_str());

  // System CPU AND MEMORY details in file
  // system("top -b -c -n 1 -n1 | head -n 5 > /tmp/youknow_sys.tmp");

  //  system("cat /tmp/youknow_host.tmp /tmp/youknow_sys.tmp | curl -H \"Content-Type: text/plain\" -X POST --data-binary @- http://localhost:2600/worker/raw/system");

  // System CPU AND MEMORY details
  // system("top -b -c -n 1 -n1 | grep \"Cns\" | awk '$1 ~ /^[[:digit:]]/ {print \"{'pid': \" $1 \", 'mem_virt': \" $5 \", 'mem_res': \" $6 \", 'cpu_percent': \" $9 \", 'mem_used_percent': \" $10 \", 'app': \" $12 \"}\" }'");
  //system(("( hostname ; hostname -i ; " + process + " ) | " + uploadProcess).c_str());

  return 0;
}