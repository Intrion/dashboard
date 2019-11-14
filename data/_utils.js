/**
* DevExpress Dashboard (_utils.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var special_values_1 = require("./special-values");
var $ = require("jquery");
var data_1 = require("devextreme/core/utils/data");
var config_1 = require("devextreme/core/config");
exports.type = {
    isDefined: function (object) {
        return null !== object && void 0 !== object;
    },
    isFunction: function (object) {
        return "function" === typeof object;
    },
    isString: function (object) {
        return "string" === typeof object;
    },
    isNumeric: function (object) {
        return "number" === typeof object && isFinite(object) || !isNaN(object - parseFloat(object));
    },
    isBoolean: function (object) {
        return "boolean" === typeof object;
    }
};
exports.KpiValueMode = {
    Measure: 'Measure',
    Delta: 'Delta'
}, exports.pivotArea = {
    column: 'column',
    row: 'row',
    data: 'data'
}, exports.gaugeViewType = {
    CircularFull: 'CircularFull',
    CircularHalf: 'CircularHalf',
    CircularQuarterRight: 'CircularQuarterRight',
    CircularQuarterLeft: 'CircularQuarterLeft',
    CircularThreeFourth: 'CircularThreeFourth',
    LinearHorizontal: 'LinearHorizontal',
    LinearVertical: 'LinearVertical'
}, exports.tooltipContainerSelector = '.dx-dashboard-container';
function toColor(numericColorValue) {
    var number = numericColorValue >>> 0;
    var b = number & 0xFF, g = (number & 0xFF00) >>> 8, r = (number & 0xFF0000) >>> 16, a = ((number & 0xFF000000) >>> 24) / 255;
    return this.getRGBColor(r, g, b, a);
}
exports.toColor = toColor;
;
function getRGBColor(r, g, b, a) {
    if (a && a < 1)
        return "rgba(" + [r, g, b, a].join(",") + ")";
    return "rgb(" + [r, g, b].join(",") + ")";
}
exports.getRGBColor = getRGBColor;
function allowSelectValue(values) {
    var result = true;
    if (values) {
        $.each(values, function (_, value) {
            result = result && (value !== special_values_1.specialValues.othersValueGuid) &&
                (value !== special_values_1.specialValues.errorValueGuid);
        });
    }
    return result;
}
exports.allowSelectValue = allowSelectValue;
function isVulnerable(value) {
    if (!value)
        return false;
    var re = new RegExp('^\s*(data|javascript)\s*:\s*');
    return !!value.match(re);
}
exports.isVulnerable = isVulnerable;
function encodeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
exports.encodeHtml = encodeHtml;
function decodeHtml(value) {
    return String(value)
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}
exports.decodeHtml = decodeHtml;
function moveContent(source, dest, clearSource) {
    $(source).contents().appendTo($(dest));
    if (clearSource) {
        source.innerHTML = '';
    }
}
exports.moveContent = moveContent;
function arrayContains(container, part) {
    var currentValueIndex = -1;
    if (!!container) {
        $.each(container, function (index, item) {
            if (arrayEquals(part, item)) {
                currentValueIndex = index;
                return false;
            }
        });
    }
    return currentValueIndex >= 0;
}
exports.arrayContains = arrayContains;
function arrayEquals(array1, array2) {
    if (!array1 && !array2)
        return true;
    if (!array1 || !array2)
        return false;
    if (Array.isArray(array1)) {
        if (array1.length !== array2.length)
            return false;
        for (var key in array1) {
            if (!arrayEquals(array1[key], array2[key]))
                return false;
        }
    }
    else {
        return data_1.toComparable(array1, true) === data_1.toComparable(array2, true);
    }
    return true;
}
exports.arrayEquals = arrayEquals;
function checkValuesAreEqual(value1, value2) {
    if (value1 == null || value2 == null) {
        return false;
    }
    var list1 = Array.isArray(value1) ? value1 : [value1], list2 = Array.isArray(value2) ? value2 : [value2];
    if (list1.length !== list2.length || list1.length === 0) {
        return false;
    }
    else {
        for (var i = 0; i < list1.length; i++) {
            if (data_1.toComparable(list1[i], true) !== data_1.toComparable(list2[i], true))
                return false;
        }
        return true;
    }
}
exports.checkValuesAreEqual = checkValuesAreEqual;
function checkTuplesAreEqual(tuple1, tuple2) {
    if (!tuple1 || !tuple2) {
        return false;
    }
    var containsCount = 0;
    $.each(tuple1, function (_, tuple1AxisValue) {
        var value = $.grep(tuple2, function (tuple2AxisValue) {
            return tuple2AxisValue.AxisName == tuple1AxisValue.AxisName;
        })[0].Value;
        if (checkValuesAreEqual(tuple1AxisValue.Value, value)) {
            containsCount = containsCount + 1;
        }
    });
    return containsCount == tuple1.length;
}
exports.checkTuplesAreEqual = checkTuplesAreEqual;
function checkArrayContainsTuple(array, tuple) {
    var that = this, contains, currentIndex;
    $.each(array, function (index, aTuple) {
        contains = that.checkTuplesAreEqual(aTuple, tuple);
        if (contains)
            currentIndex = index;
        return !contains;
    });
    return currentIndex;
}
exports.checkArrayContainsTuple = checkArrayContainsTuple;
function getAxisPointValue(tuple, axisName) {
    var axisPoints = $.grep(tuple, function (axisValue) {
        return axisValue.AxisName == axisName;
    });
    return axisPoints.length > 0 ? axisPoints[0].Value : null;
}
exports.getAxisPointValue = getAxisPointValue;
function getTagValue(tag) {
    var axisPoint = tag.axisPoint;
    return axisPoint ? axisPoint.getUniquePath() : tag;
}
exports.getTagValue = getTagValue;
function getValueIndex(matrix, vector) {
    if (matrix && vector) {
        for (var i = 0; i < matrix.length; i++) {
            if (this.checkValuesAreEqual(matrix[i], vector)) {
                return i;
            }
        }
    }
    return -1;
}
exports.getValueIndex = getValueIndex;
function treeWalker(rootNode, childrenFunc) {
    return {
        walk: function (func) {
            this._walkInternal(rootNode, null, func, function () { return true; });
        },
        walkLeaf: function (func) {
            this._walkInternal(rootNode, null, func, function (node, parent, isLeaf) { return isLeaf; });
        },
        _walkInternal: function (node, parent, func, callPredicate) {
            var that = this, children = childrenFunc(node), isLeaf = !children || children.length === 0;
            if (callPredicate(node, parent, isLeaf)) {
                func(node, parent, isLeaf);
            }
            if (!isLeaf) {
                $.each(children, function (i, branch) {
                    that._walkInternal(branch, node, func, callPredicate);
                });
            }
        }
    };
}
exports.treeWalker = treeWalker;
function getParentClasses($obj) {
    var parents = [$obj.attr('class')];
    $.each($obj.parents(), function (_, parent) {
        var name = $(parent).attr('class');
        if (name)
            parents.push(name);
    });
    return parents.reverse();
}
exports.getParentClasses = getParentClasses;
function wrapHash(valuesArray) {
    var hash = {};
    if (valuesArray) {
        $.each(valuesArray, function (_, value) {
            hash[value] = true;
        });
    }
    return hash;
}
exports.wrapHash = wrapHash;
function areNotOrderedListsEqual(list1, list2) {
    if (list1.length != list2.length)
        return false;
    list1 = list1.slice();
    list2 = list2.slice();
    list1.sort();
    list2.sort();
    for (var i = 0; i < list1.length; i++) {
        if (list1[i] !== list2[i])
            return false;
    }
    return true;
}
exports.areNotOrderedListsEqual = areNotOrderedListsEqual;
function pxToNumber(px) {
    var result = 0;
    if (px != null && px != "") {
        try {
            var indexOfPx = px.indexOf("px");
            if (indexOfPx > -1)
                result = parseInt(px.substr(0, indexOfPx));
        }
        catch (e) { }
    }
    return result;
}
exports.pxToNumber = pxToNumber;
function debounce(func, wait) {
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var that = this;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            clearTimeout(timeout);
            timeout = null;
            func.apply(that, args);
        }, wait);
    };
}
exports.debounce = debounce;
;
exports.$unwrap = function (element) {
    if (element.jquery || element.dxRenderer) {
        return element[0];
    }
    else {
        return element;
    }
};
exports.$wrap = function (element) { return $(element); };
exports.wrapPublicElement = function (element) { return (config_1.default().useJQuery ? exports.$wrap(element) : element); };
exports.extend = function (target, source1) {
    var sources = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        sources[_i - 2] = arguments[_i];
    }
    return $.extend.apply($, [target, source1].concat(sources));
};
exports.deepExtend = function (target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    return $.extend.apply($, [true, target].concat(sources));
};
exports.isPlainObject = function (object) { return $.isPlainObject(object); };
var LocalStorageHelper = (function () {
    function LocalStorageHelper() {
    }
    LocalStorageHelper._getLocalStorage = function () {
        try {
            if (window.localStorage)
                return window.localStorage;
        }
        catch (_) { }
        return undefined;
    };
    LocalStorageHelper.getItem = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var localStorage = LocalStorageHelper._getLocalStorage();
        if (localStorage) {
            return localStorage.getItem(key);
        }
        return defaultValue;
    };
    LocalStorageHelper.setItem = function (key, value) {
        var localStorage = LocalStorageHelper._getLocalStorage();
        if (localStorage) {
            return localStorage.setItem(key, value);
        }
    };
    return LocalStorageHelper;
}());
exports.LocalStorageHelper = LocalStorageHelper;
