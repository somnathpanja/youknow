#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <string>
#include <iostream>
#include <sstream>
#include <vector>

using namespace std;

class Top
{
public:
  float load_avg_1m;  // load average over the last 1 minute
  float load_avg_5m;  // load average over the last 5 minutes
  float load_avg_15m; // load average over the last 15 minutes

  float tasks_total_count;
  float tasks_running_count;
  float tasks_sleeping_count;

  float cpu_us; // Time spent in user space
  float cpu_sy; // Time spent in kernel space
  float cpu_ni; // Time spent running niced user processes (User defined priority)
  float cpu_id; // Time spent in idle operations
  float cpu_wa; // Time spent on waiting on IO peripherals (eg. disk)
  float cpu_hi; // Time spent handling hardware interrupt routines. (Whenever a peripheral unit want attention form the CPU, it literally pulls a line, to signal the CPU to service it)
  float cpu_si; // Time spent handling software interrupt routines. (a piece of code, calls an interrupt routine...)
  float cpu_st; // Time spent on involuntary waits by virtual cpu while hypervisor is servicing another processor (stolen from a virtual machine)

  float mem_total;         // Total memory in KiB
  float mem_free;          // Total free memory in KiB
  float mem_used;          // Total used memory in KiB
  float mem_buff_or_cache; // Total buffer or cache in KiB

  float swap_total;     // Total memory in KiB
  float swap_free;      // Total free memory in KiB
  float swap_used;      // Total used memory in KiB
  float swap_available; // Total buffer or cache in KiB

  void parse(std::string str);
};

void Top::parse(std::string str)
{
  vector<string> vv = split(str, "\\n");
}

// for string delimiter
vector<string> split(string s, string delimiter)
{
  size_t pos_start = 0, pos_end, delim_len = delimiter.length();
  string token;
  vector<string> res;

  while ((pos_end = s.find(delimiter, pos_start)) != string::npos)
  {
    token = s.substr(pos_start, pos_end - pos_start);
    pos_start = pos_end + delim_len;
    res.push_back(token);
  }

  res.push_back(s.substr(pos_start));
  return res;
}

int main()
{
  string str = "adsf-+qwret-+nvfkbdsj-+orthdfjgh-+dfjrleih";
  string delimiter = "-+";
  vector<string> v = split(str, delimiter);

  for (auto i : v)
    cout << i << endl;

  return 0;
}