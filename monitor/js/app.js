(function () {
    var app = angular.module('monitoring', []);
    var MONITOR_HOST = "localhost";
    // var MONITOR_HOST = "54.175.186.238";
    var MONITOR_HOST_PORT = 1337;

    app.controller('serverController', ['$http', function ($http) {
        var thisC = this;
        this.servers = [];//status.data;
        var url = '/monitor/status';

        // Simple POST request (passing data)
        $http.post(url, {session_id: 'fake_sesstion'}).
            success(function (resData, status, headers, config) {
                thisC.servers = resData.data;
                // this callback will be called asynchronously
                // when the response is available
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

    }]);
})();