/**
 * @fileOverview <explain about this file>
 * @author       somnath
 */

(function (module) {

    var HttpClient = require('./../common/http-client');

    var CallAlertManager = function () {
    };

    CallAlertManager.call = function (alertMsgs, cb) {
        console.log('Call alert gener');
        var msgPrefix = 'This is knowlarity server critical alert. ';
        var finalAlertString = msgPrefix + alertMsgs.join('. ');
        console.log('Final Call message:' + finalAlertString);
        var httpClient = new HttpClient();
        var baseUrl = "http://dev.knowlarity.com/api/voice/quickCall/";

        var getParams = {
            username        : "somnathpanja@gmail.com",
            password        : "wBaLmd",
            ivr_id          : "800067027",
            is_transactional: "yes",
            phone_book      : "9741661394," + finalAlertString,
            format          : "xml"
        };

        var key, urlParms = [];

        for (key in getParams) {
            urlParms.push(key + '=' + encodeURIComponent(getParams[key]));
        }

        // var finalurl = "http://dev.knowlarity.com/api/voice/quickCall/?username=somnathpanja@gmail.com&password=wBaLmd&ivr_id=800067027&phone_book='9986034061%2C%27Test%20to%20Speach%27'&format=xml;
        var finalurl = baseUrl + '?' + urlParms.join('&');

        // Do call to worker api
        httpClient.send(finalurl, null, function (err, response) {
            // if there is not error api will return http status 200
            if (response.code === 200) {
                console.log('***Call placed successfully****');
                console.log(response.data.toString());
                cb.apply(null, [null, response.data.toString()]);
                return;
            }

            console.log('***Failed to generate call alert****');
            console.log(response);
            cb.apply(null, [
                {msg: 'Failed to generate call alert!', http_code: response.code}
            ]);
        });
        cb.apply(null, []);
    };

    module.exports = CallAlertManager;

})(module);
