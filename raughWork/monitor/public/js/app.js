var realTimeDiskChart, realTimeMemChart, realTimeCPUChart,
  realTimeProcessCPUChart, realTimeProcessMemoryChart, historyProcessMemoryChart, historyProcessCPUChart,

  cpuChart, memChart, loadAvgChart, cpuChartData = [], memChartData = [], loadAvgChartData = [];

// add all charts (with axes) to be synced
function syncHandler(e) {
  //console.log(e);
  var chart = e.chart == historyProcessCPUChart ? historyProcessMemoryChart : historyProcessCPUChart;

  if (!chart.options.axisX)
    chart.options.axisX = {};

  if (!chart.options.axisY)
    chart.options.axisY = {};

  if (e.trigger === "reset") {
    chart.options.axisX.viewportMinimum = chart.options.axisX.viewportMaximum = null;
    chart.options.axisY.viewportMinimum = chart.options.axisY.viewportMaximum = null;
    chart.render();
  } else if (chart !== e.chart) {
    chart.options.axisX.viewportMinimum = e.axisX.viewportMinimum;
    chart.options.axisX.viewportMaximum = e.axisX.viewportMaximum;

    chart.options.axisY.viewportMinimum = e.axisY.viewportMinimum;
    chart.options.axisY.viewportMaximum = e.axisY.viewportMaximum;
    chart.render();
  }
}

var updateChart = function (chart, series) {
  chart.updateSeries(series);
}

var clearAllCharts = function () {
  cpuChartData = [];
  memChartData = [];
  loadAvgChartData = [];
  cpuChart.render();
  memChart.render();
  loadAvgChart.render();
};

var updateCPUChartData = function (lastTs, chartType, dataSeries) {
  var chartData;

  if (chartType === 'cpu') {
    chartData = cpuChartData;
  } else if (chartType === 'mem') {
    chartData = memChartData;
  } else if (chartType === 'loadAvg') {
    chartData = loadAvgChartData;
  }

  if (chartData.length === 0) {
    Array.prototype.push.apply(chartData, dataSeries);
  } else {
    chartData.forEach(function (ds, index) {
      Array.prototype.push.apply(ds.dataPoints, dataSeries[index].dataPoints);
      if (ds.dataPoints.length > 1000) {
        ds.dataPoints.splice(0, 1);
      }
    });
  }

  if (chartType === 'cpu') {
    //cpuChart.render();
  } else if (chartType === 'mem') {
    // memChart.render();
  } else if (chartType === 'loadAvg') {
    //loadAvgChart.render();
  }
};


function toHHMMSS(sec) {
  var sec_num = parseInt(sec, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  return hours + ':' + minutes + ':' + seconds;
}

function loadHistoryData(fromDate, toDate) {
  //alert(unit + fromVal + fromUnit);
  var scope = angular.element(document.getElementById("MainWrap")).scope();
  scope.$apply(function () {
    scope.loadHistoryCharts(fromDate, toDate);
  });
}

(function () {
  var app = angular.module('monitoring', []);
  app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);


  app.controller('serverController', ['$window', '$scope', '$http', '$location', function ($window, $scope, $http, $location) {
    var thisC = this;
    this.currentHost = '';
    this.servers = [];
    this.dataUnit = 'raw';
    this.selectedDataResolution = 'raw,1,hour';

    this.cpuDataSeries = [];
    this.memDataSeries = [];
    this.loadAvgDataSeries = [];
    this.nextCall4CPUTS = 0;
    this.nextCall4MEMTS = 0;
    this.nextCall4loadAvgTS = 0;

    //------------STATIC-------
    //this.host = '';
    this.platform = '';
    this.cpu_count = 0;
    this.cpu = 0;
    this.disk_size = 0;
    this.disk_used = 0;
    this.mem_total = 0;
    this.mem_used = 0;
    this.sys_uptime = 0;
    this.loadavg1 = 0;
    this.loadavg15 = 0;
    this.loadavg5 = 0;

    $scope.hello = function (a, b) {
      alert(a, b);
    }

    $http.get('conf.json').success(function (data) {
      thisC.servers = data.nodes;
    });

    var params = $location.search();
    var host = params['server'];
    var fromTs = params['fromTs'];
    var endTs = params['endTs'];

    this.fromTs = (typeof params['fromTs'] !== 'undefined') ? fromTs : (Date.now() - 30 * 60 * 1000); // 30m from now
    this.endTs = (typeof params['endTs'] !== 'undefined') ? endTs : Date.now();

    this.currentHost = host;
    this.selectedServer = host;
    this.nextCall4CPUTS = Number(this.fromTs);
    this.nextCall4MEMTS = Number(this.fromTs);
    this.nextCall4loadAvgTS = Number(this.fromTs);

    $scope.loadHistoryCharts = function (fromVal, toTs) {
      var urlMem = '/stats/mem?host=' + host + '&fromTs=' + fromVal + '&toTs=' + toTs + '&unit=' + thisC.dataUnit;

      $http.get(urlMem).success(function (resData, status, headers, config) {
        //historyProcessMemoryChart.updateSeries(resData);
        historyProcessMemoryChart.options.data = resData;
        historyProcessMemoryChart.options.axisY.maximum = thisC.mem_total * 1000;
        historyProcessMemoryChart.render();
      });

      var urlCpu = '/stats/cpu?host=' + host + '&fromTs=' + fromVal + '&toTs=' + toTs + '&unit=' + thisC.dataUnit;

      $http.get(urlCpu).success(function (resData, status, headers, config) {
        historyProcessCPUChart.options.data = resData;
        historyProcessCPUChart.options.axisY.maximum = thisC.cpu_count * 100;
        historyProcessCPUChart.render();
      });
    };

    thisC.loadHistoryData = function () {
      var hData = [], unitVal = 0;
      let selectedDataResolution = thisC.selectedDataResolution.split(',');
      var unit = selectedDataResolution[0],
        fromVal = Number(selectedDataResolution[1]),
        fromUnit = selectedDataResolution[2];

      switch (fromUnit) {
        case 'hour':
          unitVal = 60 * 60 * 1000;
          break;
        case 'day':
          unitVal = 24 * 60 * 60 * 1000;
          break;
        case 'month':
          unitVal = 30 * 24 * 60 * 60 * 1000;
          break;
        case 'year':
          unitVal = 365 * 24 * 60 * 60 * 1000;
          break;
      }

      thisC.dataUnit = unit;
      fromVal = Date.now() - fromVal * unitVal;

      for (let ts = fromVal; ts <= Date.now(); ts = ts + unitVal) {
        hData.push([ts, Math.floor(Math.random() * 2)]);
      }

      historyBrushChart.updateSeries([{ data: hData }]);
      historyBrushChart.updateOptions({
        chart: {
          selection: {
            enabled: true,
            xaxis: {
              min: hData[0][0],
              max: hData[hData.length - 1][1]
            }
          },
        }
      });
    };

    thisC.onServerSelected = function () {
      var newUrl = 'http://' + $location.host() + ':' + $location.port() + '/?server=' + thisC.selectedServer.host;
      $window.open(newUrl, '_blank');
    };

    //be sure to inject $scope and $location
    var changeLocation = function (url, forceReload) {
      $scope = $scope || angular.element(document).scope();
      if (forceReload || $scope.$$phase) {
        window.location = url;
      }
      else {
        //only use this if you want to replace the history stack
        //$location.path(url).replace();

        //this this if you want to change the URL and add it to the history stack
        $location.path(url);
        $scope.$apply();
      }
    };

    function roundValue(num) {
      return Math.round((num + Number.EPSILON) * 100) / 100;
    }

    function loadStaticData() {
      var urlStaticData = '/stats/system/static?host=' + host + '&ts=' + thisC.nextCall4loadAvgTS;

      $http.get(urlStaticData).success(function (resData, status, headers, config) {
        thisC.host = resData.host;
        thisC.platform = resData.platform;
        thisC.cpu_count = resData.cpu_count;
        thisC.cpu = resData.cpu;
        thisC.disk_size = resData.disk_size;
        thisC.disk_used = resData.disk_used;
        thisC.mem_total = roundValue(resData.mem_total * 0.001);//concerting to GB
        thisC.mem_used = roundValue(resData.mem_used * 0.001);
        thisC.sys_uptime = toHHMMSS(resData.sys_uptime);
        thisC.loadavg1 = resData.loadavg1;
        thisC.loadavg15 = resData.loadavg15;
        thisC.loadavg5 = resData.loadavg5;

        realTimeDiskChart.updateSeries([thisC.disk_used, thisC.disk_size - thisC.disk_used]);

        setTimeout(() => {
          realTimeMemChart.updateSeries([Math.round((resData.mem_used / resData.mem_total) * 100)]);
          realTimeProcessMemoryChart.updateSeries([{ name: "Memory", data: resData.processMem }]);
        }, 500);

        setTimeout(() => {
          realTimeCPUChart.updateSeries([thisC.cpu]);
          realTimeProcessCPUChart.updateSeries([{ name: "CPU(%)", data: resData.processCpu }]);
        }, 1000);
      });
    }

    function loadLoadAvgHistoryData(host) {
      var urlloadAvg = '/stats/loadavg?host=' + host + '&ts=' + thisC.nextCall4loadAvgTS;

      $http.get(urlloadAvg).success(function (resData, status, headers, config) {
        thisC.loadAvgDataSeries = resData;
        updateCPUChartData(thisC.nextCall4loadAvgTS, 'loadAvg', thisC.loadAvgDataSeries);

        var lastDSDps = thisC.loadAvgDataSeries[0].dataPoints;

        if (lastDSDps.length > 0) {
          thisC.nextCall4loadAvgTS = lastDSDps[lastDSDps.length - 1].x;
        }
      });
    }

    function pullDataFromServer() {
      loadStaticData();

      setTimeout(function () {
        pullDataFromServer();
      }, 5000);
    }

    pullDataFromServer();
  }]);
})();


//
// $http.post(url, {session_id: 'fake_sesstion'}).success(function (resData, status, headers, config) {
//   thisC.servers = resData.data;
//   updateChartData(thisC.servers);
//   // this callback will be called asynchronously
//   // when the response is available
//   setTimeout(function () {
//     pullDataFromServer();
//   }, 2000);
// }).error(function (data, status, headers, config) {
//   // called asynchronously if an error occurs
//   // or server returns response with an error status.
//   thisC.servers = [
//     {
//       "host": "Failed to connect to " + url,
//       "port": null,
//       "status": {
//         "cpu": ""
//       }
//     }
//   ];

