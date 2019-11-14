/**
* DevExpress Dashboard (_date-utils.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isoDataTimePattern = /^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d/;
function tryConvertToDateTime(value) {
    if (typeof (value) === 'string' && isoDataTimePattern.test(value)) {
        return toUtcDate(value);
    }
    return value;
}
exports.tryConvertToDateTime = tryConvertToDateTime;
function patchDateTime(storageDTO) {
    var _tryPatchDateTime = function (obj, property) {
        obj[property] = tryConvertToDateTime(obj[property]);
    };
    for (var sliceId in storageDTO.Slices) {
        var slice = storageDTO.Slices[sliceId];
        for (var keyIds in slice.Data) {
            var dataPoint = slice.Data[keyIds];
            for (var valueId in dataPoint) {
                _tryPatchDateTime(dataPoint, valueId);
            }
        }
    }
    for (var dataItemName in storageDTO.EncodeMaps) {
        var uniqueValues = storageDTO.EncodeMaps[dataItemName];
        var len = uniqueValues.length;
        if (len > 0) {
            for (var i = 0; i < len; i++) {
                _tryPatchDateTime(uniqueValues, i);
            }
        }
    }
}
exports.patchDateTime = patchDateTime;
function toStringArray(value) {
    if (!value) {
        return value;
    }
    ;
    if (Array.isArray(value)) {
        return value.map(function (v) { return toStringArray(v); });
    }
    else if (value instanceof Date) {
        return fromUtcDateToString(value);
    }
    else if (value instanceof Object) {
        for (var key in value) {
            value[key] = toStringArray(value[key]);
        }
    }
    return value;
}
exports.toStringArray = toStringArray;
function toUtcDate(value) {
    var hasDateZone = value[value.length - 3] == ":" && ["+", "-"].indexOf(value[value.length - 6]) !== -1;
    if (value[value.length - 1] !== 'Z' && !hasDateZone) {
        value += 'Z';
    }
    var date = new Date(value);
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
}
exports.toUtcDate = toUtcDate;
function fromUtcDateToString(date) {
    var toString = function (n, useThreeDigits) {
        if (useThreeDigits === void 0) { useThreeDigits = false; }
        var s = n.toString();
        if (useThreeDigits) {
            return s.length == 2 ? '0' + s : (s.length == 1 ? '00' + s : s);
        }
        else {
            return s.length == 1 ? '0' + s : s;
        }
    };
    return date.getFullYear() + '-' +
        toString(date.getMonth() + 1) + '-' +
        toString(date.getDate()) + 'T' +
        toString(date.getHours()) + ':' +
        toString(date.getMinutes()) + ':' +
        toString(date.getSeconds()) + '.' +
        toString(date.getMilliseconds(), true);
}
exports.fromUtcDateToString = fromUtcDateToString;
function serializeDate(date) {
    return date instanceof Date ? fromUtcDateToString(date) : String(date);
}
exports.serializeDate = serializeDate;
