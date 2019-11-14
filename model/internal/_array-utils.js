/**
* DevExpress Dashboard (_array-utils.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = require("../../data/_utils");
function arrayEquals(array1, array2) {
    return _utils_1.arrayEquals(array1, array2);
}
exports.arrayEquals = arrayEquals;
function arrayInsert(a, insertion, position) {
    return a.slice(0, position).concat(insertion, a.slice(position, a.length));
}
exports.arrayInsert = arrayInsert;
function areArraysEqual(arr1, arr2) {
    if (arr1 === void 0) { arr1 = []; }
    if (arr2 === void 0) { arr2 = []; }
    return arr1.length === arr2.length && arr1.every(function (val, index) { return val === arr2[index]; });
}
exports.areArraysEqual = areArraysEqual;
function compareArrays(array1, array2, predicate) {
    if (predicate === void 0) { predicate = function (a, b) { return a === b; }; }
    if (array1.length !== array2.length)
        return false;
    for (var i = 0; i < array1.length; i++) {
        if (!predicate(array1[i], array2[i]))
            return false;
    }
    return true;
}
exports.compareArrays = compareArrays;
;
function compareNotOrderedArrays(array1, array2, predicate) {
    if (predicate === void 0) { predicate = function (a, b) { return a === b; }; }
    if (array1.length !== array2.length)
        return false;
    for (var i = 0; i < array1.length; i++) {
        if (!array2.some(function (array) { return predicate(array1[i], array); }))
            return false;
    }
    return true;
}
exports.compareNotOrderedArrays = compareNotOrderedArrays;
;
