/**
 * @fileOverview <explain about this file>
 * @author       somnath
 */

(function (module) {

    var CallAlertManager = function () {
    };

    CallAlertManager.call = function (phoneNumbers, cb) {
        console.log('Call alert generated');

        cb.apply(null, []);
    };

    module.exports = CallAlertManager;

})(module);
