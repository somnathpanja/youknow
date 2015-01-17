/**
 * @fileOverview <explain about this file>
 * @author       somnath
 * App on Worker Server:
 Checks the current memory usage
 API 1: http://IP:1338/server/memory

 */

(function () {
    var express = require('express');
    var os = require('os-utils');
    var app = express();
    app.use(express.json());
    app.use(express.urlencoded());

    app.get('/monitor/status', function (req, res) {
        os.cpuUsage(function (v) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({cpu: Number(v).toPrecision(2)}));
        });
    });

    app.listen(process.argv[2] ? Number(process.argv[2]) : 1338);
})();