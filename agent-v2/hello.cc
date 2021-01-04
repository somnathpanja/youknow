#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <fstream>
using namespace std;

static const string top = "(top -b -c -n 1 -n1 > /tmp/youknow_top.tmp ; cat /tmp/youknow_top.tmp  | head -n 5 > /tmp/youknow_sys.tmp)";
// top -b -c -n 1 -n1 | awk 'FNR==1 {print "{ \"up_time\":" $5 "\"load_avg1\":" $10 "\"load_avg5\":" $11 "\"load_avg15\":" $12 " }"}'
static const string topUpTimeAndLoadAvg = "cat /tmp/youknow_sys.tmp | awk 'FNR==1 {print \"{\'app\':'sys', 'up_time':\" $5 \"'load_avg1':\" $10 \"'load_avg5':\" $11 \"'load_avg15':\" $12 \" }\"}'";
// top -b -c -n 1 -n1 | awk 'FNR==3 {print "{ \"cpu_us\":" $2 ", \"cpu_sy\":" $4 ", \"cpu_ni\":" $6 ", \"cpu_id\":" $8 ", \"cpu_wa\":" $10 ", \"cpu_hi\":" $12 ", \"cpu_si\":" $14 "}"}'
static const string topCPUPercentage = "cat /tmp/youknow_sys.tmp | awk 'FNR==3 {print \"{'app':'sys', 'cpu_us':\" $2 \", 'cpu_sy':\" $4 \", 'cpu_ni':\" $6 \", 'cpu_id':\" $8 \", 'cpu_wa':\" $10 \", 'cpu_hi':\" $12 \", 'cpu_si':\" $14 \"}\"}'";

static const string topMemory = "cat /tmp/youknow_sys.tmp | awk 'FNR==4 {print \"{'app':'sys', 'mem_total':\" $3 \", 'mem_free':\" $5 \", 'mem_used':\" $7 \", 'mem_buff_cache':\" $9 \"}\"}'";
static const string topSwapMemory = "cat /tmp/youknow_sys.tmp | awk 'FNR==5 {print \"{'app':'sys', 'mem_swap_total':\" $3 \", 'mem_swap_free':\" $5 \", 'mem_swap_used':\" $7 \", 'mem_swap_avail':\" $9 \"}\"}'";

static const string upload = "curl -H \"Content-Type: text/plain\" -X POST --data-binary @- http://localhost:2600/worker/raw/system";
static const string process = "cat /tmp/youknow_top.tmp | grep \"Cns\" | awk '$1 ~ /^[[:digit:]]/ {print \"{'pid': \" $1 \", 'mem_virt': \" $5 \", 'mem_res': \" $6 \", 'cpu_percent': \" $9 \", 'mem_used_percent': \" $10 \", 'app': \" $12 \"}\" }'";
//static const string uploadProcess = "curl -H \"Content-Type: text/plain\" -X POST --data-binary @- http://localhost:2600/worker/raw/process";

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

int main()
{
  cout << "Hello, this is my first C++ program on Linux" << endl;
  system("echo -n '\nHostname: '");
  system("hostname && hostname -i > /tmp/youknow_hostname.tmp");
  system("echo -n '\nIP Address: '");
  system("ip a");
  system("echo -n '\nDate/Time: '");
  system("date");
  system("echo '\nFilesystem Utilization:'");
  system("df -h; echo");

  system(("( hostname ; hostname -i ; " + topUpTimeAndLoadAvg +
          "; " + topCPUPercentage +
          "; " + topMemory +
          "; " + topSwapMemory +
          "; " + process +
          ") | " + upload)
             .c_str());
             
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