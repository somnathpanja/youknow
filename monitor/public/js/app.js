var cpuChart, memChart, loadAvgChart, cpuChartData = [], memChartData = [], loadAvgChartData = [];

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
    cpuChart.render();
  } else if (chartType === 'mem') {
    memChart.render();
  } else if (chartType === 'loadAvg') {
    loadAvgChart.render();
  }
};

(function () {
  var app = angular.module('monitoring', []);
  app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);


  app.controller('serverController', ['$window', '$scope', '$http', '$location', function ($window, $scope, $http, $location) {
    var thisC = this;
    this.currentHost = '';
    this.servers = [];
    this.cpuDataSeries = [];
    this.memDataSeries = [];
    this.loadAvgDataSeries = [];
    this.nextCall4CPUTS = 0;
    this.nextCall4MEMTS = 0;
    this.nextCall4loadAvgTS = 0;

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

    thisC.selectByDate = function (option) {
      var newUrl = 'http://' + $location.host() + ':' + $location.port() + '/?server=' + host + '&fromTs=';
      var fromTs = 0;
      switch (option) {
        case '5m':
          fromTs = (Date.now() - 5 * 60 * 1000);
          break;
        case '15m':
          fromTs = (Date.now() - 15 * 60 * 1000);
          break;
        case '30m':
          fromTs = (Date.now() - 30 * 60 * 1000);
          break;
        case '1h':
          fromTs = (Date.now() - 60 * 60 * 1000);
          break;
        case '2h':
          fromTs = (Date.now() - 2 * 60 * 60 * 1000);
          break;
        case '3m':
          fromTs = (Date.now() - 3 * 60 * 60 * 1000);
          break;
        case '6m':
          fromTs = (Date.now() - 6 * 60 * 60 * 1000);
          break;
        case '12h':
          fromTs = (Date.now() - 12 * 60 * 60 * 1000);
          break;
        case '1d':
          fromTs = (Date.now() - 24 * 60 * 60 * 1000);
          break;
        case '2d':
          fromTs = (Date.now() - 2 * 24 * 60 * 60 * 1000);
          break;
      }
      newUrl += fromTs;
      changeLocation(newUrl, true);
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

    function pullDataFromServer() {
      // Simple POST request (passing data)
      var urlCPU = '/stats/cpu?host=' + host + '&ts=' + thisC.nextCall4CPUTS;

      $http.get(urlCPU).success(function (resData, status, headers, config) {
        thisC.cpuDataSeries = resData;
        updateCPUChartData(thisC.nextCall4CPUTS, 'cpu', thisC.cpuDataSeries);

        var lastDSDps = thisC.cpuDataSeries[0].dataPoints;

        if (lastDSDps.length > 0) {
          thisC.nextCall4CPUTS = lastDSDps[lastDSDps.length - 1].x;
        }
      });

      var urlloadAvg = '/stats/loadavg?host=' + host + '&ts=' + thisC.nextCall4loadAvgTS;

      $http.get(urlloadAvg).success(function (resData, status, headers, config) {
        thisC.loadAvgDataSeries = resData;
        updateCPUChartData(thisC.nextCall4loadAvgTS, 'loadAvg', thisC.loadAvgDataSeries);

        var lastDSDps = thisC.loadAvgDataSeries[0].dataPoints;

        if (lastDSDps.length > 0) {
          thisC.nextCall4loadAvgTS = lastDSDps[lastDSDps.length - 1].x;
        }
      });

      var urlMem = '/stats/mem?host=' + host + '&ts=' + thisC.nextCall4CPUTS;

      $http.get(urlMem).success(function (resData, status, headers, config) {
        thisC.memDataSeries = resData;
        updateCPUChartData(thisC.nextCall4MEMTS, 'mem', thisC.memDataSeries);

        var lastDSDps = thisC.memDataSeries[0].dataPoints;

        if (lastDSDps.length > 0) {
          thisC.nextCall4MEMTS = lastDSDps[lastDSDps.length - 1].x;
        }

        setTimeout(function () {
          pullDataFromServer();
        }, 5000);
      });
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

