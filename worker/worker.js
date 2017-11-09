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
    app.use(express.urlencoded({extended: true}));

    app.get('/monitor/status', function (req, res) {
        os.cpuUsage(function (cpu) {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({
                cpu: Number(cpu).toPrecision(2),
                total_memory: os.totalmem()/1000,
                free_memory_percentage : os.freememPercentage(),
                load_avg : os.loadavg(5)
            }));
        });
    });

    app.get('/hikecpu', function (req, res) {
        res.send(200); // Return before start computing

        // Do some CPU computation
        for (var i = 0; i < 100000; i++) {
            console.log(i * Math.log(i));
        }
    });

    app.listen(process.argv[2] ? Number(process.argv[2]) : 1338);
})();