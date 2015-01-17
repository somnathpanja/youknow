/**
 * @fileOverview <explain about this file>
 * @author       somnath
 * App on Worker Server:
 App on Monitor Server:
 http://IP:1338/monitor/login
 http://MONITOR_IP:1338/monitor/server/set (Set the iP to monitor)
 http://MONITOR_IP:1338/server/memory
 input { user_id, password}
 returns { “IP1” : {memory:12121, load_average: 2 }}
 Do a outbound call to N people
 At least 2 person in a conference if not keep on calling all people and ask to join conference asking join by pressing 1


 */

(function () {
    var HttpClient = require('./../common/http-client');
    var express = require('express');
    var os = require('os-utils');
    var CallAlertManager = new require('./call-alert-manager.js');
    var app = express();
    app.use(express.json());
    app.use(express.urlencoded());

    var users = {
        "somnath": "123"
    };

    var HOST_LIST = [
        {name: "Spiderman", host: "172.31.39.130", port: 1338},
        {name: "Spiderman", host: "172.31.39.131", port: 1338},
        {name: "Spiderman", host: "172.31.39.132", port: 1338}
    ];

    var SERVERS_STATUS = [];

    var isValidSession = function (session) {
        return true; // For demo purpose just return success
    };

    app.post('/monitor/login', function (req, res) {
        var uid = req.body.user_id;
        var pass = req.body.password;

        if (!uid) {
            res.send(400, {err: 'User id not defined'});
            return;
        }

        if (!pass) {
            res.send(400, {err: 'Password id not defined'});
            return;
        }

        if (!users[uid] || (users[uid] !== pass)) {
            res.send(500, {err: 'Invalid credential'});
            return;
        }

        res.send(200, {status: 'success', session: 'SESSION_' + (new Date()).getMilliseconds()});
    });

    app.post('/monitor/register_host', function (req, res) {
        var name = req.data.name;
        var host = req.data.host;
        var port = req.data.port;

        HOST_LIST.push({name: name, host: host, port: port});
        res.send(200, {msg: 'Host ' + name + 'successfully registered'});
    });

    app.post('/monitor/status', function (req, res) {
        var sessionId = req.body.session_id;

        if (!isValidSession(sessionId)) {
            res.send(401, {msg: 'Session expired'});
            return;
        }

        res.send(200, {data: SERVERS_STATUS});
    });

    app.get('/', function (req, res) {
        res.send(200, {data: SERVERS_STATUS});
    });

    var checkServersStatus = function () {
        var retVal = [];
        var length = HOST_LIST.length;

        var checkServer = function () {
            if (length == 0) {
                SERVERS_STATUS = retVal;
                process.nextTick(function () {
                    analyzeServersStatus(function (err) {
                        if (err && err.isStop) {
                            return;
                        }

                        setTimeout(function () { checkServersStatus(); }, 30 * 1000);
                    });

                });
                return;
            }

            var worker = HOST_LIST[length - 1];
            var httpClient = new HttpClient();

            httpClient.send('http://' + worker.host + ':' + worker.port + '/monitor/status', null,
                function (err, response) {

                    if (response.code === 200) {
                        retVal.push({
                            host  : worker.host,
                            port  : worker.port,
                            status: JSON.parse(response.data.toString())
                        });
                    } else {
                        console.log('Error Returned by Worker');
                        console.log(response);

                        retVal.push({
                            host  : worker.host,
                            port  : worker.port,
                            status: { msg: 'failed to connect. Generating call alert.'}
                        });
                    }

                    length--;
                    checkServer();
                });
        };

        checkServer();
    };

    checkServersStatus();

    var analyzeServersStatus = function (cb) {
//        {
//            "host": "localhost",
//            "port": 1338,
//            "status": {
//            "cpu": "0.021"
//        }

        var callAlert = [];
        var msgPrefix = 'This knowlarity server critical alert, ';
        SERVERS_STATUS.forEach(function (item) {
            if (item.cpu > 90) {
                callAlert.push({host: item.host, message: msgPrefix + item.host + ' is under high load.'});
            }

            console.log(item);
        });

        if(callAlert.length==0){
            console.log('All server are healthy..');
            cb.apply(null, [
                {isStop: false}
            ]);

            return;
        }

        CallAlertManager.call(callAlert, function (err) {
            if (err) {
                console.log(err);
                cb.apply(null, [
                    {isStop: false}
                ]);

                return;
            }

            console.log('People called successfully..Monitoring process stopped for 15 minutes.');
            process.nextTick(function () {
                setTimeout(function () {
                    cb.apply(null, [
                        {isStop: false}
                    ]);
                }, 15 * 60 * 1000);
            });
        });
    };

    app.listen(1337);
})();