/**
 * @fileOverview Monitoring Http Server
 * @author       somnath
 */

(function () {
    var fs = require('fs');
    var HttpClient = require('./../common/http-client');
    var express = require('express');
    var os = require('os-utils');
    var CallAlertManager = new require('./call-alert-manager.js');
    var app = express();

    app.use(express.json());
    app.use(express.urlencoded());
    app.use('/', express.static(__dirname));

    /**
     * @description Users should go to mongodb or dynamodb, for demo purpose her is the static list of users
     * @type {{somnath: string}}
     */
    var USERS = {
        "somnathpanja@gmail.com": "wBaLmd",
        "somnath2"              : "222",
        "somnath3"              : "333"
    };

    /**
     * @description List of server will go to mongodb, for demo purpose here is the static list of ips
     * @type {{somnath: string}}
     */
//    var HOST_LIST = [
//        {name: "Spiderman", host: "localhost", port: 1338},
//        {name: "Spiderman", host: "localhost", port: 1338},
//        {name: "Spiderman", host: "localhost", port: 1338}
//    ];

    var HOST_LIST = [
        {name: "Spiderman", host: "172.31.39.130", port: 1338},
        {name: "Spiderman", host: "172.31.39.131", port: 1338},
        {name: "Spiderman", host: "172.31.39.132", port: 1338}
    ];

    var SERVERS_STATUS = [];

    /**
     * @description This function is not yet implemented. For demo purpose it just returns true means success
     * @param session
     * @returns {boolean}
     */
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

        if (!USERS[uid] || (USERS[uid] !== pass)) {
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

    /**
     * @description  This function basically does http post call to listed servers and collects
     *               the current system status
     */
    var checkServersStatus = function () {
        var retVal = [];
        var length = HOST_LIST.length;

        var checkServer = function () {

            // Once all server checks done
            if (length == 0) {
                SERVERS_STATUS = retVal;
                process.nextTick(function () {
                    analyzeServersStatus(function (err) {
                        if (err && err.isStop) {
                            return;
                        }

                        // Rescheduling status check after 30 sec
                        setTimeout(function () { checkServersStatus(); }, 1 * 1000);
                    });

                });
                return;
            }

            var worker = HOST_LIST[length - 1];
            var httpClient = new HttpClient();

            // Do call to worker api
            httpClient.send('http://' + worker.host + ':' + worker.port + '/monitor/status', null, function (err, res) {
                // if there is not error api will return http status 200
                if (res.code === 200) {
                    retVal.push({
                        host  : worker.host,
                        port  : worker.port,
                        status: JSON.parse(res.data.toString())
                    });
                } else {
                    console.log('Error Returned by Worker');
                    console.log(res);

                    retVal.push({
                        host  : worker.host,
                        port  : worker.port,
                        status: { err: 1, msg: 'failed to connect. Generating call alert.'}
                    });
                }

                length--;
                checkServer();
            });
        };

        checkServer();
    };

    checkServersStatus();

    /**
     * @description This function analyzes the all data returned by all worker server. If anything critical
     *              then generate call alert
     * @param cb
     */
    var analyzeServersStatus = function (cb) {
        var callAlert = [];

        SERVERS_STATUS.forEach(function (item) {
            if (item.status.err) {
                callAlert.push(item.host + ' is unreachable.');
            } else if (item.status.cpu > 90) {
                callAlert.push(item.host + ' is under high load CPU exceeded ' + item.status.cpu + ' percentage.');
            } else if (item.status.load_avg > 4) {
                callAlert.push(item.host + ' is under high load CPU exceeded ' + item.status.cpu + ' percentage.');
            }

            console.log(item);
        });

        if (callAlert.length === 0) {
            console.log('All server are healthy..');
            cb.apply(null, [
                {isStop: false}
            ]);

            return;
        }

        CallAlertManager.call(callAlert, function (err) {
            // If failed then going for next round of checking..will try to call in a while again
            if (err) {
                console.log(err);
                cb.apply(null, [
                    {isStop: false}
                ]);

                return;
            }

            console.log('People called successfully..Monitoring process paused for 15 minutes.');

            process.nextTick(function () {
                setTimeout(function () {
                    cb.apply(null, [
                        {isStop: false}
                    ]);
                }, 2 * 60 * 1000);  //15 * 60 * 1000
            });
        });
    };

    app.listen(1337);
})();