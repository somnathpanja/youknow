(function(){
class SR {
    static constructor() {

    }

    static staticConstructor() {
        SR.PIBy2 = (Math.PI / 180);
        SR.Culture = {};
        SR.Number = {};
        SR.Date = {};
        SR.String = {};
        SR.ONE_YEAR_IN_MS = 31540000000;
        SR.ONE_MONTH_IN_MS = 2628000000;
        SR.ONE_DAY_IN_MS = 86400000;
        SR.ONE_HOUR_IN_MS = 3600000;
        SR.ONE_MINUTE_IN_MS = 60000;
        SR.ONE_SECOND_IN_MS = 1000;
    }

    /**
    *
    * @param val
    * @returns {boolean}
    */
    static isEmptyOrNullString(val) {
        return (val === null || typeof val === 'undefined' || val === "" || val === 'null');
    }

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static isDefined(val) {
        return !(val === null || typeof val === 'undefined');
    }

    static toHHMMSS(sec) {
        var sec_num = parseInt(sec, 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        var time = hours + ':' + minutes + ':' + seconds;
        return time;
    }

    static clone(item) {
        var newObj = (item instanceof Array) ? [] : new SR.Object();
        for (var i in item) {
            if (i === 'clone')
                continue;
            if (item[i] && typeof item[i] === "object") {
                newObj[i] = this.clone(item[i]);
            } else
                newObj[i] = item[i];

        }
        return newObj;
    }

    static distance(pointA, pointB) {
        return Math.sqrt(Math.pow((pointA.x - pointB.x), 2) + Math.pow((pointA.y - pointB.y), 2));
    }

    /**
     *
     * @param obj {Object} fields to be defined in this object
     * @param fieldNames [Array(String)]
     * @returns {*} Error/null
     */
    static ValidateRequiredFields(obj, fieldNames) {
        for (var index = 0; index < fieldNames.length; index++) {
            if (!this.isDefined(obj[fieldNames[index]])) {
                return new Error(fieldNames[index] + " is not defined");
            }
        }

        return null;
    }

    /**
     *
     * @param obj {Object} fields to be defined in this object
     * @param fieldNames [Array(String)]
     * @returns {*} Error/null
     */
    static ValidateNumericFields(obj, fieldNames) {
        var result = this.ValidateRequiredFields(obj, fieldNames);

        if (result) {
            return result;
        } else {
            for (var index = 0; index < fieldNames.length; index++) {
                if (!this.isNumber(obj[fieldNames[index]])) {
                    return new Error(fieldNames[index] + " should be numeric");
                }
            }
        }

        return null;
    }

    static getTypeName(obj) {
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec((obj).constructor.toString());
        return (results && results.length > 1) ? results[1] : "";
    }

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static isUnDefined(val) {
        return (!this.isDefined(val));
    }

    /**
     *
     * @param val
     * @returns {value}
     */
    static getIfDefined(val) {
        return this.isDefined(val) ? val : undefined;
    }

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static isString(val) {
        return (typeof val === 'string');
    }

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static isObject(val) {
        return (typeof val === 'object');
    }

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static isDate(val) {
        return (val instanceof Date);
    }

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static isNumber(val) {
        if (!this.isDefined(val))
            return false;

        // Trim the value
        var valN = val.toString().replace(/^\s+|\s+$/g, '');

        if (valN === '') {
            return false;
        }

        valN = Number(valN);
        return !(isNaN(val));
    }

    static getNumber(val, def) {
        return this.isNumber(val) ? Number(val) : (this.isDefined(def) ? def : 0);
    }

    static getPositiveNum(n) {
        n = Number(n);
        return n < 0 ? 0 : n;
    }

    static log10(val) {
        return Math.log(val) / Math.LN10;
    }

    /**
     *
     * @param val
     * @returns {boolean}
     */
    static isFunction(val) {
        return (typeof val === 'function');
    }

    static encodeXml(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
    }

    static decodeXml(str) {
        return str.replace(/&quot;/g, '"')
            .replace(/&gt;/g, '>')
            .replace(/&lt;/g, '<')
            .replace(/&apos;/g, "'")
            .replace(/&amp;/g, '&');
    }

    static getTsNowInMilliSeconds() {
        return new Date().getTime();
    }

    static getTsNowInSeconds() {
        return Math.round(new Date().getTime() / 1000);
    }

    static getTsCurrentHour() {
        var tsSeconds = this.getTsNowInSeconds();
        var tsStartHour = Math.round(tsSeconds / 3600) * 3600;
        return tsStartHour;
    }

    static isEmptyObject(obj) {
        var thisC = this;

        if (thisC.isUnDefined(obj)) {
            return true;
        }

        if (thisC.isObject(obj) === false) {
            return true;
        }

        return Object.keys(obj).length === 0 ? true : false;
    }

    static isPointInsideRect(point, rect) {
        return point.x >= rect.x && point.x <= (rect.x + rect.w) && point.y >= rect.y && point.y <= (rect.y + rect.h);
    }

    static isPointInsideBox(point, x, y, w, h) {
        return point.x >= x && point.x <= (x + w) && point.y >= y && point.y <= (y + h);
    }


    static getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

SR.staticConstructor();
SR.async =   {};
SR.Algorithm = class Algorithm {
    // A recursive binary search function. It returns 
    // location of x in given array arr[l..r] is present, 
    // otherwise -1 
    static nearestPointOnArray(arr, x, l, r) {
        if (r >= l) {
            let mid = Math.round(l + (r - l) / 2);

            // If the element is present at the middle 
            // itself 
            if (arr[mid] == x)
                return mid;

            // If element is smaller than mid, then 
            // it can only be present in left subarray 
            if (arr[mid] > x)
                return this.nearestPointOnArray(arr, x, l, mid - 1);

            // Else the element can only be present 
            // in right subarray 
            return this.nearestPointOnArray(arr, x, mid + 1, r);
        } else {
            r++;
            l--;

            l = l < 0 ? 0 : l;
            r = r > arr.length - 1 ? arr.length - 1 : r;

            let colosedIndex = l;
            let minDistance = Math.abs(x - arr[colosedIndex]);

            for (let i = colosedIndex + 1; i <= r; i++) {
                let distance = Math.abs(x - arr[i]);
                if (distance < minDistance) {
                    minDistance = distance;
                    colosedIndex = i;
                }
            }

            return colosedIndex;
        }
    }

    // A recursive binary search function. It returns 
    // location of x in given array arr[l..r] is present, 
    // otherwise -1 
    static nearestPoint(arr, property, x, l, r) {
        if (r >= l) {
            let mid = Math.round(l + (r - l) / 2);

            // If the element is present at the middle 
            // itself 
            if (arr[mid][property] == x)
                return mid;

            // If element is smaller than mid, then 
            // it can only be present in left subarray 
            if (arr[mid][property] > x)
                return this.nearestPoint(arr, property, x, l, mid - 1);

            // Else the element can only be present 
            // in right subarray 
            return this.nearestPoint(arr, property, x, mid + 1, r);
        } else {
            r++;
            l--;

            l = l < 0 ? 0 : l;
            r = r > arr.length - 1 ? arr.length - 1 : r;

            let colosedIndex = l;
            let minDistance = Math.abs(x - arr[colosedIndex][property]);

            for (let i = colosedIndex + 1; i <= r; i++) {
                let distance = Math.abs(x - arr[i][property]);
                if (distance < minDistance) {
                    minDistance = distance;
                    colosedIndex = i;
                }
            }

            return colosedIndex;
        }
    }

    // A recursive binary search function. It returns 
    // location of x in given array arr[l..r] is present, 
    // otherwise -1 
    static binarySearch(arr, l, r, x) {
        if (r >= l) {
            let mid = l + (r - l) / 2;

            // If the element is present at the middle 
            // itself 
            if (arr[mid] == x)
                return mid;

            // If element is smaller than mid, then 
            // it can only be present in left subarray 
            if (arr[mid] > x)
                return this.binarySearch(arr, l, mid - 1, x);

            // Else the element can only be present 
            // in right subarray 
            return this.binarySearch(arr, mid + 1, r, x);
        }

        // We reach here when element is not 
        // present in array 
        return -1;
    }

    static distanceFromABox(rect, p) {
        var dx = Math.max(rect.x - p.x, 0, p.x - (rect.x + rect.w));
        var dy = Math.max(rect.y - p.y, 0, p.y - (rect.y + rect.h));
        return Math.sqrt(dx * dx + dy * dy);
    }

    static distanceBetweenPoints(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    }

    static distanceBetween2Points(point1, point2) {
        return Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
    }

    /**
     * 
     * @param {*} number 
     * @range {Array} [1000, 'K', 10000, 'M']
     * @returns String
     */
    static applyRangeOnNumber(number, range) {
        number = Number(number);
        if (!SR.isNumber(number) || !range)
            return { val: number, unit: '' };

        let isNegative = (number < 0);
        number = Math.abs(number);

        for (let i = range.length - 1; i > 0; i -= 2) {
            if (number >= range[i - 1]) {
                let val = number / range[i - 1];
                return { val: isNegative ? Number('-' + val) : val, unit: range[i] };
            }
        }

        return { val: isNegative ? Number('-' + number) : number, unit: '' };
    }

    /**
     * 
     * @param {*} data 
     * @param {*} formatString 
     * @param {*} formatRange [1000, 'K', 10000, 'M']
     */
    static formatValue(data, formatString, formatRange) {
        if (formatRange) {
            let { val, unit } = SR.Algorithm.applyRangeOnNumber(data, formatRange);
            return this.applyValueFormat(val, formatString) + unit;
        } else {
            return this.applyValueFormat(data, formatString);
        }
    }

    static applyValueFormat(data, formatString, valueObject) {
        if (formatString) {
            if (SR.isDate(data)) {
                return SR.Date.format(data, formatString);
            } else if (SR.isNumber(data)) {
                return (data < 0) ? '-' + SR.Number.format(Math.abs(data), formatString) : SR.Number.format(data, formatString);
            } else if (SR.isString(data)) {
                return SR.String.format(data, formatString, valueObject);
            } else {
                // console.log('Error: Unknow SR.DataType');
                return data;
            }
        } else {
            return data;
        }
    }

    static hex2char(hex) {
        return hex.match(/.{1,2}/g).map(function (v) {
            return String.fromCharCode(parseInt(v, 16));
        }).join('');
    }
};



/*-----------------------------
Definatin of Bounds
--------------------------------*/

SR.Bounds = class Bounds {
    constructor(pX, pY, pWidth, pHeight) {
        this.x = pX ? pX : 0;
        this.y = pY ? pY : 0;
        this.width = pWidth ? pWidth : 0;
        this.height = pHeight ? pHeight : 0;

        this.maxX = this.x + this.width;
        this.maxY = this.y + this.height;
    }

    calculate(points) {
        if (points.length > 0) {
            this.x = this.MinX(points);
            this.y = this.MinY(points);
            this.maxX = this.MaxX(points);
            this.maxY = this.MaxY(points);
            this.width = this.maxX - this.x;
            this.height = this.maxY - this.y;
        }
    }

    MaxX(points) {
        var len = points.length;

        if (len > 0) {
            var max = points[0].x;

            SR.Collections.List.each(points, (point) => {
                if (point.x > max) max = point.x;
            });

            return max;
        }

        return NaN;
    }

    MinX(points) {
        var len = points.length;

        if (len > 0) {
            var min = points[0].x;

            SR.Collections.List.each(points, function (point) {
                if (point.x < min) min = point.x;
            });

            return min;
        }

        return NaN;
    }

    MaxY(points) {
        var len = points.length;

        if (len > 0) {
            var max = points[0].y;

            SR.Collections.List.each(points, (point) => {
                if (point.y > max) max = point.y;
            });

            return max;
        }

        return NaN;
    }

    MinY(points) {
        var len = points.length;

        if (len > 0) {
            var min = points[0].y;

            SR.Collections.List.each(points, (point) => {
                if (point.y < min) min = point.y;
            });

            return min;
        }

        return NaN;
    }
};
/* List */

/**
 * @param itemOrItems it can be a single item or an array of item or a list which implements length property
 * @description List will automatically connects all items from all array and marge them inside it
 * @constructor
 */
var List = function (itemOrItems) {
    if (typeof itemOrItems !== 'undefined') {
        this.addRange(itemOrItems);
    }

    this.changed = null;
};

List.prototype = [];
List.constructor = List;
List.Actions = {
    Add: 0,
    Remove: 1
};

/**
 * @description Add an item to list
 * @param pItem
 */
List.prototype.add = function (pItem) {
    this.push(pItem);
    if (this.changed)
        this.changed(this, { action: List.Actions.Add, items: [pItem] });
};

/**
 * @description remove an item from list
 * @param pItem
 * @returns {*}
 */
List.prototype.remove = function (pItem) {
    var index = this.indexOf(pItem);
    if (index !== -1) {
        let item = this.removeAt(index);
        if (this.changed) {
            this.changed(this, { action: List.Actions.Remove, items: [item] });
        }
        return item;
    }
};

/**
 * @description Accepts an array to be merged. If argument is not an array then
 * single item will be added in the existing list
 * @param pItems
 */
List.prototype.addRange = function (pItems) {
    if (typeof pItems !== 'undefined' && typeof pItems.length !== 'undefined') {
        if (pItems.length > 100000) {
            while (pItems.length) {
                this.push.apply(this, pItems.splice(0, 100000));
            }
        } else {
            this.push.apply(this, pItems);
        }
    } else {
        this.push(pItems);
    }

    if (this.changed)
        this.changed(this, { action: List.Actions.Add, items: pItems });
};

/**
 * @description Removes item which is added last
 * @returns {*}
 */
List.prototype.removeLast = function () {
    let item = (this.length > 0) ? this.removeAt(this.length - 1) : undefined;
    if (this.changed) {
        this.changed(this, { action: List.Actions.Remove, items: [item] });
    }
    return item;
};

/**
 * @description Remove all items from list
 * @returns {Array} Array which is removed
 */
List.prototype.clear = function () {
    let items = this.splice(0, this.length);
    if (this.changed) {
        this.changed(this, { action: List.Actions.Remove, items: items });
    }
    return items;
};

/**
 * @description insert an item at particular position
 * @param pIndex
 * @param pItem
 */
List.prototype.insertAt = function (pIndex, pItem) {
    this.splice(pIndex, 0, pItem);
    if (this.changed)
        this.changed(this, { action: List.Actions.Add, items: [pItem] });
};

List.prototype.removeAt = function (pIndex) {
    var ret = this.splice(pIndex, 1)[0];
    if (this.changed)
        this.changed(this, { action: List.Actions.Add, items: [ret] });
    return ret;
};

List.prototype.count = function () {
    return this.length;
};

List.prototype.first = function () {
    return this.length > 0 ? this[0] : undefined;
};

List.prototype.last = function (index) {
    index = index ? index : 0;
    return this.length > index ? this[this.length - index - 1] : undefined;
};

List.prototype.top = function (count) {
    var thisC = this, i = 0;

    if (count < 0)
        throw new Error('count can not be negative');
    var list = instanceFactory(thisC);
    if (count > this.length) {
        for (i = 0; i < this.length; i++)
            list.add(this[i]);
    } else {
        for (i = 0; i < count; i++)
            list.add(this[i]);
    }

    return list;
};

List.prototype.bottom = function (count) {
    var thisC = this, i = 0;
    if (count < 0)
        throw new Error('count can not be negative');

    var list = instanceFactory(thisC);
    if (count > this.length) {
        for (i = 0; i < this.length; i++)
            list.add(this[i]);
    } else if (count <= this.length) {
        for (i = (this.length - count); i < this.length; i++)
            list.add(this[i]);
    }

    return list;
};

List.prototype.range = function (from, to) {
    var thisC = this;
    if (from < 0 || from > to)
        throw new Error('from index should be >= 0 & < list length & <= "to" value');

    var list = instanceFactory(thisC);
    for (var i = from; i <= to; i++)
        list.add(this[i]);
    return list;
};

List.prototype.any = function () {
    return (this.length > 0);
};

List.prototype.each = function (cb) {
    List.each(this, cb, arguments[1]);
};

List.prototype.eachFromLast = function (cb) {
    List.eachFromLast(this, cb);
};

List.prototype.toArray = function () {
    return this.slice(0);
};

List.prototype.clean = function (deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};

List.prototype.sum = function (selector) {
    var sum = 0, i;
    if (SR.isString(selector)) {
        for (i = 0; i < this.length; i++) {
            sum += Number(this[i][selector]);
        }
    } else if (selector) {
        for (i = 0; i < this.length; i++) {
            sum += Number(selector(this[i]));
        }
    } else {
        for (i = 0; i < this.length; i++) {
            sum += Number(this[i]);
        }
    }

    return sum;
};

List.prototype.max = function (selector) {
    if (this.length === 0)
        throw "Empty List";

    var nums = [], i;

    if (SR.isFunction(selector)) {
        for (i = 0; i < this.length; i++) {
            nums.push(selector(this[i]));
        }
    } else if (SR.isString(selector)) {
        for (i = 0; i < this.length; i++) {
            nums.push(this[i][selector]);
        }
    }
    else
        nums = this;

    if (nums.length > 100000) {
        let max = nums[0];
        for (let int = 1; int < nums.length; int++) {
            max = max > nums[int] ? max : nums[int];
        }
        return max;
    } else {
        return Math.max.apply(this, nums);
    }
};

List.prototype.min = function (selector) {
    if (this.length === 0)
        throw "Empty List";

    var nums = [], i;

    if (SR.isFunction(selector)) {
        for (i = 0; i < this.length; i++) {
            nums.push(selector(this[i]));
        }
    } else if (SR.isString(selector)) {
        for (i = 0; i < this.length; i++) {
            nums.push(this[i][selector]);
        }
    }
    else
        nums = this;

    if (nums.length > 100000) {
        let min = nums[0];
        for (let int = 1; int < nums.length; int++) {
            min = min < nums[int] ? min : nums[int];
        }
        return min;
    } else {
        return Math.min.apply(this, nums);
    }
};

List.prototype.avg = function (selector) {
    return (this.length === 0) ? 0 : (this.sum(selector) / this.length);
};

List.prototype.select = function (selector) {
    return List.select(this, selector);
};

List.select = function (array, selector) {
    var list;

    if (SR.isString(selector)) {
        list = instanceFactory(array, array.map(item => { return item[selector]; }));
    } else {
        list = instanceFactory(array, array.map(selector));
    }

    return list;
};

List.prototype.selectMulti = function (selector) {
    return List.selectMulti(this, selector);
};

List.selectMulti = function (array, selector) {
    var list = instanceFactory(array);

    if (SR.isString(selector)) {
        list = instanceFactory(array, array.map((t) => { return t[selector]; }));
    } else {
        list = instanceFactory(array);

        for (let idx = 0; idx < array.length; idx++) {
            list.addRange(selector(array[idx]));
        }
    }
    return list;
};

List.prototype.where = function (conditionFunc) {
    var thisC = this;
    var func = conditionFunc;
    var list = instanceFactory(thisC, this.filter(conditionFunc));
    return list;
};

List.prototype.orderByAsc = function (keySelector) {
    var thisC = this;
    var list = instanceFactory(thisC);
    list.sort(function (a, b) {
        return keySelector(a) - keySelector(b);
    });
    return list;
};

List.prototype.orderByDesc = function (keySelector) {
    var thisC = this;
    var list = instanceFactory(thisC);
    list.sort(function (a, b) {
        return keySelector(b) - keySelector(a);
    });
    return list;
};

List.prototype.groupBy = function (keySelector) {
    var thisC = this;
    var groups = {};
    this.each(function (item) {
        var key = SR.isString(keySelector) ? item[keySelector] : keySelector(item);
        if (!groups[key]) {
            groups[key] = instanceFactory(thisC);
        }
        groups[key].add(item);
    });

    var retList = instanceFactory(thisC);
    for (var key in groups) {
        if (groups.hasOwnProperty(key)) {
            retList.add({ key: key, value: groups[key] });
        }
    }

    return retList;
};

List.prototype.any = function () {
    return this.length > 0;
};

List.prototype.unique = function () {
    var u = {}, a = instanceFactory(this);
    for (var i = 0, l = this.length; i < l; ++i) {
        if (u.hasOwnProperty(this[i])) {
            continue;
        }
        a.push(this[i]);
        u[this[i]] = 1;
    }
    return a;
};

List.prototype.getXml = function () {
    var xml = '';
    this.each(function (item) {
        xml += item.getXml();
    });

    return xml;
};

List.prototype.eachAsync = function (delegate, onDone) {
    List.eachAsync(this, delegate, onDone);
};

/**
 * @static Static method
 * @param instance
 * @returns {boolean}
 */
List.isList = function (instance) {
    return (instance instanceof List);
};

/**
 * @description loop for each item
 * @static Static method
 * @param array
 * @param cb
 * @param onDone
 */
List.each = function (array, cb, onDone) {
    var len = array.length;
    for (var i = 0; i < len; i++) {
        if (cb(array[i], i) === false) {
            break;
        }
    }

    if (onDone)
        onDone();
};

/**
 * @description loop for each item
 * @static Static method
 * @param array
 * @delegate function pointer to be called in loop params: (item, index, continueCallback)
 * @onDone function will be called on loop end or any error occurred
 * @param cb
 */
List.eachAsync = function (array, delegate, onDone) {
    try {
        var idx = -1;
        var continueLoop = function () {
            var err = arguments[0];

            if (!err) {
                if (++idx < array.length) {
                    delegate(array[idx], idx, continueLoop);
                } else if (idx === array.length) {
                    if (onDone) onDone.apply(null, arguments);
                }
            } else {
                if (onDone) onDone.apply(null, arguments);
            }
        };

        continueLoop(null);
    } catch (er) {
        onDone.apply(null, [er]);
    }


};

/**
 * @description loop for nth iteration
 * @static Static method
 * @param noOfIteration Number of iteration
 * @param delegate function pointer to be called in loop params: (item, index, continueCallback)
 * @param onDone function will be called on loop end or any error occurred
 */
List.loopAsyn = function (noOfIteration, delegate, onDone) {
    try {
        var idx = -1;
        var continueLoop = function () {
            var err = arguments[0];
            var isStopSignal = arguments[1];

            if (!err) {
                if (isStopSignal === true) {
                    if (onDone) onDone.apply(null, arguments);
                } else if (++idx < noOfIteration) {
                    delegate(idx, continueLoop);
                } else if (idx === noOfIteration) {
                    if (onDone) onDone.apply(null, arguments);
                }
            } else {
                if (onDone) onDone.apply(null, arguments);
            }
        };

        continueLoop(null);
    } catch (er) {
        onDone.apply(null, [er]);
    }
};

/**
 * @description loop from last
 * @static Static method
 * @param array
 * @param cb
 */
List.eachFromLast = function (array, cb) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (cb(array[i], i) === false) {
            break;
        }
    }
};

/**
   * Execute unlimited functions sequentially & asynchronously
   * @example List.exeAsync(f1, f2, f3);
   */
List.sequentialExe = function () {
    var delegates = arguments;
    /// DEF:delegates, are function pointers.
    var idx = -1;
    var len = delegates.length;
    var onDone = delegates[--len];

    var continueLoop = function () {
        idx++;
        var err = arguments[0];

        if (err) {
            onDone(err);
            return;
        }

        if (idx < len) {
            var args = Array.prototype.slice.call(arguments);
            args.shift(); // removing err as first item
            args.unshift(continueLoop); // adding first item
            delegates[idx].apply(null, args);
        } else {
            onDone();
        }
    };

    continueLoop();
};

/**
 * @description A Queue
 * @constructor
 */
var Queue = function () {
};

Queue.prototype = List.prototype;
Queue.constructor = Queue;
Queue.prototype.pushItem = function (item) {
    this.add(item);
};

Queue.prototype.popItem = function () {
    if (this.length > 0) {
        return this.removeAt(0);
    }
};

/**
 * @description A fixed length queue
 * @constructor
 */
var FixedQueue = function (maxCount) {
    this._maxCount = maxCount ? maxCount : 10;
};

FixedQueue.prototype = Queue.prototype;
FixedQueue.constructor = FixedQueue;

/**
 * @description Automatically keeps the fixed length by removing the old items from the rare
 * @return returns item which is popped
 * @param item
 */
FixedQueue.prototype.pushItem = function (item) {
    this.add(item);
    if (this.length > this._maxCount) {
        return this.removeAt(0);
    }
};

/**
 * @description Instance factory for collection
 * @param instance
 * @returns {*}
 */
var instanceFactory = function (instance, items = []) {
    if (instance instanceof List) {
        return new List(items);
    } else if (instance instanceof Queue) {
        return new Queue(items);
    } else if (instance instanceof FixedQueue) {
        return new FixedQueue(instance._maxCount);
    } else return new List(items);
};

var Collections = {
    List: List,
    Queue: Queue,
    FixedQueue: FixedQueue
};

SR.Collections = Collections;
SR.CSS_LIB = class CSS_LIB {
    static square(w, h, color) {
        return `<div style="display:inline-block; height: ${w}px;  width: ${h}px;  background-color: ${color};"></div>`;
    }

    static circle(w, h, color) {
        return `<div style="display:inline-block; height: ${w}px;  width: ${h}px;  background-color: ${color};  border-radius: 50%;"></div>`;
    }

    static triangleUp(size, color = '#555') {
        return `<div style="display:inline-block; height: 0;  width: 0; border-left: ${size}px solid transparent; border-right: ${size}px solid transparent; border-bottom: ${2 * size}px solid ${color};"></div>`;
    }
};
SR.Object = class _Object extends Object {
    constructor() {
        super();
    }

    clone() {
        return SR.clone(this);
    }
};

SR.Line = class Line {
    constructor(bounds) {
        this.type = "rect";
        this._bounds = bounds || { x1: 0, y1: 0, x2: 0, y2: 0 };
    }

    render() {
        throw "render() not implemented";
    }

    hit(point) {
        if (this.hitTestEnabled)
            throw "hit() not implemented";
        else
            return false;
    }
};
SR.Point = class Point extends SR.Object {
    constructor(pX, pY) {
        super();
        this.x = pX;
        this.y = pY;
    }

    equals(point) {
        return (this.x === point.x && this.y === point.y);
    }

    toArray(point) {
        return [this.x, this.y];
    }
};
SR.Profiler = class Profiler {
    static staticConstructor() {
        Profiler._profile = {};
    }

    static start(moduleName) {
        SR.Profiler._profile[moduleName] = new Date();
    }

    static end(moduleName, isTextDisplay) {
        if (SR.Profiler._profile[moduleName]) {
            var diffInMs = ((new Date()) - this._profile[moduleName]);
            SR.Profiler._profile[moduleName] = diffInMs;
            if (isTextDisplay) {
                var logVal = 'Module:' + moduleName + ', ProcessingTime: ';
                logVal += (diffInMs < 1000) ? diffInMs + ' ms' : (diffInMs / 1000) + ' sec';
                return logVal;
            }
            return diffInMs;
        }
        
        return null;
    }

    static getInfo(key, value) {
        var logVal = "";
        for (key in SR.Profiler._profile) {
            var diffInMs = SR.Profiler._profile[key];
            logVal += '\nModule:' + key + ', ProcessingTime: ' +
                ((diffInMs < 1000) ? diffInMs + ' ms' : (diffInMs / 1000) + ' sec');
        }

        return logVal;
    }
};

SR.Profiler.staticConstructor();

SR.Rect = class Rect extends SR.Object {
    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
    }

    equals(point) {
        return (this.x === point.x && this.y === point.y &&
            this.width === point.width && this.height === point.height);
    }

    isPointInside(point) {
        SR.isPointInsideBox(point, this.x, this.y, this.w, this.h);
    }

    applyRealPadding(padding) {
        this.x += padding[0];
        this.y += padding[1];
        this.w -= (padding[0] + padding[2]);
        this.h -= (padding[1] + padding[3]);
    }

    applyGap(padding) {
        this.x += padding[0];
        this.y += padding[1];
        this.w -= padding[2];
        this.h -= padding[3];
    }
};
// jshint ignore: start
/**
 * String.format for JavaScript 1.16.1
 * https://github.com/dmester/sffjs
 *  
 * Built: 2019-07-22T15:11:55.991Z
 *
 * Copyright (c) 2009-2019 Daniel Mester Pirttijärvi
 *
 * This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 * 
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 * 
 * 1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 * 
 * 2. Altered source versions must be plainly marked as such, and must not be
 *    misrepresented as being the original software.
 * 
 * 3. This notice may not be removed or altered from any source distribution.
 * 
 */

SR.Culture = (function() {
    "use strict";

    // ***** Public Interface *****
    var sffjs = {
            /**
             * The version of the library String.Format for JavaScript.
             * @type string
             */
            version: "1.16.1",
            
            /**
             * Sets the current culture, used for culture specific formatting.
             * @param {string} languageCode The IETF language code of the culture, e.g. en-US or en.
             */
            setCulture: function (languageCode) {
                currentCultureId = languageCode;
                updateCulture();
            },
            
            /**
             * Registers an object containing information about a culture.
             * @param {*} culture Culture object.
             */
            registerCulture: function (culture) {
                cultures[culture.name[toUpperCase]()] = fillGapsInCulture(culture);
                
                // ...and reevaulate current culture
                updateCulture();
            }
        },
        
    // ***** Shortcuts *****
        toUpperCase = "toUpperCase",
   
    // ***** Private Variables *****
    
        // This is the default values of a culture. Any missing format will default to the format in CULTURE_TEMPLATE.
        // The invariant culture is generated from these default values.
        CULTURE_TEMPLATE = {
            name: "", // Empty on invariant culture
            d: "MM/dd/yyyy",
            D: "dddd, dd MMMM yyyy",
            t: "HH:mm",
            T: "HH:mm:ss",
            M: "MMMM dd",
            Y: "yyyy MMMM",
            s: "yyyy-MM-ddTHH:mm:ss",
            _M: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            _D: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            _r: ".", // Radix point
            _t: ",", // Thounsands separator
            _c: "¤#,0.00", // Currency format string
            _ct: ",", // Currency thounsands separator
            _cr: ".",  // Currency radix point
            _am: "AM",
            _pm: "PM"
        },
    
        // Generate invariant culture
        INVARIANT_CULTURE = fillGapsInCulture({}),
    
        // Holds the current culture object
        currentCulture,
    
        // Holds the id of the current culture. The id is also included in the culture object, but the 
        // culture object might be replaced during runtime when a better matching culture is registered.
        currentCultureId = typeof navigator != "undefined" && (navigator.systemLanguage || navigator.language) || "",
    
        // Holds all registered external cultures, i.e. not the invariant culture
        cultures = {};
    
    
    // ***** Private Methods *****
    
    // General helpers
    
    /**
     * Pads the specified value with zeroes to the left until it reaches the specified length.
     * @param {*} value Value to zeropad. 
     * @param {number} len Minimum length of result.
     * @returns {string}
     */
    function zeroPad(value, len) {
        var s = "" + value;
        while (s.length < len) s = "0" + s;
        return s;
    }

    /**
     * Returns `true` if `value` is not null or undefined.
     * @param {*} value 
     */
    function hasValue(value) {
        return value != null;
    }
    
    /**
     * Returns the first of the two values that is not NaN.
     */
    function numberCoalesce(value1, value2) {
        return isNaN(value1) ? value2 : value1;
    }
    
    
    // Culture functions
    
    /**
     * This method will fill gaps in the specified culture with information from the invariant culture.
     */
    function fillGapsInCulture(culture) {
        // Add missing formats from the culture template
        for (var key in CULTURE_TEMPLATE) {
            culture[key] = culture[key] || CULTURE_TEMPLATE[key];
        }
        
        // Construct composite formats if they are not already defined
        culture.f = culture.f || culture.D + " " + culture.t;
        culture.F = culture.F || culture.D + " " + culture.T;
        culture.g = culture.g || culture.d + " " + culture.t;
        culture.G = culture.G || culture.d + " " + culture.T;
        
        // Add aliases
        culture.m = culture.M;
        culture.y = culture.Y;
        
        return culture;
    }
    
    /**
     * This method will update the currently selected culture object to reflect the currently set LCID (as far as possible).
     */
    function updateCulture() {
        sffjs.LC = currentCulture = 
            currentCultureId && 
            (
                cultures[currentCultureId[toUpperCase]()] || 
                cultures[currentCultureId.split("-")[0][toUpperCase]()]
            ) || INVARIANT_CULTURE;
    }
    
    
    // Maths
    
    function ensureFixedPoint(numberString) {
        var parts = numberString.split("e");
        var result = parts[0];
        
        if (parts.length > 1) {
            // Convert exponential to fixed-point number
            var exponent = Number(parts[1]);
            result = result.replace(".", "");
            
            if (exponent < 0) {
                while (++exponent < 0) {
                    result = "0" + result;
                }
                result = "0." + result;
            }
            else {
                while (exponent >= result.length) {
                    result += "0";
                }
            }
        }
        
        return result;
    }
    
    /**
     * Generates a string representation of the specified number with the specified number of digits.
     * @param {number} number The value to be processed.
     * @param {number} [decimals] The maximum number of decimals. If not specified, the value is not rounded.
     * @returns {string} The rounded absolute value as a string.
     */
    function numberToString(number, decimals) {
        var result = ensureFixedPoint(Math.abs(number).toString());
        
        var radixIndex = result.indexOf(".");
        if (radixIndex > 0 && result.length - radixIndex - 1 > decimals) {
            // Rounding required
            
            // Add 1 to string representation of the number to improve 
            // the chance that toFixed rounds correctly.
            result = ensureFixedPoint(Number(result + "1").toFixed(decimals));
            
            // Trim excessive decimal zeroes
            if (decimals > 0) {
                result = result.replace(/\.?0+$/, "");
            }
        }
        
        return result;
    }
    
    /**
     * Counts the number of integral digits in a number converted to a string by the JavaScript runtime.
     * @param {string} numberString 
     * @returns {number}
     */
    function numberOfIntegralDigits(numberString) {
        var point = numberString.indexOf(".");
        return point < 0 ? numberString.length : point;
    }
    
    /**
     * Counts the number of decimal digits in a number converted to a string by the JavaScript runtime
     * @param {string} numberString 
     * @returns {number}
     */
    function numberOfDecimalDigits(numberString) {
        var point = numberString.indexOf(".");
        return point < 0 ? 0 : numberString.length - point - 1;
    }
    
    
    // Formatting helpers
    
    /**
     * This function resolves a path on the format `<membername>(.<membername>|[<index>])*`
     * and evaluates the value.
     * @param {string} path A series of path components separated by points. Each component is either an index in square brackets.
     * @param {*} value An object on which the path is evaluated.
     */
    function resolvePath(path, value) {
        // Parse and evaluate path
        if (hasValue(value)) {
            var followingMembers = /(\.([a-zA-Z_$]\w*)|\[(\d+)\])/g,
                match = /^[a-zA-Z_$]\w*/.exec(path);
                
            value = value[match[0]];
            
            // Evaluate path until we reach the searched member or the value is undefined/null
            while (hasValue(value) && (match = followingMembers.exec(path))) {
                value = value[match[2] || Number(match[3])];
            }
        }
        
        return value;
    }
    
    /**
     * Writes a value to an array in groups of three digits.
     * @param {string[]} out An array used as string builder to which the grouped output will be appended. The array
     * may have to properties that affect the output:
     * 
     * * `g`: the number of integral digits left to write.
     * * `t`: the thousand separator.
     *   
     * If any of those properties are missing, the output is not grouped.
     * @param {string} value The value that will be written to `out`.
     */
    function groupedAppend(out, value) {
        for (var i = 0, length = value.length; i < length; i++) {
            // Write number
            out.push(value[i]);

            // Begin a new group?
            if (out.g > 1 && out.g-- % 3 == 1) {
                out.push(out.t);
            }
        }
    }
    
    /**
     * Process a single format item in a composite format string.
     * @param {string} pathOrIndex The raw argument index or path component of the format item.
     * @param {string} align The raw alignment component of the format item.
     * @param {string} formatString The raw format string of the format item.
     * @param {Array} args The arguments that were passed to String.format, where index 0 is the full composite format string.
     * @returns {string} The formatted value as a string.
     */
    function processFormatItem(pathOrIndex, align, formatString, args) {        
        var value, 
            index = parseInt(pathOrIndex, 10), 
            paddingLength, 
            padding = "";
        
        // Determine whether index or path mode was used
        if (isNaN(index)) {
            // Non-numerical index => treat as path
            value = resolvePath(pathOrIndex, args[1]);
        } else {
            // Index was numerical => ensure index is within range
            if (index > args.length - 2) {
                // Throw exception if argument is not specified (however undefined and null values are fine!)
                throw "Missing argument";
            }
            
            value = args[index + 1];
        }
        
        // If the object has a custom format method, use it,
        // otherwise use toString to create a string
        value = !hasValue(value) ? "" : value.__Format ? value.__Format(formatString) : "" + value;
        
        // Add padding (if necessary)
        align = Number(align) || 0;
        
        paddingLength = Math.abs(align) - value.length;

        while (paddingLength-- > 0) {
            padding += " ";
        }
        
        // innerArgs[1] is the leading {'s
        return (align < 0 ? value + padding : padding + value);
    }
    
    /**
     * Handles basic formatting used for standard numeric format strings.
     * @param {number} number The number to format.
     * @param {number} minIntegralDigits The minimum number of integral digits. The number is padded with leading
     * zeroes if necessary.
     * @param {number} minDecimalDigits The minimum number of decimal digits. The decimal part is padded with trailing
     * zeroes if necessary.
     * @param {number} maxDecimalDigits The maximum number of decimal digits. The number is rounded if necessary.
     * @param {string} radixPoint The string that will be appended to the output as a radix point.
     * @param {string} thousandSeparator The string that will be used as a thousand separator of the integral digits.
     * @returns {string} The formatted value as a string.
     */
    function basicNumberFormatter(number, minIntegralDigits, minDecimalDigits, maxDecimalDigits, radixPoint, thousandSeparator) {
        var integralDigits, decimalDigits, out = [];
        out.t = thousandSeparator;
        
        // Minus sign
        if (number < 0) {
            out.push("-");
        }
        
        // Prepare number 
        number = numberToString(number, maxDecimalDigits);
        
        integralDigits = out.g = numberOfIntegralDigits(number);
        decimalDigits = numberOfDecimalDigits(number);

        // Pad integrals with zeroes to reach the minimum number of integral digits
        minIntegralDigits -= integralDigits;
        while (minIntegralDigits-- > 0) {
            groupedAppend(out, "0");
        }
        
        // Add integral digits
        groupedAppend(out, number.substr(0, integralDigits));
        
        // Add decimal point and decimal digits
        if (minDecimalDigits || decimalDigits) {
            out.push(radixPoint);
            
            groupedAppend(out, number.substr(integralDigits + 1));

            // Pad with zeroes
            minDecimalDigits -= decimalDigits;
            while (minDecimalDigits-- > 0) {
                groupedAppend(out, "0");
            }
        }
        
        return out.join("");
    }
    
    /**
     * Handles formatting of custom numeric format strings.
     * @param {number} number The number to format.
     * @param {string} format A string specifying the format of the output.
     * @param {string} radixPoint The string that will be appended to the output as a radix point.
     * @param {string} thousandSeparator The string that will be used as a thousand separator of the integral digits.
     * @returns {string} The formatted value as a string.
     */
    function customNumberFormatter(number, format, radixPoint, thousandSeparator) {
        var digits = 0,
            forcedDigits = -1,
            integralDigits = -1,
            decimals = 0,
            forcedDecimals = -1,
            
            thousandsMultiplier = 1,
            
            atDecimals = 0, // Bool
            unused = 1, // Bool, True until a digit has been written to the output
            
            tokens = [],
            tokenGroups = [ tokens ],
            
            currentToken,
            numberIndex,
            formatIndex,
            endIndex,
            
            out = [];

        // Tokenize format string.
        // Constants are represented with String instances, while all other tokens are represented with
        // string literals.
        for (formatIndex = 0; formatIndex < format.length; formatIndex++) {
            currentToken = format[formatIndex];
            
            // Check if we have reached a literal
            if (currentToken == "'" || currentToken == '"') {
                
                // Find end of literal
                endIndex = format.indexOf(currentToken, formatIndex + 1);
                
                // String instances are used to represent constants
                tokens.push(new String(
                    format.substring(
                        formatIndex + 1, 
                        endIndex < 0 ? undefined : endIndex // assume rest of string if matching quotation mark is missing
                    )));
                
                // If there is no matching end quotation mark, let's assume the rest of the string is a literal.
                // This is the way .NET handles things.
                if (endIndex < 0) break;
                
                formatIndex = endIndex;
                
            // Check for single escaped character
            } else if (currentToken == "\\") {
                // String instances are used to represent constants
                tokens.push(new String(format[++formatIndex]));
                
            } else if (currentToken == ";") {
            
                // Short circuit tokenizer
                if (number > 0 || // No need to parse any more groups if the number is positive since the first group is for positive numbers
                    number < 0 && tokenGroups.length > 1) { // Dito for negative numbers which is specified in the second group
                    break;
                }
                
                // Begin a new token group
                tokenGroups.push(tokens = []);
                
            } else {
                tokens.push(currentToken);
                
            }
        }

        // Determine which token group to be used ( positive; negative; zero, where the two last ones are optional)
        if (number < 0 && tokenGroups.length > 1) {
            number *= -1;
            format = tokenGroups[1];
        } else {
            format = tokenGroups[!number && tokenGroups.length > 2 ? 2 : 0];
        }

        // Analyse format string
        // Count number of digits, decimals, forced digits and forced decimals.
        for (formatIndex = 0; formatIndex < format.length; formatIndex++) {
            currentToken = format[formatIndex];
            
            // Only handle digit placeholders and number multipliers during analysis phase
            if (currentToken === "0" || currentToken === "#") {
                decimals += atDecimals;

                if (currentToken == "0") {
                    // 0 is a forced digit
                    if (atDecimals) {
                        forcedDecimals = decimals;
                    } else if (forcedDigits < 0) {
                        forcedDigits = digits;
                    }
                }
                
                // If a comma specifier is specified before the last integral digit
                // it indicates thousand grouping.
                if (thousandsMultiplier != 1 && !atDecimals) {
                    // Set thousand separator
                    out.t = thousandSeparator;
                    thousandsMultiplier = 1;
                }

                digits += !atDecimals;
            }
            
            // End of integral part
            else if (currentToken === ".") {
                atDecimals = 1;
            }
            
            // Comma specifier used for both thousand grouping and scaling.
            // It is only effective if specified before the explicit or implicit decimal point. 
            else if (currentToken === "," && !atDecimals && digits > 0) { 
                thousandsMultiplier *= 0.001;
            }
            
            // Percent
            else if (currentToken === "%") {
                number *= 100;
            }
        }
        forcedDigits = forcedDigits < 0 ? 1 : digits - forcedDigits;

        // Negative value? Begin string with a dash
        if (number < 0) {
            out.push("-");
        }

        // Round the number value to a specified number of decimals
        number = numberToString(number * thousandsMultiplier, decimals);

        // Get integral length
        integralDigits = numberOfIntegralDigits(number);

        // Set initial number cursor position
        numberIndex = integralDigits - digits;

        // Initialize thousand grouping
        out.g = Math.max(integralDigits, forcedDigits);
        
        for (formatIndex = 0; formatIndex < format.length; formatIndex++) {
            currentToken = format[formatIndex];
        
            // Digit placeholder
            if (currentToken === "#" || currentToken === "0") {
                if (numberIndex < integralDigits) {
                    // In the integral part
                    if (numberIndex >= 0) {
                        if (unused) {
                            groupedAppend(out, number.substr(0, numberIndex));
                        }
                        groupedAppend(out, number[numberIndex]);

                        // Not yet inside the number number, force a zero?
                    } else if (numberIndex >= integralDigits - forcedDigits) {
                        groupedAppend(out, "0");
                    }

                    unused = 0;

                } else if (forcedDecimals-- > 0 || numberIndex < number.length) {
                    // In the fractional part
                    groupedAppend(out, numberIndex >= number.length ? "0" : number[numberIndex]);
                }

                numberIndex++;

            // Radix point character according to current culture.
            } else if (currentToken === ".") {
                if (number.length > ++numberIndex || forcedDecimals > 0) {
                    out.push(radixPoint);
                }
                
            // Other characters are written as they are, except from commas
            } else if (currentToken !== ",") {
                out.push(currentToken);
            }
        }
        
        return out.join("");
    }
    
    // ***** FORMATTERS
    // ***** Number Formatting *****

    /**
     * Formats this number according the specified format string.
     * @param {string} format The formatting string used to format this number.
     * @returns {string}
     */
    SR.Number.format = function(num, format) {
        var number = Number(num),
            radixPoint = currentCulture._r,
            thousandSeparator = currentCulture._t;
        
        // If not finite, i.e. ±Intifity and NaN, return the default JavaScript string notation
        if (!isFinite(number)) {
            return "" + number;
        }
        
        // Default formatting if no format string is specified
        if (!format && format !== "0") {
            format = "G";
        }
        
        // EVALUATE STANDARD NUMERIC FORMAT STRING
        // See reference at
        // http://msdn.microsoft.com/en-us/library/dwhawy9k.aspx
        
        var standardFormatStringMatch = format.match(/^([a-zA-Z])(\d{0,2})$/);
        if (standardFormatStringMatch)
        {
            var standardFormatStringMatch_UpperCase = standardFormatStringMatch[1][toUpperCase](),
                precision = parseInt(standardFormatStringMatch[2], 10); // parseInt used to ensure empty string is aprsed to NaN
            
            // Standard numeric format string
            switch (standardFormatStringMatch_UpperCase) {
                case "D":
                    // DECIMAL
                    // Precision: number of digits
                    
                    // Note: the .NET implementation throws an exception if used with non-integral 
                    // data types. However, this implementation follows the JavaScript manner being
                    // nice about arguments and thus rounds any floating point numbers to integers.
                    
                    return basicNumberFormatter(number, numberCoalesce(precision, 1), 0, 0);
                
                case "F":
                    // FIXED-POINT
                    // Precision: number of decimals
                    
                    thousandSeparator = "";
                    // Fall through to N, which has the same format as F, except no thousand grouping
                    
                case "N":
                    // NUMBER
                    // Precision: number of decimals
                    
                    return basicNumberFormatter(number, 1, numberCoalesce(precision, 2), numberCoalesce(precision, 2), radixPoint, thousandSeparator);
                
                case "G":
                    // GENERAL
                    // Precision: number of significant digits
                    
                    // Fall through to E, whose implementation is shared with G
                    
                case "E":
                    // EXPONENTIAL (SCIENTIFIC)
                    // Precision: number of decimals
                    
                    // Note that we might have fell through from G above!
                    
                    // Determine coefficient and exponent for exponential notation
                    var exponent = 0, coefficient = Math.abs(number);
                    
                    while (coefficient >= 10) {
                        coefficient /= 10;
                        exponent++;
                    }
                    
                    while (coefficient > 0 && coefficient < 1) {
                        coefficient *= 10;
                        exponent--;
                    }
                    
                    var exponentPrefix = standardFormatStringMatch[1],
                        exponentPrecision = 3,
                        minDecimals, maxDecimals;
                    
                    if (standardFormatStringMatch_UpperCase == "G") {
                        // Default precision in .NET is dependent on the data type.
                        // For double the default precision is 15.
                        precision = precision || 15;
                        
                        // When (exponent <= -5) the exponential notation is always more compact.
                        //   e.g. 0.0000123 vs 1.23E-05
                        // When (exponent >= precision) the number cannot be represented 
                        //   with the right number of significant digits without using 
                        //   exponential notation.
                        //   e.g. 123 (1.23E+02) cannot be represented using fixed-point 
                        //   notation with less than 3 significant digits.
                        if (exponent > -5 && exponent < precision) {
                            // Use fixed-point notation
                            return basicNumberFormatter(number, 1, 0, precision - exponent - 1, radixPoint);
                        }
                    
                        exponentPrefix = exponentPrefix == "G" ? "E" : "e";
                        exponentPrecision = 2;
                        
                        // The precision of G is the number of significant digits
                        minDecimals = 0;
                        maxDecimals = precision - 1;
                    } else {
                        // The precision of E is the number of decimal digits
                        minDecimals = maxDecimals = numberCoalesce(precision, 6);
                    }
                    
                    // If the exponent is negative, then the minus is added when formatting the exponent as a number.
                    // In the case of a positive exponent, we need to add the plus sign explicitly.
                    if (exponent >= 0) {
                        exponentPrefix += "+";
                    }
                    
                    // Consider if the coefficient is positive or negative.
                    // (the sign was lost when determining the coefficient)
                    if (number < 0) {
                        coefficient *= -1;
                    }
                    
                    return (
                        basicNumberFormatter(coefficient, 1, minDecimals, maxDecimals, radixPoint, thousandSeparator) + 
                        exponentPrefix + 
                        basicNumberFormatter(exponent, exponentPrecision, 0, 0)
                        );
                
                case "P":
                    // PERCENT
                    // Precision: number of decimals
                    
                    return basicNumberFormatter(number * 100, 1, numberCoalesce(precision, 2), numberCoalesce(precision, 2), radixPoint, thousandSeparator) + " %";
                
                case "X":
                    // HEXADECIMAL
                    // Precision: number of digits
                    
                    // Note: the .NET implementation throws an exception if used with non-integral 
                    // data types. However, this implementation follows the JavaScript manner being
                    // nice about arguments and thus rounds any floating point numbers to integers.
                    
                    var result = Math.round(number).toString(16);
                    
                    if (standardFormatStringMatch[1] == "X") {
                        result = result[toUpperCase]();
                    }
                    
                    // Add padding, remember precision might be NaN
                    precision -= result.length;
                    while (precision-- > 0) {
                        result = "0" + result;
                    }
                    
                    return result;
                
                case "C":
                    // CURRENCY
                    // Precision: ignored (number of decimals in the .NET implementation)
                    
                    // The currency format uses a custom format string specified by the culture.
                    // Precision is not supported and probably won't be supported in the future.
                    // Developers probably use explicit formatting of currencies anyway...
                    format = currentCulture._c;
                    radixPoint = currentCulture._cr;
                    thousandSeparator = currentCulture._ct;
                    break;
                
                case "R":
                    // ROUND-TRIP
                    // Precision: ignored
                    
                    // The result should be reparsable => just use Javascript default string representation.
                    
                    return "" + number;
            }
        }
        
        // EVALUATE CUSTOM NUMERIC FORMAT STRING
        return customNumberFormatter(number, format, radixPoint, thousandSeparator);
    };

    // ***** Date Formatting *****

    /**
     * Formats this date according the specified format string.
     * @param {string} format The formatting string used to format this date.
     * @returns {string}
     */
    SR.Date.format = function(date, format) {
        var year        = date.getFullYear(),
            month       = date.getMonth(),
            dayOfMonth  = date.getDate(),
            dayOfWeek   = date.getDay(),
            hour        = date.getHours(),
            minute      = date.getMinutes(),
            second      = date.getSeconds(),
            fracSecond  = date.getMilliseconds() / 1000,
            tzOffset    = date.getTimezoneOffset(),
            tzOffsetAbs = tzOffset < 0 ? -tzOffset : tzOffset;
            
        // If no format is specified, default to G format
        format = format || "G";
        
        // Resolve standard date/time format strings
        if (format.length == 1) {
            format = currentCulture[format] || format;
        }

        // Note that a leading percent is trimmed below. This is not completely compatible with .NET Framework,
        // which will treat a percent followed by more than a single character as two format tokens, e.g. 
        // %yy is interpreted as ['y' 'y'], whereas this implementation will interpret it as ['yy']. This does
        // not seem to be a documented behavior and thus an acceptable deviation.
        return format.replace(/^%/, "").replace(/(\\.|'[^']*'|"[^"]*"|d{1,4}|M{1,4}|y+|HH?|hh?|mm?|ss?|[f]{1,7}|[F]{1,7}|z{1,3}|tt?)/g, 
            function (match) { 
                var char0 = match[0];

                        // Day
                return  match == "dddd" ? currentCulture._D[dayOfWeek] :
                                             // Use three first characters from long day name if abbreviations are not specifed
                        match == "ddd"  ? (currentCulture._d ? currentCulture._d[dayOfWeek] : currentCulture._D[dayOfWeek].substr(0, 3)) : 
                        char0 == "d"    ? zeroPad(dayOfMonth, match.length) :
                        
                        // Month
                        match == "MMMM" ? currentCulture._M[month] :
                                             // Use three first characters from long month name if abbreviations are not specifed
                        match == "MMM"  ? (currentCulture._m ? currentCulture._m[month] : currentCulture._M[month].substr(0, 3)) :
                        char0 == "M"    ? zeroPad(month + 1, match.length) :

                        // Year
                        match == "yy"   ? zeroPad(year % 100, 2) : 
                        match == "y"    ? year % 100 :
                        char0 == "y"    ? zeroPad(year, match.length) :
                        
                        // Hour
                        char0 == "H"    ? zeroPad(hour, match.length) :
                        char0 == "h"    ? zeroPad(hour % 12 || 12, match.length) :
                        
                        // Minute
                        char0 == "m"    ? zeroPad(minute, match.length) :
                        
                        // Second
                        char0 == "s"    ? zeroPad(second, match.length) :

                        // Fractional second (substr is to remove "0.")
                        char0 == "f"    ? (fracSecond).toFixed(match.length).substr(2) :
                        char0 == "F"    ? numberToString(fracSecond, match.length).substr(2) :
                        
                        // Timezone, "z" -> "+2", "zz" -> "+02", "zzz" -> "+02:00"
                        char0 == "z"    ? (tzOffset < 0 ? "-" : "+") + // sign
                                          (zeroPad(0 | (tzOffsetAbs / 60), match == "z" ? 1 : 2)) + // hours
                                          (match == "zzz" ? ":" + zeroPad(tzOffsetAbs % 60, 2) : "") : // minutes

                        // AM/PM
                        match == "tt"   ? (hour < 12 ? currentCulture._am : currentCulture._pm) : 
                        char0 == "t"    ? (hour < 12 ? currentCulture._am : currentCulture._pm)[0] :
                        
                        // String literal => strip quotation marks
                        match.substr(1, match.length - 1 - (match[0] != "\\"));
            });
    };
    
    /**
     * Formats a string according to a specified formatting string.
     * @param {string} str The formatting string used to format the additional arguments.
     * @param {...*} args
     */
    SR.String.format = function(str, obj0, obj1, obj2) {
        var outerArgs = arguments;
        
        return str.replace(/\{((\d+|[a-zA-Z_$]\w*(?:\.[a-zA-Z_$]\w*|\[\d+\])*)(?:\,(-?\d*))?(?:\:([^\}]*(?:(?:\}\})+[^\}]+)*))?)\}|(\{\{)|(\}\})/g, function () {
            var innerArgs = arguments;
            
            // Handle escaped {
            return innerArgs[5] ? "{" :
            
            // Handle escaped }
                innerArgs[6] ? "}" :
            
            // Valid format item
                processFormatItem(
                    innerArgs[2], 
                    innerArgs[3], 
                    // Format string might contain escaped braces
                    innerArgs[4] && innerArgs[4].replace(/\}\}/g, "}").replace(/\{\{/g, "{"), 
                    outerArgs);
        });
    };

    // // If a format method has not already been defined on the following objects, set __Format as format.
    // var formattables = [ SR.Date.prototype, SR.Number.prototype, String ];
    // for (var i = 0, length = formattables.length; i < length; i++) {
    //     formattables[i].format = formattables[i].format || formattables[i].__Format;
    // }
    
    // Initiate culture
    updateCulture();
    
    return sffjs;
})();
class SRC extends SR { }

SRC.Host = class Host {
    /**
     * @description Host of SilverJs Canvas
     * @param {String} div
     * @param {Number} width
     * @param {Number} height
     * @returns {SRC.Host}
     */
    constructor(div, width, height, color, isShadow, cornerRadius) {
        if (!div) return;
        var tc = this;
        SRC.Host.index++;
        this._divId = div;
        this._id = div + '_' + SRC.Host.index++;
        this._padding = [0, 0, 0, 0];
        this._margin = [0, 0, 0, 0];
        this._graphics = new SR.Collections.List(); // graphics are paths design etc
        this.resources = { images: new SR.Collections.List() };
        this.resources.images.cache = {};
        color = color ? color : 'transparent';
        this._isWidthFixed = width ? true : false;
        this._isHeightFixed = height ? true : false;
        this.cursorPosition = { x: 0, y: 0 };
        this.isRendered = false;
        this.onResize = null;
        this._fkYou = window;

        var divEle = document.getElementById(div);

        width = width || divEle.offsetWidth;
        height = height || divEle.offsetHeight || 300;

        this._rect = new SR.Rect(0, 0, width, height);

        this._rootDiv = document.createElement("div");
        this._rootDiv.style.cssText = "position: relative; text-align: left; cursor: auto;";
        divEle.appendChild(this._rootDiv);

        var can = document.createElement("canvas");
        can.style.cssText = "z-index:0;position:absolute;margin:0;padding:0;background-color:" + color + ";";
        
        can.setAttribute('width', width);
        can.setAttribute('height', height);

        this.canvas = can;
        var can2 = this.canvas2 = can.cloneNode(false);
        
        can.setAttribute('id', this._id);
        this.canvas2.style.backgroundColor = 'transparent';

        this._rootDiv.appendChild(can);
        this._rootDiv.appendChild(can2);       

        this.context = can.getContext('2d'); // current Context
        this.context1 = this.context;
        this.context2 = can2.getContext('2d');

        this._rootVisual = null;
        this.shadow(isShadow, cornerRadius, can);

        this.tooltip = new SRC.HtmlControls.Tooltip(this, this._rootDiv);
        this.verticalHairLine = new SRC.HtmlControls.HairLine(this, this._rootDiv, SRC.Orientation.Vertical);
        this.horizontalHairLine = new SRC.HtmlControls.HairLine(this, this._rootDiv, SRC.Orientation.Horizontal);

        window.addEventListener("resize", function () {
            let e = {
                width: divEle.offsetWidth,
                height: divEle.offsetHeight
            };

            if (!tc._isWidthFixed && tc._rect.w !== e.width) {
                tc._rect.w = e.width;
                tc._rootDiv.style.width = e.width + 'px';
                can.width = e.width;
                can2.width = e.width;
                e.widthChanged = true;
            }

            if (!tc._isHeightFixed && tc._rect.h !== height) {
                height = divEle.offsetHeight;
                tc._rect.h = e.height;
                tc._rootDiv.style.height = e.height + 'px';
                can.setAttribute('height', e.height);
                can2.setAttribute('height', e.height);
                e.heightChanged = true;
            }

            if (e.heightChanged || e.widthChanged) {
                tc.isRendered = false;
                if (tc.onResize) {
                    tc.onResize(this, e);
                } else {
                    tc.draw();
                }
            }
        });

        this.canvas2.onmouseup = function (e) {
            e.point = tc.getMousePos(tc.canvas, e);
            e.eleTree = new SR.Collections.List();

            if (tc._rootVisual) {
                tc._rootVisual._onmouseup(e);

                if (e.eleTree.length > 0) {
                    e.eleTree = e.eleTree.sort(function (a, b) {
                        return b._zIndex - a._zIndex;
                    });
                }

                e.eleTree.each(function (ctrl) {
                    ctrl._fireMouseEvent(e, SRC.EventTypes.LEFT_MOUSE_UP);
                    return e.handled ? false : true;
                });
            }

            SRC.drawHelpPoint(tc, e.point.x, e.point.y);
        };

        this.canvas2.onmousedown = function (e) {
            e.point = tc.getMousePos(tc.canvas, e);
            e.eleTree = new SR.Collections.List();

            if (tc._rootVisual) {
                tc._rootVisual._onmousedown(e);
                if (e.eleTree.length > 0) {
                    // Sort by descending
                    e.eleTree = e.eleTree.sort(function (a, b) {
                        return -b._zIndex + a._zIndex;
                    });
                }

                e.eleTree.each(function (ctrl) {
                    ctrl._fireMouseEvent(e, SRC.EventTypes.LEFT_MOUSE_DOWN);
                    return e.handled ? false : true;
                });
            }
        };

        this.canvas2.onmousemove = function (e) {
            e.point = tc.getMousePos(tc.canvas, e);
            e.mouseMoveEleTree = new SR.Collections.List();
            e.mouseInEleTree = new SR.Collections.List();
            e.mouseOutEleTree = new SR.Collections.List();

            tc.cursorPosition = e.point;

            if (tc._rootVisual) {
                tc._rootVisual._onmousemove(e);

                e.mouseMoveEleTree.each(function (ctrl) {
                    ctrl._fireMouseEvent(e, SRC.EventTypes.MOUSE_MOVE);
                    return e.handled ? false : true;
                });

                e.mouseOutEleTree.each(function (ctrl) {
                    ctrl._fireMouseEvent(e, SRC.EventTypes.MOUSE_OUT);
                    return e.handled ? false : true;
                });

                e.mouseInEleTree.each(function (ctrl) {
                    ctrl._fireMouseEvent(e, SRC.EventTypes.MOUSE_IN);
                    return e.handled ? false : true;
                });
            }
        };
    }

    shadow(enable, cornerRadius, element) {
        cornerRadius = Array.isArray(cornerRadius) ? cornerRadius.map(d => { return d + 'px'; }).join(' ') : cornerRadius + 'px';
        element = element || this.canvas;
        element.style.boxShadow = enable ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' : '';
        if (cornerRadius) {
            element.style.borderRadius = cornerRadius;
        }
    }

    static staticConstructor() {
        Host.index = 0;
    }

    x(val) {
        if (SR.isDefined(val)) {
            this._rect.x = val;
        } else {
            return this._rect.x;
        }
    }

    y(val) {
        if (SR.isDefined(val)) {
            this._rect.y = val;
        } else {
            return this._rect.y;
        }
    }

    width(val) {
        if (SR.isNumber(val)) {
            this._rect.w = val;
        } else {
            return this._rect.w;
        }
    }

    height(val) {
        if (SR.isNumber(val)) {
            this._rect.h = val;
        } else {
            return this._rect.h;
        }
    }

    padding(val) {
        if (SR.isDefined(val)) {
            this._padding = val;
        } else {
            return this._padding;
        }
    }

    actualX() {
        return (this.parent) ? (this._rect.x + this.parent.actualX()) : this._rect.x;
    }

    actualY() {
        return (this.parent) ? (this._rect.y + this.parent.actualY()) : this._rect.y;
    }

    actualRect() {
        return (this.parent) ?
            new SR.Rect(this.actualX(), this.actualY(), this._rect.w, this._rect.h)
            : this._rect.clone();
    }

    innerRect() {
        var rect = this._rect.clone();
        rect.x += this._padding[0];
        rect.y += this._padding[1];

        rect.w -= (this._padding[0] + this._padding[2]);
        rect.w = rect.h < 0 ? 0 : rect.w;

        rect.h -= (this._padding[1] + this._padding[3]);
        rect.h = rect.h < 0 ? 0 : rect.h;

        return rect;
    }

    getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return new SR.Point((evt.clientX - rect.left), (evt.clientY - rect.top));
    }

    rootVisual(ele) {
        if (ele) {
            ele.parent = this;
            this._rootVisual = ele;
        } else
            return this._rootVisual;
    }

    _onmouseup(e, point) {
        SR.Collections.List.each(this._controls, function (ctrl) {
            if (ctrl._onmouseup)
                ctrl._onmouseup(e);
        });
    }

    _onmousedown(e, point) {
        SR.Collections.List.each(this._controls, function (ctrl) {
            if (ctrl._onmousedown)
                ctrl._onmousedown(e);
        });
    }

    _onmousemove(e, point) {
        SR.Collections.List.each(this._controls, function (ctrl) {
            if (ctrl._onmousemove)
                ctrl._onmousemove(e);
        });
    }

    draw(onDone) {
        var thisC = this;
        // this.canvas.width = this.canvas.width;
        if (thisC.isRendered && onDone) {
            if (thisC._rootVisual)
                thisC._rootVisual.draw(thisC);
            return;
        }

        this._preloadImages(function () {
            // this.context.clearRect(this.x, this.y, this.width, this.height);

            if (thisC._rootVisual)
                thisC._rootVisual.draw(thisC);

            // Draw graphics items in async
            thisC._graphics.eachAsync(function (graphic, idx, next) {
                thisC.context.save();
                graphic.visual._translate2Actual(thisC.context);
                thisC.context.globalAlpha = graphic.visual._opacity;
                graphic.draw(thisC.context, function () {
                    thisC.context.restore();
                    next();
                });
            });

            if (onDone) {
                thisC.isRendered = true;
                onDone.apply();
            }
        });
    }

    _preloadImages(cb) {
        var thisC = this;
        var loadedCount = 0;

        if (this.resources.images.length === 0) {
            cb.apply();
            return;
        }

        this.resources.images.each(function (item) {
            var img = document.createElement('img');
            img.onload = function () {
                thisC.resources.images.cache[item.id] = this;
                loadedCount++;
                if (loadedCount === thisC.resources.images.length) {
                    cb.apply(null, []);
                }
            };
            img.src = item.src;
        });
    }

    // set(obj, property, value) {
    //     eval("obj." + property + "=value;");
    //     //this.context.clearRect(0, 0, this.width, this.height);
    //     obj.parent.draw(this);
    // }

    host() {
        return this;
    }
};

SRC.Host.staticConstructor();


SRC.drawHelpRect = function (ctrl) {
    var host = ctrl.host();
    host.context.beginPath();
    host.context.lineWidth = 1;
    host.context.strokeStyle = "yellow";
    host.context.rect(ctrl.x() + ctrl.parent.x(), ctrl.y() + ctrl.parent.y(),
        ctrl.width(), ctrl.height());
    host.context.stroke();
};

SRC.drawHelpPoint = function (host, x, y) {
    host.context.beginPath();
    host.context.lineWidth = 1;
    host.context.strokeStyle = "red";
    host.context.rect(x, y, 3, 3);
    host.context.stroke();
};

// HitTest = function (testx, testy, points) {
//     // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
//     var i, j, c = false;
//     var nvert = this.points.length;
//     for (i = 0, j = nvert - 1; i < nvert; j = i++) {
//         if (((this.points[i].y > testy) !== (this.points[j].y > testy)) &&
//             (testx < (this.points[j].x - this.points[i].x) * (testy - this.points[i].y) / (this.points[j].y - this.points[i].y) + this.points[i].x))
//             c = !c;
//     }
//     return c;
// };

// shim layer with setTimeout fallback
SRC.aniFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
SRC._heightCache = {};
SRC.determineFontSize = function (fontSettings, text = 'M') {
    var result = SRC._heightCache[fontSettings];

    if (!result) {
        var body = document.getElementsByTagName('body')[0];
        var dummy = document.createElement('div');

        var dummyText = document.createTextNode(text);
        dummy.setAttribute('style', fontSettings + 'padding:0;position:absolute;top:0px;left:0px;');
        dummy.appendChild(dummyText);
        // dummy.style.setProperty("font-size", fontSettings._fontSize + 'px', "important");
        body.appendChild(dummy);

        result = { h: dummy.offsetHeight, w: dummy.offsetWidth };

        SRC._heightCache[fontSettings + text] = result;
        body.removeChild(dummy);
    }

    return result;
};


window.SilverJs = SRC;



SRC.HALIGN = {
  Left: "left",
  Center: "center",
  Right: "right",
  Stretch: "stretch",
  None: 'none'
};

SRC.VALIGN = {
  Top: "top",
  Center: "center",
  Bottom: "bottom",
  Stretch: "stretch",
  None: 'none'
};

SRC.EventTypes = {
  LEFT_MOUSE_UP: "onmouseup",
  LEFT_MOUSE_DOWN: "onmousedown",
  LEFT_MOUSE_CLICK: "onclick",
  MOUSE_MOVE: "onmousemove",
  MOUSE_IN: "onmousein",
  MOUSE_OUT: "onmouseout"
};

SRC.Orientation = {
  Vertical: "vertical",
  Horizontal: "horizontal",
  Circular: "circular",
  VerticalCircular: "v-circular",
  HorizontalCircular: "h-circular"
};

SRC.AutoWidth = 'autoW';
SRC.AutoHeight = 'autoH';


SRC.Controls = SRC.Controls || {};


SRC.Controls.Control = class Control extends SR.Object {
    constructor() {
        super();
    }
};
SRC.Controls.Visual = class Visual extends SRC.Controls.Control {
  /**
   * @description Base class of all visual
   * @param {type} x
   * @param {type} y
   * @param {type} w
   * @param {type} h
   * @returns {SRC.Controls.Visual}
   */
  constructor(x, y, w, h) {
    super();
    this.parent = null;
    this.controls = null;
    this._child = null;
    this._rect = new SR.Rect(
      SR.getNumber(x, 0),
      SR.getNumber(y, 0),
      SR.getNumber(w, Number.NaN),
      SR.getNumber(h, Number.NaN)
    );

    this._hAlign = SRC.HALIGN.None;
    this._vAlign = SRC.VALIGN.None;

    this._fill = null;
    this._stroke = new SRC.Stroke(1, "black");
    this._fillHighlight = null;
    this._strokeHighlight = null;

    this._zIndex = 0;
    this._padding = [0, 0, 0, 0];
    this._margin = [0, 0, 0, 0];
    this._cornerRadius = [0, 0, 0, 0];
    this._isVisible = true;
    this._isHitTestVisible = true;
    this.propertyChanged = null;
    this._events = {};
    this._isRedrawRegistered = false;
    this._autoClip = true;
    this._shadow = null;
    this._opacity = 1;
  }

  _reDraw() {
    let tc = this;
    if (this.parent) {
      var host = this.parent.host();
      if (host && host.isRendered) {
        if (this._isRedrawRegistered) return;

        this._isRedrawRegistered = true;
        // clearTimeout(this.redrawTimeout);

        // this.redrawTimeout = setTimeout(function () {
        //   tc._letsReDraw(host); 
        // }, 200);

        SRC.aniFrame.call(window, function () {
          tc._letsReDraw(host);
        });
      }
    }
  }

  _letsReDraw(host) {
    let tc = this;
    host.context.save();

    var findParent = (prnt) => {
      if (!prnt) return prnt;

      if (prnt instanceof SRC.Host) {
        return prnt;
      } else if (!prnt._fill || (prnt._fill instanceof SRC.SolidColor && prnt._fill.color === "transparent")) {
        return findParent(prnt.parent);
      } else {
        return prnt;
      }
    };

    var parent = tc.parent;
    var parent2StartRenderFrom = findParent(parent);
    var rootVis;

    if (parent2StartRenderFrom) {
      if (parent2StartRenderFrom instanceof SRC.Host) {
        rootVis = parent2StartRenderFrom.rootVisual();
        rootVis._translate2Actual(host.context);
        rootVis.draw(host);
      } else if (parent2StartRenderFrom.parent) {
        if (parent2StartRenderFrom.parent instanceof SRC.Host) {
          rootVis = parent2StartRenderFrom.parent.rootVisual();
          rootVis._translate2Actual(host.context);
          rootVis.draw(host);
        } else {
          parent2StartRenderFrom.parent._translate2Actual(host.context);
          parent2StartRenderFrom.draw(host);
        }
      } else {
        parent2StartRenderFrom._translate2Actual(host.context);
        parent2StartRenderFrom.draw(host);
      }
    }

    host.context.restore();
    tc._isRedrawRegistered = false;
  }

  updateProperty(property, val) {
    this[property].apply(this, [val]);
  }

  /**
   * To activate shadow you need to set autoClip(false); else shadow will get clipped
   * @param val
   * @returns {null|*}
   */
  shadow(val) {
    if (SR.isDefined(val)) {
      this._shadow = val;
      //this._autoClip = false;
      if (this.parent) this._reDraw();
    } else {
      return this._shadow;
    }
  }

  x(val) {
    if (SR.isNumber(val)) {
      this._rect.x = val;
      if (this.parent) this._reDraw();
    } else {
      return this._rect.x + this._margin[0] + (this.parent ? this.parent._padding[0] : 0);
    }
  }

  y(val) {
    if (SR.isNumber(val)) {
      this._rect.y = val;
      if (this.parent) this._reDraw();
    } else {
      return this._rect.y + this._margin[1] + (this.parent ? this.parent._padding[1] : 0);
    }
  }

  padding(val) {
    if (SR.isDefined(val)) {
      this._padding = val;
      if (this.parent) this._reDraw();
    } else {
      return this._padding;
    }
  }

  margin(val) {
    if (SR.isDefined(val)) {
      this._margin = val;
      if (this.parent) this._reDraw();
    } else {
      return this._margin;
    }
  }

  opacity(val) {
    if (SR.isDefined(val)) {
      this._opacity = val;
      if (this.parent) this._reDraw();
    } else {
      return this._opacity;
    }
  }

  cornerRadius(val) {
    if (SR.isDefined(val)) {
      this._cornerRadius = val;
      if (this.parent) this._reDraw();
    } else {
      return this._cornerRadius;
    }
  }

  actualX(x) {
    if (SR.isDefined(x)) return this.parent ? x + this.parent.actualX() : x;
    else return this.parent ? this.x() + this.parent.actualX() : this.x();
  }

  actualY(y) {
    if (SR.isDefined(y)) return this.parent ? y + this.parent.actualY() : y;
    else return this.parent ? this.y() + this.parent.actualY() : this.x();
  }

  /**
   * @description Returns actual screen points referenced to base canvas
   * @param point
   * @returns {SR.Point}
   */
  actualPoint(point) {
    return new SR.Point(this.actualX(point.x), this.actualY(point.y));
  }

  actualRect() {
    //    return (this.parent) ?
    //            new SR.Rect(this.actualX(), this.actualY(), this._rect.w, this._rect.h)
    //            : this._rect.clone();
    return new SR.Rect(
      this.x(),
      this.y(),
      this.width(),
      this.height()
    );
  }

  _translate(ctx) {
    ctx.translate(this.x(), this.y());
  }

  _translate2Actual(ctx) {
    ctx.translate(this.actualX(), this.actualY());
  }

  _resetTranslate(ctx) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  innerRect() {
    var rect = this.actualRect();
    var pPadding = this.parent ? this.parent._padding : [0, 0, 0, 0];

    rect.x += pPadding[0];
    rect.y += pPadding[1];

    rect.w -= pPadding[0] + pPadding[2];
    rect.w = rect.h < 0 ? 0 : rect.w;

    rect.h -= pPadding[1] + pPadding[3];
    rect.h = rect.h < 0 ? 0 : rect.h;

    return rect;
  }

  width(val) {
    if (SR.isNumber(val)) {
      this._rect.w = val;
      if (this.parent) this._reDraw();
    } else {
      if (Number.isNaN(this._rect.w)) {
        if (this.parent) {
          let w = this.parent.width() - this.parent._padding[0] - this.parent._padding[2] - this._margin[0] - this._margin[2];
          return w >= 0 ? w : 0;
        } else {
          return 0;
        }
      } else {
        return this._rect.w;
      }
    }
  }

  height(val) {
    if (SR.isNumber(val)) {
      this._rect.h = val;
      if (this.parent) this._reDraw();
    } else {
      if (Number.isNaN(this._rect.h)) {
        if (this.parent) {
          let h = this.parent.height() - this.parent._padding[1] - this.parent._padding[3] - this._margin[1] - this._margin[3];
          return h >= 0 ? h : 0;
        } else {
          return 0;
        }
      } else {
        return this._rect.h;
      }
    }
  }

  bound() {
    return new SR.Rect(0, 0, this.width(), this.height());
  }

  autoClip(val) {
    if (SR.isDefined(val)) {
      this._autoClip = val;
      if (this.parent) this._reDraw();
    } else {
      return this._autoClip;
    }
  }

  hAlign(val) {
    if (SR.isDefined(val)) {
      this._hAlign = val;
      if (this.parent) this._reDraw();
    } else {
      return this._hAlign;
    }
  }

  vAlign(val) {
    if (SR.isDefined(val)) {
      this._vAlign = val;
      if (this.parent) this._reDraw();
    } else {
      return this._vAlign;
    }
  }

  fill(val) {
    if (SR.isDefined(val) || val === null) {
      this._fill = val;
      if (this.parent) this._reDraw();
    } else {
      return this._fill;
    }
  }

  stroke(val) {
    if (SR.isDefined(val) || val === null) {
      this._stroke = val;
      if (this.parent) this._reDraw();
    } else {
      return this._stroke;
    }
  }

  fillHighlight(val) {
    if (SR.isDefined(val) || val === null) {
      this._fillHighlight = val;
    } else {
      return this._fillHighlight;
    }
  }

  strokeHighlight(val) {
    if (SR.isDefined(val) || val === null) {
      this._strokeHighlight = val;
    } else {
      return this._strokeHighlight;
    }
  }

  zIndex(val) {
    val = Number(val);
    if (SR.isNumber(val) && this._zIndex !== val) {
      this._zIndex = val;

      if (this.parent) {
        this._reDraw();
      }
    } else {
      return this._zIndex;
    }
  }

  _prepareForDraw() {
    if (this.controls) {
      this.controls.sort(function (x, y) {
        return x._zIndex - y._zIndex;
      });
    }
  }

  isVisible(val) {
    if (SR.isDefined(val) && this._isVisible !== val) {
      this._isVisible = val ? true : false;
      if (this.parent) this._reDraw();
    } else {
      return this._isVisible;
    }
  }

  isHitTestVisible(val) {
    if (SR.isDefined(val) && this._isHitTestVisible !== val) {
      this._isHitTestVisible = val ? true : false;
    } else {
      return this._isHitTestVisible;
    }
  }

  show() {
    var thisC = this;
    thisC._isVisible = true;
    if (thisC.parent) thisC.draw(thisC.host());
  }

  hide() {
    var thisC = this;
    thisC._isVisible = false;
    if (thisC.parent) thisC.draw(thisC.host());
  }

  aEvent(type, func) {
    if (!this._events[type]) this._events[type] = new SR.Collections.List();
    if (this._events[type]) {
      this._events[type].add(func);
    }
  }

  dEvent(type, func) {
    if (this._events[type]) {
      this._events[type].remove(func);
    }
  }

  _onmouseup(e) {
    if (!this._isVisible || !this._isHitTestVisible) return;

    var thisC = this;

    if (this._events[SRC.EventTypes.LEFT_MOUSE_UP]) {
      if (this._v_isPointInside(e.point)) {
        e.eleTree.add(thisC);
      }
    }

    if (this.controls && this.controls.length) {
      for (var idx = 0; idx < this.controls.length; idx++) {
        var item = this.controls[idx];
        if (item._onmouseup) {
          item._onmouseup(e);
        }
      }
    } else if (this._child) {
      if (this._child._onmouseup) {
        this._child._onmouseup(e);
      }
    }
  }

  _onmousedown(e) {
    if (!this._isVisible || !this._isHitTestVisible) return;

    var thisC = this;

    if (this._events[SRC.EventTypes.LEFT_MOUSE_DOWN]) {
      if (this._v_isPointInside(e.point)) {
        e.eleTree.add(thisC);
      }
    }

    if (this.controls && this.controls.length) {
      for (var idx = 0; idx < this.controls.length; idx++) {
        var item = this.controls[idx];
        if (item._onmousedown) {
          item._onmousedown(e);
        }
      }
    } else if (this._child) {
      if (this._child._onmousedown) {
        this._child._onmousedown(e);
      }
    }
  }

  _onmousemove(e) {
    if (!this._isVisible || !this._isHitTestVisible) return;
    var thisC = this,
      isPointInside = null;

    if (this._events[SRC.EventTypes.MOUSE_MOVE] || this._events[SRC.EventTypes.MOUSE_IN] || this._events[SRC.EventTypes.MOUSE_OUT]) {
      isPointInside = this._v_isPointInside(e.point);
    }

    if (isPointInside && this._events[SRC.EventTypes.MOUSE_MOVE]) {
      if (isPointInside) {
        e.mouseMoveEleTree.add(thisC);
      }
    }

    if (isPointInside && this._events[SRC.EventTypes.MOUSE_IN] && !thisC._mouseIn) {
      thisC._mouseIn = true;
      thisC._mouseOut = false;
      e.mouseInEleTree.add(thisC);
    } else if (!isPointInside && this._events[SRC.EventTypes.MOUSE_OUT] && SR.isDefined(thisC._mouseIn) && !thisC._mouseOut) {
      thisC._mouseOut = true;
      thisC._mouseIn = false;
      e.mouseOutEleTree.add(thisC);
    }

    if (this.controls && this.controls.length) {
      for (var idx = 0; idx < this.controls.length; idx++) {
        var item = this.controls[idx];
        if (item._onmousemove) {
          item._onmousemove(e);
        }
      }
    } else if (this._child) {
      if (this._child._onmousemove) {
        this._child._onmousemove(e);
      }
    }
  }

  _fireMouseEvent(e, type) {
    if (!this._isVisible || !this._isHitTestVisible) return;

    var thisC = this;
    e.relativeMousePos = new SR.Point(e.point.x - this.actualX(), e.point.y - this.actualY());

    if (this._events[type]) {
      var delegates = this._events[type];
      delegates.each(function (item) {
        item.apply(null, [thisC, e]);
      });
    }
  }

  swapContext(host) {
    host = host || this.host();
    if (host) {
      host.context = host.context2;
      this._resetTranslate(host.context);
    }
  }

  resetContext(host) {
    host = host || this.host();
    if (host) {
      host.context = host.context1;
      this._resetTranslate(host.context);
    }
  }

  host() {
    return this.parent ? this.parent.host() : null;
  }

  clearRect(host) {
    host = host || this.host();
    host.context.clearRect(this.x(), this.y(), this.width(), this.height());
  }

  clearActualRect(host, scaleFactor = 1) {
    host = host || this.host();
    let w = this.width();
    let h = this.height();

    let xFactor = w * scaleFactor;
    let yFactor = h * scaleFactor;

    host.context.clearRect(this.actualX() - xFactor / 2, this.actualY() - yFactor / 2, w + xFactor, h + yFactor);
  }

  draw() {
    throw 'Draw not implemented. Class: ' + this.constructor.name;
  }

  highlight() {
    throw 'Highlight not implemented. Class: ' + this.constructor.name;
  }

  deHighlight() {
    throw 'deHighlight not implemented. Class: ' + this.constructor.name;
  }

  /**
   * @description A virtual function. It should be implemented in a sub class
   * @param {type} point
   * @returns {Boolean}
   */
  _v_isPointInside(point) {
    return SR.isPointInsideBox(
      point,
      this.actualX(),
      this.actualY(),
      this.width(),
      this.height()
    );
  }
};





SRC.Controls.Panel = class Panel extends SRC.Controls.Visual {
    constructor(x, y, w, h) {
        super(...arguments);
        var tc = this;
        this.controls = new SR.Collections.List();
        this.controls.changed = function (list, e) {
            switch (e.action) {
                case List.Actions.Add:
                    SR.Collections.List.each(e.items, function (ctrl) {
                        ctrl.parent = tc;
                    });
                    break;
                case List.Actions.Remove:
                    SR.Collections.List.each(e.items, function (ctrl) {
                        ctrl.parent = null;
                    });
                    break;
            }

            tc._reDraw();
        };
    }
};

SRC.Controls.Border = class Border extends SRC.Controls.Panel {
    constructor(x, y, w, h) {
        super(...arguments);
        this._child = null;
    }

    child(ele) {
        if (ele) {
            ele.parent = this;
            this._child = ele;
        } else
            return this._child;
    }

    draw(host) {
        if (host === null || !this.isVisible())
            return;
        var ctx = host.context;
        // host.context.clearRect(this.x() + this.parent.x(), 
        //    this.y() + this.parent.y(), this.width(), this.height());
        var aRect = this.actualRect();
        var cRadius = this.cornerRadius();
        ctx.save();
        ctx.globalAlpha = this._opacity;
        if (this._fill || this._stroke) {
            SRC.Drawings._drawRect(host, this, aRect, cRadius);
        }

        SRC.Shadow.reset(host);
        this._translate(ctx);

        if (this._child)
            this._child.draw(host);

        ctx.restore();
    }

    /**
     * Draws a rounded rectangle using the current state of the canvas. 
     * If you omit the last three params, it will draw a rectangle 
     * outline with a 5 pixel border radius 
     * @param {CanvasRenderingContext2D} ctx
     * @param {Number} x The top left x coordinate
     * @param {Number} y The top left y coordinate 
     * @param {Number} width The width of the rectangle 
     * @param {Number} height The height of the rectangle
     * @param {Number} radius The corner radius. Defaults to 5;
     * @param {Boolean} fill Whether to fill the rectangle. Defaults to false.
     * @param {Boolean} stroke Whether to stroke the rectangle. Defaults to true.
     */
    roundRect(ctx, x, y, width, height, radius, fill, stroke) {
        if (typeof stroke === "undefined") {
            stroke = true;
        }
        if (typeof radius === "undefined") {
            radius = 5;
        }
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (stroke) {
            ctx.stroke();
        }
        if (fill) {
            ctx.fill();
        }
    }
};

SRC.Controls.Canvas = class Canvas extends SRC.Controls.Panel {
    /**
     * @description Canvas Panel
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     * @returns {SRC.Controls.Canvas}
     */
    constructor(x, y, w, h) {
        super(...arguments);
        this._stroke = new SRC.Stroke(0, 'transparent');
    }

    draw(host) {
        if (host === null || !this.isVisible())
            return;

        var ctx = host.context;

        ctx.save();
        ctx.globalAlpha = this._opacity;
        var aRect = this.actualRect();
        var cRadius = this.cornerRadius();

        if (this.parent instanceof SRC.Host) {
            host.context.clearRect(aRect.x, aRect.y, aRect.w, aRect.h);
        }

        if (this._fill || this._stroke)
            SRC.Drawings._drawRect(host, this, aRect, cRadius);

        SRC.Shadow.reset(host);
        this._translate(ctx);

        this._prepareForDraw();

        this.controls.each(function (ctrl) {
            ctrl.draw(host);
        });

        ctx.restore();
    }

    highlight(host) {
        if (host === null || !this.isVisible())
            return;

        var aRect = this.actualRect();
        var cRadius = this.cornerRadius();

        this.swapContext(host);
        this.parent._translate2Actual(host.context);

        if (this._fillHighlight || this._strokeHighlight)
            SRC.Drawings._drawRect(host, this, aRect, cRadius, true);

       this.resetContext(host);
    }

    deHighlight(host) {
        if (host === null || !this.isVisible())
            return;

        this.swapContext(host);
        this.clearActualRect(host);
        this.resetContext(host);
    }
};



SRC.Controls.StackPanel = class StackPanel extends SRC.Controls.Canvas {
    /**
     * @description Canvas Panel
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     * @returns {SRC.Controls.StackPanel}
     */
    constructor(x, y, w, h) {
        super(...arguments);
        this._stroke = new SRC.Stroke(0, 'transparent');
        this._maxWidth = null;
        this._maxHeight = null;
        this._cellPadding = [0, 0, 0, 0];
        this._orientation = SRC.Orientation.Horizontal;
    }

    cellPadding(val) {
        if (SR.isDefined(val)) {
            this._cellPadding = Array.isArray(val) ? val : [val,val,0,0];
            if (this.parent) this._reDraw();
        } else {
            return this._cellPadding;
        }
    }

    orientation(val) {
        if (SR.isDefined(val)) {
            this._orientation = val;
            if (this.parent) this._reDraw();
        } else {
            return this._orientation;
        }
    }

    maxHeight(val) {
        if (SR.isDefined(val)) {
            this._maxHeight = val;
            if (this.parent) this._reDraw();
        } else {
            return this._maxHeight;
        }
    }

    maxWidth(val) {
        if (SR.isDefined(val)) {
            this._maxWidth = val;
            if (this.parent) this._reDraw();
        } else {
            return this._maxWidth;
        }
    }

    measure() {
        let cp = this._cellPadding;
        let y = cp[0], x = cp[1];

        if (this._orientation === SRC.Orientation.Horizontal) {
            let maxRowHeight = 0, actualWidth = 0, actualHeight = 0;
            let width = this._maxWidth || this.width();

            this.controls.each((ctrl) => {
                let w = ctrl.width() + cp[0] + cp[2];
                let h = ctrl.height() + cp[1] + cp[3];

                maxRowHeight = Math.max(maxRowHeight, h);

                if (y + w > width) {
                    x += maxRowHeight + cp[3];
                    maxRowHeight = 0;
                    y = cp[0];
                }

                ctrl.x(y);
                ctrl.y(x);

                y += w;
                actualWidth = Math.max(actualWidth, y);
            });

            actualHeight = x + maxRowHeight;
            this.width(actualWidth);
            this.height(actualHeight);
        } else if (this._orientation === SRC.Orientation.Vertical) {
            let maxRowWidth = 0, actualHeight = 0, actualWidth = 0;
            let height = this._maxHeight || this.height();

            this.controls.each((ctrl) => {
                let w = ctrl.width() + cp[0] + cp[2];
                let h = ctrl.height() + cp[1] + cp[3];

                maxRowWidth = Math.max(maxRowWidth, w);

                if (y + h > height) {
                    x += maxRowWidth + cp[3];
                    maxRowWidth = 0;
                    y = cp[0];
                }

                ctrl.y(y);
                ctrl.x(x);

                y += h;
                actualHeight = Math.max(actualHeight, y);
            });

            actualWidth = x + maxRowWidth;
            this.height(actualHeight);
            this.width(actualWidth);
        }

        switch (this._hAlign) {
            case SRC.HALIGN.Left:
                this.x(0); break;
            case SRC.HALIGN.Right:
                this.x(this.parent.width() - this.width()); break;
            case SRC.HALIGN.Center:
            case SRC.HALIGN.Stretch:
                this.x((this.parent.width() - this.width()) / 2); break;
        }

        switch (this._vAlign) {
            case SRC.VALIGN.Top:
                this.y(this._margin[1]); break;
            case SRC.VALIGN.Bottom:
                this.y(this.parent.height() - this.height()); break;
            case SRC.VALIGN.Center:
            case SRC.VALIGN.Stretch:
                this.y((this.parent.height() - this.height()) / 2); break;
        }
    }

    draw(host) {
        if (host === null || !this.isVisible())
            return;

        let ctx = host.context;      
        this.measure();
        ctx.save();
        ctx.globalAlpha = this._opacity;
        var aRect = this.actualRect();
        var cRadius = this.cornerRadius();

        if (this.parent instanceof SRC.Host) {
            host.context.clearRect(aRect.x, aRect.y, aRect.w, aRect.h);
        }
        
        if (this._fill || this._stroke)
            SRC.Drawings._drawRect(host, this, aRect, cRadius);

        SRC.Shadow.reset(host);
        this._translate(ctx);

        this._prepareForDraw();

        this.controls.each(function (ctrl) {
            ctrl.draw(host);
        });

        ctx.restore();
    }

    highlight(host) {
        if (host === null || !this.isVisible())
            return;

        var aRect = this.actualRect();
        var cRadius = this.cornerRadius();

        this.swapContext(host);
        this.parent._translate2Actual(host.context);

        if (this._fillHighlight || this._strokeHighlight)
            SRC.Drawings._drawRect(host, this, aRect, cRadius, true);

       this.resetContext(host);
    }

    deHighlight(host) {
        if (host === null || !this.isVisible())
            return;

        this.swapContext(host);
        this.clearActualRect(host);
        this.resetContext(host);
    }
};


SRC.Controls.GridColumn = class GridColumn extends SR.Object {
    constructor(width) {
        super();
        this._w = SR.isNumber(width) ? width : 0;
    }

    width(val) {
        if (SR.isNumber(val)) {
            this._w = val;
        } else {
            return this._w;
        }
    }
};
SRC.Controls.GridRow = class GridRow extends SR.Object {
    constructor(height) {
        super();
        this._h = SR.isNumber(height) ? height : 0;
    }

    height (val) {
        if (SR.isNumber(val)) {
            this._h = val;
        } else {
            return this._h;
        }
    }
};

SRC.Controls.Grid = class Grid extends SRC.Controls.Panel {
    constructor(x, y, w, h) {
        super(...arguments);

        this.rows = new SR.Collections.List();
        this.columns = new SR.Collections.List();
        this.rows.changed = function (list, e) {
            //        SR.Collections.List.each(e.items, function(ctrl){
            //            ctrl.parent = tc;
            //        });
        };

        this.columns.changed = function (list, e) {
            //        SR.Collections.List.each(e.items, function(ctrl){
            //            ctrl.parent = tc;
            //        });
        };
    }

    draw(host) {
        if (host === null || !this.isVisible())
            return;

        // host.context.clearRect(this.x() + this.parent.x(), this.y() + this.parent.y(), this.width(), this.height());

        var aRect = this.actualRect();
        var cRadius = this.cornerRadius();

        if (this._fill || this._stroke)
            SRC.Drawings._drawRect(host, this, aRect, cRadius);

        this._prepareForDraw();

        this.controls.each(function (ctrl) {
            ctrl.draw(host);
        });
    }
};

SRC.Controls.Grid.Width = SRC.Controls.Grid.Height = {
    Auto: 'a',
    Fixed: 'f',
    Percentage: '%'
};

SRC.Controls.ProgressBar = class ProgressBar extends SRC.Controls.Canvas {
    constructor(pX, pY, pWidth, pHeight) {
        super(pX, pY, pWidth, pHeight);
        this._min = 0;
        this._max = 100;
        this._value = 10;
        this.progress = new SRC.Controls.Canvas(2, 2, 0, this.height() - 2);
        this.progress.fill = new SRC.SolidColor("#0f0");
        this.addControl(this.progress);
        this.onValueChange = null;

    }

    setAutoClickVal(val) {
        var thisC = this;
        if (val) {
            thisC._autoClickHandler = function (obj, e) {
                var xVal = e.point.x - thisC._x;
                var val = (xVal / thisC._width) * thisC._max;
                val = (val > thisC._max) ? thisC._max : ((val < 0) ? 0 : val);
                thisC.__value(val, true);
            };

            this.aEvent(SRC.EventTypes.LEFT_MOUSE_DOWN, thisC._autoClickHandler);
        } else {
            if (thisC._autoClickHandler) {
                this.dEvent(SRC.EventTypes.LEFT_MOUSE_DOWN, thisC._autoClickHandler);
                thisC._autoClickHandler = null;
            }
        }
    }

    min(val) {
        if (SR.isDefined(val)) {
            this._min = val;
        } else {
            return this._min;
        }
    }

    max(val) {
        if (SR.isDefined(val)) {
            this._max = val;
        } else {
            return this._max;
        }
    }

    value(val) {
        this.__value(val, false);
    }

    __value(val, isMouseEvent) {
        if (SR.isDefined(val)) {
            this._value = val;
            if (this.parent)
                this.draw(this.host());
            if (this.onValueChange)
                this.onValueChange(this, { value: this._value, isMouseEvent: isMouseEvent });
        } else {
            return this._value;
        }
    }

    draw(host) {
        var newWidth = ((this.width() - 4) / (this._max - this._min)) * this._value;
        this.progress._width = newWidth;
        //alert(newWidth);

        SRC.Controls.ProgressBar.__super__.draw.apply(this, arguments);
    }
};
/*-----------------------------
 Definatin of TextBlock
 -------------------------------*/

SRC.Controls.TextBlock = class TextBlock extends SRC.Controls.Visual {
    constructor(pX, pY, text, fontSettings) {
        super(pX, pY, 0, 0);
        this.text = text;
        this.fontStyle = (fontSettings && fontSettings instanceof SRC.Font) ? fontSettings : new SRC.Font(fontSettings);
        this._rotationPoint = SRC.Controls.TextBlock.RotationPoint.Center;
        this._angel = 0;
    }

    angel(val) {
        if (SR.isNumber(val)) {
            this._angel = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._angel;
        }
    }

    rotationPoint(val) {
        if (SR.isDefined(val)) {
            this._rotationPoint = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._rotationPoint;
        }
    }

    measure(host) {
        host = host || this.host();
        if (!host)
            throw 'Host is not defined';
        var size;

        if (SR.isEmptyOrNullString(this.text))
            size = { width: 0, height: 0 };
        else {
            // var ctx = host.context;
            // ctx.save();
            // this.fontStyle.set(ctx);
            // size = ctx.measureText(this.text);
            // size.height = SRC.determineFontSize(this.fontStyle.getCssStyle()).h;// this.fontStyle._fontSize;
            // ctx.restore();
            let { w, h } = SRC.determineFontSize(this.fontStyle, this.text);
            size = { width: w, height:   h };
        }

        this.width(size.width);
        this.height(size.height);

        return size;
    }

    determineFontHeight() {
        return SRC.determineFonSize(this.fontStyle.getCssStyle()).h;// this.fontStyle._fontSize;
    }

    determineFontWidth() {
        return SRC.determineFonSize(this.fontStyle.getCssStyle()).w;// this.fontStyle._fontSize;
    }

    actualSize() {
        if (this._angel) {
            switch (this._rotationPoint) {
                case SRC.Controls.TextBlock.RotationPoint.Left:

                    break;
                case SRC.Controls.TextBlock.RotationPoint.Center:

                    break;
                case SRC.Controls.TextBlock.RotationPoint.Right:
                    var w = this.width();
                    var h = this.height();
                    return {
                        width: (w * Math.cos(SR.PIBy2 * Math.abs(this._angel))),
                        height: (w * Math.sin(SR.PIBy2 * Math.abs(this._angel))) + h / 2
                    };
            }
        } else return { width: this._rect.w, height: this._rect.h };
    }

    draw(host) {
        if (host === null || !this.isVisible() || SR.isEmptyOrNullString(this.text))
            return;

        var ctx = host.context;
        var w = this.width(), h = this.height();
        ctx.save();
        var aRect = this.actualRect();

        if (this._angel) {
            var osCanvas = document.createElement('canvas');
            var osCtx = osCanvas.getContext('2d');
            osCanvas.width = w;
            osCanvas.height = h;

            if (this._fill) {
                host.context = osCtx;
                this._fill.draw(host, new SR.Rect(0, 0, aRect.w, aRect.h));
                host.context = ctx;
            }

            this.fontStyle.set(osCtx);
            osCtx.fillText(this.text, 0, 0);

            switch (this._rotationPoint) {
                case SRC.Controls.TextBlock.RotationPoint.Left:
                    ctx.translate(aRect.x, aRect.y);     //translate to center of shape
                    ctx.rotate(SR.PIBy2 * this._angel);  //rotate 25 degrees.
                    ctx.drawImage(osCanvas, 0, -h / 2);
                    ctx.translate(0, 0);
                    break;
                case SRC.Controls.TextBlock.RotationPoint.Center:
                    ctx.translate(aRect.x, aRect.y);     //translate to center of shape
                    ctx.rotate(SR.PIBy2 * this._angel);  //rotate 25 degrees.
                    ctx.drawImage(osCanvas, -w / 2, -h / 2);
                    ctx.translate(0, 0);
                    break;
                case SRC.Controls.TextBlock.RotationPoint.Right:
                    ctx.translate(aRect.x, aRect.y);              //translate to center of shape
                    ctx.rotate(SR.PIBy2 * this._angel);  //rotate 25 degrees.
                    ctx.drawImage(osCanvas, -w, -h / 2);
                    ctx.translate(0, 0);
                    break;
            }
        } else {
            if (this._fill) this._fill.draw(host, aRect);
            this.fontStyle.set(ctx);
            ctx.fillText(this.text, aRect.x, aRect.y);
        }

        ctx.restore();
    }
};

SRC.Controls.TextBlock.RotationPoint = {
    Left: 1,
    Right: 2,
    Center: 3
};

SRC.Controls.TextBlock.TextBaseLines = { Top: "top", Hanging: "hanging", Middle: "middle", Alphabetic: "alphabetic", Ideographic: "ideographic", Bottom: "bottom" };
SRC.Controls.TextBlock.TextAligns = { Start: "start", End: "End", Left: "left", right: "Right", Center: "center" }; 


SRC.Shapes = SRC.Shapes || {};

SRC.Shapes.Shape  = class Shape extends SRC.Controls.Visual {
    constructor() {
        super(...arguments);
    }
};

SRC.Shapes.Circle = class Circle extends SRC.Shapes.Shape {
    constructor(x, y, r) {
        super(x - r, y - r, r * 2, r * 2);
        this._c = new SR.Point(x, y);
        this._r = r;
    }

    centerX(val) {
        if (SR.isNumber(val)) {
            this._c.x = val;
            this._rect.x = val - this._r;
            if (this.parent)
                this._reDraw();
        } else {
            return this._c.x;
        }
    }

    centerY(val) {
        if (SR.isNumber(val)) {
            this._c.y = val;
            this._rect.y = val - this._r;
            if (this.parent)
                this._reDraw();
        } else {
            return this._c.y;
        }
    }

    radius(val) {
        if (SR.isNumber(val)) {
            this._r = val;
            this._rect.w = this._rect.h = val * 2;
            if (this.parent)
                this._reDraw();
        } else {
            return this._r;
        }
    }

    actualCenter() {
        if (this.parent) {
            return new SR.Point(this._c.x + this.parent.x(), this._c.y + this.parent.y());
        } else {
            return this._c;
        }
    }

    draw(host) {
        if (host === null || !this.isVisible())
            return;

        if (this._fill || this._stroke)
            SRC.Drawings._drawCircle(host, this, this._c, this._r);
    }


    highlight(host) {
        if (host === null || !this.isVisible())
            return;

        this.swapContext(host);
        this.parent._translate2Actual(host.context);

        if (this._fill || this._stroke || this._fillHighlight || this._strokeHighlight)
            SRC.Drawings._drawCircle(host, this, this._c, this._r * Circle.HIGHLIGHT_SCALE_FACTOR);

        this.resetContext(host);
    }

    deHighlight(host) {
        if (host === null || !this.isVisible())
            return;

        this.swapContext(host);
        this.clearActualRect(host, Circle.HIGHLIGHT_SCALE_FACTOR);
        this.resetContext(host);
    }
};

SRC.Shapes.Circle.HIGHLIGHT_SCALE_FACTOR = 1.5;

SRC.Shapes.Ellipse = class Ellipse extends SRC.Shapes.Shape {
    constructor(x, y, r) {
        super(x - r, y - r, 2 * r, 2 * r);
        this._c = new SR.Point(x, y);
        this._r = r;
    }

    centerX(val) {
        if (SR.isNumber(val)) {
            this._c.x = val;
            this._rect.x = val - this._r;
            if (this.parent)
                this._reDraw();
        } else {
            return this._c.x;
        }
    }

    centerY(val) {
        if (SR.isNumber(val)) {
            this._c.y = val;
            this._rect.y = val - this._r;
            if (this.parent)
                this._reDraw();
        } else {
            return this._c.y;
        }
    }

    actualCenter() {
        if (this.parent) {
            return new SR.Point(this._c.x + this.parent.x(), this._c.y + this.parent.y());
        } else {
            return this._c;
        }
    }

    draw(host) {
        if (host === null || !this.isVisible())
            return;

        if (this._fill || this._stroke)
            SRC.Drawings._drawEllipse(host, this, this.actualCenter(), this._w, this._h);
    }
};

SRC.Shapes.Path = class Path extends SRC.Shapes.Shape {
    constructor(points, enableEvent) {
        super();
        this._tention = 0;
        this._closed = false;
        this._endPoint = undefined;
        this._startPoint = undefined;
        var tc = this;
        this.points = points || [];// ? new SR.Collections.List(points) : new SR.Collections.List();

        // if (SR.Collections.List.isList(points)) {
        //     this.points = points;
        // } else this.points = new SR.Collections.List(points);

        // if (enableEvent) {
        //     var pointsValChanged = function () { tc._reDraw(); };
        //     SR.Collections.List.each(points, function (p) {
        //         p.changed = pointsValChanged;
        //     });

        //     this.points.changed = function (list, e) {
        //         SR.Collections.List.each(e.items, function (p) {
        //             p.changed = pointsValChanged;
        //         });
        //         tc._reDraw();
        //     };
        // }
    }

    startPoint(val) {
        if (SR.isDefined(val)) {
            this._startPoint = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._startPoint;
        }
    }

    endPoint(val) {
        if (SR.isDefined(val)) {
            this._endPoint = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._endPoint;
        }
    }

    tension(val) {
        if (SR.isNumber(val)) {
            this._tention = (val < 0) ? 0 : val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._tention;
        }
    }

    closed(val) {
        if (SR.isNumber(val)) {
            this._closed = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._closed;
        }
    }

    updatePoint(val) {
        if (SR.isNumber(val)) {
            this._closed = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._closed;
        }
    }

    setControlPointsCache(cpCache) {
        this._controPointsCache = cpCache;
    }

    getControlPointsCache() {
        return this._controPointsCache;
    }

    draw(host) {
        if (host === null || !this.isVisible())
            return;
        // if (this.name === 'area') {
        //     debugger;
        // }

        host.context.save();
        //console.log('Opacity=', this._opacity);
        host.context.globalAlpha = this._opacity;
        if (this._fill || this._stroke) {
            if (this._tention === 0) {
                SR.Profiler.start('_drawLine');
                SRC.Drawings._drawLine(host, this, this.points, this._closed);
                SR.Profiler.end('_drawLine');
            } else {
                SRC.Drawings._drawSpline(host, this, this.points, this._tention, this._closed, this._controPointsCache);
            }
        }

        //    if(this._autoClip)
        //        host.context.clip();
        host.context.restore();
    }
};

SRC.Shapes.PathPoint = class PathPoint extends SR.Object {
    constructor(x, y) {
        super();
        this.x = x ? x : 0;
        this.y = y ? y : 0;
        this.changed = null;
    }

    setX(val) {
        if (SR.isNumber(val)) {
            if (this.x !== val) {
                this.x = val;
                if (this.changed)
                    this.changed('x', val);
            }
        }
    }

    setY(val) {
        if (SR.isNumber(val)) {
            if (this.y !== val) {
                this.y = val;
                if (this.changed)
                    this.changed('y', val);
            }
        }
    }
};
/*-------------------------------
Definatin of Rectangle
--------------------------------*/

SRC.Shapes.Rectangle = class Rectangle extends SRC.Shapes.Shape  {
    constructor(pX, pY, pWidth, pHeight, pFill, pStroke) {
        super(pX, pY, pWidth, pHeight);
        this.parent = null;
        this.x = pX ? pX : 0;
        this.y = pY ? pY : 0;
        this.height = pHeight ? pHeight : 0;
        this.width = pWidth ? pWidth : 0;
        this.hAlign = SRC.HALIGN.Left;
        this.vAlign = SRC.VALIGN.Top;
        this.fill = pFill;
        this.zIndex = 0;
    }

    draw(host) {
        host.context.beginPath();
        host.context.rect(this.x + this.parent.x, this.y + this.parent.y, this.width, this.height);
        host.context.closePath();

        if (this.fill) {
            this.fill.draw(host, this.x + this.parent.x, this.y + this.parent.y, this.width, this.height);
        }

        if (this.stroke)
            this.stroke.draw(host);
    }
};

SRC.HtmlControls = SRC.HtmlControls || {};


SRC.HtmlControls.HtmlControl = class HtmlControls extends SR.Object {
    constructor() {
        super();
    }
};
SRC.HtmlControls.HairLine = class HairLine extends SRC.HtmlControls.HtmlControl {
    constructor(host, parentDiv, orientation) {
        super(...arguments);
        this._host = host;
        this._gap = 0;
        this._orientation = orientation;
        this._parent = parentDiv;
        this._div = document.createElement("div");
        this._childDiv = document.createElement("span");
        this.isVisible = false;
        this.isEnabled = false;
        this._setCssStyle(orientation);
        this._div.appendChild(this._childDiv);
        this._parent.appendChild(this._div);
        this._childDiv.innerHTML = '';
    }

    innerHTML(value) {
        this._childDiv.innerHTML = `<span style='white-space: nowrap;'>${value}</span>`;
    }

    gap(value) {
        this._gap = value || 0;
    }

    /**
     * @description Angle implemented for for vertical hairline only
     * @param {*} angle 
     */
    textAngle(angle) {
        this._lblAngle = angle;
        this._childDiv.style['-webkit-transform-origin'] = 'center';
    }

    x(x) {
        x = (x ? x : this._host.cursorPosition.x);
        if (x < 0) x = 0;

        switch (this._orientation) {
            case SRC.Orientation.Vertical:
                this._div.style.left = x + "px";
                this._childDiv.style.left = -(this._childDiv.clientWidth / 2) + "px";
                if (this._lblAngle) {
                    this._childDiv.style['-webkit-transform'] = `rotate(${this._lblAngle}deg) translate(${-this._childDiv.clientWidth / 2 + this._childDiv.clientHeight / 2 - this._gap / 2}px, 0px)`;
                }
                break;
            case SRC.Orientation.Horizontal:
                this._div.style.left = x + "px";
                this._childDiv.style.left = (-this._childDiv.clientWidth - this._gap) + "px";
                break;
        }
    }

    y(y) {
        y = (y ? y : this._host.cursorPosition.y);
        if (y < 0) y = 0;

        switch (this._orientation) {
            case SRC.Orientation.Vertical:
                this._div.style.top = y + "px";
                break;
            case SRC.Orientation.Horizontal:
                this._div.style.top = y + "px";
                this._childDiv.style.top = (-this._childDiv.clientHeight / 2) + "px";
                this._childDiv.style.left = (-this._childDiv.clientWidth - this._gap) + "px";
                break;
        }
    }

    width(width) {
        this._div.style.width = width + "px";
    }

    height(height) {
        this._div.style.height = height + "px";
        this._childDiv.style.top = height + "px";
    }

    show() {
        if (!this.isEnabled) return;
        if (!this.isVisible) {
            this.isVisible = true;
            this._div.style.display = 'block';

            // clearTimeout(this._timeOut);
            // this._timeOut = setTimeout(() => this.hide(), 1000);
        }
    }

    hide() {
        let tc = this;
        setTimeout(function () {
            tc.isVisible = false;
            tc._div.style.display = 'none';
        }, 100);
    }

    _setCssStyle(orientation) {
        switch (orientation) {
            case SRC.Orientation.Vertical:
                this._div.style.cssText = "z-index:1;position:absolute;display:none;padding:0px;pointer-events:none;left:100px;height:100px;";
                this._childDiv.style.cssText = "z-index:1;float:left;position:absolute;background:black;color:white;padding-left:2px;padding-right:2px;pointer-events:none;border: 0.5px solid gray;";
                this._div.style.cssText += 'border-left: 1px solid black; width: 1px;';
                break;
            case SRC.Orientation.Horizontal:
                this._div.style.cssText = "z-index:1;position:absolute;display:none;padding:0px;pointer-events:none;left:100px;height:100px;";
                this._childDiv.style.cssText = "z-index:1;float:left;position:absolute;background:black;color:white;padding-left:2px;padding-right:2px;pointer-events:none;border: 0.5px solid gray;";
                this._div.style.cssText += 'border-top: 1px solid black; height: 1px;';
                break;
        }
    }

    setCssProperty(property, value) {
        this._div.style[property] = value;
    }
};

SRC.HtmlControls.HtmlBlock = class HtmlBlock extends SRC.HtmlControls.HtmlControl {
    constructor(pX, pY, content, cssClass) {
        super(...arguments);
        this._x = pX;
        this._y = pY;
        this._id = "SRC_HtmlBlock_" + SRC.HtmlControls.HtmlBlock.index++;
        this._content = content;
        this._isRendered = false;
        this._cssClass = cssClass;
        this.changed = null;
    }

    get() {
        return document.getElementById(this._id);
    }

    x(val) {
        if (SR.isDefined(val)) {
            this._x = val;
            this.get(this._id).css('left', val);
        } else {
            return this._x;
        }
    }

    y(val) {
        if (SR.isDefined(val)) {
            this._y = val;
            this.get(this._id).css('top', val);
        } else {
            return this._y;
        }
    }

    width() {
        return this._width;
    }

    height() {
        return this._height;
    }

    content(val) {
        if (SR.isDefined(val)) {
            this._content = val;
            this.get(this._id).html(val);
            if (this.changed && this._isRendered) {
                this._width = this.get(this._id).width();
                this._height = this.get(this._id).height();
                this.changed();
            }
        } else {
            return this._content;
        }
    }

    host() {
        return (this.parent) ? this.parent.host() : null;
    }

    draw(host) {
        if (this._isRendered === false) {
            this.get(this.host()._divId).append('<div id="' + this._id +
                '" class="' + this._cssClass + '" style="position:absolute;top:' + (this._y + this.parent.y()) +
                'px;left:' + (this._x + this.parent.x()) + 'px;display:block;z-index:1;">' + this._content + '</div>');
                
            this._isRendered = true;

            this._width = this.get(this._id).width();
            this._height = this.get(this._id).height();

            if (this.changed)
                this.changed();
        }
    }
};

SRC.HtmlControls.HtmlBlock.index = 0;

SRC.HtmlControls.Tooltip = class Tooltip extends SRC.HtmlControls.HtmlControl {
    constructor(host, parentDiv, style) {
        super(...arguments);
        this._host = host;
        this._parent = parentDiv;
        this._div = document.createElement("div");
        this.isVisible = false;
        this.cssStyle(style);
        this._parent.appendChild(this._div);
    }

    show(xPos, yPos) {
        if (!this.isVisible) {
            this.isVisible = true;
            this.position(xPos, yPos);
            this._div.style.opacity = 1;

            // clearTimeout(this._timeOut);
            // this._timeOut  = setTimeout(() => this.hide(), 1000);
        }
    }

    hide() {
        this.isVisible = false;                            // hide it after timeout
        this._div.style.opacity = 0;
        // this._div.style.left = -4000 + "px";
        // this._div.style.top = -4000 + "px";
    }

    cssStyle(css) {
        this._div.style.cssText = css ? css : "opacity:0;z-index:2;position:absolute;padding:4px;background:white;pointer-events:none; width: auto;height: auto;border: 0.5px solid gray;border-radius: 5px;";
    }

    setCssProperty(property, value) {
        this._div.style[property] = value;
    }

    innerHTML(value) {
        value = value.replace(new RegExp('&gt;', 'g'), '>').replace(new RegExp('&lt;', 'g'), '<');
        this._div.innerHTML = value;
    }

    // update and adjust div position if needed (anchor to a different corner etc.)
    position(x, y) {
        if (this.isVisible) {
            x = x || this._host.cursorPosition.x;
            y = y || this._host.cursorPosition.y;

            let calX = x - this._div.clientWidth - 6;
            let calY = y - this._div.clientHeight - 5;

            if (calX < 0) {
                calX = x + 6;
            }

            if (calY < 0) {
                calY = y + 5;
            }

            if (calX < 0) calX = 0;
            if (calY < 0) calY = 0;
            // other bound checks here
            this._div.style.left = calX + "px";
            this._div.style.top = calY + "px";
        }
    }
};

/*jshint esversion: 6 */
SRC.Animation = function (beginTime, duration, easing) {
    this._beginTime = beginTime;
    this._easing = easing ? easing : SRC.Animation.Easing.EaseInOutExpo;
    this._frames = duration / 24;
    this._chindren = new SR.Collections.List();
};

const PI_M2 = Math.PI * 2;
const PI_D2 = Math.PI / 2;

SRC.Animation.prototype.add = function (visual, property, from, to, lockAtFormValue = false) {
    var newA = {
        v: visual, p: property,
        min: Math.min(from, to),
        max: Math.max(from, to),
        isRev: (from > to)
    };
    newA.dif = newA.max - newA.min;

    newA.ct = newA.isRev ? this._frames : 0;

    if (lockAtFormValue) {
        visual.updateProperty(property, from);
    }

    this._chindren.add(newA);
};

SRC.Animation.prototype.begin = function () {
    var tc = this;
    var t = 0;

    var animate = function () {
        tc._chindren.each(function (ani) {
            ani.val = tc._calculateAnima(ani);
        });

        tc._chindren.each(function (ani) {
            ani.v.updateProperty(ani.p, ani.val);
        });

        if (tc._frames > t++) setTimeout(animate, 0);
    };

    setTimeout(animate, this._beginTime);
};

SRC.Animation.prototype._calculateAnima = function (ani) {
    var tc = this, retVal;
    switch (tc._easing) {
        case SRC.Animation.Easing.EaseInSine:
            retVal = SRC.Animation._easeInSine(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseOutSine:
            retVal = SRC.Animation._easeOutSine(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInOutSine:
            retVal = SRC.Animation._easeInOutSine(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInQuint:
            retVal = SRC.Animation._easeInQuint(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseOutQuint:
            retVal = SRC.Animation._easeOutQuint(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInOutQuint:
            retVal = SRC.Animation._easeInOutQuint(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInQuart:
            retVal = SRC.Animation._easeInQuart(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseOutQuart:
            retVal = SRC.Animation._easeOutQuart(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInOutQuart:
            retVal = SRC.Animation._easeInOutQuart(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInQuad:
            retVal = SRC.Animation._easeInQuad(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseOutQuad:
            retVal = SRC.Animation._easeOutQuad(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInOutQuad:
            retVal = SRC.Animation._easeInOutQuad(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInExpo:
            retVal = SRC.Animation._easeInExpo(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseOutExpo:
            retVal = SRC.Animation._easeOutExpo(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInOutExpo:
            retVal = SRC.Animation._easeInOutExpo(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInElastic:
            retVal = SRC.Animation._easeInElastic(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseOutElastic:
            retVal = SRC.Animation._easeOutElastic(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInOutElastic:
            retVal = SRC.Animation._easeInOutElastic(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInCircular:
            retVal = SRC.Animation._easeInOutExpo(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseOutCircular:
            retVal = SRC.Animation._easeInOutExpo(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInOutCircular:
            retVal = SRC.Animation._easeInOutExpo(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInBack:
            retVal = SRC.Animation._easeInBack(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseOutBack:
            retVal = SRC.Animation._easeOutBack(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInOutBack:
            retVal = SRC.Animation._easeInOutBack(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInBounce:
            retVal = SRC.Animation._easeInBounce(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseOutBounce:
            retVal = SRC.Animation._easeOutBounce(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInOutBounce:
            retVal = SRC.Animation._easeInOutBounce(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInCubic:
            retVal = SRC.Animation._easeInCubic(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseOutCubic:
            retVal = SRC.Animation._easeOutCubic(ani.ct, 0, 1, tc._frames);
            break;
        case SRC.Animation.Easing.EaseInOutCubic:
            retVal = SRC.Animation._easeInOutCubic(ani.ct, 0, 1, tc._frames);
            break;
    }

    retVal = (ani.dif * retVal) + ani.min;
    if (ani.isRev) {
        ani.ct--;
    } else {
        ani.ct++;
    }

    return retVal;
};

SRC.Animation.Easing = {
    EaseInSine: 0,
    EaseOutSine: 1,
    EaseInOutSine: 2,
    EaseInQuint: 3,
    EaseOutQuint: 4,
    EaseInOutQuint: 5,
    EaseInQuart: 6,
    EaseOutQuart: 7,
    EaseInOutQuart: 8,
    EaseInQuad: 9,
    EaseOutQuad: 10,
    EaseInOutQuad: 11,
    EaseInExpo: 12,
    EaseOutExpo: 13,
    EaseInOutExpo: 14,
    EaseInElastic: 15,
    EaseOutElastic: 16,
    EaseInOutElastic: 17,
    EaseInCircular: 18,
    EaseOutCircular: 19,
    EaseInOutCircular: 20,
    EaseInBack: 21,
    EaseOutBack: 22,
    EaseInOutBack: 23,
    EaseInBounce: 24,
    EaseOutBounce: 25,
    EaseInOutBounce: 26,
    EaseInCubic: 27,
    EaseOutCubic: 28,
    EaseInOutCubic: 29
};

/*
 -----------------------------------------
 Sine
 -----------------------------------------
 */
/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInSine = function (t, b, c, d) {
    return -c * Math.cos(t / d * PI_D2) + c + b;
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeOutSine = function (t, b, c, d) {
    return c * Math.sin(t / d * PI_D2) + b;
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInOutSine = function (t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};

/*
 -----------------------------------------
 Quintic
 -----------------------------------------
 */
/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInQuint = function (t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
};
/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeOutQuint = function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
};
/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInOutQuint = function (t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
};

/*
 -----------------------------------------
 Quartic
 -----------------------------------------
 */
/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInQuart = function (t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
};
/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeOutQuart = function (t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};
/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInOutQuart = function (t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
};

/*
 -----------------------------------------
 Quadratic
 -----------------------------------------
 */
/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInQuad = function (t, b, c, d) {
    return c * (t /= d) * t + b;
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeOutQuad = function (t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInOutQuad = function (t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
};

/*
 -----------------------------------------
 Exponential
 -----------------------------------------
 */

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInExpo = function (t, b, c, d) {
    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeOutExpo = function (t, b, c, d) {
    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInOutExpo = function (t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
};

/*
 -----------------------------------------
 Elastic
 -----------------------------------------
 */
/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @param a =undefined
 * @param p =undefined
 * @returns {*}
 * 
 */
SRC.Animation._easeInElastic = function (t, b, c, d, a, p) {
    var s;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else s = p / PI_M2 * Math.asin(c / a);
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * PI_M2 / p)) + b;
};
/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @param a =undefined
 * @param p =undefined
 * @returns {*}
 * 
 */
SRC.Animation._easeOutElastic = function (t, b, c, d, a, p) {
    var s;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else s = p / PI_M2 * Math.asin(c / a);
    return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * PI_M2 / p) + c + b);
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @param a =undefined
 * @param p =undefined
 * @returns {*}
 * 
 */
SRC.Animation._easeInOutElastic = function (t, b, c, d, a, p) {
    var s;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (0.3 * 1.5);
    if (!a || a < Math.abs(c)) {
        a = c;
        s = p / 4;
    }
    else s = p / PI_M2 * Math.asin(c / a);
    if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * PI_M2 / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * PI_M2 / p) * 0.5 + c + b;
};

/*
 -----------------------------------------
 Circular
 -----------------------------------------
 */

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInCircular = function (t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeOutCircular = function (t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInOutCircular = function (t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
};

/*
 -----------------------------------------
 Back
 -----------------------------------------
 */

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @param s
 * @returns {*}
 * 
 */
SRC.Animation._easeInBack = function (t, b, c, d, s) {
    s = s ? s : 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @param s
 * @returns {*}
 * 
 */
SRC.Animation._easeOutBack = function (t, b, c, d, s) {
    s = s ? s : 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @param s
 * @returns {*}
 * 
 */
SRC.Animation._easeInOutBack = function (t, b, c, d, s) {
    s = s ? s : 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
};

/*
 -----------------------------------------
 Bounce
 -----------------------------------------
 */

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInBounce = function (t, b, c, d) {
    return c - SRC.Animation._easeOutBounce(d - t, 0, c, d) + b;
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeOutBounce = function (t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
    } else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
    } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    }
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInOutBounce = function (t, b, c, d) {
    if (t < d / 2) return SRC.Animation._easeInBounce(t * 2, 0, c, d) * 0.5 + b;
    else return SRC.Animation._easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
};

/*
 -----------------------------------------
 Cubic
 -----------------------------------------
 */

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInCubic = function (t, b, c, d) {
    return c * (t /= d) * t * t + b;
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeOutCubic = function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
};

/**
 * @param t Current time
 * @param b Min
 * @param c Max
 * @param d Total time
 * @returns {*}
 * 
 */
SRC.Animation._easeInOutCubic = function (t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
};
SRC.Graphic = class Graphic {
    constructor(host, visual) {
        this.host = host;
        this.visual = visual;
    }

    // Must be implemented by path drawings
    draw(ctx, onDone) {

    }
};
SRC.Drawings = class Drawings {
  static constructor() { }

  /**
   * @param {type} host
   * @param {type} visual
   * @param {type} rect
   * @param {type} cRadius Corner Radius
   * @returns {undefined}
   */
  static _drawRect(host, visual, rect, cRadius, isHighLight) {
    var ctx = host.context;
    ctx.beginPath();
    if (
      cRadius[0] === 0 &&
      cRadius[1] === 0 &&
      cRadius[2] === 0 &&
      cRadius[3] === 0
    ) {
      ctx.rect(rect.x, rect.y, rect.w, rect.h);
    } else {
      ctx.moveTo(rect.x + cRadius[0], rect.y);
      ctx.lineTo(rect.x + rect.w - cRadius[1], rect.y);
      ctx.quadraticCurveTo(
        rect.x + rect.w,
        rect.y,
        rect.x + rect.w,
        rect.y + cRadius[1]
      );
      ctx.lineTo(rect.x + rect.w, rect.y + rect.h - cRadius[2]);
      ctx.quadraticCurveTo(
        rect.x + rect.w,
        rect.y + rect.h,
        rect.x + rect.w - cRadius[2],
        rect.y + rect.h
      );
      ctx.lineTo(rect.x + cRadius[3], rect.y + rect.h);
      ctx.quadraticCurveTo(
        rect.x,
        rect.y + rect.h,
        rect.x,
        rect.y + rect.h - cRadius[3]
      );
      ctx.lineTo(rect.x, rect.y + cRadius[0]);
      ctx.quadraticCurveTo(rect.x, rect.y, rect.x + cRadius[0], rect.y);
    }
    ctx.closePath();

    if (isHighLight) {
      if (visual._shadow) visual._shadow.draw(host);
      if (visual._fillHighlight) visual._fillHighlight.draw(host);
      if (visual._strokeHighlight) visual._strokeHighlight.draw(host);
    } else {
      if (visual._autoClip) ctx.clip();
      if (visual._shadow) visual._shadow.draw(host);
      if (visual._fill) visual._fill.draw(host);
      SRC.Shadow.reset(host);
      if (visual._stroke) visual._stroke.draw(host);
    }
  }

  /**
   * @param {type} host
   * @param {type} visual
   * @param {type} rect
   * @param {type} cRadius Corner Radius
   * @returns {undefined}
   */
  static _drawPieSegment(host, visual, center, cRadius, startAngle, endAngle) {
    var ctx = host.context;
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.arc(center.x, center.y, cRadius, startAngle, endAngle, false);
    ctx.lineTo(center.x, center.y);
    ctx.fill();
    // ctx.closePath();

    if (visual._autoClip) ctx.clip();
    if (visual._shadow) visual._shadow.draw(host);
    if (visual._fill) visual._fill.draw(host);
    SRC.Shadow.reset(host);
    if (visual._stroke) visual._stroke.draw(host);
  }

  /**
   * @param host
   * @param visual
   * @param center
   * @param iRadius
   * @param oRadius
   * @param startAngle
   * @param endAngle
   * @private
   */
  static _drawDoughnutSegment(
    host,
    visual,
    center,
    iRadius,
    oRadius,
    startAngle,
    endAngle
  ) {
    var ctx = host.context;
    var innerStart = {},
      innerEnd = {};

    innerStart.x = center.x + iRadius * Math.cos(startAngle);
    innerStart.y = center.y + iRadius * Math.sin(startAngle);

    innerEnd.x = center.x + iRadius * Math.cos(endAngle);
    innerEnd.y = center.y + iRadius * Math.sin(endAngle);

    ctx.beginPath();
    ctx.moveTo(innerStart.x, innerStart.y);
    ctx.arc(center.x, center.y, oRadius, startAngle, endAngle, false);
    ctx.lineTo(innerEnd.x, innerEnd.y);
    ctx.arc(center.x, center.y, iRadius, endAngle, startAngle, true);
    ctx.fill();
    // ctx.closePath();

    if (visual._autoClip) ctx.clip();
    if (visual._shadow) visual._shadow.draw(host);
    if (visual._fill) visual._fill.draw(host);
    SRC.Shadow.reset(host);
    if (visual._stroke) visual._stroke.draw(host);
  }

  /**
   *
   * @param {type} host
   * @param {type} visual
   * @param {type} center
   * @param {type} radius
   * @returns {undefined}
   */
  static _drawCircle(host, visual, center, radius, isHighLight) {
    var ctx = host.context;
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
    ctx.closePath();

    if (visual._shadow) visual._shadow.draw(host);

    if (isHighLight) {
      if (visual._fillHighlight) {
        visual._fillHighlight.draw(host);
      } else if (visual._fill) {
        visual._fill.draw(host);
      }

      if (visual._strokeHighlight) visual._strokeHighlight.draw(host);
    } else {
      if (visual._fill) visual._fill.draw(host);
      if (visual._stroke) visual._stroke.draw(host);
    }
  }

  /**
   *
   * @param {type} host
   * @param {type} visual
   * @param {type} center
   * @param {type} width
   * @param {type} height
   * @returns {undefined}
   */
  static _drawEllipse(host, visual, center, width, height) {
    var ctx = host.context;
    ctx.beginPath();
    ctx.moveTo(center.x, center.y - height / 2); // A1
    ctx.bezierCurveTo(
      center.x + width / 2,
      center.y - height / 2, // C1
      center.x + width / 2,
      center.y + height / 2, // C2
      center.x,
      center.y + height / 2
    ); // A2
    ctx.bezierCurveTo(
      center.x - width / 2,
      center.y + height / 2, // C3
      center.x - width / 2,
      center.y - height / 2, // C4
      center.x,
      center.y - height / 2
    ); // A1
    if (visual._shadow) visual._shadow.draw(host);
    if (visual._fill) visual._fill.draw(host);
    if (visual._stroke) visual._stroke.draw(host);
    ctx.closePath();
  }

  static _drawLine(host, visual, ptsList, closed) {
    if (!visual._stroke && !visual._fill) return;

    if (ptsList.length >= 2) {
      var ctx = host.context;

      ctx.beginPath();
      if (visual._startPoint) {
        ctx.moveTo(visual._startPoint.x, visual._startPoint.y);
        ctx.lineTo(ptsList[0].x, ptsList[0].y);
      } else ctx.moveTo(ptsList[0].x, ptsList[0].y);

      var len = ptsList.length;
      for (var index = 0; index < len; index++) {
        ctx.lineTo(ptsList[index].x + 0.5, ptsList[index].y);
      }

      if (visual._endPoint) {
        ctx.lineTo(visual._endPoint.x, visual._endPoint.y);
      }

      if (closed) ctx.closePath(); // ctx.lineTo(ptsList[0].x, ptsList[0].y);

      if (visual._shadow) visual._shadow.draw(host);

      if (visual._stroke) {
        visual._stroke.draw(host);
      }

      if (visual._fill) visual._fill.draw(host);
    }
  }

  /**
   * @description Draw path for Circle
   * @param {type} host
   * @param {SR.Point} center
   * @param {Number} r
   * @param {Number} sAngle
   * @param {Number} eAngle
   * @param {Boolean} counterclockwise
   * @returns {undefined}
   */
  static _drawArc(host, visual, center, r, sAngle, eAngle, counterclockwise) {
    var ctx = host.context;
    ctx.beginPath();
    ctx.arc(center.x, center.y, r, sAngle, eAngle, counterclockwise);
    if (visual._shadow) visual._shadow.draw(host);
    if (visual._fill) visual._fill.draw(host);
    if (visual._stroke) visual._stroke.draw(host);
    ctx.closePath();
  }

  /**
   *
   * @description
   * x0,y0,x1,y1 are the coordinates of the end (knot) pts of this segment
   * x2,y2 is the next knot -- not connected here but needed to calculate p2
   * p1 is the control point calculated here, from x1 back toward x0.
   * p2 is the next control point, calculated here and returned to become the
   * next segment's p1.
   * t is the 'tension' which controls how far the control points spread.} x0
   * @param {*} y0
   * @param {*} x1
   * @param {*} y1
   * @param {*} x2
   * @param {*} y2
   * @param {*} t
   */
  static _getControlPoints(x0, y0, x1, y1, x2, y2, t) {
    //  Scaling factors: distances from this knot to the previous and following knots.
    var d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
    var d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    var fa = (t * d01) / (d01 + d12);
    var fb = t - fa;

    var p1x = x1 + fa * (x0 - x2);
    var p1y = y1 + fa * (y0 - y2);

    var p2x = x1 - fb * (x0 - x2);
    var p2y = y1 - fb * (y0 - y2);

    return [p1x, p1y, p2x, p2y];
  }

  /**
   *
   * @param host
   * @param visual
   * @param ptsList
   * @param t
   * @param closed
   * @param cPoints Control point cache by reference, caller can pass an array to cache it and use it if required
   * @private
   */
  static _drawSpline(host, visual, pts, t, closed) {
    host._graphics.add(
      new SRC.Drawings.SplineGraphic(host, visual, pts, t, closed)
    );
    return;

    // var ctx = host.context;
    // if (!visual._stroke || pts.length < 4)
    //     return;

    // var n = pts.length;
    // var cp = [];

    // SR.Collections.List.sequentialExe(function (next) {
    //     for (var i = 0; i < n - 4; i += 2) {
    //         cp.push.apply(cp, Drawings._getControlPoints(pts[i], pts[i + 1], pts[i + 2], pts[i + 3], pts[i + 4], pts[i + 5], t));
    //     }
    //     setTimeout(() => next());
    // }, function (next) {
    //     visual._translate2Actual(host.context);
    //     ctx.beginPath();
    //     if (visual._startPoint) {
    //         ctx.moveTo(visual._startPoint.x, visual._startPoint.y);
    //         ctx.lineTo(pts[0], pts[1]);
    //     } else {
    //         ctx.moveTo(pts[0], pts[1]);
    //     }
    //     next();
    // }, function (next) {
    //     for (var i = 2; i < pts.length - 5; i += 2) {
    //         ctx.bezierCurveTo(cp[2 * i - 2], cp[2 * i - 1], cp[2 * i], cp[2 * i + 1], pts[i + 2], pts[i + 3]);
    //     }
    //     next();
    // }, function (next) {
    //     ctx.quadraticCurveTo(cp[2 * n - 10], cp[2 * n - 9], pts[n - 2], pts[n - 1]);

    //     if (visual._endPoint) {
    //         ctx.lineTo(visual._endPoint.x, visual._endPoint.y);
    //         if (closed) {
    //             ctx.lineTo(visual._startPoint.x, visual._startPoint.y);
    //         } else ctx.moveTo(visual._startPoint.x, visual._startPoint.y);
    //     } else {
    //         ctx.lineTo(pts[n - 2], pts[n - 1]);
    //         if (!closed) ctx.moveTo(pts[n - 2], pts[n - 1]);
    //     }
    //     next();
    // }, function (next) {
    //     ctx.closePath();
    //     if (visual._shadow) visual._shadow.draw(host);
    //     if (visual._stroke) visual._stroke.draw(host);
    //     if (visual._fill) visual._fill.draw(host);
    // });
  }

  static hexToCanvasColor(hexColor, opacity) {
    // Convert #AA77CC to rbga() format for Firefox
    opacity = opacity || "1.0";
    hexColor = hexColor.replace("#", "");
    var r = parseInt(hexColor.substring(0, 2), 16);
    var g = parseInt(hexColor.substring(2, 4), 16);
    var b = parseInt(hexColor.substring(4, 6), 16);
    return "rgba(" + r + "," + g + "," + b + "," + opacity + ")";
  }

  //function main(t){
  //    var e=document.getElementById("canvas1");
  //    e.width=600;
  //    e.height=550;
  //    e.parentNode.style.width=e.width+"px";  //  The div around the canvas element should fit snugly.
  //    var ctx=e.getContext('2d');
  //    if(!ctx){return}
  //    ctx.clearRect(0,0,e.width,e.height);
  //    ctx.scale(1.5,1.5);
  //    //   Drawing a spline takes one call.  The points are an array [x0,y0,x1,y1,...],
  //    //   the tension is t (typically 0.33 to 0.5), and true/false tells whether to
  //    //   connect the endpoints of the data to make a closed curve.
  //    drawSpline(ctx,[20,50,100,100,150,50,200,150,250,50,300,70,310,130,380,30],t,false);
  //    drawSpline(ctx,[50,200,150,200,150,300,50,300],t,true);
  //    drawSpline(ctx,[260,240,360,240,310,340],t,true);
  //    //   Update the passive display of tension t.
  //    document.getElementById("t").value=Math.round(1000*t)/1000;
  //}
};

// SRC.Drawings.SplineGraphic = class SplineGraphic extends SRC.Graphic {
//     constructor(host, visual, points, tention, closed) {
//         super(host, visual);
//         this._points = points;
//         this._tention = tention;
//         this._closed = closed;
//     }

//     _getControlPoints(x0, y0, x1, y1, x2, y2, t) {
//         //  Scaling factors: distances from this knot to the previous and following knots.
//         var d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
//         var d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

//         var fa = t * d01 / (d01 + d12);
//         var fb = t - fa;

//         var p1x = x1 + fa * (x0 - x2);
//         var p1y = y1 + fa * (y0 - y2);

//         var p2x = x1 - fb * (x0 - x2);
//         var p2y = y1 - fb * (y0 - y2);

//         return [p1x, p1y, p2x, p2y];
//     }

//     draw(ctx, onDone = () => { }) {
//         var thisC = this;
//         var pts = thisC._points;
//         var visual = thisC.visual;

//         if (!visual._stroke || pts.length < 4)
//             return;

//         var n = pts.length;
//         var cp = [];

//         for (var i = 0; i < n - 4; i += 2) {
//             cp.push.apply(cp, thisC._getControlPoints(pts[i], pts[i + 1], pts[i + 2], pts[i + 3], pts[i + 4], pts[i + 5], thisC._tention));
//         }

//         SR.Collections.List.sequentialExe(function (next) {
//             ctx.beginPath();
//             if (visual._startPoint) {
//                 ctx.moveTo(visual._startPoint.x, visual._startPoint.y);
//                 ctx.lineTo(pts[0], pts[1]);
//             } else {
//                 ctx.moveTo(pts[0], pts[1]);
//             }
//             next();
//         }, function (next) {
//             for (var i = 2; i < pts.length - 5; i += 2) {
//                 ctx.bezierCurveTo(cp[2 * i - 2], cp[2 * i - 1], cp[2 * i], cp[2 * i + 1], pts[i + 2], pts[i + 3]);
//             }
//             next();
//         }, function (next) {
//             ctx.quadraticCurveTo(cp[2 * n - 10], cp[2 * n - 9], pts[n - 2], pts[n - 1]);

//             if (visual._endPoint) {
//                 ctx.lineTo(visual._endPoint.x, visual._endPoint.y);
//                 if (closed) {
//                     ctx.lineTo(visual._startPoint.x, visual._startPoint.y);
//                 } else ctx.moveTo(visual._startPoint.x, visual._startPoint.y);
//             } else {
//                 ctx.lineTo(pts[n - 2], pts[n - 1]);
//                 if (!closed) ctx.moveTo(pts[n - 2], pts[n - 1]);
//             }
//             next();
//         }, function (next) {
//             ctx.closePath();
//             if (visual._shadow) visual._shadow.draw(thisC.host);
//             if (visual._stroke) visual._stroke.draw(thisC.host);
//             if (visual._fill) visual._fill.draw(thisC.host);
//             next();
//         }, onDone);
//     }
// };

SRC.Drawings.SplineGraphic = class SplineGraphic extends SRC.Graphic {
  constructor(host, visual, points, tention, closed) {
    super(host, visual);
    this._points = points;
    this._tention = tention;
    this._closed = closed;
  }

  draw(ctx, onDone) {
    var thisC = this;
    var pts = thisC._points;
    var visual = thisC.visual;
    var closed = this._closed;

    onDone = onDone || function () { };

    if (!visual._stroke || pts.length < 2) return;

    let {
      firstControlPoints,
      secondControlPoints,
    } = SRC.Drawings.Bezier.getCurveControlPoints(this._tention, pts);

    SR.Collections.List.sequentialExe(
      function (next) {
        ctx.beginPath();
        if (visual._startPoint) {
          ctx.moveTo(visual._startPoint.x, visual._startPoint.y);
          ctx.lineTo(pts[0].x, pts[0].y);
        } else {
          ctx.moveTo(pts[0].x, pts[0].y);
        }
        next();
      },
      function (next) {
        for (var i = 1; i < pts.length; i += 1) {
          ctx.bezierCurveTo(
            firstControlPoints[i - 1].x,
            firstControlPoints[i - 1].y,
            secondControlPoints[i - 1].x,
            secondControlPoints[i - 1].y,
            pts[i].x,
            pts[i].y
          );
        }
        next();
      },
      function (next) {
        if (visual._endPoint) {
          ctx.lineTo(visual._endPoint.x, visual._endPoint.y);
          if (closed) {
            ctx.lineTo(visual._startPoint.x, visual._startPoint.y);
          } else ctx.moveTo(visual._startPoint.x, visual._startPoint.y);
        } else {
          ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
          if (!closed) ctx.moveTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
        }
        next();
      },
      function (next) {
        ctx.closePath();
        if (visual._shadow) visual._shadow.draw(thisC.host);
        if (visual._stroke) visual._stroke.draw(thisC.host);
        if (visual._fill) visual._fill.draw(thisC.host);
        next();
      },
      onDone
    );
  }
};

SRC.Drawings.Bezier = class Bezier {
  /**
   * @description Get open-ended Bezier Spline Control Points.
   * @param {*} tension Line tension
   * @param {*} points Input Knot Bezier spline points. array must containg at least two points.
   */
  static getCurveControlPoints(tension, points) {
    var n = points.length - 1,
      i;
    var firstControlPoints = null, // Output First Control points array of knots.Length - 1 length.
      secondControlPoints = null; // Output Second Control points array of knots.Length - 1 length.

    if (n < 1) {
      return { firstControlPoints, secondControlPoints };
    }

    (firstControlPoints = []), (secondControlPoints = []);

    // throw new ArgumentException("At least two knot points required", "knots");
    if (n == 1) {
      // Special case: Bezier curve should be a straight line.
      // 3P1 = 2P0 + P3
      firstControlPoints[0].x = (2 * points[0].x + points[1].x) / 3;
      firstControlPoints[0].y = (2 * points[0].y + points[1].y) / 3;

      // P2 = 2P1 – P0
      secondControlPoints[0].x = 2 * firstControlPoints[0].x - points[0].x;
      secondControlPoints[0].y = 2 * firstControlPoints[0].y - points[0].y;

      return { firstControlPoints, secondControlPoints };
    }

    // Calculate first Bezier control points
    // Right hand side vector
    var rhs = new Array(n);

    // Set right hand side X values
    for (i = 1; i < n - 1; ++i) rhs[i] = 4 * points[i].x + 2 * points[i + 1].x;

    rhs[0] = points[0].x + 2 * points[1].x;
    rhs[n - 1] = (8 * points[n - 1].x + points[n].x) / 2.0;
    // Get first control points X-values
    var x = this.getFirstControlPoints(rhs, tension);

    // Set right hand side Y values
    for (i = 1; i < n - 1; ++i) rhs[i] = 4 * points[i].y + 2 * points[i + 1].y;

    rhs[0] = points[0].y + 2 * points[1].y;
    rhs[n - 1] = (8 * points[n - 1].y + points[n].y) / 2.0;
    // Get first control points Y-values
    var y = this.getFirstControlPoints(rhs, tension);

    // Fill output arrays.
    for (i = 0; i < n; ++i) {
      // First control point
      firstControlPoints[i] = { x: x[i], y: y[i] };

      // Second control point
      if (i < n - 1)
        secondControlPoints[i] = {
          x: 2 * points[i + 1].x - x[i + 1],
          y: 2 * points[i + 1].y - y[i + 1],
        };
      else
        secondControlPoints[i] = {
          x: (points[n].x + x[n - 1]) / 2,
          y: (points[n].y + y[n - 1]) / 2,
        };
    }

    return { firstControlPoints, secondControlPoints };
  }

  /**
   * @description Solves a tridiagonal system for one of coordinates (x or y) of first Bezier control points.
   * @param tension tension
   * @param rhs {Array} Right hand side vector.
   * @returns {Array} [Number] Solution vector.
   */
  static getFirstControlPoints(rhs, tension) {
    let n = rhs.length,
      i,
      x = [], // Solution vector.
      tmp = []; // Temp workspace.

    let b = tension;
    x[0] = rhs[0] / b;

    // Decomposition and forward substitution.
    for (i = 1; i < n; i++) {
      tmp[i] = 1 / b;
      b = (i < n - 1 ? 4.0 : 3.5) - tmp[i];
      x[i] = (rhs[i] - x[i - 1]) / b;
    }

    for (i = 1; i < n; i++) x[n - i - 1] -= tmp[n - i] * x[n - i]; // Backsubstitution.

    return x;
  }
};


SRC.Font = class Font {
    constructor(conf) {
        this._fontStyle = 'normal';
        this._fontWeight = 'normal';
        this._fontSize = 12;
        this._fontFamily = 'Arial';
        this._fontWeight = 'normal';
        this._fontColor = '#333333';
        this._baseline = SRC.Font.TextBaseLine.Top;

        if (conf) {
            if (conf.fontStyle) this._fontStyle = conf.fontStyle;
            if (conf.fontWeight) this._fontWeight = conf.fontWeight;
            if (conf.fontSize) this._fontSize = conf.fontSize;
            if (conf.fontFamily) this._fontFamily = conf.fontFamily;
            if (conf.fontColor) this._fontColor = conf.fontColor;
            if (conf.baseline) this._baseline = conf.baseline;
        }

        this.changed = null;
    }

    fontSize(val) {
        if (SR.isNumber(val) && this._fontSize !== val) {
            this._fontSize = val;
            if (this.changed)
                this.changed(this, 'fontSize');
        } else {
            return this._fontSize;
        }
    }

    fontFamily(val) {
        if (SR.isNumber(val) && this._fontFamily !== val) {
            this._fontFamily = val;
            if (this.changed)
                this.changed(this, 'fontFamily');
        } else {
            return this._fontFamily;
        }
    }

    fontColor(val) {
        if (SR.isNumber(val) && this._color !== val) {
            this._fontColor = val;
            if (this.changed)
                this.changed(this, 'fontColor');
        } else {
            return this._fontColor;
        }
    }

    fontWeight(val) {
        if (SR.isDefined(val)) {
            this._fontWeight = val;
            if (this.changed)
                this.changed(this, 'fontWeight');
        } else {
            return this._fontWeight;
        }
    }

    baseline(val) {
        if (SR.isDefined(val) && this._baseline !== val) {
            this._baseline = val;
            if (this.changed)
                this.changed(this, 'baseline');
        } else {
            return this._baseline;
        }
    }

    set(ctx) {
        ctx.font = this._fontStyle + ' normal ' + this._fontWeight + ' ' + this._fontSize + "px " + this._fontFamily;
        ctx.textBaseline = this._baseline;
        ctx.fillStyle = this._fontColor;
        ctx.lineWidth = 1;
        ctx.strokeStyle = this._fontColor ? this._fontColor : 'gray';
    }

    getCssStyle() {
        return 'font-size:' + (this._fontSize) + 'px;' + 'line-height:' + (this._fontSize) + 'px;' +
            'font-family:' + this._fontFamily + ';' +
            'font-style:' + this._fontStyle + ';' +
            'font-weight:' + this._fontWeight + ';';
    }

    toString() {
        return this.getCssStyle();
    }
};

SRC.Font.TextBaseLine = {
    Top: "top",
    Hanging: "hanging",
    Middle: "middle",
    Alphabetic: "alphabetic",
    Ideographic: "ideographic",
    Bottom: "bottom"
};
// Returns a darker shade of the color by decreasing the brightness by the given intensity value
SRC.Graphics = class Graphics {
    static isRectOverlap(rectA, rectB) {
        return (rectA.x < (rectB.x + rectB.w) && (rectA.x + rectA.w > rectB.x) && rectA.y < (rectB.y + rectB.h) && (rectA.y + rectA.h > rectB.y));
    }

    static getDarkerColor(inputColor, intensity) {
        var color = SR.isString(inputColor) ? Graphics.Hex2Rgb(inputColor) : inputColor;
        intensity = (intensity < 0 || intensity > 1) ? 1 : intensity;
        return {
            r: parseInt(color.r * intensity),
            g: parseInt(color.g * intensity),
            b: parseInt(color.b * intensity),
            a: color.a
        };
    }

    // Returns a lighter shade of the color by increasing the brightness by the given intensity value
    static GetLighterColor(inputColor, intensity, isOutputInRGB) {
        var color = SR.isString(inputColor) ? Graphics.Hex2Rgb(inputColor) : inputColor;
        intensity = (intensity < 0 || intensity > 1) ? 1 : intensity;
        var ret = {
            r: parseInt(256 - ((256 - color.r) * intensity)),
            g: parseInt(256 - ((256 - color.g) * intensity)),
            b: parseInt(256 - ((256 - color.b) * intensity)),
            a: color.a
        };
        return isOutputInRGB ? ret : Graphics.RGB2Hex(ret);
    }

    // Creates and returns a lighter color based on the parameters
    static GetLighterColor2(inputColor, intensityR, intensityG, intensityB, isOutputInRGB) {
        var color = SR.isString(inputColor) ? Graphics.Hex2Rgb(inputColor) : inputColor;
        intensityR = (intensityR < 0 || intensityR > 1) ? 1 : intensityR;
        intensityG = (intensityG < 0 || intensityG > 1) ? 1 : intensityG;
        intensityB = (intensityB < 0 || intensityB > 1) ? 1 : intensityB;
        var ret = {
            r: parseInt(256 - ((256 - color.r) * intensityR)),
            g: parseInt((256 - ((256 - color.g) * intensityG))),
            b: parseInt(256 - ((256 - color.b) * intensityB)),
            a: color.a
        };

        return isOutputInRGB ? ret : Graphics.RGB2Hex(ret);
    }

    // Creates and returns a lighter color based on the parameters
    static GetLighterColorShine(inputColor, isOutputInRGB) {
        var color = SR.isString(inputColor) ? Graphics.Hex2Rgb(inputColor) : inputColor;
        var r = (color.r / 255) * 0.9999,
            g = (color.g / 255) * 0.9999,
            b = (color.b / 255) * 0.9999;
        return Graphics.GetLighterColor2(color, 1 - r, 1 - g, 1 - b, isOutputInRGB);
    }

    static GetBevelTopBrush(inputColor, x0, y0, x1, y1, angle) {
        var color = SR.isString(inputColor) ? Graphics.Hex2Rgb(inputColor) : inputColor;
        var r = (color.r / 255) * 0.9999,
            g = (color.g / 255) * 0.9999,
            b = (color.b / 255) * 0.9999;
        var gra = new SRC.LinearGradient(x0, y0, x1, y1, [
            new SRC.ColorStop(0, Graphics.GetLighterColor(color, 0.99)),
            new SRC.ColorStop(0.2, Graphics.GetLighterColor2(color, 1 - r, 1 - g, 1 - b)),
            new SRC.ColorStop(0.6, Graphics.GetLighterColor2(color, 1 - r, 1 - g, 1 - b)),
            new SRC.ColorStop(1, Graphics.GetLighterColor(color, 0.99))
        ]);
        return gra;
    }

    static Hex2Rgb(hex) {
        if (hex.indexOf('#') !== 0)
            hex = Graphics.colourNameToHex(hex);

        hex = hex.replace(/[^0-9A-F]/gi, '');
        var bigint = parseInt(hex, 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    }

    static RGBString2Hex(rgb) {
        var regex = /rgb *\( *([0-9]{1,3}) *, *([0-9]{1,3}) *, *([0-9]{1,3}) *\)/;
        var values = regex.exec(rgb);
        if (values.length != 4) {
            return rgb; // fall back to what was given.
        }
        var r = Math.round(parseFloat(values[1]));
        var g = Math.round(parseFloat(values[2]));
        var b = Math.round(parseFloat(values[3]));
        return "#" + (r + 0x10000).toString(16).substring(3).toUpperCase() +
            (g + 0x10000).toString(16).substring(3).toUpperCase() +
            (b + 0x10000).toString(16).substring(3).toUpperCase();
    }

    static RGB2Hex(rgb) {
        return "#" + (rgb.r + 0x10000).toString(16).substring(3).toUpperCase() +
            (rgb.g + 0x10000).toString(16).substring(3).toUpperCase() +
            (rgb.b + 0x10000).toString(16).substring(3).toUpperCase();
    }

    static hexToCanvasColor(hexColor, opacity) {
        // Convert #AA77CC to rbga() format for Firefox
        opacity = opacity || "1.0";
        hexColor = hexColor.replace("#", "");
        var r = parseInt(hexColor.substring(0, 2), 16);
        var g = parseInt(hexColor.substring(2, 4), 16);
        var b = parseInt(hexColor.substring(4, 6), 16);
        return "rgba(" + r + "," + g + "," + b + "," + opacity + ")";
    }

    static colourNameToHex(color) {
        if (Graphics.colors[color.toLowerCase()])
            return Graphics.colors[color.toLowerCase()];

        return false;
    }
};

SRC.Graphics.colors = {
    "aliceblue": "#f0f8ff", "antiquewhite": "#faebd7", "aqua": "#00ffff", "aquamarine": "#7fffd4", "azure": "#f0ffff",
    "beige": "#f5f5dc", "bisque": "#ffe4c4", "black": "#000000", "blanchedalmond": "#ffebcd", "blue": "#0000ff", "blueviolet": "#8a2be2", "brown": "#a52a2a", "burlywood": "#deb887",
    "cadetblue": "#5f9ea0", "chartreuse": "#7fff00", "chocolate": "#d2691e", "coral": "#ff7f50", "cornflowerblue": "#6495ed", "cornsilk": "#fff8dc", "crimson": "#dc143c", "cyan": "#00ffff",
    "darkblue": "#00008b", "darkcyan": "#008b8b", "darkgoldenrod": "#b8860b", "darkgray": "#a9a9a9", "darkgreen": "#006400", "darkkhaki": "#bdb76b", "darkmagenta": "#8b008b", "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00", "darkorchid": "#9932cc", "darkred": "#8b0000", "darksalmon": "#e9967a", "darkseagreen": "#8fbc8f", "darkslateblue": "#483d8b", "darkslategray": "#2f4f4f", "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3", "deeppink": "#ff1493", "deepskyblue": "#00bfff", "dimgray": "#696969", "dodgerblue": "#1e90ff",
    "firebrick": "#b22222", "floralwhite": "#fffaf0", "forestgreen": "#228b22", "fuchsia": "#ff00ff",
    "gainsboro": "#dcdcdc", "ghostwhite": "#f8f8ff", "gold": "#ffd700", "goldenrod": "#daa520", "gray": "#808080", "green": "#008000", "greenyellow": "#adff2f",
    "honeydew": "#f0fff0", "hotpink": "#ff69b4",
    "indianred ": "#cd5c5c", "indigo": "#4b0082", "ivory": "#fffff0", "khaki": "#f0e68c",
    "lavender": "#e6e6fa", "lavenderblush": "#fff0f5", "lawngreen": "#7cfc00", "lemonchiffon": "#fffacd", "lightblue": "#add8e6", "lightcoral": "#f08080", "lightcyan": "#e0ffff", "lightgoldenrodyellow": "#fafad2",
    "lightgrey": "#d3d3d3", "lightgreen": "#90ee90", "lightpink": "#ffb6c1", "lightsalmon": "#ffa07a", "lightseagreen": "#20b2aa", "lightskyblue": "#87cefa", "lightslategray": "#778899", "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0", "lime": "#00ff00", "limegreen": "#32cd32", "linen": "#faf0e6",
    "magenta": "#ff00ff", "maroon": "#800000", "mediumaquamarine": "#66cdaa", "mediumblue": "#0000cd", "mediumorchid": "#ba55d3", "mediumpurple": "#9370d8", "mediumseagreen": "#3cb371", "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a", "mediumturquoise": "#48d1cc", "mediumvioletred": "#c71585", "midnightblue": "#191970", "mintcream": "#f5fffa", "mistyrose": "#ffe4e1", "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead", "navy": "#000080",
    "oldlace": "#fdf5e6", "olive": "#808000", "olivedrab": "#6b8e23", "orange": "#ffa500", "orangered": "#ff4500", "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa", "palegreen": "#98fb98", "paleturquoise": "#afeeee", "palevioletred": "#d87093", "papayawhip": "#ffefd5", "peachpuff": "#ffdab9", "peru": "#cd853f", "pink": "#ffc0cb", "plum": "#dda0dd", "powderblue": "#b0e0e6", "purple": "#800080",
    "red": "#ff0000", "rosybrown": "#bc8f8f", "royalblue": "#4169e1",
    "saddlebrown": "#8b4513", "salmon": "#fa8072", "sandybrown": "#f4a460", "seagreen": "#2e8b57", "seashell": "#fff5ee", "sienna": "#a0522d", "silver": "#c0c0c0", "skyblue": "#87ceeb", "slateblue": "#6a5acd", "slategray": "#708090", "snow": "#fffafa", "springgreen": "#00ff7f", "steelblue": "#4682b4",
    "tan": "#d2b48c", "teal": "#008080", "thistle": "#d8bfd8", "tomato": "#ff6347", "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3", "white": "#ffffff", "whitesmoke": "#f5f5f5",
    "yellow": "#ffff00", "yellowgreen": "#9acd32"
};


/*-----------------------------
 Definition of Stroke
 --------------------------------*/

SRC.Stroke = class Stroke {
    constructor(pLineWidth, strokeColor) {
        this.lineWidth = pLineWidth;
        if (strokeColor instanceof SRC.SolidColor) {
            this.strokeColor = strokeColor.color;
        } else if (strokeColor instanceof SRC.LinearGradient) {
            this._gradient = strokeColor;
        } else this.strokeColor = strokeColor;
    }

    draw(host) {
        var ctx = host.context;
        ctx.lineWidth = this.lineWidth;
        if (this._gradient) {
            ctx.strokeStyle = this._gradient.__collectGradient(host, new SR.Rect(0, 0, ctx.lineWidth, ctx.lineWidth));
        } else {
            ctx.strokeStyle = this.strokeColor;
        }

        ctx.stroke();
        //ctx.stroke();
    }
};

/*-----------------------------
 Definatin of ColorStop
 --------------------------------*/

SRC.ColorStop = class ColorStop {
    constructor(pOffset, pColor) {
        this.offset = pOffset;
        this.color = pColor;
    }
};

/*-----------------------------
 Definatin of LinearGradient
 --------------------------------*/

SRC.LinearGradient = class LinearGradient {
    constructor(pStartX, pStartY, pEndX, pEndY, colorStops) {
        this._startX = pStartX;
        this._startY = pStartY;
        this._endX = pEndX;
        this._endY = pEndY;
        this.colorStops = colorStops ? new SR.Collections.List(colorStops) : new SR.Collections.List();
    }

    __collectGradient(host, rect) {
        var ctx = host.context;
        if (this._startX !== null && this._startY !== null && this._endX !== null && this._endY !== null) {
            var grd;
            if (rect)
                grd = host.context.createLinearGradient(
                    rect.x + (this._startX * rect.w),
                    rect.y + (this._startY * rect.h),
                    rect.x + (this._endX * rect.w),
                    rect.y + (this._endY * rect.h)
                );
            else
                grd = host.context.createLinearGradient(this._startX, this._startY, this._endX, this._endY);

            this.colorStops.each(function (item) {
                grd.addColorStop(item.offset, item.color);
            });

            return grd;
        } else {
            alert("Start Point and end Point of LinearGradient is not defined");
        }
    }

    draw(host, rect) {
        var ctx = host.context;
        ctx.fillStyle = this.__collectGradient(host, rect);
        if (rect)
            ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
        else
            ctx.fill();
    }
};

/*-----------------------------
 Definition of SolidColor
 --------------------------------*/
SRC.SolidColor = class SolidColor {
    constructor(pColor) {
        this.color = pColor;
    }

    draw(host, rect) {
        var ctx = host.context;
        ctx.fillStyle = this.color;
        if (rect)
            ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
        else
            ctx.fill();
    }
};

SRC.SolidColor.Transparent = new SRC.SolidColor('transparent');
SRC.SolidColor.TransparentWhite = new SRC.SolidColor('#3effffff');

/*-------------------------------
 Definition of ImageBrush ---------
 --------------------------------*/

SRC.ImageBrush = class ImageBrush {
    constructor(resourceId) {
        this._resId = resourceId;
    }

    draw(host, rect) {
        var img = host.resources.images.cache[this._resId];
        host.context.drawImage(img, rect.x, rect.y, rect.w, rect.h);
    }
};

SRC.Shadow = class Shadow {
    constructor(color, blur, offsetX, offsetY) {
        this._shadowColor = color ? color : '#949494';
        this._shadowBlur = blur ? blur : SRC.Shadow.DEPTH;
        this._shadowOffsetX = offsetX ? offsetX : 0;
        this._shadowOffsetY = offsetY ? offsetY : 0;
    }

    static reset(host) {
        var ctx = host.context;
        ctx.shadowColor = undefined;
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    }

    draw(host) {
        var ctx = host.context;
        ctx.shadowColor = this._shadowColor;
        ctx.shadowBlur = this._shadowBlur;
        ctx.shadowOffsetX = this._shadowOffsetX;
        ctx.shadowOffsetY = this._shadowOffsetY;
    }

    shadowColor(val) {
        if (SR.isDefined(val)) {
            this._shadowColor = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._shadowColor;
        }
    }

    shadowBlur(val) {
        if (SR.isNumber(val)) {
            this._shadowBlur = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._shadowBlur;
        }
    }

    shadowOffsetX(val) {
        if (SR.isNumber(val)) {
            this._shadowOffsetX = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._shadowOffsetX;
        }
    }

    shadowOffsetY(val) {
        if (SR.isNumber(val)) {
            this._shadowOffsetY = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._shadowOffsetY;
        }
    }
};

SRC.Shadow.DEPTH = 5;

SRC.Shadow.Default = new SRC.Shadow();
var DP_DS_DEFAULTS = {
    opacity: 1,
    tension: 1.6,
    lineWidth: 1,
    markerShadowEnabled: false,
    markerEnabled: false
};



class ChartBase {
    /**
     * When dp is not passed then it only consider ds only
     * @param property
     * @param ds
     * @param dp
     * @returns {*}
     * @private
     */
    getDpDsProperty(property, ds, dp) {
        var tc = this;
        if (dp && SR.isDefined(dp[property]))
            return dp[property];
        else if (SR.isDefined(ds['_' + property]))
            return ds['_' + property];
        else {
            switch (property) {
                case "showInLegend":
                    switch (ds._plotAs) {
                        case Chart.PlotAs.Doughnut:
                        case Chart.PlotAs.Pie:
                            return true;
                        default:
                            return (tc.series.length > 1);
                    }
                    break;
                case "borderThickness":
                    switch (ds._plotAs) {
                        case Chart.PlotAs.Bubble:
                            return 2.5;
                        case Chart.PlotAs.CandleStick:
                        case Chart.PlotAs.OHLC:
                            return 1.4;
                        default:
                            return DP_DS_DEFAULTS[property];
                    }
                    break;
                case "opacity":
                    switch (ds._plotAs) {
                        case Chart.PlotAs.Area:
                        case Chart.PlotAs.SplineArea:
                            return 0.96;
                        default:
                            return DP_DS_DEFAULTS[property];
                    }
                    break;
                case "markerEnabled":
                    switch (ds._plotAs) {
                        case Chart.PlotAs.Area:
                        case Chart.PlotAs.SplineArea:
                        case Chart.PlotAs.StepLine:
                            return true;
                        case Chart.PlotAs.Line:
                        case Chart.PlotAs.Spline:
                        case Chart.PlotAs.Bubble:
                        case Chart.PlotAs.ScatterChart:
                            return true;
                        default:
                            return false;
                    }
                    break;
                case "labelPosition":
                    switch (ds._plotAs) {
                      case Chart.PlotAs.Column:
                      case Chart.PlotAs.StackedColumn:
                      case Chart.PlotAs.StackedColumn100:
                      case Chart.PlotAs.Bar:
                      case Chart.PlotAs.StackedBar:
                      case Chart.PlotAs.StackedBar100:
                        return 'outside';
                        break;
                      default:
                        return 'top';
                        break;
                    }
                    break;
                case "labelEnabled":
                    switch (ds._plotAs) {
                      default:
                        return false;
                    }
                    break;
                case "dataPointWidth":
                    switch (ds._plotAs) {
                        case Chart.PlotAs.CandleStick:
                            return 7;
                        default:
                            return DP_DS_DEFAULTS[property];
                    }
                    break;
                default:
                    return DP_DS_DEFAULTS[property];
            }
        }
    }
}


var List = SR.Collections.List;

var Chart = SRC.Chart = class Chart extends ChartBase {
  constructor(div, conf = {}) {
    super(...arguments);
    var tc = this;
    this.domEle = div;
    this._conf = conf;

    this.titles = new SR.Collections.List();
    this.axesX = new SR.Collections.List();
    this.axesY = new SR.Collections.List();
    this.series = new SR.Collections.List();
    this._animations = new SR.Collections.List();
    this._orientation = SRC.Orientation.Vertical;
    this._GAP_AXIS = 5;
    this._GAP_TITLE = 10;
    this._GAP_DEFAULT = 2;
    this._hasPrimaryYAxis = false;
    this._hasSecondaryYAxis = false;
    this._highLightElements = new SR.Collections.List();
    this.legend = new Legend(conf.legend);

    this.titles.changed = function (list, e) {
      List.each(e.items, function (ax) {
        ax.chart = tc;
      });
    };

    this.axesX.changed = function (list, e) {
      List.each(e.items, function (ax) {
        ax.chart = tc;
        ax.direction = SRC.Chart.AxisDirection.XAXIS;
      });
    };

    this.axesY.changed = function (list, e) {
      List.each(e.items, function (ax) {
        ax.chart = tc;
        ax.direction = SRC.Chart.AxisDirection.YAXIS;
      });
    };

    this._confAnalyzer(conf);
    this._setupRootVisual();

    //TODO: ON clear of children need to remove parent references which is not yet done
    this._host.onResize = function (host, e) {
      //console.log(e);
      clearTimeout(tc._reRenderTimeOut);
      tc._reRenderTimeOut = setTimeout(() => {
        tc._setupRootVisual();
        tc.render();
      }, 500);
    };
  }

  _confAnalyzer(conf) {
    var tc = this;
    // Load Public properties
    this.height = conf.height;
    this.width = conf.width;
    this._theme = conf._theme ? conf.theme : "theme1";
    this._tooltip = conf.tooltip ? conf.tooltip : { shared: false };
    this._data = conf.data;
    this.orientation = conf.orientation;

    this._animationEnabled = SR.isDefined(conf.animationEnabled) ? conf.animationEnabled : false;
    this._dataPointWidthInPercent = conf.dataPointWidthInPercent ? conf.dataPointWidthInPercent : 0.7;

    // End load Public properties

    this.background = SR.isString(conf.background) ? new SRC.SolidColor(conf.background) : (conf.background ? conf.background : new SRC.SolidColor("white"));

    this.border = conf.border ? Number(conf.border) : 0.5;
    this.borderColor = SR.isString(conf.borderColor) ? new SRC.SolidColor(conf.borderColor) : conf.borderColor ? conf.borderColor : new SRC.SolidColor("#666666");

    this.shadow = conf.shadow ? conf.shadow : false;
    this.cornerRadius = conf.cornerRadius ? conf.cornerRadius : [0, 0, 0, 0];
    this.padding = conf.padding ? conf.padding : [5, 5, 5, 5];
    this.bevel = SR.isDefined(conf.bevel) ? conf.bevel : true;

    if (conf.titles) {
      List.each(conf.titles, function (t) {
        tc.titles.add(new Chart.Title(t));
      });
    }

    if (conf.axesX) {
      List.each(conf.axesX, function (t) {
        tc.axesX.add(new Chart.Axis(t));
      });
    }

    if (conf.axesY) {
      List.each(conf.axesY, function (t) {
        tc.axesY.add(new Chart.Axis(t));
      });
    }
  }

  _setupRootVisual() {
    var borderHalf = this.border / 2,
      width,
      height,
      padding = this.padding;

    var border; // rootVisual
    var chartLayer; // 2nd inner layer of chart

    this._host = this._host || new SRC.Host(this.domEle, this.width, this.height, "transparent", this.shadow, this.cornerRadius);
    this._host.shadow(this.shadow, this.cornerRadius);

    width = this._host.width() - this.border;
    height = this._host.height() - this.border;

    /** most outer border and background with shadow */
    border = new SRC.Controls.Border(
      borderHalf,
      borderHalf,
      width - borderHalf,
      height - borderHalf
    );

    border.cornerRadius(this.cornerRadius);
    border.stroke(new SRC.Stroke(this.border, this.borderColor));
    border.fill(this.background);
    border.autoClip(false);
    this._host.rootVisual(border);

    /** 2nd inner layer of chart **/
    chartLayer = new SRC.Controls.Canvas(padding[0], padding[1],
      SR.getPositiveNum(width - padding[0] - padding[2]),
      SR.getPositiveNum(height - padding[1] - padding[3])
    );

    chartLayer.autoClip(false);
    border.child(chartLayer);

    this.chartLayer = chartLayer;
  }

  render(cb) {
    //    this._host.draw(); return;
    /**
    * 1) titles are rendered in chartLayer
    * 2) axis are rendered inside chartArea
    * 3) charts are drawn inside plotArea
    * 4) So canvas layers are chartLayer > chartArea > plotArea
    * @type {Chart}
    */
    var tc = this, tLbl;

    tc._animations.clear();
    tc._host._graphics.clear();

    SR.Profiler.start("_dataAnalyzer");

    this._dataAnalyzer(tc._data, function () {
      SR.Profiler.end("_dataAnalyzer");
      if (tc.chartLayer) {
        tc.chartLayer.controls.clear();
      }

      if (tc.chartArea) {
        tc.chartArea.controls.clear();
      }

      var charAreaBound = tc.chartLayer.bound();

      // Draw title Here
      SR.Profiler.start("_renderTitles");
      tc._renderTitles(charAreaBound);
      SR.Profiler.end("_renderTitles");
      var paddingAfterTitles = tc.innerPadding || [0, 0, 0, 0];
      charAreaBound.applyRealPadding(paddingAfterTitles);

      let legendCanvas = new SRC.Controls.Canvas(
        charAreaBound.x,
        charAreaBound.y,
        charAreaBound.w,
        charAreaBound.h
      );
      
      // Do legend work here
      var legendVisual = tc.legend.render(tc, charAreaBound); 
      legendCanvas.controls.add(legendVisual);
      legendVisual.measure();
      tc.legend.resetAndRepositionParentSize(charAreaBound, legendVisual);

      // Do other stff
      tc.chartArea = new SRC.Controls.Canvas(charAreaBound.x, charAreaBound.y, charAreaBound.w, charAreaBound.h);

      tc.chartArea.autoClip(false);

      if (Chart.isDebug) {
        tLbl = new SRC.Controls.TextBlock(0, 0, `ChartLayer (${tc.chartLayer.x()}, ${tc.chartLayer.y()}, ${tc.chartLayer.height()}, ${tc.chartLayer.width()})`);
        tc.chartLayer.stroke(new SRC.Stroke(1, "red"));
        // c2ndLayer.fill(new SRC.SolidColor('#DBDBDB'));
        tc.chartLayer.controls.add(tLbl);

        tc.chartArea.stroke(new SRC.Stroke(1, "red"));
        tLbl = new SRC.Controls.TextBlock(0, 0, `ChartArea (${tc.chartArea.x()}, ${tc.chartArea.y()}, ${tc.chartArea.height()}, ${tc.chartArea.width()})`);
        tc.chartArea.controls.add(tLbl);
      }

      tc.chartLayer.controls.add(legendCanvas);
      tc.chartLayer.controls.add(tc.chartArea);

      charAreaBound = tc.chartArea.bound();

      SR.Profiler.start("_measureAxes");
      tc._measureAxes(charAreaBound);
      SR.Profiler.end("_measureAxes");

      SR.Profiler.start("_renderAxes");
      tc.plotArea = tc._renderAxes(charAreaBound);

      if (Chart.isDebug) {
        tLbl = new SRC.Controls.TextBlock(0, 10, `PlotArea (${tc.plotArea.x()}, ${tc.plotArea.y()}, ${tc.plotArea.height()}, ${tc.plotArea.width()})`);
        tc.plotArea.stroke(new SRC.Stroke(1, "blue"));
        // c2ndLayer.fill(new SRC.SolidColor('#DBDBDB'));
        tc.plotArea.controls.add(tLbl);
      }

      SR.Profiler.end("_renderAxes");

      SR.Profiler.start("this.chartArea.controls.add(this.plotArea);");
      tc.chartArea.controls.add(tc.plotArea);
      SR.Profiler.end("this.chartArea.controls.add(this.plotArea);");

      SR.Profiler.start("_drawCharts");
      tc._drawCharts();
      SR.Profiler.end("_drawCharts");

     // tc._postRender();

      tc._host.draw(function () {
        if (tc._animationEnabled) {
          tc._animations.each(function (ani) {
            ani.begin();
          });
        }

        if (cb) cb.apply();
      });
    });
  }

  _postRender() {
    let tc = this;
    // Add watermark
    let y = this.chartLayer.height();
    let com = "636f6d";
    let canvas = "63616e766173";
    let chart = "43686172742e";
    let bla1 = "bla";
    let txt = SRC.Algorithm.hex2char(canvas);
    let can = new SRC.Controls.Canvas(0, y - 8, 90, 12);
    //can.fill(new SRC.SolidColor("red"));
    txt += SRC.Algorithm.hex2char(chart);
    let bla2 = "nk";
    can.aEvent(SRC.EventTypes.LEFT_MOUSE_DOWN, function (sender, e) {
      var win = tc._host._fkYou.open(
        SRC.Algorithm.hex2char(`68747470733a2f2f`) + txt,
        `_${bla1}${bla2}`
      );
      win.focus();
    });

    txt += SRC.Algorithm.hex2char(com);

    let tLbl = new SRC.Controls.TextBlock(0, 0, txt, {
      fontSize: 11,
      fillStyle: "#6e6e6e",
      fontFamily: "Arial",
    });

    can.controls.add(tLbl);
    this.chartLayer.controls.add(can);
  }

  openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  _measureHorizVertiAxes(areaLeft) {
    var tc = this;
    var plotArea = areaLeft.clone();
    var axesX, axesY;

    switch (this._orientation) {
      case SRC.Orientation.Vertical:
        axesX = this.axesX;
        axesY = this.axesY;
        break;
      case SRC.Orientation.Horizontal:
        axesX = this.axesY;
        axesY = this.axesX;
        break;
    }

    var totalYAAxisWidth = 0;
    var verticalAxWidth = 0;

    axesY.where(function (ax) {
      return ax._mustRender && ax._axisType === Chart.AxisType.Primary;
    }).each(function (axis) {
      var size = axis._measure(plotArea, 0);
      axis.width(size.w);
      verticalAxWidth += size.w;
      tc._hasPrimaryYAxis = true;
    });

    totalYAAxisWidth += verticalAxWidth;

    verticalAxWidth = 0;
    axesY.where(function (ax) {
      return ax._mustRender && ax._axisType === Chart.AxisType.Secondary;
    }).each(function (axis) {
      var size = axis._measure(plotArea, 0);
      axis.width(size.w);
      verticalAxWidth += size.w;
      tc._hasSecondaryYAxis = true;
    });

    totalYAAxisWidth += verticalAxWidth;

    var horizontalAxHeight = 0;

    axesX.where(function (ax) {
      return ax._mustRender && ax._axisType === Chart.AxisType.Primary;
    }).each(function (axis) {
      var size = axis._measure(plotArea, 0);
      axis.height(size.h);
      horizontalAxHeight += size.h;
    });

    // Pass 2
    var realArea = areaLeft.clone();

    realArea.h -= horizontalAxHeight;

    axesY.where(function (ax) {
      return ax._mustRender && ax._axisType === Chart.AxisType.Primary;
    }).each(function (axis) {
      var size = axis._measure(realArea, 1);
      axis.width(size.w);
    });

    axesY.where(function (ax) {
      return ax._mustRender && ax._axisType === Chart.AxisType.Secondary;
    }).each(function (axis) {
      var size = axis._measure(realArea, 1);
      axis.width(size.w);
    });

    realArea.w -= totalYAAxisWidth;

    axesX.where(function (ax) {
      return ax._mustRender && ax._axisType === Chart.AxisType.Primary;
    }).each(function (axis) {
      var size = axis._measure(realArea, 1);
      axis.height(size.h);
      horizontalAxHeight += size.h;
    });
  }

  _measureAxes(areaLeft) {
    switch (this._orientation) {
      case SRC.Orientation.Horizontal:
      case SRC.Orientation.Vertical:
        this._measureHorizVertiAxes(areaLeft);
        break;
    }
  }

  _renderHoriVertiAxes(areaLeft) {
    var tc = this;
    var axesX, axesY;

    switch (this._orientation) {
      case SRC.Orientation.Vertical:
        axesX = this.axesX;
        axesY = this.axesY;
        break;
      case SRC.Orientation.Horizontal:
        axesX = this.axesY;
        axesY = this.axesX;
        break;
    }

    // Render primary AxesY
    var totalHeightOfXAxis = axesX.select(function (ax) {
      return !ax._mustRender ? 0 : ax.height();
    }).sum();

    var widthOfPYAxis = 0;

    axesY.where(function (ax) {
      return ax._mustRender && ax._axisType === Chart.AxisType.Primary;
    }).each(function (axis) {
      var width = axis.width();
      axis._render({
        x: areaLeft.x + widthOfPYAxis,
        y: areaLeft.y,
        w: width,
        h: areaLeft.h - totalHeightOfXAxis,
      });

      widthOfPYAxis += width;
    });

    var widthOfSYAxis = 0;

    axesY.where(function (ax) {
      return ax._mustRender && ax._axisType === Chart.AxisType.Secondary;
    }).each(function (axis) {
      var width = axis.width();
      widthOfSYAxis += width;
      axis._render({
        x: areaLeft.w - widthOfSYAxis,
        y: areaLeft.y,
        w: width,
        h: areaLeft.h - totalHeightOfXAxis,
      });
    });

    var totalYAxisWidth = widthOfPYAxis + widthOfSYAxis;

    var heightOfAxis = 0;
    axesX.where(function (ax) {
      return ax._mustRender && ax._axisType === Chart.AxisType.Primary;
    }).each(function (axis) {
      var height = axis.height();
      heightOfAxis += height;
      axis._render({
        x: widthOfPYAxis,
        y: areaLeft.y + areaLeft.h - heightOfAxis,
        w: areaLeft.w - totalYAxisWidth,
        h: height,
      });
    });

    return {
      x: widthOfPYAxis,
      y: areaLeft.y,
      w: areaLeft.w - totalYAxisWidth,
      h: areaLeft.h - heightOfAxis,
    };
  }

  /**
  * After rendering axes it returns a Canvas of the remaining area
  * @param areaLeft
  * @returns {SRC.Controls.Canvas}
  * @private
  */
  _renderAxes(areaLeft) {
    var remainingRect;

    switch (this._orientation) {
      case SRC.Orientation.Horizontal:
      case SRC.Orientation.Vertical:
        remainingRect = this._renderHoriVertiAxes(areaLeft);
        break;
      case SRC.Orientation.Circular:
        remainingRect = areaLeft;
        break;
    }

    var drawArea = new SRC.Controls.Canvas(remainingRect.x, remainingRect.y, remainingRect.w, remainingRect.h);

    drawArea.autoClip(false);
    return drawArea;
  }

  _drawZeroAxisLines(plotGroups) {
    let tc = this;

    if (this._orientation !== SRC.Orientation.Circular) {
      // Drawing Zero Axis lines
      var yAxisesInvolved = {}
      plotGroups.each((plot) => {
        Object.assign(yAxisesInvolved, tc._getYAxisesInvolved(plot));
      });

      // Render zero AxisLine
      plotGroups.each((plot) => {
        for (let yAxisId in yAxisesInvolved) {
          plot.axis.add0YValueLine(tc.plotArea, yAxisesInvolved[yAxisId]);
        }
      });
    }
  }

  _drawCharts() {
    var tc = this;
    var plotGroups = new List();

    if (this._axisXWiseDsGrp) {
      this._axisXWiseDsGrp.each(function (axisYG) {
        plotGroups.addRange(axisYG.series.groupBy("_plotAs").select(function (g) {
          return { plotAs: g.key, axis: axisYG.axisRef, series: g.value };
        }));
      });
    }

    this._drawZeroAxisLines(plotGroups);

    plotGroups.each((plot) => {
      switch (plot.plotAs) {
        case Chart.PlotAs.Bar:
          tc._renderBar(plot);
          break;
        case Chart.PlotAs.StackedBar:
          tc._renderStackedBar(plot);
          break;
        case Chart.PlotAs.StackedBar100:
          tc._renderStackedBar(plot, true);
          break;
        case Chart.PlotAs.Column:
          tc._renderColumn(plot);
          break;
        case Chart.PlotAs.StackedColumn:
          tc._renderStackedColumn(plot);
          break;
        case Chart.PlotAs.StackedColumn100:
          tc._renderStackedColumn(plot, true);
          break;
        case Chart.PlotAs.Area:
          tc._renderArea(plot);
          break;
        case Chart.PlotAs.SplineArea:
          tc._renderArea(plot, true);
          break;
        case Chart.PlotAs.Line:
          SR.Profiler.start("_renderLine");
          tc._renderLine(plot);
          SR.Profiler.end("_renderLine");
          break;
        case Chart.PlotAs.Spline:
          tc._renderLine(plot, true);
          break;
        case Chart.PlotAs.StepLine:
          tc._renderStepLine(plot);
          break;
        case Chart.PlotAs.ScatterChart:
          tc._renderScatter(plot);
          break;
        case Chart.PlotAs.Bubble:
          tc._renderBubble(plot);
          break;
        case Chart.PlotAs.OHLC:
          tc._renderOHLC(plot);
          break;
        case Chart.PlotAs.CandleStick:
          tc._renderCandleStick(plot);
          break;
        case Chart.PlotAs.Pie:
          tc._renderPie(plot);
          break;
        case Chart.PlotAs.Doughnut:
          tc._renderDoughnut(plot);
          break;
      }
    });

    this._attachToolTipAndHairline(plotGroups);
  }

  _attachToolTipAndHairline(plotGroups) {
    let tc = this;
  
    tc._host.verticalHairLine.isEnabled = tc._conf.verticalHairLineEnabled;
    tc._host.horizontalHairLine.isEnabled = tc._conf.horizontalHairLineEnabled;
    //TODO: BUG Without mouse in mouse out is not getting fired
    this.plotArea.aEvent(SRC.EventTypes.MOUSE_IN, (sender, e) => { });
    this.plotArea.aEvent(SRC.EventTypes.MOUSE_OUT, (sender, e) => {
      // alert('Hello');
      tc._host.verticalHairLine.hide();
      tc._host.horizontalHairLine.hide();
      tc._host.tooltip.hide();

      // Clear interactivity highlight
      for (let idx = 0; idx < tc._highLightElements.length; idx++) {
        tc._highLightElements[idx].deHighlight(tc._host);
      }

      tc._highLightElements.clear();
      // End Clear interactivity highlight
    });

    switch (this._orientation) {
      case SRC.Orientation.Vertical:
        tc._host.verticalHairLine.y(tc.chartArea.actualY());
        tc._host.verticalHairLine.height(tc.plotArea.height() + plotGroups[0].axis._tick.length + plotGroups[0].axis._GAP / 2);

        this.plotArea.aEvent(SRC.EventTypes.MOUSE_MOVE, (sender, e) => {
          tc._host.verticalHairLine.show();
          let selectedPoints = new SR.Collections.List();

          // Clear interactivity highlight
          for (let idx = 0; idx < tc._highLightElements.length; idx++) {
            tc._highLightElements[idx].deHighlight(tc._host);
          }

          tc._highLightElements.clear();
          // End Clear interactivity highlight

          plotGroups.each((plot) => {
            if (plot.drawable) {
              let xValues = Object.keys(plot.drawable).map((t) => {
                return Number(t);
              });
              let nearestXVal = xValues[SR.Algorithm.nearestPointOnArray(xValues,
                plot.axis.getValueFromPixPosition(e.relativeMousePos.x), 0, xValues.length - 1)
              ];
              selectedPoints.addRange(plot.drawable[nearestXVal]);
            } else {
              let nearestPoints = plot.series.select((ds) => {
                let nearestIndex = SR.Algorithm.nearestPoint(ds._points, "x", e.relativeMousePos.x, 0, ds._points.length - 1);
                return { dp: ds._points[nearestIndex], ds };
              }).sort((t1, t2) => {
                return t1.dp.y - t2.dp.y;
              });

              selectedPoints.addRange(nearestPoints);
            }
          });

          if (tc._tooltip.sharing === 'singleShared') {
            let item = selectedPoints.first();
            let tooltipTxt = `<b>${item.dp.xLabel || item.ds.xAxis.getAxisLabel(item.dp.xValue)}</b><br>`;

            selectedPoints.each((point) => {
              let color = tc._getDpColor(point.ds, point.dp).color;
              let yValue = point.ds.formatYValue(point.dp.yValue, point.ds.yAxis);
              tooltipTxt +=
                point.ds.tooltipText(
                  {
                    yValue,
                    color,
                    name: point.ds.name(),
                    xLabel: point.dp.xLabel,
                  },
                  point.dp,
                ) + '<br>';

              // For interactivity
              if (point.dp._highLighter) {
                point.dp._highLighter.highlight(tc._host);
                tc._highLightElements.add(point.dp._highLighter);
              }
            });

            tc._host.tooltip.innerHTML(tooltipTxt);
            tc._host.tooltip.position(tc.plotArea.actualX() + item.dp.x);
            tc._host.verticalHairLine.x(tc.plotArea.actualX() + item.dp.x);
            tc._host.verticalHairLine.innerHTML(item.dp.xLabel || item.ds.xAxis.getAxisLabel(item.dp.xValue));
            tc._host.tooltip.show();
          } else {
            selectedPoints.each((item) => {
              item.distance = SR.Algorithm.distanceBetween2Points(e.relativeMousePos, item.dp);
            });

            let item = selectedPoints
              .sort(function (a, b) {
                return a.distance - b.distance;
              }).first();

            if (item) {
              let dp = item.dp;
              let ds = item.ds;

              let color = tc._getDpColor(ds, dp, dp._index).color;
              let yValue = ds.formatYValue(dp.yValue, ds.yAxis);
              let tooltipTxt = ds.tooltipText({
                yValue,
                color,
                name: ds.name(),
                xLabel: dp.xLabel
              }, dp);

              tc._host.tooltip.innerHTML(tooltipTxt);

              if (dp._tickPoint) {
                tc._host.tooltip.position(
                  tc.plotArea.actualX() + dp._tickPoint.x
                );
                tc._host.verticalHairLine.x(
                  tc.plotArea.actualX() + dp._tickPoint.x
                );
                if (SR.isPointInsideRect(e.relativeMousePos, dp._rect)) {
                  tc._host.tooltip.show();
                } else {
                  tc._host.tooltip.hide();
                }
              } else {
                tc._host.tooltip.position(tc.plotArea.actualX() + dp.x, tc.plotArea.actualY() + dp.y);
                tc._host.verticalHairLine.x(tc.plotArea.actualX() + dp.x);
                tc._host.tooltip.show();
              }

              tc._host.verticalHairLine.gap(ds.xAxis._GAP);
              tc._host.verticalHairLine.textAngle(ds.xAxis._autoAngel);
              tc._host.verticalHairLine.innerHTML(dp.xLabel || ds.xAxis.getAxisLabel(dp.xValue));
              if (dp._highLighter) {
                dp._highLighter.highlight(tc._host);
                tc._highLightElements.add(dp._highLighter);
              }
            }
          }
        });
        break;
      case SRC.Orientation.Horizontal:
        tc._host.horizontalHairLine.gap(plotGroups[0].axis._GAP);
        tc._host.horizontalHairLine.x(
          tc.plotArea.actualX() -
          plotGroups[0].axis._tick.length -
          plotGroups[0].axis._GAP / 2
        );
        tc._host.horizontalHairLine.width(tc.plotArea.width());

        this.plotArea.aEvent(SRC.EventTypes.MOUSE_MOVE, (sender, e) => {
          tc._host.horizontalHairLine.show();
          let selectedPoints = new SR.Collections.List();

          // Clear interactivity highlight
          for (let idx = 0; idx < tc._highLightElements.length; idx++) {
            tc._highLightElements[idx].deHighlight(tc._host);
          }

          tc._highLightElements.clear();
          // End Clear interactivity highlight

          plotGroups.each((plot) => {
            if (plot.drawable) {
              let xValues = Object.keys(plot.drawable).map((t) => {
                return Number(t);
              });
              let nearestXVal =
                xValues[
                SR.Algorithm.nearestPointOnArray(
                  xValues,
                  plot.axis.getValueFromPixPosition(e.relativeMousePos.y),
                  0,
                  xValues.length - 1
                )
                ];
              selectedPoints.addRange(plot.drawable[nearestXVal]);
            } else {
              let nearestPoints = plot.series
                .select((ds) => {
                  let nearestIndex = SR.Algorithm.nearestPoint(ds._points, "y", e.relativeMousePos.y, 0, ds._points.length - 1);
                  return { dp: ds._points[nearestIndex], ds };
                })
                .sort((t1, t2) => {
                  return t1.dp.y - t2.dp.y;
                });

              selectedPoints.addRange(nearestPoints);
            }
          });

          if (tc._tooltip.sharing === 'singleShared') {
            let item = selectedPoints.first();
            let tooltipTxt = `<b>${item.dp.xLabel}</b><br>`;

            selectedPoints.each((point) => {
              let color = tc._getDpColor(point.ds, point.dp).color;
              let yValue = point.ds.formatYValue(point.dp.yValue, point.ds.yAxis);
              tooltipTxt +=
                point.ds.tooltipText(
                  {
                    yValue,
                    color,
                    name: point.ds.name(),
                    xLabel: point.dp.xLabel,
                  },
                  point.dp,
                ) + '<br>';

              // For interactivity
              if (point.dp._highLighter) {
                point.dp._highLighter.highlight(tc._host);
                tc._highLightElements.add(point.dp._highLighter);
              }
            });

            tc._host.tooltip.innerHTML(tooltipTxt);
            tc._host.tooltip.position(null, tc.plotArea.actualY() + item.dp.y);
            tc._host.horizontalHairLine.y(tc.plotArea.actualY() + item.dp.y);
            tc._host.horizontalHairLine.innerHTML(
              item.dp.xLabel || item.dp.xValue
            );
            tc._host.tooltip.show();
          } else {
            selectedPoints.each((item) => {
              item.distance = SR.Algorithm.distanceBetween2Points(e.relativeMousePos, item.dp);
            });

            let item = selectedPoints.sort(function (a, b) { return a.distance - b.distance; }).first();

            if (item) {
              let dp = item.dp;
              let ds = item.ds;

              let color = tc._getDpColor(ds, dp, dp._index).color;
              let yValue = ds.formatYValue(dp.yValue, ds.yAxis);
              let tooltipTxt = ds.tooltipText({
                yValue,
                color,
                name: ds.name(),
                xLabel: dp.xLabel,
              }, dp);

              tc._host.tooltip.innerHTML(tooltipTxt);

              if (dp._tickPoint) {
                tc._host.tooltip.position(null, tc.plotArea.actualY() + dp._tickPoint.y);
                tc._host.horizontalHairLine.y(tc.plotArea.actualY() + dp._tickPoint.y);
                if (SR.isPointInsideRect(e.relativeMousePos, dp._rect)) {
                  tc._host.tooltip.show();
                } else {
                  tc._host.tooltip.hide();
                }
              } else {
                tc._host.tooltip.position(tc.plotArea.actualY() + dp.x);
                tc._host.horizontalHairLine.y(tc.plotArea.actualY() + dp.y);
                tc._host.tooltip.show();
              }

              // For interactivity
              if (dp._highLighter) {
                dp._highLighter.highlight(tc._host);
                tc._highLightElements.add(dp._highLighter);
              }

              tc._host.horizontalHairLine.innerHTML(dp.xLabel || dp.xValue);
            }
          }
        });
        break;
      case SRC.Orientation.Circular:
        break;
    }
  }

  _attachToolTip(dp, ds, visual, dpPreference = false, xPos = undefined, yPos = undefined) {
    let tc = this;

    visual.dp = dp;
    visual.ds = ds;
    visual.__xPos = xPos;
    visual.__yPos = yPos;

    visual.aEvent(SRC.EventTypes.MOUSE_MOVE, function (sender, e) {
      tc._host.tooltip.position(visual.__xPos, visual.__yPos);
      //tc._host.tooltip.position(xPos, yPos);
    });

    visual.aEvent(SRC.EventTypes.MOUSE_IN, function (sender, e) {
      let dp = sender.dp;
      let ds = sender.ds;
      let color = tc._getDpColor(ds, dp, dp._index).color;
      let yValue = ds.formatYValue(dp.yValue, ds.yAxis);
      let tooltipTxt = ds.tooltipText({ yValue, color, name: ds.name(), xLabel: dp.xLabel }, dp, dpPreference) + "<br>";

      tc._host.tooltip.innerHTML(tooltipTxt);
      tc._host.tooltip.show(visual.__xPos, visual.__yPos);
    });

    visual.aEvent(SRC.EventTypes.MOUSE_OUT, function (sender, e) {
      tc._host.tooltip.hide();
    });
  }

  _getDpColor(ds, dp, dpIndex) {
    var tc = this;
    if (dp.color) {
      return SR.isString(dp.color) ? new SRC.SolidColor(dp.color) : dp.color;
    } else {
      switch (ds._plotAs) {
        case Chart.PlotAs.Column:
        case Chart.PlotAs.Bar:
        case Chart.PlotAs.Bubble:
        case Chart.PlotAs.Point:
        case Chart.PlotAs.Pie:
        case Chart.PlotAs.Doughnut:
          if (tc._data.length == 1) {
            var theme = Chart.themes[tc._theme];
            dp._index = dpIndex;
            return new SRC.SolidColor(theme[(dp._idx ? dp._idx : dpIndex) % theme.length]);
          } else return tc._getDsColor(ds);
          break;
        default:
          return tc._getDsColor(ds);
      }
    }
  }

  _getDsColor(ds) {
    var tc = this;

    if (ds._color) {
      return SR.isString(ds._color) ? new SRC.SolidColor(ds._color) : ds._color;
    } else {
      var theme = Chart.themes[tc._theme];
      return new SRC.SolidColor(theme[ds._idx % theme.length]);
    }
  }

  _renderStackedColumn(plot, is100) {
    var tc = this, dp, idx;

    var noOfSeries = plot.series.length;
    var { drawable, dpGroupWidth, yAxisesInvolved } = this._calculateDrawable(plot);

    var container = new SRC.Controls.Canvas(0, 0, tc.plotArea.width(), tc.plotArea.height());
    var ani = new SRC.Animation(0, 1000);
    tc._animations.add(ani);
    let lblCtrls = [];

    for (var xVal in drawable) {
      var pointsGrp = drawable[xVal];
      var xTickPos = pointsGrp[0].ds.xAxis.getPixPosition(xVal);
      var xPixPos = xTickPos - dpGroupWidth / 2;
      var dpWidth = dpGroupWidth;
      var pvDpsTotalHeight = 0,
        nvDpsTotalHeight = 0,
        pYSum = 0,
        nYSum = 0;

      if (is100) {
        for (idx in pointsGrp) {
          dp = pointsGrp[idx].dp;
          if (dp.yValue >= 0) pYSum += dp.yValue;
          else nYSum += dp.yValue;
        }
      }

      for (idx in pointsGrp) {
        dp = pointsGrp[idx].dp;
        var ds = pointsGrp[idx].ds;
        var yAxis = ds.yAxis;
        var yVal;

        if (is100) {
          nYSum = Math.abs(nYSum);
          yVal = dp.yValue >= 0 ? (dp.yValue / pYSum) * 100 : (dp.yValue / nYSum) * 100;
        } else {
          yVal = dp.yValue;
        }

        var yValPixPos = yAxis.getPixPosition(yVal);
        var axisYBaseVal = 0; // Its should be always 0 in case of Stacked chart
        var y0PixPos = yAxis.getPixPosition(axisYBaseVal);

        var min = Math.min(yValPixPos, y0PixPos);
        var dpHeight = Math.max(yValPixPos, y0PixPos) - min;

        // RECT pix position based on PlotArea
        dp._rect = {
          x: xPixPos,
          y: min + (yVal >= 0 ? -pvDpsTotalHeight : nvDpsTotalHeight),
          w: dpWidth,
          h: dpHeight,
        };

        // X, Y pix position based on PlotAree
        dp._point = dp._tickPoint = {
          x: xTickPos, // Real X tick position
          y: dp._rect.y,
        };

        // Center position of the column rect
        dp.x = dp._rect.x + dp._rect.w / 2;
        dp.y = dp._rect.y + dp._rect.h / 2;

        var dpCan = SRC.Chart.Drawings.column(
          xPixPos,
          min + (yVal >= 0 ? -pvDpsTotalHeight : nvDpsTotalHeight),
          dpWidth,
          dpHeight,
          tc._getDpColor(ds, dp, dp._index),
          tc.bevel,
        );

        if (yVal >= 0) pvDpsTotalHeight += dpHeight;
        else nvDpsTotalHeight += dpHeight;

        if (this._animationEnabled) {
          ani.add(dpCan, 'y', y0PixPos, dpCan.y());
          ani.add(dpCan, 'height', 0, dpCan.height());
        }

        container.controls.add(dpCan);

        // For interactivity
        dpCan.fillHighlight(new SRC.SolidColor('rgba(255, 255, 255, 0.3)'));
        dp._highLighter = dpCan;

        if (tc.getDpDsProperty('labelEnabled', ds, dp)) {
          lblCtrls.push(tc._createColumnLabel(dp, ds, yVal >= 0));
        }
      }
    }

    tc.plotArea.controls.add(container);

    lblCtrls.forEach((lbl) => {
      tc.plotArea.controls.add(lbl);
    });
  }

  _renderStackedBar(plot, is100) {
    var tc = this,
      dp,
      idx;
    var noOfSeries = plot.series.length;

    var { drawable, dpGroupWidth, yAxisesInvolved } = this._calculateDrawable(plot);
    var container = new SRC.Controls.Canvas(0, 0, tc.plotArea.width(), tc.plotArea.height());

    var ani = new SRC.Animation(0, 1000);
    tc._animations.add(ani);
    let lblCtrls = [];

    for (var xVal in drawable) {
      var pointsGrp = drawable[xVal];
      var xPixPos = pointsGrp[0].ds.xAxis.getPixPosition(xVal) - dpGroupWidth / 2;
      var dpWidth = dpGroupWidth;
      var pvDpsTotalHeight = 0,
        nvDpsTotalHeight = 0,
        pYSum = 0,
        nYSum = 0;

      if (is100) {
        for (idx in pointsGrp) {
          dp = pointsGrp[idx].dp;
          if (dp.yValue >= 0) pYSum += dp.yValue;
          else nYSum += dp.yValue;
        }
      }

      for (idx in pointsGrp) {
        dp = pointsGrp[idx].dp;
        var ds = pointsGrp[idx].ds;
        var yAxis = ds.yAxis;
        var yVal;
        if (is100) {
          nYSum = Math.abs(nYSum);
          yVal = dp.yValue >= 0 ? (dp.yValue / pYSum) * 100 : (dp.yValue / nYSum) * 100;
        } else {
          yVal = dp.yValue;
        }

        var yValPixPos = yAxis.getPixPosition(yVal);
        var axisYBaseVal = 0; // It should be always zero in case of stacked chart
        var y0PixPos = yAxis.getPixPosition(axisYBaseVal);

        var min = Math.min(yValPixPos, y0PixPos);
        var dpHeight = Math.max(yValPixPos, y0PixPos) - min;

        // RECT pix position based on PlotAree
        dp._rect = {
          x: min + (yVal >= 0 ? pvDpsTotalHeight : -nvDpsTotalHeight),
          y: xPixPos,
          w: dpHeight,
          h: dpWidth
        };

        // X, Y pix position based on PlotAree
        dp._point = dp._tickPoint = {
          x: dp._rect.x, // Real X tick position
          y: dp._rect.y + dp._rect.h / 2,
        };

        // Center position of the column rect
        dp.x = dp._rect.x + dp._rect.w / 2;
        dp.y = dp._rect.y + dp._rect.h / 2;

        var dpCan = SRC.Chart.Drawings.column(dp._rect.x, dp._rect.y, dp._rect.w, dp._rect.h,
          tc._getDpColor(ds, dp, dp._index),
          tc.bevel
        );

        if (yVal >= 0) {
          pvDpsTotalHeight += dpHeight;
        } else {
          nvDpsTotalHeight += dpHeight;
          if (this._animationEnabled) ani.add(dpCan, "x", y0PixPos, dp._rect.y);
        }

        if (this._animationEnabled) ani.add(dpCan, "width", 0, dpCan.width());
        container.controls.add(dpCan);

        // For interactivity
        dpCan.fillHighlight(new SRC.SolidColor('rgba(255, 255, 255, 0.3)'));
        dp._highLighter = dpCan;

        if (tc.getDpDsProperty('labelEnabled', ds, dp)) {
          lblCtrls.push(tc._createColumnLabel(dp, ds, yVal >= 0));
        }
      }
    }

    tc.plotArea.controls.add(container);

    
    lblCtrls.forEach((lbl) => {
      tc.plotArea.controls.add(lbl);
    });
  }

  _renderCandleStick(plot) {
    var tc = this;
    var ani = new SRC.Animation(0, 1000);
    tc._animations.add(ani);
    var dpWidth;

    plot.series.each(function (ds) {
      var addPoints = function (ds, dp) {
        var internalXVal = SR.isDefined(dp.xValue)
          ? dp.xValue
          : plot.axis.getXValue(dp.xLabel);
        var xPixPos = ds.xAxis.getPixPosition(internalXVal);
        var yHigh = ds.yAxis.getPixPosition(dp.yValue[0]);
        var yLow = ds.yAxis.getPixPosition(dp.yValue[1]);
        var yOpen = ds.yAxis.getPixPosition(dp.yValue[2]);
        var yClose = ds.yAxis.getPixPosition(dp.yValue[3]);

        // Draw marker
        dpWidth = tc.getDpDsProperty("dataPointWidth", ds, dp);
        var color = tc._getDpColor(ds, dp, dp._index);
        var stroke = new SRC.Stroke(
          tc.getDpDsProperty("borderThickness", ds, dp),
          color
        );

        var dpCanvas = new SRC.Controls.Canvas(xPixPos - dpWidth / 2, yHigh, dpWidth, yLow - yHigh);
        // dpCanvas.stroke(stroke);
        dpCanvas.fill(color);
        dpCanvas.autoClip(false);

        dp.x = xPixPos;
        dp.y = yHigh + (yLow - yHigh) / 2;

        var lineOpenClose = new SRC.Shapes.Path([{ x: xPixPos, y: yOpen }, { x: xPixPos, y: yClose }], false);
        lineOpenClose.stroke(stroke);
        //dpCanvas.controls.add(lineOpenClose);

        tc.plotArea.controls.add(dpCanvas);
        tc.plotArea.controls.add(lineOpenClose);

        // For interactivity
        dpCanvas.fillHighlight(new SRC.SolidColor('rgba(255, 255, 255, 0.3)'));
        dp._highLighter = dpCanvas;
      };

      if (tc._animationEnabled) {
        setTimeout(function () {
          List.eachAsync(ds._points, function (dp, idx, next) {
            addPoints(ds, dp);
            setTimeout(next, 100 * SRC._easeInOutExpo(idx, 0, 1, ds._points.length));
          });
        }, 100);
      } else {
        List.each(ds._points, function (dp) {
          addPoints(ds, dp);
        });
      }
    });
  }

  _renderOHLC(plot) {
    var tc = this;
    var ani = new SRC.Animation(0, 1000);
    tc._animations.add(ani);
    var dpWidth;

    plot.series.each(function (ds) {
      var addPoints = function (ds, dp) {
        var internalXVal = SR.isDefined(dp.xValue) ? dp.xValue : plot.axis.getXValue(dp.xLabel);
        var xPixPos = ds.xAxis.getPixPosition(internalXVal);
        var yHigh = ds.yAxis.getPixPosition(dp.yValue[0]);
        var yLow = ds.yAxis.getPixPosition(dp.yValue[1]);
        var yOpen = ds.yAxis.getPixPosition(dp.yValue[2]);
        var yClose = ds.yAxis.getPixPosition(dp.yValue[3]);

        // Draw marker
        dpWidth = tc.getDpDsProperty("dataPointWidth", ds, dp);
        var color = tc._getDpColor(ds, dp, dp._index);
        var stroke = new SRC.Stroke(tc.getDpDsProperty("borderThickness", ds, dp), color);

        var lineOpenClose = new SRC.Shapes.Path([{ x: xPixPos, y: yOpen }, { x: xPixPos, y: yClose },], false);

        lineOpenClose.stroke(stroke);

        var lineHigh = new SRC.Shapes.Path([{ x: xPixPos, y: yHigh }, { x: xPixPos + 5, y: yHigh },], false);

        lineHigh.stroke(stroke);

        var lineLow = new SRC.Shapes.Path([{ x: xPixPos - 5, y: yLow }, { x: xPixPos, y: yLow }], false);

        lineHigh.stroke(stroke);

        dp.x = xPixPos;
        dp.y = yHigh + (yLow - yHigh) / 2;

        tc.plotArea.controls.add(lineHigh);
        tc.plotArea.controls.add(lineLow);
        tc.plotArea.controls.add(lineOpenClose);
      };

      if (tc._animationEnabled) {
        setTimeout(function () {
          List.eachAsync(ds._points, function (dp, idx, next) {
            addPoints(ds, dp);
            setTimeout(next, 100 * SRC._easeInOutExpo(idx, 0, 1, ds._points.length));
          });
        }, 100);
      } else {
        List.each(ds._points, function (dp) {
          addPoints(ds, dp);
        });
      }
    });
  }

  _renderBar(plot) {
    var tc = this;
    var { drawable, dpGroupWidth, yAxisesInvolved } = this._calculateDrawable(plot);

    var ani = new SRC.Animation(0, 1000);
    tc._animations.add(ani);
    var simpleLoopIndex = -1;
    let lblCtrls = [];

    for (var xVal in drawable) {
      var pointsGrp = drawable[xVal];
      var xPixPosDp = pointsGrp[0].ds.xAxis.getPixPosition(xVal);
      var dpWidth = dpGroupWidth / pointsGrp.length;
      let halfDpWidth = dpWidth / 2;
      let xPixPos = xPixPosDp - (dpGroupWidth / 2);
      simpleLoopIndex++;

      for (var idx in pointsGrp) {
        var dp = pointsGrp[idx].dp;
        var ds = pointsGrp[idx].ds;

        var yAxis = ds.yAxis;
        var yValPixPos = yAxis.getPixPosition(dp.yValue);
        var axisYBaseVal = yAxis.getAxisBaseValue();
        var y0PixPos = yAxis.getPixPosition(axisYBaseVal);

        var minPosY = Math.min(yValPixPos, y0PixPos);
        var maxPosY = Math.max(yValPixPos, y0PixPos);
        var decHeight = yAxis._axisLineStroke.lineWidth;

        var dpCan;
        if (dp.yValue >= 0) {
          // RECT pix position based on PlotAree
          dp._rect = {
            x: minPosY,
            y: xPixPos,
            w: maxPosY - minPosY - decHeight,
            h: dpWidth,
          };

          // X, Y pix position based on PlotAree
           dp._tickPoint = {
            x: minPosY + dp._rect.w, // Real X tick position
            y: xPixPosDp,
          };

          dp._point = { x: dp._tickPoint.x, y: dp._rect.y + halfDpWidth };
            // Center position of the column rect
          dp.x = dp._rect.x + dp._rect.w / 2;
          dp.y = dp._rect.y + halfDpWidth;

          dpCan = SRC.Chart.Drawings.column(
            dp._rect.x,
            dp._rect.y,
            dp._rect.w,
            dp._rect.h,
            tc._getDpColor(ds, dp, simpleLoopIndex),
            tc.bevel
          );

          if (this.getDpDsProperty('labelEnabled', ds, dp)) {
            lblCtrls.push(this._createColumnLabel(dp, ds, true));
          }
        } else {
          // RECT pix position based on PlotAree
          dp._rect = {
            x: minPosY,
            y: xPixPos,
            w: maxPosY - minPosY,
            h: dpWidth,
          };

          // X, Y pix position based on PlotAree
           dp._tickPoint = {
             x: minPosY, // Real X tick position
             y: xPixPosDp,
           };

         dp._point = { x: dp._tickPoint.x, y: dp._rect.y + dp._rect.h / 2 };

            // Center position of the column rect
            dp.x = dp._rect.x + dp._rect.w / 2;
          dp.y = dp._rect.y + dp._rect.h / 2;

          dpCan = SRC.Chart.Drawings.column(
            minPosY,
            xPixPos,
            maxPosY - minPosY,
            dpWidth,
            tc._getDpColor(ds, dp, simpleLoopIndex),
            tc.bevel
          );

          if (this._animationEnabled){
            ani.add(dpCan, "x", y0PixPos, minPosY, true);
          }

          if (this.getDpDsProperty('labelEnabled', ds, dp)) {
            lblCtrls.push(this._createColumnLabel(dp, ds, false));
          }
        }

        xPixPos += dpWidth;
        if (this._animationEnabled)
          ani.add(dpCan, "width", 0, dpCan.width(), true);
        tc.plotArea.controls.add(dpCan);

        // For interactivity
        dpCan.fillHighlight(new SRC.SolidColor('rgba(255, 255, 255, 0.3)'));
        dp._highLighter = dpCan;
      }
    }

    lblCtrls.forEach((lbl) => {
      tc.plotArea.controls.add(lbl);
    });
  }

  _addDebugMarkerAt(x, y) {
    var tc = this;
    var marker = SRC.Chart.Drawings.marker({
      fill: new SRC.SolidColor("red"),
      stroke: new SRC.Stroke(1, "black"),
      shadow: null,
    }, x, y, 10, 10, false);

    tc.plotArea.controls.add(marker);
  };

  /**Grouping of data series based on xValue
  * this also calculates datapoint width
  */
  _getYAxisesInvolved(plot) {
    var yAxisesInvolved = {};
    plot.series.each(function (ds) {
      yAxisesInvolved[ds.yAxis.id()] = ds.yAxis;
    });

    return yAxisesInvolved;
  }

  /**Grouping of data series based on xValue
  * this also calculates datapoint width
  */
  _calculateDrawable(plot) {
    var prevXVal;
    var dpGroupWidth;
    var minDistance = Number.POSITIVE_INFINITY;
    var yAxisesInvolved = {};
    var drawable = {};

    plot.series.each(function (ds) {
      yAxisesInvolved[ds.yAxis.id()] = ds.yAxis;

      for (let dpIdx = 0; dpIdx < ds._points.length; dpIdx++) {
        let p = ds._points[dpIdx];
        let internalXVal = SR.isDefined(p.xValue)
          ? p.xValue
          : plot.axis.getXValue(p.xLabel);
        if (!drawable[internalXVal]) drawable[internalXVal] = [];

        drawable[internalXVal].push({ ds: ds, dp: p });

        if (prevXVal) {
          minDistance = Math.min(minDistance, Math.abs(internalXVal - prevXVal));
          prevXVal = internalXVal;
        } else {
          prevXVal = internalXVal;
        }
      }
    });

    let maxDpCountInAGroup = 0;

    for (let idx in drawable) {
      maxDpCountInAGroup = Math.max(maxDpCountInAGroup, drawable[idx].length);
    }

    switch (this._orientation) {
      case SRC.Orientation.Vertical:
        dpGroupWidth = (this.plotArea.width() / (plot.axis._calMax - plot.axis._calMin)) * minDistance * this._dataPointWidthInPercent;
        break;
      case SRC.Orientation.Horizontal:
        dpGroupWidth = (this.plotArea.height() / plot.axis._calMax - plot.axis._calMin) * minDistance * this._dataPointWidthInPercent;
        break;
    }

    plot.drawable = drawable;
    dpGroupWidth = dpGroupWidth < 5 ? 5 * maxDpCountInAGroup : dpGroupWidth;

    return { drawable, dpGroupWidth, yAxisesInvolved };
  }

  _renderColumn(plot) {
    var tc = this;
    var { drawable, dpGroupWidth, yAxisesInvolved } = this._calculateDrawable(
      plot
    );

    var pveCanvases = {}; // Positive Canvas
    var nveCanvases = {}; // Negetive Canvas

    var simpleLoopIndex = -1;
    var lblCtrls = [];

    for (var xVal in drawable) {
      var pointsGrp = drawable[xVal];
      var xPixPos = pointsGrp[0].ds.xAxis.getPixPosition(xVal);
      var xPixPosDp = xPixPos;
      var dpWidth = dpGroupWidth / pointsGrp.length;
      xPixPosDp -= dpGroupWidth / 2;
      simpleLoopIndex++;
      
      for (var idx in pointsGrp) {
        var dp = pointsGrp[idx].dp;
        var ds = pointsGrp[idx].ds;

        var yAxis = ds.yAxis;
        var yValPixPos = yAxis.getPixPosition(dp.yValue);
        var axisYBaseVal = yAxis.getAxisBaseValue();
        var y0PixPos = yAxis.getPixPosition(axisYBaseVal);

        var min = Math.min(yValPixPos, y0PixPos);
        var max = Math.max(yValPixPos, y0PixPos);
        var decHeight = yAxis._axisLineStroke.lineWidth;
        
        var dpCan;
        if (dp.yValue >= 0) {
          if (!pveCanvases[yAxis._id]) {
            pveCanvases[yAxis._id] = new SRC.Controls.Canvas(0, 0, tc.plotArea.width(), y0PixPos);
          }

          // X, Y pix position based on PlotAree
          dp._tickPoint = {
            x: xPixPos, // Real X tick position
            y: min,
          };

          // RECT pix position based on PlotAree
          dp._rect = {
            x: xPixPosDp,
            y: min,
            w: dpWidth,
            h: max - min - decHeight,
          };

          dp._point = { x: xPixPosDp + dpWidth / 2, y: min };

          // Center position of the column rect
          dp.x = dp._rect.x + dp._rect.w / 2;
          dp.y = dp._rect.y + dp._rect.h / 2;

          dpCan = SRC.Chart.Drawings.column(
            xPixPosDp,
            min,
            dpWidth,
            dp._rect.h,
            tc._getDpColor(ds, dp, simpleLoopIndex),
            tc.bevel
          );

          pveCanvases[yAxis.id()].controls.add(dpCan);

          if (tc.getDpDsProperty('labelEnabled', ds, dp)) {
            lblCtrls.push(tc._createColumnLabel(dp, ds, true));
          }
        } else {
          if (!nveCanvases[yAxis._id]) {
            nveCanvases[yAxis._id] = new SRC.Controls.Canvas(0, min + decHeight, tc.plotArea.width(), tc.plotArea.height() - y0PixPos);
          }

          // RECT pix position based on PlotAree
          dp._rect = {
            y: nveCanvases[yAxis._id]._rect.y,
            x: xPixPosDp,
            w: dpWidth,
            h: max - min,
          };

          // X, Y pix position based on PlotAree
          dp._tickPoint = {
            x: xPixPos, // Real X tick position
            y: dp._rect.y + dp._rect.h,
          };

          dp._point = { x: xPixPosDp + dpWidth / 2, y: dp._tickPoint.y };

          // Center position of the column rect
          dp.x = dp._rect.x + dp._rect.w / 2;
          dp.y = dp._rect.y + dp._rect.h / 2;

          dpCan = SRC.Chart.Drawings.column(
            xPixPosDp,
            0,
            dpWidth,
            max - min,
            tc._getDpColor(ds, dp, simpleLoopIndex),
            tc.bevel
          );

          nveCanvases[yAxis._id].controls.add(dpCan);

          if (tc.getDpDsProperty('labelEnabled', ds, dp)) {
            lblCtrls.push(tc._createColumnLabel(dp, ds, false));
          }
        }

        // For interactivity
        dpCan.fillHighlight(new SRC.SolidColor('rgba(255, 255, 255, 0.3)'));
        dp._highLighter = dpCan;

        xPixPosDp += dpWidth;
      }
    }

    var id;
    var ani;
    var canv;

    if (this._animationEnabled) {
      ani = new SRC.Animation(100, 5000, SRC.Animation.Easing.EaseInCircular);
      tc._animations.add(ani);
    }

    // Positive Canvas
    for (id in pveCanvases) {
      if (pveCanvases.hasOwnProperty(id)) {
        canv = pveCanvases[id];
        if (this._animationEnabled) {
          ani.add(canv, "y", canv.height(), 0, true);
          ani.add(canv, "height", 0, canv.height(), true);
        }

        tc.plotArea.controls.add(canv);
      }
    }

    // Negative Canvas
    for (id in nveCanvases) {
      if (nveCanvases.hasOwnProperty(id)) {
        canv = nveCanvases[id];
        if (this._animationEnabled) {
          ani.add(canv, "height", 0, canv.height(), true);
        }

        tc.plotArea.controls.add(canv);
      }
    }

    lblCtrls.forEach((lbl)=>{
      tc.plotArea.controls.add(lbl);
    });
  }

  _createColumnLabel(dp, ds,isPositive) {
    let labelPosition = this.getDpDsProperty('labelPosition', ds, dp);
    let labelAngle = this.getDpDsProperty('labelAngle', ds, dp);
    let labelRotationPoint = this.getDpDsProperty('labelRotationPoint', ds, dp);
    let labelFont = this.getDpDsProperty('labelFont', ds, dp);

    let lbl = new SRC.Controls.TextBlock(dp._point.x, dp._point.y, ds.labelText(dp), labelFont);
    lbl.measure(this._host)

     switch (this._orientation) {
       case SRC.Orientation.Vertical:
             switch (labelPosition) {
               case Chart.LabelPosition.Inside:
                 lbl.x(dp._point.x - lbl.width() / 2);

                 if (isPositive) {
                   lbl.y(dp._point.y + this._GAP_DEFAULT);
                 } else {
                   lbl.y(dp._point.y - lbl.height());
                 }

                 break
               case Chart.LabelPosition.Outside:
               default:
                 lbl.x(dp._point.x - lbl.width() / 2);

                 if (isPositive) {
                   lbl.y(dp._point.y - lbl.height());
                 } else {
                   lbl.y(dp._point.y + this._GAP_DEFAULT);
                 }

                 break;
             }
         break;
       case SRC.Orientation.Horizontal:
         lbl.y(dp._point.y - lbl.height() / 2);

         switch (labelPosition) {
           case Chart.LabelPosition.Inside:
             if (isPositive) {
               let lw = lbl.width() + this._GAP_DEFAULT;
               if (lw <= dp._rect.w) {
                 // if not enaugh space inside bar
                 lbl.x(dp._point.x - lw);
               } else {
                 lbl.x(dp._point.x + this._GAP_DEFAULT);
               }
             } else {
               let lw = lbl.width() + this._GAP_DEFAULT;
               if (dp._rect.w > lw) {
                 // brinig it inside
                 lbl.x(dp._point.x + this._GAP_DEFAULT);
               } else {
                 lbl.x(dp._point.x - lw);
               }
             }

             break;
           case Chart.LabelPosition.Outside:
           default:
             if (isPositive) {
               if (dp._point.x + lbl.width() > this.plotArea.width()) {
                 // brinig it inside
                 lbl.x(dp._point.x - lbl.width() - this._GAP_DEFAULT);
               } else {
                 lbl.x(dp._point.x + this._GAP_DEFAULT);
               }
             } else {
               let lw = lbl.width() + this._GAP_DEFAULT;
               if ((dp._point.x - lw) <= 0) {
                 // if not enaugh space inside bar
                 lbl.x(dp._point.x + this._GAP_DEFAULT);
               } else {
                 lbl.x(dp._point.x - lw);
               }
             }

             break;
         }

         break;
     }



    if (labelAngle) {
      lbl.rotationPoint(labelRotationPoint || SRC.Controls.TextBlock.RotationPoint.Center)
      lbl.angel(labelAngle)
    }

    return lbl
  }

  _renderArea(plot, isSpline) {
    var tc = this;

    plot.series.each(function (ds) {
      var pathPoints = ds._points;
      var y0PixPos = ds.yAxis.getPixPosition(ds.yAxis.getAxisBaseValue());
      var startPoint = new SRC.Shapes.PathPoint(undefined, y0PixPos);
      var brush = tc._getDsColor(ds);
      var opacity = tc.getDpDsProperty("opacity", ds);
      var tension = isSpline ? tc.getDpDsProperty("tension", ds) : 0;
      var lineThickness = tc.getDpDsProperty("lineWidth", ds);
      var lineColor = SRC.Graphics.GetLighterColor2(brush.color, 0.8, 0.8, 0.8);

      for (let dpIdx = 0; dpIdx < ds._points.length; dpIdx++) {
        let dp = ds._points[dpIdx];
        var internalXVal = SR.isDefined(dp.xValue) ? dp.xValue : plot.axis.getXValue(dp.xLabel);
        dp.x = ds.xAxis.getPixPosition(internalXVal);
        dp.y = ds.yAxis.getPixPosition(dp.yValue);
        tc._drawLineAreaMarker(ds, dp, dp.x, dp.y, lineColor, lineThickness);
      }

      var pathArea = new SRC.Shapes.Path(pathPoints, false);
      startPoint.x = pathPoints[0].x;
      pathArea.startPoint(startPoint);
      pathArea.endPoint(new SRC.Shapes.PathPoint(pathPoints[pathPoints.length - 1].x, y0PixPos));

      pathArea.closed(false);
      pathArea.tension(tension);
      pathArea.stroke(new SRC.Stroke(lineThickness, lineColor));
      pathArea.fill(brush);
      pathArea.opacity(opacity * 0.5);

      var controlPointsCache = [];
      pathArea.setControlPointsCache(controlPointsCache);

      tc.plotArea.controls.add(pathArea);

      // var pathLine = new SRC.Shapes.Path(pathPoints, false);
      // pathLine.setControlPointsCache(controlPointsCache);
      // pathLine.tension(tension);
      // pathLine.opacity(opacity);
      // pathLine.stroke(new SRC.Stroke(lineThickness, lineColor));
      // tc.plotArea.controls.add(pathLine);
    });


  }

  _renderLine(plot, isSpline) {
    var tc = this;
    var series = plot.series;
    var orientation = this._orientation;

    SR.Profiler.start("ADD_REAL_DATA_POINTS");
    for (let ids = 0; ids < series.length; ids++) {
      let ds = series[ids];
      let xAxis = ds.xAxis;
      let yAxis = ds.yAxis;

      var lineThickness = tc.getDpDsProperty("lineWidth", ds);
      var lineColor = tc._getDsColor(ds).color;
      var points = ds._points;

      for (let idx = 0; idx < ds._points.length; idx++) {
        let dp = ds._points[idx];
        var internalXVal = SR.isDefined(dp.xValue) ? dp.xValue : plot.axis.getXValue(dp.xLabel);

        switch (orientation) {
          case SRC.Orientation.Vertical:
            dp.x = xAxis.getPixPosition(internalXVal);
            dp.y = yAxis.getPixPosition(dp.yValue);
            break;
          case SRC.Orientation.Horizontal:
            dp.y = xAxis.getPixPosition(internalXVal);
            dp.x = yAxis.getPixPosition(dp.yValue);
            break;
        }
        //points.push(dp.x, dp.y);
        tc._drawLineAreaMarker(ds, dp, dp.x, dp.y, lineColor, lineThickness);
      }

      var path = new SRC.Shapes.Path(points, false);
      path.closed(false);
      path.tension(isSpline ? tc.getDpDsProperty("tension", ds) : 0);
      path.stroke(new SRC.Stroke(lineThickness, lineColor));
      path.opacity(tc.getDpDsProperty("opacity", ds));

      tc.plotArea.controls.add(path);

      // if (tc._animationEnabled) {
      //     var ani = new SRC.Animation(0, 1000, SRC.Animation.Easing.EaseInCircular);
      //     ani.add(tc.plotArea, 'width', 1, tc.plotArea.width())
      //     tc._animations.add(ani);
      // }
    }

    SR.Profiler.end("ADD_REAL_DATA_POINTS");
  }

  _renderDoughnut(plot) {
    var tc = this;
    var ani = new SRC.Animation(0, 1000);
    tc._animations.add(ani);

    plot.series.each(function (ds) {
      var pointsList = new List(ds._points);
      var totalY = pointsList.sum("yValue");
      var height = tc.plotArea.height();
      var width = tc.plotArea.width();
      var halfHeight = height / 2;
      var halfWidth = width / 2;
      var center = new SR.Point(halfWidth, halfHeight);
      var startAngle = 0;

      var radius = Math.min(halfWidth, halfHeight);
      var sliceOutOffset = radius * 0.1;
      radius -= sliceOutOffset;

      pointsList.each(function (dp, idx) {
        var yVal = SR.isNumber(dp.yValue) ? dp.yValue : 0;
        var endAngle = startAngle + 2 * Math.PI * (yVal / totalY);

        var pieSeg = new SRC.Chart.DoughnutSegment({
          center: center,
          innerRadius: ds._innerRadius || radius * 0.5,
          radius: radius,
          startAngle: startAngle,
          endAngle: endAngle,
          isOpen: dp.isOpen,
        });

        pieSeg.stroke(new SRC.Stroke(1, "white"));
        pieSeg.opacity(tc.getDpDsProperty("opacity", ds));
        pieSeg.fill(tc._getDpColor(ds, dp, idx));
        tc.plotArea.controls.add(pieSeg);
        startAngle = endAngle;

        if (dp._isOpen) {
          pieSeg._oldRadius = pieSeg.radius();
          pieSeg._oldInnerRadius = pieSeg.innerRadius();
        }

        tc._attachToolTip(dp, ds, pieSeg, true);

        pieSeg.aEvent(SRC.EventTypes.LEFT_MOUSE_DOWN, function (sender) {
          tc.plotArea.controls.each((pieSeg) => {
            if (sender !== pieSeg && pieSeg._isOpen) {
              pieSeg._isOpen = false;
              pieSeg.radius(pieSeg._oldRadius);
              pieSeg.innerRadius(pieSeg._oldInnerRadius);
            }
          });

          if (sender._isOpen) {
            sender._isOpen = false;
            sender.radius(sender._oldRadius);
            sender.innerRadius(sender._oldInnerRadius);
          } else {
            sender._isOpen = true;
            sender._oldRadius = sender.radius();
            sender._oldInnerRadius = sender.innerRadius();
            sender.radius(sender._oldRadius + sliceOutOffset);
            sender.innerRadius(sender._oldInnerRadius + sliceOutOffset);
          }
        });
      });
    });
  }

  _renderPie(plot) {
    var tc = this;
    var ani = new SRC.Animation(0, 1000);
    tc._animations.add(ani);

    plot.series.each(function (ds) {
      var pointsList = new List(ds._points);
      var totalY = pointsList.sum("yValue");
      var height = tc.plotArea.height();
      var width = tc.plotArea.width();
      var halfHeight = height / 2;
      var halfWidth = width / 2;
      var center = new SR.Point(halfWidth, halfHeight);
      var startAngle = 0;

      var radius = Math.min(halfWidth, halfHeight);
      var sliceOutOffset = radius * 0.1;
      radius -= sliceOutOffset;

      pointsList.each(function (dp, idx) {
        var yVal = SR.isNumber(dp.yValue) ? dp.yValue : 0;
        var endAngle = startAngle + 2 * Math.PI * (yVal / totalY);

        var pieSeg = new SRC.Chart.PieSegment({
          center: center,
          radius: radius,
          startAngle: startAngle,
          endAngle: endAngle,
          isOpen: dp.isOpen,
        });

        pieSeg.stroke(new SRC.Stroke(1, "white"));
        pieSeg.opacity(tc.getDpDsProperty("opacity", ds));
        pieSeg.fill(tc._getDpColor(ds, dp, idx));
        tc.plotArea.controls.add(pieSeg);
        startAngle = endAngle;

        if (dp._isOpen) {
          pieSeg._oldCenter = pieSeg.center();
          pieSeg.center(pieSeg.center2OffsetPoint(sliceOutOffset));
        }

        tc._attachToolTip(dp, ds, pieSeg, true);

        pieSeg.aEvent(SRC.EventTypes.LEFT_MOUSE_DOWN, function (sender) {
          tc.plotArea.controls.each((pieSeg) => {
            if (sender !== pieSeg && pieSeg._isOpen) {
              pieSeg._isOpen = false;
              pieSeg.center(pieSeg._oldCenter);
            }
          });

          if (sender._isOpen) {
            sender._isOpen = false;
            sender.center(sender._oldCenter);
          } else {
            sender._isOpen = true;
            sender._oldCenter = sender.center();
            sender.center(sender.center2OffsetPoint(sliceOutOffset));
          }
        });
      });
    });
  }

  _renderScatter(plot) {
    var tc = this;
    var ani = new SRC.Animation(0, 1000);
    tc._animations.add(ani);

    plot.series.each(function (ds) {
      var y0PixPos = ds.yAxis.getPixPosition(ds.yAxis.getAxisBaseValue());

      var addPoints = function (ds, dp) {
        var internalXVal = SR.isDefined(dp.xValue)
          ? dp.xValue
          : plot.axis.getXValue(dp.xLabel);
        var xPixPos = ds.xAxis.getPixPosition(internalXVal);
        var yPixPos = ds.yAxis.getPixPosition(dp.yValue);

        // Draw marker
        let color = tc._getDpColor(ds, dp, dp._index);
        let markerStyle = Object.assign(Object.assign(Object.assign({}, Marker.DEFAULT_DP_MARKER_SETTINGS), ds._marker || {}), dp._marker || {});
        let labelFont = Object.assign(Object.assign(Object.assign({}, Marker.DEFAULT_DP_LABEL_FONT_SETTINGS), ds._labelFont || {}), dp._labelFont || {});
        let borderColor = markerStyle.borderColor || tc.getDpDsProperty("borderColor", ds, dp) || color;
        let borderWidth = markerStyle.borderWidth || tc.getDpDsProperty("borderWidth", ds, dp);
        let labelEnabled = tc.getDpDsProperty('labelEnabled', ds, dp);
        let labelPosition = tc.getDpDsProperty('labelPosition', ds, dp);

        markerStyle.fill = color;
        markerStyle.stroke = new SRC.Stroke(borderWidth, borderColor);
        markerStyle.size = markerStyle.size || 6;

        let { shape, label } = Marker._getMarkerWithLabel(tc._host, xPixPos, yPixPos, true, markerStyle, labelEnabled, dp.label, labelFont, labelPosition);

        dp.x = xPixPos;
        dp.y = yPixPos;

        dp._highLighter = shape; // for interactivity

        tc.plotArea.controls.add(shape);
        if (label) tc.plotArea.controls.add(label);
      };

      if (tc._animationEnabled) {
        setTimeout(function () {
          List.eachAsync(ds._points, function (dp, idx, next) {
            addPoints(ds, dp);
            setTimeout(
              next,
              100 * SRC._easeInOutExpo(idx, 0, 1, ds._points.length)
            );
          });
        }, 100);
      } else {
        List.each(ds._points, function (dp) {
          addPoints(ds, dp);
        });
      }
    });
  }

  _renderBubble(plot) {
    var tc = this;
    var ani = new SRC.Animation(0, 1000);
    tc._animations.add(ani);
    var zMaxPixSize = tc.plotArea.width() * tc.plotArea.width() * 0.00045;
    var simpleLoopIndex = -1;

    plot.series.each(function (ds) {
      var y0PixPos = ds.yAxis.getPixPosition(ds.yAxis.getAxisBaseValue());
      var zSum = new List(ds._points).select("zValue").sum();

      var addPoints = function (ds, dp) {
        simpleLoopIndex++;
        var internalXVal = SR.isDefined(dp.xValue) ? dp.xValue : plot.axis.getXValue(dp.xLabel);
        var xPixPos = ds.xAxis.getPixPosition(internalXVal);
        var yPixPos = ds.yAxis.getPixPosition(dp.yValue);
        var zPixVal = (dp.zValue / zSum) * zMaxPixSize;

        // Draw marker
        let color = tc._getDpColor(ds, dp, simpleLoopIndex);
        let markerStyle = Object.assign(Object.assign(Object.assign({}, Marker.DEFAULT_DP_MARKER_SETTINGS), ds._marker || {}), dp._marker || {});
        let labelFont = Object.assign(Object.assign(Object.assign({}, Marker.DEFAULT_DP_LABEL_FONT_SETTINGS), ds._labelFont || {}), dp._labelFont || {});
        let borderColor = markerStyle.borderColor || tc.getDpDsProperty("borderColor", ds, dp) || color;
        let borderWidth = markerStyle.borderWidth || tc.getDpDsProperty("borderWidth", ds, dp);
        let labelEnabled = tc.getDpDsProperty('labelEnabled', ds, dp);
        let labelPosition = tc.getDpDsProperty('labelPosition', ds, dp);

        markerStyle.fill = color;
        markerStyle.stroke = new SRC.Stroke(borderWidth, borderColor);
        markerStyle.size = zPixVal;

        let { shape, label } = Marker._getMarkerWithLabel(tc._host, xPixPos, yPixPos, true, markerStyle, labelEnabled, dp.label, labelFont, labelPosition);

        dp.x = xPixPos;
        dp.y = yPixPos;

        dp._highLighter = shape; // for interactivity

        tc.plotArea.controls.add(shape);
        if (label) tc.plotArea.controls.add(label);
      };

      if (tc._animationEnabled) {
        setTimeout(function () {
          List.eachAsync(ds._points, function (dp, idx, next) {
            addPoints(ds, dp);
            setTimeout(next, 100 * SRC._easeInOutExpo(idx, 0, 1, ds._points.length));
          });
        }, 100);
      } else {
        List.each(ds._points, function (dp) {
          addPoints(ds, dp);
        });
      }
    });
  }

  _renderStepLine(plot) {
    var tc = this;
    var ani = new SRC.Animation(0, 1000);
    tc._animations.add(ani);

    plot.series.each(function (ds) {
      var path = new SRC.Shapes.Path([], tc._animationEnabled);
      var pathPoints = path.points;
      var y0PixPos = ds.yAxis.getPixPosition(ds.yAxis.getAxisBaseValue());

      var lineThickness = tc.getDpDsProperty("lineWidth", ds);
      var lineColor = tc._getDsColor(ds).color;

      path.closed(false);
      path.tension(0);
      path.stroke(new SRC.Stroke(lineThickness, lineColor));
      path.opacity(tc.getDpDsProperty("opacity", ds));
      tc.plotArea.controls.add(path);

      var addPoints = function (ds, dp) {
        var internalXVal = SR.isDefined(dp.xValue) ? dp.xValue : plot.axis.getXValue(dp.xLabel);
        var xPixPos = ds.xAxis.getPixPosition(internalXVal);
        var yPixPos = ds.yAxis.getPixPosition(dp.yValue);

        if (pathPoints.length >= 1) {
          var prev = pathPoints[pathPoints.length - 1];
          pathPoints.push(new SRC.Shapes.PathPoint(prev.x, yPixPos));
        }

        pathPoints.push(new SRC.Shapes.PathPoint(xPixPos, yPixPos));
        tc._drawLineAreaMarker(ds, dp, xPixPos, yPixPos, lineColor, lineThickness);
      };

      if (tc._animationEnabled) {
        setTimeout(function () {
          List.eachAsync(ds._points, function (dp, idx, next) {
            addPoints(ds, dp);
            setTimeout(
              next,
              100 * SRC._easeInOutExpo(idx, 0, 1, ds._points.length)
            );
          });
        }, 100);
      } else {
        List.each(ds._points, function (p) {
          addPoints(ds, p);
        });
      }
    });
  }

  _drawLineAreaMarker(ds, dp, xPixPos, yPixPos, lineColor, lineThickness) {
    var tc = this;
    // Default enable marker logic
    if (!ds._marker) {
      if (ds._points.length > 100) {
        return;
      }
    }

    let color = tc._getDpColor(ds, dp, dp._index);
    let markerStyle = Object.assign(Object.assign(Object.assign({}, Marker.DEFAULT_DP_MARKER_SETTINGS), ds._marker || {}), dp._marker || {});
    let labelFont = Object.assign(Object.assign(Object.assign({}, Marker.DEFAULT_DP_LABEL_FONT_SETTINGS), ds._labelFont || {}), dp._labelFont || {});
    let borderWidth = markerStyle.borderWidth || tc.getDpDsProperty("borderWidth", ds, dp);
    let borderColor = markerStyle.borderColor || tc.getDpDsProperty("borderColor", ds, dp) || color;

    markerStyle.fill = color;
    markerStyle.stroke = new SRC.Stroke(borderWidth, borderColor);

    let markerEnabled = this.getDpDsProperty('markerEnabled', ds, dp);
    let labelEnabled = this.getDpDsProperty('labelEnabled', ds, dp);
    let labelPosition = this.getDpDsProperty('labelPosition', ds, dp);

    var size = lineThickness * 15;
    size = size > 8 ? 8 : size;
    markerStyle.size = size;

    let { shape, label } = Marker._getMarkerWithLabel(this._host, xPixPos, yPixPos, markerEnabled, markerStyle, labelEnabled, dp.label, labelFont, labelPosition);

    dp._highLighter = shape;

    // marker.aEvent(SRC.EventTypes.LEFT_MOUSE_UP, function (sender, e) {
    //   // can2.fill = new SRC.SolidColor("yellow");
    //   alert("You clicked on canvas!");
    // });

    // marker.aEvent(SRC.EventTypes.MOUSE_IN, function (sender, e) {
    //   sender.highlight(tc._host);
    // });

    // marker.aEvent(SRC.EventTypes.MOUSE_OUT, function (sender, e) {
    //   sender.deHighlight(tc._host);
    // });

    if (shape) tc.plotArea.controls.add(shape);
    if (label) tc.plotArea.controls.add(label);
  }

  _renderTitles(charAreaBound) {
    var tc = this;
    var top = 0, left = 0, right = 0, bottom = 0;

    this.titles.each(function (t) {
      var title = new SRC.Controls.TextBlock(0, 0, t._text, t._font);
      title.fill(t._background);
      var size;

      switch (t._vAlign) {
        case SRC.VALIGN.Top:
          title.measure(tc._host);
          top += t._margin[1]; // top
          title.y(top);
          top += t._margin[3]; // bottom
          switch (t._hAlign) {
            case SRC.HALIGN.Left:
              title.x(t._margin[0]);
              break;
            case SRC.HALIGN.Center:
              title.x((charAreaBound.w - title.width()) / 2);
              break;
            case SRC.HALIGN.Right:
              title.x(charAreaBound.w - title.width() - t._margin[2]);
              break;
          }
          top += title.height();
          break;
        case SRC.VALIGN.Center:
          switch (t._hAlign) {
            case SRC.HALIGN.Left:
              title.rotationPoint(SRC.Controls.TextBlock.RotationPoint.Right);
              title.angel(-90);
              size = title.measure(tc._host);

              left += t._margin[0]; // left
              title.x(left + size.height / 2);
              title.y((charAreaBound.h - size.width) / 2);
              left += t._margin[2]; // right
              left += size.height;
              break;
            case SRC.HALIGN.Center:
              title.measure(tc._host);
              title.y(charAreaBound.h / 2 - title.height() / 2);
              title.x((charAreaBound.w - title.width()) / 2);
              title.zIndex(1);
              break;
            case SRC.HALIGN.Right:
              title.rotationPoint(SRC.Controls.TextBlock.RotationPoint.Right);
              title.angel(-90);
              size = title.measure(tc._host);
              right += t._margin[2]; // right
              right += size.height;
              title.x(size.height / 2 + charAreaBound.w - right);
              title.y((charAreaBound.h - size.width) / 2);
              right += t._margin[0] + tc._GAP_TITLE; // left
              break;
          }
          break;
        case SRC.VALIGN.Bottom:
          title.measure(tc._host);
          bottom += t._margin[3]; // bottom
          title.y(charAreaBound.h - title.height() - bottom);
          bottom += t._margin[1]; // top
          switch (t._hAlign) {
            case SRC.HALIGN.Left:
              title.x(t._margin[0]);
              break;
            case SRC.HALIGN.Center:
              title.x((charAreaBound.w - title.width()) / 2);
              break;
            case SRC.HALIGN.Right:
              title.x(charAreaBound.w - title.width() - t._margin[2]);
              break;
          }
          bottom += title.height();
          break;
      }

      //title.x(0);
      tc.chartLayer.controls.add(title);
    });

    charAreaBound.h -= top + bottom;
    charAreaBound.y += top;
    charAreaBound.w -= left + right;
    charAreaBound.x += left;
  }

  setData(data) {
    var tc = this;
    tc._data = data;
  }

  /**
  * Detect the orientation of the chart
  * @private
  */
  _detectOrientation() {
    // this.orientation set by user
    if (this.orientation) {
      this._orientation = this.orientation;
      return;
    }

    var hasHorizontalCharts = this.series.where((ds) => {
      switch (ds._plotAs) {
        case Chart.PlotAs.Bar:
        case Chart.PlotAs.StackedBar:
        case Chart.PlotAs.StackedBar100:
          return true;
        default:
          return false;
      }
    }).any();

    var hasVerticalCharts = this.series.where((ds) => {
      switch (ds._plotAs) {
        case Chart.PlotAs.Bar:
        case Chart.PlotAs.StackedBar:
        case Chart.PlotAs.StackedBar100:
          return false;
        case Chart.PlotAs.Pie:
        case Chart.PlotAs.Doughnut:
          return false;
        default:
          return true;
      }
    }).any();

    var hasCircularCharts = this.series.where((ds) => {
      switch (ds._plotAs) {
        case Chart.PlotAs.Pie:
        case Chart.PlotAs.Doughnut:
          return true;
      }
    }).any();

    if ((hasHorizontalCharts && hasVerticalCharts) || (hasVerticalCharts && hasCircularCharts) || (hasHorizontalCharts && hasCircularCharts)) {
      throw "Invalid Chart combination detected";
    } else if (hasVerticalCharts) {
      this._orientation = SRC.Orientation.Vertical;
    } else if (hasHorizontalCharts) {
      this._orientation = SRC.Orientation.Horizontal;
    } else if (hasCircularCharts) {
      this._orientation = SRC.Orientation.Circular;
    } else this._orientation = SRC.Orientation.Vertical;
  }

  /**
  * Data analyser analyze tha data before the render process starts.
  * @param data
  * @private
  */
  _dataAnalyzer(data, cb) {
    var tc = this,
      idx = 0,
      dpIdx = 0;

    // Creates DataSeries objects
    this.series = List.select(data, (ds) => {
      return new Chart.DataSeries(idx++, ds, tc);
    });

    // Detects the orientation of the of the chart based on chart types
    this._detectOrientation();

    // Group the data series based on target x-axis, So each group holds a axis and the DataSeries associated with it
    var axisXWiseDsGrp = this.series.groupBy("_axisXId").select(function (g) {
      return { axisId: g.key, series: g.value };
    });

    // Loop through the x-axis group, each group has an axis an DS associated with it.
    axisXWiseDsGrp.each(function (axisXG) {
      axisXG.axisId = axisXG.axisId === "undefined" ? undefined : axisXG.axisId; // While grouping undefined get changed to undefined string

      /* Here we will search is there any axis present in axesX list with axisId. If its not present then we will
      * create a new instance of x-Axis and add it to the axesX collection.
      */
      var axisFound = tc.axesX.where(function (axisX) {
        return axisX._id === axisXG.axisId;
      });

      // Create required x-axis if not present
      if (axisFound.any()) {
        axisXG.axisRef = axisFound.first();
      } else {
        axisXG.axisRef = new SRC.Chart.Axis({ id: axisXG.axisId });
        tc.axesX.add(axisXG.axisRef);
      }

      // There many be unused axis present in the axesX list then those are not required to render
      axisXG.axisRef._mustRender = true;

      // Lets collect all x values to calculate max and min, Yes we need to calculate the scale of the axis
      var xValMinDiff = Number.MAX_VALUE;
      var xVals = axisXG.series.selectMulti((ds) => {
        let rs = ds.getMinMaxXValue();
        xValMinDiff = rs.minDiff < xValMinDiff ? rs.minDiff : xValMinDiff;
        return rs.minMax;
      });

      var xLabels = {};

      axisXG.series.each(function (ds) {
        ds.xAxis = axisXG.axisRef;

        for (dpIdx = 0; dpIdx < ds._points.length; dpIdx++) {
          let t = ds._points[dpIdx];
          if (SR.isDefined(t.xValue) && SR.isDefined(t.xLabel)) {
            xLabels[t.xValue] = t.xLabel;
          } else xLabels[t.xLabel] = 1;
        }
      });

      axisXG.axisRef._axisLabels = xLabels;

      if (xVals.any()) {
        // axisXG.axisRef._max = ;
        // axisXG.axisRef._min = ;
        axisXG.axisRef.__calculateScale(SR.isDefined(axisXG.axisRef._min) ? axisXG.axisRef._min : xVals.min(),
          SR.isDefined(axisXG.axisRef._max) ? axisXG.axisRef._max : xVals.max(), xValMinDiff);
      } else {
      }
    });

    var axisYWiseDsGrp = this.series.groupBy("_axisYId").select(function (g) {
      return { axisId: g.key, series: g.value };
    });

    axisYWiseDsGrp.eachAsync(
      function (axisYG, gid, next) {
        axisYG.axisId = axisYG.axisId === "undefined" ? undefined : axisYG.axisId; // While grouping undefined get changed to undefined string

        var axisFound = tc.axesY.where(function (axisY) {
          return axisY._id === axisYG.axisId;
        });

        // Create required x-axis if not present
        if (axisFound.any()) {
          axisYG.axisRef = axisFound.first();
        } else {
          axisYG.axisRef = new SRC.Chart.Axis({ id: axisYG.axisId });
          tc.axesY.add(axisYG.axisRef);
        }

        axisYG.axisRef._mustRender = true;

        // Collect All y to calculate max and min
        var yVals = axisYG.series.groupBy("_plotAs").selectMulti(function (g) {
          var _series = g.value;
          if (SR.isDefined(axisYG.axisRef._max) && SR.isDefined(axisYG.axisRef._max)) {
            return [axisYG.axisRef._max, axisYG.axisRef._max];
          }

          switch (g.key) {
            case Chart.PlotAs.StackedColumn100:
            case Chart.PlotAs.StackedBar100:
            case Chart.PlotAs.StackedArea100:
              /* Here we need to collect all data points then need to group by x values or axisLabel and
              then need to take sum of positive and negative to generate scale properly */
              return _series
                .selectMulti(function (ds) {
                  return ds._points;
                })
                .groupBy(function (dp) {
                  return SR.isDefined(dp.xValue) ? dp.xValue : dp.xLabel;
                })
                .selectMulti(function (g) {
                  var dps = g.value;
                  var positives = dps.where(function (d) {
                    return d.yValue >= 0;
                  });
                  var negatives = dps.where(function (d) {
                    return d.yValue < 0;
                  });
                  var ret = [];
                  if (positives.any()) ret.push(100);
                  if (negatives.any()) ret.push(-100);
                  return ret;
                });

            case Chart.PlotAs.StackedColumn:
            case Chart.PlotAs.StackedBar:
            case Chart.PlotAs.StackedArea:
              /* Here we need to collect all data points then need to group by x values or axisLabel and
              then need to take sum of positive and negative to generate scale properly */
              return _series
                .selectMulti(function (ds) {
                  return ds._points;
                })
                .groupBy(function (dp) {
                  return SR.isDefined(dp.xValue) ? dp.xValue : dp.xLabel;
                })
                .selectMulti(function (g) {
                  var dps = g.value;
                  var positives = dps.where(function (d) {
                    return d.yValue >= 0;
                  });
                  var negatives = dps.where(function (d) {
                    return d.yValue < 0;
                  });
                  var ret = [];
                  if (positives.any()) ret.push(positives.sum("yValue"));
                  if (negatives.any()) ret.push(negatives.sum("yValue"));
                  return ret;
                });

            case Chart.PlotAs.Column:
            case Chart.PlotAs.Bar:
            case Chart.PlotAs.Line:
            case Chart.PlotAs.StepLine:
            case Chart.PlotAs.Spline:
            case Chart.PlotAs.Area:
            case Chart.PlotAs.SplineArea:
            case Chart.PlotAs.ScatterChart:
            case Chart.PlotAs.Bubble:
              return _series.selectMulti((ds) => {
                return ds.getMinMaxYValue();
              });
            case Chart.PlotAs.Pie:
            case Chart.PlotAs.Doughnut:
              // Only positive values should be collected
              return _series.selectMulti(function (ds) {
                return List.select(ds._points, function (dp) {
                  return Math.abs(dp.yValue);
                }).toArray();
              });

            case Chart.PlotAs.OHLC:
            case Chart.PlotAs.CandleStick:
              return _series.selectMulti(function (ds) {
                let ys = ds._points
                  .map((dp) => {
                    return dp.yValue;
                  })
                  .flat();
                return [Math.min.apply(this, ys), Math.max.apply(this, ys)];
              });
          }
        });

        var yAxisLabels = {};

        axisYG.series.each(function (ds) {
          ds.yAxis = axisYG.axisRef;
          for (let xi = 0; xi < ds._points.length; xi++) {
            yAxisLabels[ds._points[xi].yValue] = ds._points[xi].yAxisLabel;
          }
        });

        axisYG.axisRef._axisLabels = yAxisLabels;

        if (yVals.any()) {
          axisYG.axisRef.__calculateScale(SR.isDefined(axisYG.axisRef._min) ? axisYG.axisRef._min : yVals.min(),
            SR.isDefined(axisYG.axisRef._max) ? axisYG.axisRef._max : yVals.max());
        }

        setTimeout(() => next());
      },
      () => {
        this._axisXWiseDsGrp = axisXWiseDsGrp;
        this._axisYWiseDsGrp = axisYWiseDsGrp;

        // Clearing label cache for all Yaxis
        for (let idx = 0; idx < this.axesY.length; idx++) {
          this.axesY[idx]._labelControls.clear();
        }

        // Clearing label cache for all Xaxis
        for (let idx = 0; idx < this.axesX.length; idx++) {
          this.axesX[idx]._labelControls.clear();
        }

        cb();
      }
    );
  }
};


Chart.AxisType = {
    Primary: 'primary',
    Secondary: 'secondary'
};

Chart.ScaleType = {
    Number: 'number',
    DateTime: 'datetime'
};

Chart.AxisDirection = {
    XAXIS: 'X-AXIS',
    YAXIS: 'Y-AXIS'
};

Chart.PlotAs = {
    Area: 'area',
    Bar: 'bar',
    Point: 'point',
    Bubble: 'bubble',
    Column: 'column',
    Doughnut: 'doughnut',
    Line: 'line',
    Pie: 'pie',
    Spline: 'spline',
    SplineArea: 'splineArea',
    ScatterChart: 'scatter',
    StackedArea: 'stackedArea',
    StackedArea100: 'stackedArea100',
    StackedBar: 'stackedBar',
    StackedBar100: 'stackedBar100',
    StackedColumn: 'stackedColumn',
    StackedColumn100: 'stackedColumn100',
    StepLine: 'stepLine',
    StepArea: 'stepArea',
    RangeBar: 'rangeBar',
    RangeColumn: 'rangeColumn',
    RangeArea: 'rangeArea',
    RangeSplineArea: 'rangeSplineArea',
    CandleStick: 'candleStick',
    OHLC: 'stock',
    getChartOrientation: function (renderAs) {
        switch (renderAs) {
            case SRC.Chart.PlotAs.Bar:
            case SRC.Chart.PlotAs.StackedBar:
            case SRC.Chart.PlotAs.StackedBar100:
                return SRC.Orientation.Horizontal;
            case SRC.Chart.PlotAs.Pie:
            case SRC.Chart.PlotAs.Doughnut:
                return SRC.Orientation.Circular;
            default:
                return SRC.Orientation.Vertical;
        }
    }
};

Chart.themes = {
    "theme1": ['#C60000', '#1D71C5', '#FF9B06',
        '#009900', '#9966CC', '#3399CC', '#40BD53',
        '#999900', '#666633', '#C10061', '#003399'],
    "theme2": []
};
Chart.MarkerType = {
    Circle : 'circle',
    Square: 'square',
    Triangle : 'triangle',
    Star : 'star',
    Cross : 'cross',
    Plus : 'plus'
};
Chart.BorderStyle = {
    Solid: "solid",
    Dotted: "dotted",
    Dashed: "dashed"
};
Chart.LabelPosition = {
    Left: "left",
    Top: "top",
    Right: "right",
    Bottom: "bottom",
    Center: "center",
    Inside: "inside",
    Outside: "outside"
};
var Marker = SRC.Chart.Marker = class Marker {
    /**
     * Marker settings
     * @param {*} style https://canvaschart.com/docs/references/html5-chart-marker-properties.php
     */
    constructor(style) {
        this.shape = style.shape;
        this.size = style.size;
        this.color = style.Brush;
        this.borderWidth = style.borderWidth;
        this.borderColor = style.borderColor;
        this.borderStyle = style.borderStyle;
        this.isBevel = style.isBevel;
        this.labelPosition = style.labelPosition;
        this.enabled = style.enabled; // ==> markerEnabled
    }

    /**
     * @param {Object} markerStyle {
     *                               shape: SRC.Chart.Marker.Shape, 
     *                               size : Number, // Marker Size 0 means marker not enabled
     *                               color: Brush, 
     *                               borderWidth: Number
     *                               borderColor: String,
     *                               borderStyle: SRC.Chart.Marker.BorderStyle,
     *                               isBevel: Boolean,
     *                               enabled: Boolean ==> markerEnabled
     *                              }
     * @param {String} labelText Label Text
     * @param {SRC.Font} labelFont Label Font settings https://canvaschart.com/docs/references/html5-chart-font-properties.php
     * @param {SRC.Chart.Marker.LabelPosition} labelPosition SRC.Chart.Marker.LabelPosition
     * @returns {Object} {shapeObject, labelObject}
     * @internal
     */
    static _getALegendEntry(host, markerStyle, labelText, labelFont, markerEnabled = true) {
        let size = markerStyle.size;
        var legendEntry;

        // Add label
        let label = new SRC.Controls.TextBlock(0, 0, labelText, labelFont);
        label.measure(host);
        let lblHight = label.height();
        let lblWidth = label.width();

        if (markerEnabled) {
            legendEntry = new SRC.Controls.Canvas(0, 0, lblWidth + 3 * Marker._GAP + size, Math.max(lblHight, size) + 2 * Marker._GAP);
            let shape = Marker._getMarkerShape(Marker._GAP + size/2, legendEntry.height() / 2, markerStyle);
            label.x(2 * Marker._GAP + size);
            legendEntry.controls.add(shape);
        } else {
            legendEntry = new SRC.Controls.Canvas(0, 0, lblWidth, lblHight + 2 * Marker._GAP);
            label.x(Marker._GAP);
        }

        label.y(legendEntry.height() / 2 - label.height() / 2);
        legendEntry.controls.add(label);
        //legendEntry.fill(new SRC.SolidColor(SR.getRandomColor()));
        return legendEntry;
    }

    /**
     * @param {Object} host Current host reference
     * @param {Object} x X position respect to parent
     * @param {Object} y Y position respect to parent
     * @param {Object} markerStyle {
     *                               type: Chart.MarkerType, 
     *                               size : Number,   // Marker Size 0 means marker not enabled
     *                               fill: Brush,     // Marker fill brush
     *                               stroke: Stroke,  // Border style
     *                               isBevel: Boolean
     *                             }
     * @param {String} labelText Label Text
     * @param {SRC.Font} labelFont Label Font settings https://canvaschart.com/docs/references/html5-chart-font-properties.php
     * @param {SRC.Chart.Marker.LabelPosition} labelPosition SRC.Chart.Marker.LabelPosition
     * @returns {Object} {shapeObject, labelObject}
     * @internal
     */
    static _getMarkerWithLabel(host, x, y, markerEnabled, markerStyle, labelEnabled, labelText, labelFont, labelPosition) {
        let size = markerStyle.size;
        var sizeBy2 = size / 2;

        // Draw marker
        var shape;
        if (markerEnabled) {
            shape = Marker._getMarkerShape(x, y, markerStyle);
        }

        // Add label
        if (labelEnabled && labelText) {
            var label = new SRC.Controls.TextBlock(0, 0, labelText, labelFont);
            label.measure(host);

            switch (labelPosition) {
                case Chart.LabelPosition.Center:
                    label.x(x - label.width() / 2);
                    label.y(y - label.height() / 2);
                    break;
                case Chart.LabelPosition.Left:
                    label.x(x - sizeBy2 - label.width() - Marker._GAP);
                    label.y(y - label.height() / 2);
                    break;
                case Chart.LabelPosition.Right:
                    label.x(x + sizeBy2 + Marker._GAP);
                    label.y(y - label.height() / 2);
                    break;
                case Chart.LabelPosition.Top:
                    label.x(x - label.width() / 2);
                    label.y(y - sizeBy2 - Marker._GAP - label.height());
                    break;
                case Chart.LabelPosition.Bottom:
                    label.x(x - label.width() / 2);
                    label.y(y + sizeBy2 + Marker._GAP);
                    break;
            }
        }

        return { shape, label };
    }

    static _getMarkerShape(x, y, markerStyle) {
        var shape;
        let size = markerStyle.size;
        var sizeBy2 = size / 2;

        switch (markerStyle.type) {
            case Chart.MarkerType.Square:
                shape = new SRC.Shapes.Path([
                    { x: x - sizeBy2, y: y - sizeBy2 },
                    { x: x + sizeBy2, y: y - sizeBy2 },
                    { x: x + sizeBy2, y: y + sizeBy2 },
                    { x: x - sizeBy2, y: y + sizeBy2 }
                ]);

                shape.closed(true);
                if (markerStyle.fill) shape.fill(markerStyle.fill);
                break;
            case Chart.MarkerType.Triangle:
                shape = new SRC.Shapes.Path([
                    { x: x - sizeBy2, y: y + sizeBy2 },
                    { x, y: y - sizeBy2 },
                    { x: x + sizeBy2, y: y + sizeBy2 }
                ]);

                shape.closed(true);
                if (markerStyle.fill) shape.fill(markerStyle.fill);
                break;
            case Chart.MarkerType.Star:
                shape = new SRC.Shapes.Path([
                    { x: x - sizeBy2, y: y + sizeBy2 },
                    { x, y: y - sizeBy2 },
                    { x: x + sizeBy2, y: y + sizeBy2 },
                    { x: x - sizeBy2, y },
                    { x: x + sizeBy2, y }
                ]);

                shape.closed(true);
                if (markerStyle.fill) shape.fill(markerStyle.fill);
                break;
            case Chart.MarkerType.Cross:
                shape = new SRC.Shapes.Path([
                    { x: x - sizeBy2, y: y - sizeBy2 },
                    { x: x + sizeBy2, y: y + sizeBy2 },
                    { x, y },
                    { x: x + sizeBy2, y: y - sizeBy2 },
                    { x: x - sizeBy2, y: y + sizeBy2 }
                ]);

                shape.closed(false);
                break;
            case Chart.MarkerType.Plus:
                shape = new SRC.Shapes.Path([
                    { x: x - sizeBy2, y },
                    { x: x + sizeBy2, y },
                    { x, y },
                    { x, y: y - sizeBy2 },
                    { x, y: y + sizeBy2 }
                ]);

                shape.closed(false);
                break;
            case Chart.MarkerType.Circle:
            default:
                shape = new SRC.Shapes.Circle(x, y, sizeBy2);
                if (markerStyle.fill) shape.fill(markerStyle.fill);
                break;
        }

        if (markerStyle.stroke) shape.stroke(markerStyle.stroke);
        if (markerStyle.shadow) shape.shadow(SRC.Shadow.Default);

        return shape;
    }
}

Marker._GAP = 4;

Marker.DEFAULT_DP_MARKER_SETTINGS = {
    shape: Chart.MarkerType.Circle,
    size: 6,       // Marker Size 0 means marker not enabled
    fill: null,     // Marker fill brush
    stroke: null, // Border style
    isBevel: false,  // False
    shadow: false
};

Marker.DEFAULT_LEGEND_MARKER_SETTINGS = {
    shape: Chart.MarkerType.Circle,
    size: 12,       // Marker Size 0 means marker not enabled
    fill: null,     // Marker fill brush
    stroke: null, // Border style
    isBevel: false,  // False
    shadow: false
};

Marker.DEFAULT_DP_LABEL_FONT_SETTINGS = {

};

SRC.Chart.Title = class Title {
  constructor(conf = {}) {
    this._text = SR.isString(conf) ? conf : (conf.text || "");
    conf = SR.isString(conf) || !conf ? {} : conf;
    this._background = SR.isString(conf.background) ? new SRC.SolidColor(conf.background) : conf.background;
    this._opacity = conf.opacity ? conf.opacity : 1;
    this._enabled = conf.enabled ? conf.enabled : true;
    this._hAlign = conf.hAlign ? conf.hAlign : SRC.HALIGN.Center;
    this._vAlign = conf.vAlign ? conf.vAlign : SRC.VALIGN.Top;
    this._margin = conf.margin ? conf.margin : [5, 5, 5, 5];

    conf.fontSize = conf.fontSize ? conf.fontSize : 24;
    //conf.fontWeight = conf.fontWeight ? conf.fontWeight : 'bold';
    //conf.fontFamily = conf.fontFamily ? conf.fontFamily : 'Ubuntu, Open Sans';
    this._font = new SRC.Font(conf);
  }

  text(val) {
    if (val) {
      this._text = val;
    } else {
      return this._text;
    }
  }

  background(val) {
    if (val) {
      this._background = val;
    } else {
      return this._background;
    }
  }

  font(val) {
    if (val) {
      this._font = val;
    } else {
      return this._font;
    }
  }

  hAlign(val) {
    if (SR.isDefined(val)) {
      this._hAlign = val;
    } else {
      return this._hAlign;
    }
  }

  vAlign(val) {
    if (SR.isDefined(val)) {
      this._vAlign = val;
    } else {
      return this._vAlign;
    }
  }

  opacity(val) {
    if (val) {
      this._opacity = val;
    } else {
      return this._opacity;
    }
  }

  margin(val) {
    if (val) {
      this._margin = val;
    } else {
      return this._margin;
    }
  }

  enabled(val) {
    if (val) {
      this._enabled = val;
    } else {
      return this._enabled;
    }
  }
};

/**
* @description Canvas Panel
* @param {Number} x
* @param {Number} y
* @param {Number} w
* @param {Number} h
* @returns {Chart.Axis}
*/
var Axis = (SRC.Chart.Axis = class Axis {
  constructor(conf = {}) {
    this._rect = new SR.Rect();
    this._stroke = new SRC.Stroke(1, 'red');
    this._axisType = SRC.Chart.AxisType.Primary;
    this._id = null;
    this._scaleType = SRC.Chart.ScaleType.Number;
    this._includeZero = null;
    this._internalInterval = null;
    this._calMax = 1;
    this._calMin = 0;
    this._calTickSpace = 0;

    this.chart = null;
    this._labelControls = new SR.Collections.List();
    this._labelAngel = NaN;
    this._autoAngel = NaN;
    this._autoSkip = 0;

    this._id = conf.id;
    this._visible = SR.isDefined(conf.visible) ? conf.visible : true;
    this._max = conf.max || undefined;
    this._min = conf.min || undefined;
    this._interval = conf.interval;
    this._intervalType = conf.intervalType;
    this._axisType = conf.axisType ? conf.axisType : SRC.Chart.AxisType.Primary;
    this._includeZero = SR.isDefined(conf.includeZero) ? conf.includeZero : this._includeZero;
    this._scaleType = conf.scaleType || this._scaleType;
    this._valueFormat = conf.valueFormat || '';
    this._valueFormatRange = conf.valueFormatRange;
    this._valueFormatFunc = conf.valueFormatFunc;
    this._labelFont = conf.labelFont ? new SRC.Font(conf.labelFont) : new SRC.Font();

    // Set title and its defaults
    this._titleFont = conf.titleFont || {};
    this._titleFont.fontSize = this._titleFont.fontSize || 14;
    this._titleFont.fontStyle = this._titleFont.fontStyle || '100';
    this._titleFont.text = conf.title;
    this._title = new SRC.Chart.Title(this._titleFont);

    // Set line related properties and its defaults
    this._tickEnabled = SR.isDefined(conf.tickEnabled) ? conf.tickEnabled : true;
    this._tick = {
      length: conf.tickLength || 7,
      stroke: new SRC.Stroke(conf.tickThickness || 0.5, conf.tickColor || '#000000'),
    };
    this._axisLineStroke = new SRC.Stroke(conf.axisLineThickness || 0.5, conf.axisLineColor || '#000000');

    //  Set gap related properties and its defaults
    this._GAP = 5; // Spacing between any applicable elements
    this._xLRorTBPixGap = 0; // will give equal gap at left and right. think in case of column chart
    this._dataPointWidthInPix = undefined;
    this._yLRorTBPixGap = 0;
    this._xPixGapRight = 0; // Some times in X axis if secondary axis is not there then max label will get clipped at right side so will add some space = axisWidth/2 if secondary axis is not present
    this._xPixGapLeft = 0; // Some times in X axis if secondary axis is not there then max label will get clipped at right side so will add some space = axisWidth/2 if secondary axis is not present

    /**
     * If labels overlaps then first it will try to distribute the labels across multiple row. Max auto row number is 2.
     * Next check 1 row if there is any overlap or there is no space left for other labels, if yes then bring all of them into 1 row and skip
     * @type {boolean}
     * @private
     */
    this._autoLabelSkippingEnabled = false; // Whether labels should be skipped if there is overlaps
    this._autoLabelRowEnabled = true; // Whether labels should be spread across multiple rows
    this._labelRows = undefined;
  }

  id(val) {
    if (SR.isNumber(val)) {
      this._id = val;
    } else {
      return this._id;
    }
  }

  visible(val) {
    if (SR.isNumber(val)) {
      this._visible = val;
    } else {
      return this._visible;
    }
  }

  /**
   * Primary or Secondary
   * @param val Chart.AxisType
   * @returns {string|*}
   */
  axisType(val) {
    if (SR.isNumber(val)) {
      this._axisType = val;
    } else {
      return this._axisType;
    }
  }

  labelAngel(val) {
    if (SR.isNumber(val)) {
      this._labelAngel = val;
    } else {
      return this._labelAngel;
    }
  }

  max(val) {
    if (SR.isNumber(val)) {
      this._max = val;
    } else {
      return this._max;
    }
  }

  min(val) {
    if (SR.isNumber(val)) {
      this._min = val;
    } else {
      return this._min;
    }
  }

  interval(val) {
    if (SR.isNumber(val)) {
      this._interval = val;
    } else {
      return this._interval;
    }
  }

  x(val) {
    if (SR.isNumber(val)) {
      this._rect.x = val;
    } else {
      return this._rect.x;
    }
  }

  y(val) {
    if (SR.isNumber(val)) {
      this._rect.y = val;
    } else {
      return this._rect.y;
    }
  }

  viewPortWidth(val) {
    if (SR.isNumber(val)) {
      this._rect.w = val;
    } else {
      return this._rect.w;
    }
  }

  viewPortHeight(val) {
    if (SR.isNumber(val)) {
      this._rect.h = val;
    } else {
      return this._rect.h;
    }
  }

  width(val) {
    if (SR.isNumber(val)) {
      this._rect.w = val;
    } else {
      return this._rect.w;
    }
  }

  widthOfVisual() {
    return this._visible ? this._rect.w : 0;
  }

  heightOfVisual() {
    return this._visible ?this._rect.h:0;
  }

  height(val) {
    if (SR.isNumber(val)) {
      this._rect.h = val;
    } else {
      return this._rect.h;
    }
  }

  valueFormatCustom(val) {
    if (SR.isNumber(val)) {
      this._valueFormat = val;
    } else {
      return this._valueFormat;
    }
  }

  getXValue(xLabel) {
    return this._axisLabelsDic[xLabel];
  }

  getAxisLabel(xValue) {
    let ret = this._axisLabels[xValue] || xValue;

    if (this._scaleType === SRC.Chart.ScaleType.DateTime) {
      return this.formatValue(new Date(ret));
    } else {
      return this.formatValue(ret);
    }
  }

  getAxisBaseValue() {
    var min = Math.min(this._calMax, this._calMin);
    return min > 0 ? min : 0;
  }

  getPixPosition(val) {
    var tc = this;
    var retVal = 0;
    switch (tc.chart._orientation) {
      case SRC.Orientation.Vertical:
        switch (this.direction) {
          case SRC.Chart.AxisDirection.YAXIS:
            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                return (
                  tc.viewPortHeight() -
                  (val - tc._calMin) * ((tc.viewPortHeight() - tc._yLRorTBPixGap) / (tc._calMax - tc._calMin))
                );
              case SRC.Chart.AxisType.Secondary:
                return (
                  tc.viewPortHeight() -
                  (val - tc._calMin) * ((tc.viewPortHeight() - tc._yLRorTBPixGap) / (tc._calMax - tc._calMin))
                );
            }
            break;
          case SRC.Chart.AxisDirection.XAXIS:
            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                return (
                  tc._xLRorTBPixGap +
                  tc._xPixGapLeft +
                  (val - tc._calMin) *
                    ((tc.viewPortWidth() - 2 * tc._xLRorTBPixGap - tc._xPixGapLeft - tc._xPixGapRight) /
                      (tc._calMax - tc._calMin))
                );
              case SRC.Chart.AxisType.Secondary:
                return (
                  tc._xLRorTBPixGap +
                  tc._xPixGapLeft +
                  (val - tc._calMin) *
                    ((tc.viewPortWidth() - 2 * tc._xLRorTBPixGap - tc._xPixGapLeft - tc._xPixGapRight) /
                      (tc._calMax - tc._calMin))
                );
            }
            break;
        }
        break;
      case SRC.Orientation.Horizontal:
        switch (this.direction) {
          case SRC.Chart.AxisDirection.YAXIS:
            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                return (val - tc._calMin) * ((tc.viewPortWidth() - tc._yLRorTBPixGap) / (tc._calMax - tc._calMin));
              case SRC.Chart.AxisType.Secondary:
                return (val - tc._calMin) * ((tc.viewPortWidth() - tc._yLRorTBPixGap) / (tc._calMax - tc._calMin));
            }
            break;
          case SRC.Chart.AxisDirection.XAXIS:
            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                return (
                  tc.viewPortHeight() -
                  (tc._xLRorTBPixGap +
                    (val - tc._calMin) * ((tc.viewPortHeight() - 2 * tc._xLRorTBPixGap) / (tc._calMax - tc._calMin)))
                );
              case SRC.Chart.AxisType.Secondary:
                return (
                  tc.viewPortHeight() -
                  (tc._xLRorTBPixGap +
                    (val - tc._calMin) * ((tc.viewPortHeight() - 2 * tc._xLRorTBPixGap) / (tc._calMax - tc._calMin)))
                );
            }
            break;
        }
        break;
    }

    return retVal;
  }

  getValueFromPixPosition(pixPos) {
    var tc = this;
    switch (tc.chart._orientation) {
      case SRC.Orientation.Vertical:
        switch (this.direction) {
          case SRC.Chart.AxisDirection.YAXIS:
            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                return (
                  (tc.viewPortHeight() - pixPos) /
                    ((tc.viewPortHeight() - tc._yLRorTBPixGap) / (tc._calMax - tc._calMin)) +
                  tc._calMin
                );
              case SRC.Chart.AxisType.Secondary:
                return (
                  (tc.viewPortHeight() - pixPos) /
                    ((tc.viewPortHeight() - tc._yLRorTBPixGap) / (tc._calMax - tc._calMin)) +
                  tc._calMin
                );
            }
            break;
          case SRC.Chart.AxisDirection.XAXIS:
            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                return (
                  (pixPos - tc._xLRorTBPixGap - tc._xPixGapLeft) /
                    ((tc.viewPortWidth() - 2 * tc._xLRorTBPixGap - tc._xPixGapLeft - tc._xPixGapRight) /
                      (tc._calMax - tc._calMin)) +
                  tc._calMin
                );
              case SRC.Chart.AxisType.Secondary:
                return (
                  (pixPos - tc._xLRorTBPixGap - tc._xPixGapLeft) /
                    ((tc.viewPortWidth() - 2 * tc._xLRorTBPixGap - tc._xPixGapLeft - tc._xPixGapRight) /
                      (tc._calMax - tc._calMin)) +
                  tc._calMin
                );
            }
            break;
        }
        break;
      case SRC.Orientation.Horizontal:
        switch (this.direction) {
          case SRC.Chart.AxisDirection.YAXIS:
            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                return pixPos / ((tc.viewPortWidth() - tc._yLRorTBPixGap) / (tc._calMax - tc._calMin)) + tc._calMin;

              case SRC.Chart.AxisType.Secondary:
                return pixPos / ((tc.viewPortWidth() - tc._yLRorTBPixGap) / (tc._calMax - tc._calMin)) + tc._calMin;
            }
            break;
          case SRC.Chart.AxisDirection.XAXIS:
            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                return (
                  (tc.viewPortHeight() - pixPos - tc._xLRorTBPixGap) /
                    ((tc.viewPortHeight() - 2 * tc._xLRorTBPixGap) / (tc._calMax - tc._calMin)) +
                  tc._calMin
                );
              case SRC.Chart.AxisType.Secondary:
                return (
                  (tc.viewPortHeight() - pixPos - tc._xLRorTBPixGap) /
                    ((tc.viewPortHeight() - 2 * tc._xLRorTBPixGap) / (tc._calMax - tc._calMin)) +
                  tc._calMin
                );
            }
            break;
        }
        break;
    }
  }

  _measurePrimaryYAxisOfVerticalChart(parentSize, pass) {
    var tc = this;
    var host = tc.chart._host,
      index = 0,
      posX = 0,
      posY = 0,
      txtLabel,
      lbl,
      parentHeight = parentSize.h;
    var fontSettings = this._labelFont;
    fontSettings.baseline(SRC.Font.TextBaseLine.Middle);

    // console.log('pass=', pass, ' _axisType=', this._axisType, ' h=', parentHeight);

    // var fontSettings = new SRC.Font({ baseline: SRC.Font.TextBaseLine.Middle });
    // Here we will try to calculate the height of the first level to reduce the plot Area size
    // so that top level cost not clip
    tc._yLRorTBPixGap = SRC.determineFontSize(fontSettings).h / 2;
    parentHeight -= tc._yLRorTBPixGap;

    if (pass == 0) {
      // Manage Axis Title here
      var tLbl = new SRC.Controls.TextBlock(0, 0, this._title._text, this._title._font);
      tLbl.rotationPoint(SRC.Controls.TextBlock.RotationPoint.Center);
      tLbl.angel(-90);
      var tsz = tLbl.measure(host);
      tLbl.x(tsz.height / 2 + tc._GAP);
      tc._titleCtrl = tLbl;
    }

    if (tc._titleCtrl) {
      tc._titleCtrl.y(tc._yLRorTBPixGap + parentHeight / 2);
      posX += tc._titleCtrl.height();
    }

    if (this._axisType === SRC.Chart.AxisType.Primary) {
      posX += this._GAP;
      if (this._title._text) posX += this._GAP;
    } else {
      posX = this._tick.length + tc._GAP;
    }

    tc.unitTickSpace = (parentHeight / (tc._calMax - tc._calMin)) * tc._calTickSpace;

    if (pass == 0) {
      for (var idx = tc._calMax; idx >= tc._calMin; idx -= tc._calTickSpace) {
        posY = index * tc.unitTickSpace + tc._yLRorTBPixGap;
        txtLabel = tc.getAxisLabel(idx);
        lbl = new SRC.Controls.TextBlock(posX, posY, txtLabel, fontSettings);
        lbl.measure(host);

        // SKIP LEBELS || comment this if to dissable
        if (index > 0 && idx > tc._calMin) {
          var oldLbl = tc._labelControls.last();
          if (oldLbl.y() + oldLbl.height() + this._GAP > lbl.y()) {
            // overlap detected
            index++;
            continue;
          }
        }

        lbl._index = index;
        tc._labelControls.add(lbl);
        index++;
      }

      tc._maxLabelHeight = tc._labelControls[0].height();
      tc._maxLabelWidth = this._labelControls
        .select(function (lbl) {
          return lbl.width();
        })
        .max();
    } else {
      index = 0;

      for (index = 0; index < this._labelControls.length; index++) {
        lbl = this._labelControls[index];
        posY = lbl._index * tc.unitTickSpace + tc._yLRorTBPixGap;

        lbl.y(posX);
        lbl.y(posY);
        lbl.realX = posX;
      }
    }

    if (this._axisType === SRC.Chart.AxisType.Primary) {
      this._labelControls.each(function (tb) {
        tb.x(posX + tc._maxLabelWidth - tb.width());
      });

      return {
        w: this._visible
          ? tc._maxLabelWidth + posX + this._GAP + this._tick.length + this._axisLineStroke.lineWidth
          : 0,
        h: parentHeight,
      };
    } else {
      let w = tc._maxLabelWidth + posX + this._tick.length + this._axisLineStroke.lineWidth;

      if (this._title._text) {
        w += 2 * tc._GAP;
        this._titleCtrl.x(w);
        w += this._titleCtrl.height() - tc._GAP;
      }

      return {
        w : this._visible ? w : 0,
        h: parentHeight,
      };
    }
  }

  formatValue(value) {
    if (this._valueFormatFunc) {
      return this._valueFormatFunc(this, value);
    }

    value = SR.Algorithm.formatValue(value, this._valueFormat, this._valueFormatRange);
    return value;
  }

  _measureSecondaryYAxisOfVerticalChart(parentSize, pass) {
    return this._measurePrimaryYAxisOfVerticalChart(parentSize, pass);
  }

  _measurePrimaryXAxisOfVerticalChart(parentSize, pass) {
    var tc = this,
      idx;
    var host = tc.chart._host,
      index = 0,
      posX = 0,
      txtLabel,
      lbl;
    var fontSettings = this._labelFont;
    var axisActualWidth = parentSize.w - tc._xPixGapRight - tc._xPixGapLeft;

    if (this._LR_or_TB_GappingEnabled) {
      var nSpace = Object.keys(tc._axisLabels).length + 1;
      tc._xLRorTBPixGap = SR.isDefined(tc._dataPointWidthInPix)
        ? tc._dataPointWidthInPix
        : (axisActualWidth / nSpace) * (tc.chart._dataPointWidthInPercent - 0.07);
    } else tc._xLRorTBPixGap = 0;

    tc._autoAngel = isNaN(tc._labelAngel) ? tc._autoAngel : tc._labelAngel;

    tc.unitTickSpace = ((axisActualWidth - 2 * tc._xLRorTBPixGap) / (tc._calMax - tc._calMin)) * tc._calTickSpace;
    var lblTopLine = this._GAP + this._tick.length + this._axisLineStroke.lineWidth;

    if (pass == 0) {
      for (idx = tc._calMax; idx >= tc._calMin; ) {
        posX = axisActualWidth - tc._xLRorTBPixGap - index * tc.unitTickSpace;

        if (isNaN(tc._autoAngel)) {
          txtLabel = tc.getAxisLabel(idx);
          lbl = new SRC.Controls.TextBlock(posX, lblTopLine, txtLabel, fontSettings);
          lbl.realX = posX;

          lbl.measure(host);
          tc._labelControls.add(lbl);

          if (tc._labelControls.length > 1 && index > 0) {
            var llbl = tc._labelControls[index - 1];
            if (lbl.x() + lbl.width() + 2 * tc._GAP > llbl.x()) {
              // overlap
              index = 0;
              tc._autoAngel = tc.chart.width <= 300 ? -90 : -90;
              tc._autoSkip = 1;
              idx = tc._calMax;

              // if overlap after rotations
              if (lbl.x() + lbl.height() + tc._GAP > llbl.x()) {
                // overlap
                tc._autoSkip = 1;

                // Here you can check again if there is overlap with 3rd label and so on
              } else {
                tc._autoSkip = 0;
              }

              continue;
            }
          }
        } else {
          if (this._labelControls.length - 1 >= index) {
            lbl = this._labelControls[index];
            lbl.x(posX);
            lbl.y(lblTopLine);
          } else {
            txtLabel = tc.getAxisLabel(idx);
            lbl = new SRC.Controls.TextBlock(posX, lblTopLine, txtLabel.toString(), fontSettings);
            tc._labelControls.add(lbl);
          }
          lbl.realX = posX;
          lbl.rotationPoint(SRC.Controls.TextBlock.RotationPoint.Right);
          lbl.angel(tc._autoAngel);
          lbl.measure(host);
        }

        index++;
        idx -= tc._calTickSpace;
      }

      if (isNaN(tc._autoAngel)) {
        let extremeRightLabelWidth = SRC.determineFontSize(fontSettings, tc.getAxisLabel(tc._calMax)).w / 2;
        posX = axisActualWidth - tc._xLRorTBPixGap - 0 * tc.unitTickSpace;

        if (posX + extremeRightLabelWidth > axisActualWidth && !this.chart._hasSecondaryYAxis) {
          tc._xPixGapRight = extremeRightLabelWidth + this._GAP;
        }

        let extremeLeftLabelWidth = SRC.determineFontSize(fontSettings, tc.getAxisLabel(tc._calMin)).w / 2;
        posX = 0; //axisActualWidth - tc._xLRorTBPixGap - ((tc._calMax - tc._calMin) / tc._calTickSpace * tc.unitTickSpace);

        if (posX - extremeLeftLabelWidth < 0 && !this.chart._hasPrimaryYAxis) {
          tc._xPixGapLeft = extremeLeftLabelWidth + this._GAP;
        }
      }
    } else {
      index = 0;
      for (idx = tc._calMax; idx >= tc._calMin; idx -= tc._calTickSpace, index++) {
        posX = axisActualWidth - tc._xLRorTBPixGap - index * tc.unitTickSpace + tc._xPixGapLeft;
        lbl = this._labelControls[index];
        lbl.x(posX);
        lbl.y(lblTopLine);
        lbl.realX = posX;
        if (isNaN(tc._autoAngel)) {
          lbl.rotationPoint(SRC.Controls.TextBlock.RotationPoint.Right);
          lbl.angel(tc._autoAngel);
        }

        lbl.measure(host);
      }
    }

    if (pass == 1 && (isNaN(tc._autoAngel) || tc._autoAngel == 0)) {
      this._labelControls.each(function (lbl) {
        lbl.x(lbl.realX - lbl.width() / 2);
      });
    }

    var maxLabelHeight = this._labelControls
      .select(function (lbl) {
        return lbl.actualSize().height;
      })
      .max();

    var axisHeight = maxLabelHeight + lblTopLine;

    if (pass == 0) {
      var tLbl = new SRC.Controls.TextBlock(0, 0, this._title._text, this._title._font);
      tLbl.rotationPoint(SRC.Controls.TextBlock.RotationPoint.Center);
      tLbl.measure(host);
      tc._titleCtrl = tLbl;
    }

    if (tc._titleCtrl) {
      tc._titleCtrl.x((axisActualWidth - tc._titleCtrl.width()) / 2);
      tc._titleCtrl.y(axisHeight);
      axisHeight += tc._titleCtrl.height();
    }

    //axisHeight += 2 * this._GAP; // increasing toomuch gap at bottom

    return { w: axisActualWidth, h: this._visible ? axisHeight : 0 };
  }

  _measurePrimaryXAxisOfHorizontalChart(parentSize, pass) {
    var tc = this;
    var host = tc.chart._host,
      index = 0,
      posX = 0,
      posY = 0,
      txtLabel,
      lbl;
    var fontSettings = this._labelFont;
    fontSettings.baseline(SRC.Font.TextBaseLine.Middle);

    if (pass == 0) {
      if (this._LR_or_TB_GappingEnabled) {
        var nSpace = Object.keys(tc._axisLabels).length + 1;
        tc._xLRorTBPixGap = SR.isDefined(tc._dataPointWidthInPix)
          ? tc._dataPointWidthInPix
          : (parentSize.h / nSpace) * (tc.chart._dataPointWidthInPercent - 0.07);
      } else tc._xLRorTBPixGap = 0;

      var tLbl = new SRC.Controls.TextBlock(0, 0, this._title._text, this._title._font);
      tLbl.rotationPoint(SRC.Controls.TextBlock.RotationPoint.Center);
      tLbl.angel(-90);
      var tsz = tLbl.measure(host);
      tLbl.x(tsz.height / 2 + tc._GAP);
      tc._titleCtrl = tLbl;
    }

    if (tc._titleCtrl) {
      tc._titleCtrl.y(parentSize.h / 2);
      posX += tc._titleCtrl.height();
      posX += this._GAP; 
    }
    
    // posX += 2 * this._GAP;

    tc.unitTickSpace = ((parentSize.h - 2 * tc._xLRorTBPixGap) / (tc._calMax - tc._calMin)) * tc._calTickSpace;
    var skippedLabels = new List();
    if (pass == 0) {
      /* Try adding labels for 1st row by skipping */
      for (var idx = tc._calMax; idx >= tc._calMin; idx -= tc._calTickSpace) {
        posY = tc._xLRorTBPixGap + index * tc.unitTickSpace;
        txtLabel = tc.getAxisLabel(idx);
        lbl = new SRC.Controls.TextBlock(posX, posY, txtLabel.toString(), fontSettings);
        lbl.measure(host);
        lbl.seqIndex = index; // Sequence index

        if (tc._labelControls.length >= 1) {
          var lblPrev = tc._labelControls[tc._labelControls.length - 1];
          if (lblPrev.y() + lblPrev.height() + tc._GAP > lbl.y()) {
            // overlap
            lbl.isSkipped = true;
            lbl.row = 1;
            skippedLabels.add(lbl);
          } else {
            lbl.row = 0;
            tc._labelControls.add(lbl);
          }
        } else {
          lbl.row = 0;
          tc._labelControls.add(lbl);
        }

        index++;
      }

      tc._maxLabelWidth =
        this._labelControls
          .select(function (lbl) {
            return lbl.width();
          })
          .max() + tc._GAP;

      this._labelRowWidth = [tc._maxLabelWidth]; // Holds the row wise max width of the labels
      var labels4OtherRows = new List();
      var totalRowCount = 1;
      var totalWidthOfOtherRows = 0;

      while (skippedLabels.any()) {
        totalRowCount++;

        if (totalRowCount > 2) break; // Don't allow to grow rows more than 2 automatically

        /* jshint ignore:start */
        var tmpLabels4NextRow = skippedLabels; // So skippedLabels is nothing but tmpLabels4NextRow
        var labels4CurrentRow = new List();
        skippedLabels = new List();

        tmpLabels4NextRow.each(function (lbl, idx) {
          if (idx > 0) {
            var lblPrev = tmpLabels4NextRow[idx - 1];
            if (lblPrev.y() + lblPrev.height() + tc._GAP > lbl.y()) {
              // overlap
              lbl.isSkipped = true;
              lbl.row++;
              skippedLabels.add(lbl);
            } else {
              labels4CurrentRow.add(lbl);
            }
          } else {
            labels4CurrentRow.add(lbl);
          }
        });

        /* jshint ignore:end */

        var maxLabelWidth =
          labels4CurrentRow
            .select(function (lbl) {
              return lbl.width();
            })
            .max() + tc._GAP;

        this._labelRowWidth.push(maxLabelWidth);

        totalWidthOfOtherRows += maxLabelWidth;
        labels4OtherRows.addRange(labels4CurrentRow);
      }

      // Don't allow to grow rows more than 2 automatically
      if (totalRowCount <= 2) {
        this._labelControls.addRange(labels4OtherRows);
        tc._maxLabelWidth += totalWidthOfOtherRows;
      }
    } else {
      index = 0;
      this._labelControls.each(function (lbl) {
        posY = tc._xLRorTBPixGap + lbl.seqIndex * tc.unitTickSpace;
        lbl.y(posY);
        lbl.realX = posX;
        index++;
      });
    }

    var rowWidth = 0;
    var currentRow = 0;
    this._labelControls.each(function (lbl) {
      // Need consider rowWidth to calculate x position of label in multi-row case
      if (lbl.row != currentRow) {
        rowWidth += tc._labelRowWidth[currentRow];
        currentRow = lbl.row;
      }

      lbl.x(posX + tc._maxLabelWidth - lbl.width() - rowWidth);
    });

    return {
      w: this._visible ? tc._maxLabelWidth + posX + this._GAP + this._tick.length + this._axisLineStroke.lineWidth : 0,
      h: parentSize.h,
    };
  }

  _measurePrimaryYAxisOfHorizontalChart(parentSize, pass) {
    var tc = this,
      idx;
    var host = tc.chart._host,
      index = 0,
      posX = 0,
      txtLabel,
      lbl;

    // tc._labelControls.clear();

    // tc._yLRorTBPixGap = 0;
    var axisActualWidth = parentSize.w - tc._yLRorTBPixGap;

    tc._autoAngel = isNaN(tc._labelAngel) ? tc._autoAngel : tc._labelAngel;
    var fontSettings = new SRC.Font({ baseline: SRC.Font.TextBaseLine.Top });
    tc.unitTickSpace = (axisActualWidth / (tc._calMax - tc._calMin)) * tc._calTickSpace;
    var lblTopLine = this._GAP + this._tick.length + this._axisLineStroke.lineWidth;

    if (pass == 0) {
      for (idx = tc._calMax; idx >= tc._calMin; ) {
        txtLabel = tc.getAxisLabel(idx);
        lbl = new SRC.Controls.TextBlock(posX, lblTopLine, txtLabel.toString(), fontSettings);
        tc._labelControls.add(lbl);

        posX = axisActualWidth - index * tc.unitTickSpace;
        lbl.realX = posX;
        lbl.rotationPoint(SRC.Controls.TextBlock.RotationPoint.Right);
        lbl.angel(tc._autoAngel);
        lbl.measure(host);

        if (index == 0) tc._yLRorTBPixGap = lbl.width() / 2;
        index++;
        idx -= tc._calTickSpace;
      }
    } else {
      index = 0;
      for (idx = tc._calMax; idx >= tc._calMin; idx -= tc._calTickSpace) {
        posX = axisActualWidth - index * tc.unitTickSpace;
        lbl = this._labelControls[index];
        lbl.x(posX);
        lbl.y(lblTopLine);
        lbl.realX = posX;
        if (isNaN(tc._autoAngel)) {
          lbl.rotationPoint(SRC.Controls.TextBlock.RotationPoint.Right);
          lbl.angel(tc._autoAngel);
        }

        lbl.measure(host);
        index++;
      }
    }

    if (pass == 1 && (isNaN(tc._autoAngel) || tc._autoAngel == 0)) {
      this._labelControls.each(function (lbl) {
        lbl.x(lbl.realX - lbl.width() / 2);
      });
    }

    var maxLabelHeight = this._labelControls
      .select(function (lbl) {
        return lbl.actualSize().height;
      })
      .max();

    var axisHeight = maxLabelHeight + lblTopLine;

    if (pass == 0) {
      var tLbl = new SRC.Controls.TextBlock(0, 0, this._title._text, this._title._font);
      tLbl.rotationPoint(SRC.Controls.TextBlock.RotationPoint.Center);
      tLbl.measure(host);
      tc._titleCtrl = tLbl;
    }

    axisHeight += this._GAP;

    if (tc._titleCtrl) {
      tc._titleCtrl.x((axisActualWidth - tc._titleCtrl.width()) / 2);
      tc._titleCtrl.y(axisHeight);
      axisHeight += tc._titleCtrl.height();
    }

    return { w: axisActualWidth, h: this._visible ? axisHeight : 0 };
  }

  _measure(parentSize, pass) {
    var tc = this;
    //    if (tc._calMax === tc._calMin) return {height: 0, width: 0};

    switch (tc.chart._orientation) {
      case SRC.Orientation.Vertical:
        switch (this.direction) {
          case SRC.Chart.AxisDirection.YAXIS:
            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                return tc._measurePrimaryYAxisOfVerticalChart(parentSize, pass);
              case SRC.Chart.AxisType.Secondary:
                return tc._measureSecondaryYAxisOfVerticalChart(parentSize, pass);
            }
            break;
          case SRC.Chart.AxisDirection.XAXIS:
            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                return tc._measurePrimaryXAxisOfVerticalChart(parentSize, pass);
              case SRC.Chart.AxisType.Secondary:
                break;
            }
            break;
        }
        break;
      case SRC.Orientation.Horizontal:
        switch (this.direction) {
          case SRC.Chart.AxisDirection.YAXIS:
            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                return tc._measurePrimaryYAxisOfHorizontalChart(parentSize, pass);
              case SRC.Chart.AxisType.Secondary:
                return { height: 0, width: 0 };
              //return tc._measureSecondaryYAxisOfHorizontalChart(parentSize, pass);
            }

            break;
          case SRC.Chart.AxisDirection.XAXIS:
            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                return tc._measurePrimaryXAxisOfHorizontalChart(parentSize, pass);
              case SRC.Chart.AxisType.Secondary:
                break;
            }

            break;
        }
        break;
    }
  }

  add0YValueLine(plotArea, yAxis) {
    if (this.direction === SRC.Chart.AxisDirection.YAXIS || yAxis._calMin == 0) return; // This is applicable to xAxis only

    let tc = this;
    var yPixPos = yAxis.getPixPosition(yAxis.getAxisBaseValue());
    var zeroAxisLine;

    switch (tc.chart._orientation) {
      case SRC.Orientation.Vertical:
        zeroAxisLine = new SRC.Shapes.Path([
          new SRC.Shapes.PathPoint(0, yPixPos),
          new SRC.Shapes.PathPoint(plotArea.width(), yPixPos),
        ]);
        break;
      case SRC.Orientation.Horizontal:
        zeroAxisLine = new SRC.Shapes.Path([
          new SRC.Shapes.PathPoint(yPixPos, 0),
          new SRC.Shapes.PathPoint(yPixPos, plotArea.height()),
        ]);
        break;
    }

    zeroAxisLine.stroke(tc._axisLineStroke);
    plotArea.controls.add(zeroAxisLine);
  }

  /**
   * Its applicable for all Vertical or Horizontal charts
   * @param axisArea
   * @param container
   * @private
   */
  _renderVerticalPrimaryAxis(axisArea, container) {
    var tc = this;
    container.controls.add(tc._titleCtrl);
    container.controls.addRange(tc._labelControls);

    var majTickLeft = axisArea.w - tc._tick.length - this._axisLineStroke.lineWidth;

    if (tc._tickEnabled) {
      tc._labelControls.each(function (lb) {
        var y = lb.y(); // small correction
        if (lb.row != 0) majTickLeft = lb.x() + lb.width() + tc._GAP;
        var tick = new SRC.Shapes.Path([
          new SRC.Shapes.PathPoint(majTickLeft, y),
          new SRC.Shapes.PathPoint(axisArea.w, y),
        ]);

        tick.stroke(tc._tick.stroke);
        container.controls.add(tick);
      });
    }

    var axisLine = new SRC.Shapes.Path([
      new SRC.Shapes.PathPoint(axisArea.w, tc._yLRorTBPixGap),
      new SRC.Shapes.PathPoint(axisArea.w, axisArea.h),
    ]);

    axisLine.stroke(this._axisLineStroke);
    container.controls.add(axisLine);
  }

  /**
   * Its applicable for all Vertical or Horizontal charts
   * @param axisArea
   * @param container
   * @private
   */
  _renderVerticalSecondaryAxis(axisArea, container) {
    var tc = this;
    var axisLine = new SRC.Shapes.Path([
      new SRC.Shapes.PathPoint(0, tc._yLRorTBPixGap),
      new SRC.Shapes.PathPoint(0, axisArea.h),
    ]);

    axisLine.stroke(this._axisLineStroke);
    container.controls.add(axisLine);

    if (tc._tickEnabled) {
      tc._labelControls.each(function (lb) {
        var y = lb.y();
        var tick = new SRC.Shapes.Path([new SRC.Shapes.PathPoint(0, y), new SRC.Shapes.PathPoint(tc._tick.length, y)]);

        tick.stroke(tc._tick.stroke);
        container.controls.add(tick);
      });
    }

    container.controls.addRange(tc._labelControls);
    container.controls.add(tc._titleCtrl);
  }

  /**
   * Its applicable for all Vertical or Horizontal charts
   * @param axisArea
   * @param container
   * @private
   */
  _renderHorizontalPrimaryAxis(axisArea, container) {
    var tc = this;
    var axisLine = new SRC.Shapes.Path([
      new SRC.Shapes.PathPoint(0, 0),
      new SRC.Shapes.PathPoint(axisArea.w - this._yLRorTBPixGap, 0),
    ]);

    axisLine.stroke(this._axisLineStroke);
    container.controls.add(axisLine);

    let skipBy = this._autoSkip;
    let skip = 0;
    tc._labelControls.each(function (lb) {
      if (skip > 0) {
        skip--;
        return;
      }

      skip = skipBy;
      var x = lb.realX;

      if (tc._tickEnabled) {
        var tick = new SRC.Shapes.Path([new SRC.Shapes.PathPoint(x, 0), new SRC.Shapes.PathPoint(x, tc._tick.length)]);

        tick.stroke(tc._tick.stroke);
        container.controls.add(tick);
      }

      container.controls.add(lb);
    });

    container.controls.add(tc._titleCtrl);
  }

  /**
   * Its applicable for all Vertical or Horizontal charts
   * @param axisArea
   * @param container
   * @private
   */
  _renderHorizontalSecondaryAxis(axisArea, container) {
    var tc = this;
    container.controls.addRange(tc._titleCtrl);
    container.controls.addRange(tc._labelControls);

    if (tc._tickEnabled) {
      tc._labelControls.each(function (lb) {
        var x = lb.realX;
        var tick = new SRC.Shapes.Path([new SRC.Shapes.PathPoint(x, 0), new SRC.Shapes.PathPoint(x, tc._tick.length)]);

        tick.stroke(tc._tick.stroke);
        container.controls.add(tick);
      });
    }

    var axisLine = new SRC.Shapes.Path([new SRC.Shapes.PathPoint(0, 0), new SRC.Shapes.PathPoint(axisArea.w, 0)]);

    axisLine.stroke(this._axisLineStroke);
    container.controls.add(axisLine);
  }

  _render(axisArea) {
    var tc = this;
    tc.x(axisArea.x);
    tc.y(axisArea.y);
    tc.width(axisArea.w);
    tc.height(axisArea.h);
    var container = new SRC.Controls.Canvas(axisArea.x, axisArea.y, axisArea.w, axisArea.h);
    //container.stroke(new SRC.Stroke(1, "red"));
    container.autoClip(false);

    switch (tc.chart._orientation) {
      case SRC.Orientation.Vertical:
        switch (this.direction) {
          case SRC.Chart.AxisDirection.YAXIS:
            // container.fill(new SRC.SolidColor(SR.getRandomColor()));
            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                tc._renderVerticalPrimaryAxis(axisArea, container);
                break;
              case SRC.Chart.AxisType.Secondary:
                tc._renderVerticalSecondaryAxis(axisArea, container);
                break;
            }
            break;
          case SRC.Chart.AxisDirection.XAXIS:
            //container.fill(new SRC.SolidColor(SR.getRandomColor()));

            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                tc._renderHorizontalPrimaryAxis(axisArea, container);
                break;
              case SRC.Chart.AxisType.Secondary:
                tc._renderHorizontalSecondaryAxis(axisArea, container);
                break;
            }
            break;
        }
        break;
      case SRC.Orientation.Horizontal:
        switch (this.direction) {
          case SRC.Chart.AxisDirection.YAXIS:
            // container.fill(new SRC.SolidColor(SR.getRandomColor()));
            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                tc._renderHorizontalPrimaryAxis(axisArea, container);
                break;
              case SRC.Chart.AxisType.Secondary:
                tc._renderHorizontalSecondaryAxis(axisArea, container);
                break;
            }
            break;
          case SRC.Chart.AxisDirection.XAXIS:
            // container.fill(new SRC.SolidColor(SR.getRandomColor()));

            switch (tc._axisType) {
              case SRC.Chart.AxisType.Primary:
                tc._renderVerticalPrimaryAxis(axisArea, container);
                break;
              case SRC.Chart.AxisType.Secondary:
                tc._renderVerticalSecondaryAxis(axisArea, container);
                break;
            }
            break;
        }
        break;
    }

    container.isVisible(this._visible);
    this.chart.chartArea.controls.add(container);
  }

  __calculateScale(min, max, valueMinDiff) {
    // Setup few defaults
    if (this._includeZero === null && this.direction === SRC.Chart.AxisDirection.YAXIS) {
      this._includeZero = true;
    }

    if (this._scaleType === SRC.Chart.ScaleType.DateTime) {
      if (SR.isDefined(this._interval) && SR.isDefined(this._intervalType)) {
        this._internalInterval = Axis.intervalType2Ms(this._intervalType, this._interval);
      } else {
        let aproxWidth = this.chart.width || this.chart._host.width() || 600; // Aprox width
        let maxNoOfLabel = aproxWidth /10;
        let diff = ((max - min) / aproxWidth) * (aproxWidth / maxNoOfLabel);

        if (diff > SR.ONE_YEAR_IN_MS) {
          this._intervalType = 'year';
          this._interval = 1;
          this._internalInterval = Axis.intervalType2Ms(this._intervalType, this._interval);
        } else if (diff > SR.ONE_MONTH_IN_MS) {
          this._intervalType = 'month';
          this._interval = diff / SR.ONE_MONTH_IN_MS;
          this._internalInterval = Axis.intervalType2Ms(this._intervalType, this._interval);
        } else if (diff > SR.ONE_DAY_IN_MS) {
          this._intervalType = 'day';
          this._interval = diff / SR.ONE_DAY_IN_MS;
          this._internalInterval = Axis.intervalType2Ms(this._intervalType, this._interval);
        } else if (diff > SR.ONE_HOUR_IN_MS) {
          this._intervalType = 'hour';
          this._interval = diff / SR.ONE_HOUR_IN_MS;
          this._internalInterval = Axis.intervalType2Ms(this._intervalType, this._interval);
        } else if (diff > SR.ONE_MINUTE_IN_MS) {
          this._intervalType = 'minute';
          this._interval = diff / SR.ONE_MINUTE_IN_MS;;
          this._internalInterval = Axis.intervalType2Ms(this._intervalType, this._interval);
        } else if (diff > SR.ONE_SECOND_IN_MS) {
          this._intervalType = 'second';
          this._interval = diff / SR.ONE_SECOND_IN_MS;
          this._internalInterval = Axis.intervalType2Ms(this._intervalType, this._interval);
        } else {
          this._internalInterval = valueMinDiff;
        }
      }
    } else {
      this._internalInterval = SR.isDefined(this._interval) ? this._interval : 10;
    }

    // End Setup few defaults
    if (isNaN(min) && isNaN(max)) {
      this._LR_or_TB_GappingEnabled = true;
      this._internalInterval = 1;
      this._calMin = min = 1;
      this._calMax = max = Object.keys(this._axisLabels).length;
      this._axisLabelsDic = {};
      var labels = {},
        idx = 1;

      for (var key in this._axisLabels) {
        labels[idx] = key;
        this._axisLabelsDic[key] = idx++;
      }
      this._axisLabels = labels;

      this._calTickSpace = 1;
      return;
    } else if (isNaN(min) && !isNaN(max)) {
      min = max - 10;
    } else if (isNaN(max) && !isNaN(min)) {
      max = min + 10;
    } else if (max === min) {
      //this._max += 10;
      //this._min -= 10;
      if (min > 0) {
        min = 0;
      } else {
        max = 0;
      }
    }

    if (this._scaleType === SRC.Chart.ScaleType.DateTime) {
      this._calMax = SR.isDefined(this._max) ? this._max : max;
      this._calMin = SR.isDefined(this._min) ? this._min : min;
      this._calTickSpace = this._internalInterval;
    } else {
      var cal = this._calculateRange(min, max, this._internalInterval);
      this._calMax = SR.isDefined(this._max) ? this._max : cal.max;
      this._calMin = SR.isDefined(this._min) ? this._min : cal.min;
      this._calTickSpace = cal.tickSpace;
    }
  }

  _calculateRange(minPoint, maxPoint, maxTicks) {
    if (this._includeZero && minPoint > 0) {
      minPoint = 0;
    }

    var range = this._niceNum(maxPoint - minPoint, false);
    var tickSpace = this._niceNum(range / (maxTicks - 1), true);

    var retVal = {
      min: Math.floor(minPoint / tickSpace) * tickSpace,
      max: Math.ceil(maxPoint / tickSpace) * tickSpace,
      tickSpace: tickSpace,
    };

    if (minPoint != 0 && minPoint <= retVal.min + tickSpace / 2) retVal.min = retVal.min - tickSpace;

    // this code is adding extra tick in x axis
    // if (maxPoint >= (retVal.max - tickSpace / 2))
    //     retVal.max = retVal.max + tickSpace;
    return retVal;
  }

  /**
   * Returns a "nice" number approximately equal to range Rounds
   * the number if round = true Takes the ceiling if round = false.
   *
   * @param range the data range
   * @param round whether to round the result
   * @return a "nice" number to be used for the data range
   */
  _niceNum(range, round) {
    var exponent;
    /** exponent of range */
    var fraction;
    /** fractional part of range */
    var niceFraction;
    /** nice, rounded fraction */

    exponent = Math.floor(SR.log10(range));
    fraction = range / Math.pow(10, exponent);

    if (round) {
      if (fraction < 1.5) niceFraction = 1;
      else if (fraction < 3) niceFraction = 2;
      else if (fraction < 7) niceFraction = 5;
      else niceFraction = 10;
    } else {
      if (fraction <= 1) niceFraction = 1;
      else if (fraction <= 2) niceFraction = 2;
      else if (fraction <= 5) niceFraction = 5;
      else niceFraction = 10;
    }

    return niceFraction * Math.pow(10, exponent);
  }
});

Axis.intervalType = {
    'Numeric': 'numeric',
    'Year': 'year',
    'Month': 'month',
    'Day': 'day',
    'Hour': 'hour',
    'Minute': 'minute',
    'Second': 'second',
    'Millisecond': 'millisecond'
}

Axis.intervalType2Ms = function (intervalType, interval) {
    switch (intervalType) {
        case Axis.intervalType.Numeric: return interval;
        case Axis.intervalType.Year: return interval * SR.ONE_YEAR_IN_MS;
        case Axis.intervalType.Month: return interval * SR.ONE_MONTH_IN_MS;
        case Axis.intervalType.Day: return interval * SR.ONE_DAY_IN_MS;
        case Axis.intervalType.Hour: return interval * SR.ONE_HOUR_IN_MS;
        case Axis.intervalType.Minute: return interval * SR.ONE_MINUTE_IN_MS;
        case Axis.intervalType.Second: return interval * SR.ONE_SECOND_IN_MS;
        case Axis.intervalType.Millisecond: return interval * 1;
    }
};
var Legend = Chart.Legend = class Legend {
    constructor(conf = {}) {
        this._title = conf.title;
        this._titleFont = conf.titleFont;
        this._background = SR.isString(conf.background) ? new SRC.SolidColor(conf.background) : conf.background;
        this._borderColor = conf.borderColor ? conf.borderColor : 'black';
        this._borderWidth = conf.borderWidth ? conf.borderWidth : 1;
        this._borderStyle = conf.borderStyle;
        this._cornerRadius = conf.cornerRadius;
        this._labelFont = conf.labelFont;
        this._marker = conf.marker;
        this._hAlign = conf.hAlign ? conf.hAlign : SRC.HALIGN.Center;
        this._vAlign = conf.vAlign ? conf.vAlign : SRC.VALIGN.Bottom;
        this._opacity = conf.opacity ? conf.opacity : 1;
        this._enabled = conf.enabled ? conf.enabled : true;
        this._margin = conf.margin;
    }

    title(val) {
        if (SR.isDefined(val)) {
            this._title = val;
        } else {
            return this._title;
        }
    }

    titleFont(val) {
        if (SR.isDefined(val)) {
            this._titleFont = val;
        } else {
            return this._titleFont;
        }
    }

    labelFont(val) {
        if (SR.isDefined(val)) {
            this._labelFont = val;
        } else {
            return this._labelFont;
        }
    }

    background(val) {
        if (SR.isDefined(val)) {
            this._background = val;
        } else {
            return this._background;
        }
    }

    borderColor(val) {
        if (SR.isDefined(val)) {
            this._borderColor = val;
        } else {
            return this._borderColor;
        }
    }

    borderWidth(val) {
        if (SR.isDefined(val)) {
            this._borderWidth = val;
        } else {
            return this._borderWidth;
        }
    }

    borderStyle(val) {
        if (SR.isDefined(val)) {
            this._borderStyle = val;
        } else {
            return this._borderStyle;
        }
    }

    cornerRadius(val) {
        if (SR.isDefined(val)) {
            this._cornerRadius = val;
        } else {
            return this._cornerRadius;
        }
    }

    marker(val) {
        if (SR.isDefined(val)) {
            this._marker = val;
        } else {
            return this._marker;
        }
    }

    render(chart, charAreaBound) {
        var items = this.generateLegenedItems(chart);
        var legendParentSP = new SRC.Controls.StackPanel(0, 0);
        // sp1.stroke(new SJ.Stroke(1, "black"));
        // sp1.fill(new SJ.SolidColor("yellow"));
        legendParentSP.cellPadding(5);
        legendParentSP.maxWidth(charAreaBound.w);
        legendParentSP.hAlign(this._hAlign);
        legendParentSP.vAlign(this._vAlign);

        // Set orientation of Legend
        switch (this._vAlign) {
            case SRC.VALIGN.Top:
                switch (this._hAlign) {
                    case SRC.HALIGN.Left:
                        legendParentSP.orientation(SRC.Orientation.Vertical);
                        this._margin = this._margin ? this._margin : [5, 5, 5, 5];
                        break;
                    case SRC.HALIGN.Right:
                        legendParentSP.orientation(SRC.Orientation.Vertical);
                        this._margin = this._margin ? this._margin : [5, 5, 5, 5];
                        break;
                    case SRC.HALIGN.Center:
                    case SRC.HALIGN.Stretch:
                        legendParentSP.orientation(SRC.Orientation.Horizontal);
                        this._margin = this._margin ? this._margin : [5, 0, 5, 5];
                }

                break;
            case SRC.VALIGN.Bottom:
                switch (this._hAlign) {
                    case SRC.HALIGN.Left:
                        legendParentSP.orientation(SRC.Orientation.Vertical);
                        this._margin = this._margin ? this._margin : [5, 5, 5, 5];
                        break;
                    case SRC.HALIGN.Right:
                        legendParentSP.orientation(SRC.Orientation.Vertical);
                        this._margin = this._margin ? this._margin : [5, 5, 5, 5];
                        break;
                    case SRC.HALIGN.Center:
                    case SRC.HALIGN.Stretch:
                        legendParentSP.orientation(SRC.Orientation.Horizontal);
                        this._margin = this._margin ? this._margin : [0, 2.5, 0, 0];
                }

                break;
            case SRC.VALIGN.Center:
            case SRC.VALIGN.Stretch:
                switch (this._hAlign) {
                    case SRC.HALIGN.Left:
                        legendParentSP.orientation(SRC.Orientation.Vertical);
                        this._margin = this._margin ? this._margin : [5, 0, 5, 5];
                        break;
                    case SRC.HALIGN.Right:
                        legendParentSP.orientation(SRC.Orientation.Vertical);
                        this._margin = this._margin ? this._margin : [5, 0, 5, 5];
                        break;
                    case SRC.HALIGN.Center:
                    case SRC.HALIGN.Stretch:
                        legendParentSP.orientation(SRC.Orientation.Horizontal);
                        this._margin = this._margin ? this._margin : [5, 5, 5, 5];
                }
        }

        legendParentSP.fill(this._background);
        legendParentSP.cornerRadius(this._cornerRadius);
        legendParentSP.opacity(this._opacity);
        legendParentSP.stroke(new SRC.Stroke(this._borderWidth, this._borderColor));
        legendParentSP.margin(this._margin);

        legendParentSP.controls.addRange(items);

        return legendParentSP;
    }

    /**
     * esetAndRepositionParentSize
     * @param {*} chartAreaBound 
     */
    resetAndRepositionParentSize(chartAreaBound, legendVisual) {
        // Set orientation of Legend
        let wMargin =  this._margin[0] + this._margin[2];
        let hMargin = this._margin[1] + this._margin[3];
        let widthWithMargin = legendVisual.width() + wMargin;
        let heightWithMargin = legendVisual.height() + hMargin;

        switch (this._vAlign) {
            case SRC.VALIGN.Top:
                switch (this._hAlign) {
                    case SRC.HALIGN.Left:
                        chartAreaBound.w -= widthWithMargin;
                        chartAreaBound.x += widthWithMargin;
                        break;
                    case SRC.HALIGN.Right:
                        chartAreaBound.w -= widthWithMargin;
                        break;
                    case SRC.HALIGN.Center:
                    case SRC.HALIGN.Stretch:
                        chartAreaBound.h -= heightWithMargin;
                        chartAreaBound.y += heightWithMargin;
                        break;
                }
                break;
            case SRC.VALIGN.Bottom:
                switch (this._hAlign) {
                    case SRC.HALIGN.Left:
                        chartAreaBound.w -= widthWithMargin;
                        chartAreaBound.x += widthWithMargin;
                        break;
                    case SRC.HALIGN.Right:
                        chartAreaBound.w -= widthWithMargin;
                        break;
                    case SRC.HALIGN.Center:
                    case SRC.HALIGN.Stretch:
                        chartAreaBound.h -= heightWithMargin;
                        break;
                }

                break;
            case SRC.VALIGN.Center:
            case SRC.VALIGN.Stretch:
                switch (this._hAlign) {
                    case SRC.HALIGN.Left:
                        chartAreaBound.w -= widthWithMargin;
                        chartAreaBound.x += widthWithMargin;
                        break;
                    case SRC.HALIGN.Right:
                        chartAreaBound.w -= widthWithMargin;
                        break;
                    case SRC.HALIGN.Center:
                    case SRC.HALIGN.Stretch:
                        break;
                }
        }
    }

    /**
     * @description Loop here on all DataSeries and DP if show in Legend is true
     * @param {*} chart 
     */
    generateLegenedItems(chart) {
        let self = this;
        let lagendMarkerStyle = Object.assign({}, Marker.DEFAULT_LEGEND_MARKER_SETTINGS);
        lagendMarkerStyle = Object.assign(lagendMarkerStyle, self.legendItem ? self.legendItem.marker : {});

        // Render title first then render entries below
        // var label = new SRC.Controls.TextBlock(0, 0, labelText, labelFont);
        // label.measure(host);
        let singleDs = (chart.series.length === 1);
        let entries = chart.series.selectMulti((ds) => {
            let retItems = [];
            let showInLegend = chart.getDpDsProperty('showInLegend', ds);
            
            if (!showInLegend) return retItems;

            switch (ds._plotAs) {
                case Chart.PlotAs.Column:
                case Chart.PlotAs.Bar:
                    if (singleDs) {
                        self._addDataPointsAsEntries(retItems, chart, ds, lagendMarkerStyle);
                    } else {
                        self._addDsAsEntries(retItems, chart, ds, lagendMarkerStyle);
                    }
                    break;
                case Chart.PlotAs.Doughnut:
                case Chart.PlotAs.Pie:
                    self._addDataPointsAsEntries(retItems, chart, ds, lagendMarkerStyle);
                    break;
                default:
                    self._addDsAsEntries(retItems, chart, ds, lagendMarkerStyle);
            }

            return retItems;
        });

        return entries;
    }

    /**
     * @description Generate many entries for all the DataPoints under a DataSeries here
     * @param {*} retItems
     * @param {*} chart 
     * @param {*} ds 
     * @param {*} lagendMarkerStyle 
     */
    _addDataPointsAsEntries(retItems, chart, ds, lagendMarkerStyle) {
        // Expecting show in legened is true for this Ds
        for (let dpIdx = 0; dpIdx < ds._points.length; dpIdx++) {
            let dp = ds._points[dpIdx];
            let dsMarkerStyle = ds.legendItem ? ds.legendItem.marker : {};

            if (!SR.isDefined(dp._showInLegend) || dp._showInLegend) {
                let text = dp._legendText || dp.xLabel;
                let dpMarkerStyle = dp.legendItem ? dp.legendItem.marker : {};

                let markerStyle = Object.assign(Object.assign(Object.assign({}, lagendMarkerStyle), dsMarkerStyle), dpMarkerStyle);
                markerStyle.fill = chart._getDpColor(ds, dp, dpIdx);
                retItems.push(Marker._getALegendEntry(chart._host, markerStyle, text, self._labelFont));
            }
        }
    }

    /**
     * @description Generate an entry only for the DataSeries here
     * @param {*} retItems
     * @param {*} chart 
     * @param {*} ds 
     * @param {*} lagendMarkerStyle 
     */
    _addDsAsEntries(retItems, chart, ds, lagendMarkerStyle) {
        // Expecting show in legened is true for this Ds
        let text = ds._legendText || ds._name;
        let dsMarkerStyle = ds.legendItem ? ds.legendItem.marker : {};
        let markerStyle = Object.assign(Object.assign({}, lagendMarkerStyle), dsMarkerStyle);
        markerStyle.fill = chart._getDsColor(ds);
        retItems.push(Marker._getALegendEntry(chart._host, markerStyle, text, self._labelFont));
    }
}
var DataSeries = SRC.Chart.DataSeries = class DataSeries {
    constructor(idx, data, chart) {
        this._idx = idx;
        this.chart = chart;
        this._name = "Series" + idx;
        for (var key in data) {
            if (data.hasOwnProperty(key))
                this['_' + key] = data[key];
        }
    }

    set(property, val) {
        this[property].apply(this, [val]);
    }

    updateDataPoint(index, property, value, autoRender) {
        this._points[index][property] = value;
        if (autoRender) this.chart.render();

        // switch (property) {
        //     case 'yValue':
        //         if (value <= this.yAxis._calMax && value >= this.yAxis._calMin) {
        //             this.chart.plotArea._redraw();
        //         }
        //         return;

        // }
    }

    getMinMaxXValue(returnAsArray = true) {
        let points = this._points;
        let min = points[0].xValue;
        let max = points[0].xValue;
        let minDiff = Number.MAX_VALUE;
        let preVal = points[0].xValue;

        for (let i = 1; i < points.length; i++) {
            let val = points[i].xValue;
            if (val >= max) {
                max = val;
            } else if (val < min) {
                min = val;
            }

            let diff = Math.abs(val - preVal);
            preVal = val;

            minDiff = (diff < preVal) ? diff : minDiff;
        }

        return returnAsArray ? { minMax: [min, max], minDiff } : { min, max, minDiff };
    }

    getMinMaxYValue(returnAsArray = true) {
        let points = this._points;
        let min = points[0].yValue;
        let max = points[0].yValue;

        for (let i = 1; i < points.length; i++) {
            let val = points[i].yValue;
            if (val >= max) {
                max = val;
            } else if (val < min) {
                min = val;
            }
        }
        return returnAsArray ? [min, max] : { min, max };
    }

    getMinMaxYValues(returnAsArray = true) {
        let points = this._points;
        let min = Math.min.apply(this, points[0].yValue);
        let max = Math.max.apply(this, points[0].yValue);

        for (let i = 1; i < points.length; i++) {
            let val = points[i].yValue;
            if (val >= max) {
                max = val;
            } else if (val < min) {
                min = val;
            }
        }
        return returnAsArray ? [min, max] : { min, max };
    }

    getMinMaxZValue(returnAsArray = true) {
        let points = this._points;
        let min = points[0].zValue;
        let max = points[0].zValue;

        for (let i = 1; i < points.length; i++) {
            let val = points[i].zValue;
            if (val >= max) {
                max = val;
            } else if (val < min) {
                min = val;
            }
        }
        return returnAsArray ? [min, max] : { min, max };
    }

    _highLightDp(dp) {
        
    }

    formatYValue(yValue, yAxis) {
        if (this._yVvalueFormatFunc) {
            return this._yVvalueFormatFunc(this, yValue);
        } else if (yAxis && yAxis._valueFormatFunc) {
            yValue = yAxis._valueFormatFunc(this, yValue);
        }

        yValue = SR.Algorithm.formatValue(yValue,
            this._yValueFormat || ((yAxis && yAxis._valueFormat) ? yAxis._valueFormat : undefined),
            this._yValueFormatRange || ((yAxis && yAxis._valueFormatRange) ? yAxis._valueFormatRange : undefined));

        return yValue;
    }

    formatXValue(xValue, xAxis) {
        if (this._xVvalueFormatFunc) {
            return this._xVvalueFormatFunc(this, xValue);
        } else if (xAxis && xAxis._valueFormatFunc) {
            xValue = xAxis._valueFormatFunc(this, xValue);
        }

        xValue = SR.Algorithm.formatValue(xValue,
            this._xValueFormat || ((xAxis && xAxis._valueFormat) ? xAxis._valueFormat : undefined),
            this._xValueFormatRange || ((xAxis && xAxis._valueFormatRange) ? xAxis._valueFormatRange : undefined));

        return xValue;
    }

    tooltipText(valueObject, dp, dpPreference) {
        let txt = dp.tooltipText  || this._tooltipText;
        if (txt) {
            txt = SR.String.format(txt, valueObject);
        } else {
            txt = `<b><span style="color:${valueObject.color};">${dpPreference ? valueObject.xLabel : valueObject.name}:</span></b> ${valueObject.yValue}`;
        }

        switch (this._tooltipPointShape || this.chart._tooltip.pointShape) {
            case 'square':
                txt = `${SR.CSS_LIB.square(9, 9, valueObject.color)}&nbsp;&nbsp` + txt;
                break;
            case 'triangle':
                txt = `${SR.CSS_LIB.triangleUp(5, valueObject.color)}&nbsp;&nbsp` + txt;
                break;
            case 'circle':
                txt = `${SR.CSS_LIB.circle(10, 10, valueObject.color)}&nbsp;&nbsp` + txt;
                break;
            case 'none':
            default:
        }

        return txt;
    }

    points(val) {
        var tc = this;
        if (SR.isDefined(val)) {
            this._points = val;
            this._points.set = function (dpOrIndex, property, value) {
                if (SR.isObject(dpOrIndex))
                    dpOrIndex[property] = value;
                else
                    tc._points[dpOrIndex][property] = value;
            };
        } else {
            return this._points;
        }
    }

    name(val) {
        if (SR.isDefined(val)) {
            this._name = val;
        } else {
            return this._name;
        }
    }

    plotAs(val) {
        if (SR.isDefined(val)) {
            this._plotAs = val;
        } else {
            return this._plotAs;
        }
    }

    axisXId(val) {
        if (SR.isDefined(val)) {
            this._axisXId = val;
        } else {
            return this._axisXId;
        }
    }

    axisYId(val) {
        if (SR.isDefined(val)) {
            this._axisYId = val;
        } else {
            return this._axisYId;
        }
    }

    startAngle(val) {
        if (SR.isDefined(val)) {
            this._startAngle = val;
        } else {
            return this._startAngle;
        }
    }

    label(val) {
        if (SR.isDefined(val)) {
            this._label = val;
        } else {
            return this._label;
        }
    }

    color(val) {
        if (SR.isDefined(val)) {
            this._color = val;
        } else {
            return this._color;
        }
    }

    colorPalette(val) {
        if (SR.isDefined(val)) {
            this._colorPalette = val;
        } else {
            return this._colorPalette;
        }
    }

    border(val) {
        if (SR.isDefined(val)) {
            this._border = val;
        } else {
            return this._border;
        }
    }

    labelText(dp) {
        return SR.String.format(dp.label ? dp.label : (this._label ? this._label : '{yValue}'), {
            yValue: this.formatYValue(dp.yValue, this.yAxis),
            name: this.name(),
            xLabel: dp.xLabel
        });
    }

    labelFont(val) {
        if (SR.isDefined(val)) {
            this._labelFont = val;
        } else {
            return this._labelFont;
        }
    }

    bevel(val) {
        if (SR.isDefined(val)) {
            this._bevel = val;
        } else {
            return this._bevel;
        }
    }

    shadow(val) {
        if (SR.isDefined(val)) {
            this._shadow = val;
        } else {
            return this._shadow;
        }
    }

    cornerRadius(val) {
        if (SR.isDefined(val)) {
            this._cornerRadius = val;
        } else {
            return this._cornerRadius;
        }
    }

    cursor(val) {
        if (SR.isDefined(val)) {
            this._cursor = val;
        } else {
            return this._cursor;
        }
    }

    zIndex(val) {
        if (SR.isDefined(val)) {
            this._zIndex = val;
        } else {
            return this._zIndex;
        }
    }

    lineWidth(val) {
        if (SR.isDefined(val)) {
            this._lineWidth = val;
        } else {
            return this._lineWidth;
        }
    }

    lineStyle(val) {
        if (SR.isDefined(val)) {
            this._lineStyle = val;
        } else {
            return this._lineStyle;
        }
    }

    lineColor(val) {
        if (SR.isDefined(val)) {
            this._lineColor = val;
        } else {
            return this._lineColor;
        }
    }

    labelLineThickness(val) {
        if (SR.isDefined(val)) {
            this._labelLineThickness = val;
        } else {
            return this._labelLineThickness;
        }
    }

    labelLineStyle(val) {
        if (SR.isDefined(val)) {
            this._labelLineStyle = val;
        } else {
            return this._labelLineStyle;
        }
    }

    labelLineColor(val) {
        if (SR.isDefined(val)) {
            this._labelLineColor = val;
        } else {
            return this._labelLineColor;
        }
    }

    marker(val) {
        if (SR.isDefined(val)) {
            this._marker = val;
        } else {
            return this._marker;
        }
    }

    includeInLegend(val) {
        if (SR.isDefined(val)) {
            this._includeInLegend = val;
        } else {
            return this._includeInLegend;
        }
    }

    includeDataPointsInLegend(val) {
        if (SR.isDefined(val)) {
            this._includeDataPointsInLegend = val;
        } else {
            return this._includeDataPointsInLegend;
        }
    }

    legendText(val) {
        if (SR.isDefined(val)) {
            this._legendText = val;
        } else {
            return this._legendText;
        }
    }

    legendMarker(val) {
        if (SR.isDefined(val)) {
            this._legendMarker = val;
        } else {
            return this._legendMarker;
        }
    }
};
SRC.Chart.Drawings = {

};

SRC.Chart.Drawings.column = function (x, y, w, h, fill, isBevel) {
    var inputColor = "#009966";
    if (fill instanceof SRC.SolidColor)
        inputColor = fill.color;
    else if (SR.isString(fill))
        inputColor = fill;
    //inputColor = SRC.Graphics.RGB2Hex(SRC.Graphics.getDarkerColor(inputColor, 0.8));
    var can2 = new SRC.Controls.Canvas(x, y, w, h);
    // can2.cornerRadius([14, 14, 14, 14]);
    can2.fill(new SRC.SolidColor(inputColor));

    if (isBevel) {
        var bevelSize = 7, bCorner = 7;
        var topPath = new SRC.Shapes.Path([
            { x: 0, y: 0 },
            { x: w, y: 0 },
            { x: w - bCorner, y: bevelSize },
            { x: bCorner, y: bevelSize }
        ]);

        topPath.closed(true);
        topPath.fill(SRC.Graphics.GetBevelTopBrush(inputColor, 0, 0, 0, bevelSize));
        topPath.stroke(null);
        //      topPath.shadow(SRC.Shadow.Default);
        can2.controls.add(topPath);
    }

    return can2;
};

/**
 * Not in use use Marker class
 */
SRC.Chart.Drawings.marker = function (style, x, y, w, h, isBevel) {
    var wBy2 = w / 2, hBy2 = h / 2;

    var item;
    switch (style.type) {

        case SRC.Chart.MarkerType.Square:
            item = new SRC.Shapes.Path([
                { x: x - wBy2, y: y - hBy2 },
                { x: x + wBy2, y: y - hBy2 },
                { x: x + wBy2, y: y + hBy2 },
                { x: x - wBy2, y: y + hBy2 }
            ]);

            item.closed(true);
            if (style.fill) item.fill(style.fill);
            break;
        case SRC.Chart.MarkerType.Triangle:
            item = new SRC.Shapes.Path([
                { x: x - wBy2, y: y + hBy2 },
                { x, y: y - hBy2 },
                { x: x + wBy2, y: y + hBy2 }
            ]);

            item.closed(true);
            if (style.fill) item.fill(style.fill);
            break;
        case SRC.Chart.MarkerType.Star:
            item = new SRC.Shapes.Path([
                { x: x - wBy2, y: y + hBy2 },
                { x, y: y - hBy2 },
                { x: x + wBy2, y: y + hBy2 },
                { x: x - wBy2, y },
                { x: x + wBy2, y }
            ]);

            item.closed(true);
            if (style.fill) item.fill(style.fill);
            break;
        case SRC.Chart.MarkerType.Cross:
            item = new SRC.Shapes.Path([
                { x: x - wBy2, y: y - hBy2 },
                { x: x + wBy2, y: y + hBy2 },
                { x, y },
                { x: x + wBy2, y: y - hBy2 },
                { x: x - wBy2, y: y + hBy2 }
            ]);

            item.closed(false);
            break;
        case SRC.Chart.MarkerType.Plus:
            item = new SRC.Shapes.Path([
                { x: x - wBy2, y },
                { x: x + wBy2, y },
                { x, y },
                { x, y: y - hBy2 },
                { x, y: y + hBy2 }
            ]);

            item.closed(false);
            break;
        case SRC.Chart.MarkerType.Circle:
        default:
            item = new SRC.Shapes.Circle(x, y, wBy2);
            if (style.fill) item.fill(style.fill);
            break;
    }

    if (style.stroke) item.stroke(style.stroke);
    if (style.shadow) item.shadow(SRC.Shadow.Default);

    return item;
};

SRC.Chart.PieSegment = class PieSegment extends SRC.Controls.Visual {
    constructor(settings) {
        super();
        if (settings) {
            this._center = settings.center;
            this._endAngle = settings.endAngle;
            this._startAngle = settings.startAngle;
            this._radius = settings.radius;
            this._isOpen = settings.isOpen;
        }
    }

    centerAngle() {
        return this._endAngle + (this._endAngle - this._startAngle) / 2;
    }

    center2OffsetPoint(offset) {
        let angle = this._startAngle + (this._endAngle - this._startAngle) / 2;
        return {
            y: this._center.y + offset * Math.sin(angle),
            x: this._center.x + offset * Math.cos(angle)
        };
    }

    isOpen(val) {
        if (SR.isDefined(val)) {
            this._isOpen = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._isOpen;
        }
    }

    center(val) {
        if (SR.isDefined(val)) {
            this._center = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._center;
        }
    }

    radius(val) {
        if (SR.isDefined(val)) {
            this._radius = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._radius;
        }
    }

    startAngle(val) {
        if (SR.isDefined(val)) {
            this._startAngle = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._startAngle;
        }
    }

    endAngle(val) {
        if (SR.isDefined(val)) {
            this._endAngle = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._endAngle;
        }
    }

    draw(host) {
        if (host === null || !this.isVisible())
            return;

        host.context.save();
        host.context.globalAlpha = this._opacity;

        if (this._fill || this._stroke)
            SRC.Drawings._drawPieSegment(host, this, this._center, this._radius, this._startAngle, this._endAngle);

        host.context.restore();
    }

    /**
     * @param point
     * @returns {boolean}
     * @private
     * @overridden
     */
    _v_isPointInside(point) {
        var center = this.actualPoint(this._center);

        var A = Math.atan2(point.y - center.y, point.x - center.x);
        var distance = SR.distance(point, center);

        // Convert -ve angle to positive
        if (A < 0) {
            A = Math.PI + Math.PI + A;
        }

        if (distance < this._radius) {
            if (this._startAngle < this._endAngle) {
                if (this._startAngle < A && A < this._endAngle) {
                    return true;
                }
            } else {
                if (A > this._startAngle || A < this._endAngle) {
                    return true;
                }
            }
        }

        return false;
    }
};
SRC.Chart.DoughnutSegment = class DoughnutSegment extends SRC.Chart.PieSegment {
    constructor(settings) {
        super(settings);
        this._innerRadius = settings ? settings.innerRadius : 10;
    }

    innerRadius(val) {
        if (SR.isDefined(val)) {
            this._innerRadius = val;
            if (this.parent)
                this._reDraw();
        } else {
            return this._innerRadius;
        }
    }

    draw(host) {
        if (host === null || !this.isVisible())
            return;

        host.context.save();
        host.context.globalAlpha = this._opacity;

        if (this._fill || this._stroke)
            SRC.Drawings._drawDoughnutSegment(host, this, this._center, this._innerRadius, this._radius, this._startAngle, this._endAngle);

        host.context.restore();
    }

    /**
     * @param point
     * @returns {boolean}
     * @private
     * @overridden
     */
    _v_isPointInside(point) {
        var center = this.actualPoint(this._center);

        var A = Math.atan2(point.y - center.y, point.x - center.x);
        var distance = SR.distance(point, center);

        // Convert -ve angle to positive
        if (A < 0) {
            A = Math.PI + Math.PI + A;
        }

        if (distance >= this._innerRadius && distance <= this._radius) {
            if (this._startAngle < this._endAngle) {
                if (this._startAngle < A && A < this._endAngle) {
                    return true;
                }
            } else {
                if (A > this._startAngle || A < this._endAngle) {
                    return true;
                }
            }
        }

        return false;
    }
};
window.SilverJs = SRC;
})();
