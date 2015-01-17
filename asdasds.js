/**
 * @fileOverview <explain about this file>
 * @author       somnath
 */

(function (module) {

    var MyClass = function () {
        this._privateVariable = 1;
        this.publicVariable = 2;
    };

    MyClass.prototype.publicApi = function () {
        var thisC = this;
        return thisC._privateApi();
    };

    MyClass.prototype._privateApi = function () {
        var thisC = this;
        return thisC._privateVariable;
    };

    module.exports = MyClass;

})(module);
