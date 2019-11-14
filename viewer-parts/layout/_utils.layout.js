/**
* DevExpress Dashboard (_utils.layout.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = require("../../data/_utils");
exports.size = function (w, h) {
    return {
        width: w,
        height: h,
        plus: function (arg) {
            var correctSize = function (value, addition) {
                return (Number.MAX_VALUE - value >= addition) ? value + addition : Number.MAX_VALUE;
            };
            return exports.size(correctSize(this.width, arg.width), correctSize(this.height, arg.height));
        },
        minus: function (arg) {
            return exports.size(this.width - arg.width, this.height - arg.height);
        },
        compareByDirections: function (size) {
            if (!size) {
                return ['width', 'height'];
            }
            else {
                var differentDirections = [];
                if (size.width != this.width)
                    differentDirections.push('width');
                if (size.height != this.height)
                    differentDirections.push('height');
                return differentDirections;
            }
        },
        constrain: function (constraints) {
            var that = this, ensureDirection = function (direction) {
                return exports.ensureRange(that[direction], constraints.min[direction], constraints.max[direction]);
            };
            return exports.size(ensureDirection('width'), ensureDirection('height'));
        },
        clone: function () {
            return exports.size(this.width, this.height);
        }
    };
};
exports.constraints = function (pMin, pMax) {
    return {
        min: pMin,
        max: pMax,
        consolidate: function (sourceConstraints, consolidateDirection) {
            return exports.constraints(this._consolidatePart(sourceConstraints, consolidateDirection, 'min'), this._consolidatePart(sourceConstraints, consolidateDirection, 'max'));
        },
        isFixed: function (direction) {
            if (direction) {
                var differentDirections = this.min.compareByDirections(this.max);
                return differentDirections.indexOf(direction) === -1;
            }
            else {
                return false;
            }
        },
        _consolidatePart: function (sourceConstraints, consolidateDirection, part) {
            var that = this, resultSize = exports.size(), direction = consolidateDirection ? consolidateDirection : 'width', crossDirection = exports.getCrossDirection(direction), consolidateSumFunc = function (currentDirection) {
                var val1 = that[part][currentDirection], val2 = sourceConstraints[part][currentDirection];
                return (val1 === Number.MAX_VALUE || val2 === Number.MAX_VALUE) ? Number.MAX_VALUE : (val1 + val2);
            }, consolidateMaxMinFunc = function (currentDirection, isCross) {
                var val1 = that[part][currentDirection], val2 = sourceConstraints[part][currentDirection];
                return (part === 'min' || isCross) ? Math.max(val1, val2) : Math.min(val1, val2);
            };
            resultSize[direction] = consolidateDirection ? consolidateSumFunc(direction) : consolidateMaxMinFunc(direction, false);
            resultSize[crossDirection] = consolidateMaxMinFunc(crossDirection, !!consolidateDirection);
            return resultSize;
        }
    };
};
exports.nonClientElement = function (width, height) {
    var resultSize = exports.size(width, height);
    return {
        getBounds: function () {
            return resultSize.clone();
        }
    };
};
exports.getCrossDirection = function (direction) {
    return direction === 'width' ? 'height' : 'width';
};
exports.defConstraints = function (valueMin, valueMax) {
    var paramValueMin = valueMin === undefined ? 0 : valueMin, paramValueMax = valueMax === undefined ? Number.MAX_VALUE : valueMax;
    return new this.constraints(new this.size(paramValueMin, paramValueMin), new this.size(paramValueMax, paramValueMax));
};
exports.defSizeInPercents = function (direction, value) {
    var size = new this.size(1, 1);
    size[direction] = value;
    return size;
};
exports.checkRange = function (value, min, max) {
    return min <= value && value <= max;
};
exports.ensureRange = function (value, min, max) {
    return Math.max(Math.min(value, max), min);
};
exports.deepCloneObject = function (injectObject, sourceObject, noDeepCopyPropsValues) {
    var copyObj = {};
    _utils_1.extend(copyObj, sourceObject);
    for (var prop in noDeepCopyPropsValues)
        delete copyObj[prop];
    _utils_1.deepExtend(injectObject, copyObj);
    _utils_1.extend(injectObject, noDeepCopyPropsValues);
    return injectObject;
};
