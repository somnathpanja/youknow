var chart, chartData = [];

var updateChartData = function (servers) {
    if (chartData.length === 0) {
        servers.forEach(function (server) {
            chartData.push({ // dataSeries object
                /*** Change type "column" to "bar", "area", "line" or "pie"***/
                type      : "line",
                dataPoints: []
            });
        });
    }
    var idx, date = new Date();
    for (idx in servers) {
        chartData[idx].dataPoints.push({x: date, y: servers[idx].status.load_avg});
        if (chartData[idx].dataPoints.length > 10) {
            chartData[idx].dataPoints.splice(0, 1);
        }
    }

    chart.render();
};

(function () {
    var app = angular.module('monitoring', []);

    app.controller('serverController', ['$http', function ($http) {
        var thisC = this;
        this.servers = [];

        this.workload = function (ip, port) {
            //alert(ip);
            var url = 'http://' + ip + ':' + port + '/hikecpu';
            $http.get(url).success(function (resData, status, headers, config) {
                alert(status);
            });
        };

        function pullDataFromServer() {
            // Simple POST request (passing data)
            var url = '/monitor/status';
            $http.post(url, {session_id: 'fake_sesstion'}).
                success(function (resData, status, headers, config) {
                    thisC.servers = resData.data;
                    updateChartData(thisC.servers);
                    // this callback will be called asynchronously
                    // when the response is available
                    setTimeout(function () {

                        pullDataFromServer();
                    }, 2000);
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    thisC.servers = [
                        {
                            "host"  : "Failed to connect to " + url,
                            "port"  : null,
                            "status": {
                                "cpu": ""
                            }
                        }
                    ];
                });

        };

        pullDataFromServer();
    }]);
})();

