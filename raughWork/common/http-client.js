/**
 * @fileOverview <explain about this file>
 * @author       somnath
 */

(function (module) {
    "use strict";
    var http = require('http');
    var https = require('https');
    var nodeUrl = new require('url');
    var qs = require('querystring');

    var HttpClient = function () {
        this.headers =
        {
            'Content-Type'  : 'application/x-www-form-urlencoded',
            'Content-Length': 0
        };
    };

    HttpClient.Protocals = {
        Http : 'http',
        Https: 'https'
    };

    HttpClient.prototype.send = function (uri, data, cb) {
        var parserUri = nodeUrl.parse(uri);
        var reqParam = {
            method            : data ? 'POST' : 'GET',
            hostname          : parserUri.hostname,
            path              : parserUri.path,
            host              : parserUri.host,
            port              : parserUri.port,
            headers           : this.headers,
            // requestCert    :  this._verify,
            // secureProtocol : 'SSLv3_method',
            rejectUnauthorized: false,
            timeout           : 60 * 1000 // 60 seconds
        };

        var postData = null;

        if (data) {
            postData = qs.stringify(data);
            reqParam.headers['Content-Length'] = Buffer.byteLength(postData);
        }

        var client = (parserUri.protocol === HttpClient.Protocals.Https) ? https : http;
        var response = {};
        var req = client.request(reqParam, function (res) {
            var dataBuffer = new Buffer(0);

            res.on('data', function (chunk) {
                if (dataBuffer)
                    dataBuffer = Buffer.concat([dataBuffer, chunk], dataBuffer.length + chunk.length);
                else
                    dataBuffer = chunk;

                return chunk.length;
            });

            res.on('end', function () {
                if (response.err) {
                    return;
                }

                response.code = res.statusCode;
                response.headers = res.headers;
                response.data = dataBuffer;
                cb.apply(null, [response.err, response]);
            });
        });

        if (data) {
            req.write(postData);
        }

        req.end();

        req.on('error', function (err) {
            response.err = err;
            cb.apply(null, [response.err, response]);
        });

        return this;
    };

    module.exports = HttpClient;

})(module);