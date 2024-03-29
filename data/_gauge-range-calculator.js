﻿/**
* DevExpress Dashboard (_gauge-range-calculator.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = require("./_utils");
var gaugeRangeCalculator = (function () {
    function gaugeRangeCalculator(options) {
        this._values = options.values;
        this._gaugeViewType = options.gaugeModel.Type;
        this._customMin = options.gaugeModel.MinValue;
        this._customMax = options.gaugeModel.MaxValue;
        this._minDefined = this._customMin != null;
        this._maxDefined = this._customMax != null;
        this._defineMinMaxTicks();
    }
    gaugeRangeCalculator.prototype.getGaugeRange = function () {
        this._defineMinMax();
        this._setRangeStart();
        this._extendRange();
        var left = Math.min(this._min, this._max), right = Math.max(this._min, this._max), rangeLength = right - left, scaleReversed = this._min > this._max, majorTickCount, minorTickCount, stepCount, step, delta, fit, currentStep, currentDelta, currentFit;
        if (rangeLength === 0) {
            majorTickCount = 1;
            minorTickCount = 0;
        }
        else {
            stepCount = this._minTickCount - 1;
            step = this._chooseMultiplier(rangeLength / stepCount);
            delta = step * stepCount - rangeLength;
            fit = this._isFit(left, right, step, stepCount);
            for (var i = stepCount + 1; i < this._maxTickCount; i++) {
                currentStep = this._chooseMultiplier(rangeLength / i);
                currentDelta = currentStep * i - rangeLength;
                currentFit = this._isFit(left, right, currentStep, i);
                if (currentFit && (currentDelta < delta || !fit)) {
                    delta = currentDelta;
                    step = currentStep;
                    fit = currentFit;
                    stepCount = i;
                }
            }
            left = this._getLeft(left, step);
            right = this._getRight(right, step);
            this._min = !scaleReversed ? left : right;
            this._max = !scaleReversed ? right : left;
            majorTickCount = stepCount + 1;
            if (step % 5 === 0)
                minorTickCount = 4;
            else if (step % 3 === 0)
                minorTickCount = 2;
            else
                minorTickCount = 3;
            return {
                minorTickCount: minorTickCount,
                majorTickCount: majorTickCount,
                min: this._min,
                max: this._max
            };
        }
    };
    gaugeRangeCalculator.prototype._getLeft = function (left, step) {
        var sign = left > 0 ? 1 : -1;
        if (this._equalSign && left > 0)
            return Math.floor(Math.abs(left) / step) * step * sign;
        else
            return Math.ceil(Math.abs(left) / step) * step * sign;
    };
    gaugeRangeCalculator.prototype._getRight = function (right, step) {
        var sign = right > 0 ? 1 : -1;
        if (this._equalSign && right < 0)
            return Math.floor(Math.abs(right) / step) * step * sign;
        else
            return Math.ceil(Math.abs(right) / step) * step * sign;
    };
    gaugeRangeCalculator.prototype._isFit = function (left, right, step, tickCount) {
        var leftAbs = Math.abs(left), rigthAbs = Math.abs(right), isFit = false;
        if (!this._signsEqual(left, right)) {
            isFit = (Math.ceil(leftAbs / step) + Math.ceil(rigthAbs / step)) <= tickCount;
        }
        else {
            var minAbs = Math.min(leftAbs, rigthAbs), maxAbs = Math.max(leftAbs, rigthAbs);
            isFit = Math.ceil(maxAbs / step) - Math.floor(minAbs / step) <= tickCount;
        }
        return isFit;
    };
    gaugeRangeCalculator.prototype._extendRange = function () {
        var that = this, extendMin = function (coef) {
            if (!that._minDefined)
                that._min *= coef;
        }, extendMax = function (coef) {
            if (!that._maxDefined)
                that._max *= coef;
        };
        if (this._equalSign) {
            if (Math.abs(this._min) < Math.abs(this._max)) {
                extendMin(0.95);
                extendMax(1.05);
            }
            else {
                extendMin(1.05);
                extendMax(0.95);
            }
        }
        else {
            extendMin(1.05);
            extendMax(1.05);
        }
        if (this._min === this._max) {
            if (this._min !== 0)
                this._max *= 1.4;
            else
                this._max = 1;
        }
    };
    gaugeRangeCalculator.prototype._setRangeStart = function () {
        if (this._equalSign) {
            if (this._min === this._max) {
                if (this._min > 0) {
                    if (!this._minDefined)
                        this._min = 0;
                }
                else {
                    if (!this._maxDefined)
                        this._max = 0;
                }
            }
            if (Math.abs(this._min) <= Math.abs(this._max)) {
                if (!this._minDefined)
                    this._min = 0;
            }
            else {
                if (!this._maxDefined)
                    this._max = 0;
            }
        }
    };
    gaugeRangeCalculator.prototype._defineMinMax = function () {
        if (this._minDefined)
            this._min = this._customMin;
        else
            this._min = this._values.length > 0 ? Math.min.apply(Math, this._values) : 0;
        if (this._maxDefined)
            this._max = this._customMax;
        else
            this._max = this._values.length > 0 ? Math.max.apply(Math, this._values) : 1;
        this._equalSign = this._signsEqual(this._min, this._max);
    };
    gaugeRangeCalculator.prototype._signsEqual = function (number1, number2) {
        return (number1 >= 0 && number2 >= 0) || (number1 < 0 && number2 < 0);
    };
    gaugeRangeCalculator.prototype._defineMinMaxTicks = function () {
        switch (this._gaugeViewType) {
            case _utils_1.gaugeViewType.CircularFull:
                this._minTickCount = 6;
                this._maxTickCount = 9;
                break;
            case _utils_1.gaugeViewType.CircularHalf:
            case _utils_1.gaugeViewType.CircularThreeFourth:
                this._minTickCount = 4;
                this._maxTickCount = 6;
                break;
            case _utils_1.gaugeViewType.LinearHorizontal:
                this._minTickCount = 3;
                this._maxTickCount = 3;
                break;
            default:
                this._minTickCount = 4;
                this._maxTickCount = 5;
                break;
        }
    };
    gaugeRangeCalculator.prototype._chooseMultiplier = function (delta) {
        var multipliers = [1, 2, 3, 5], result, exp, scale, normDelta, newResult, i;
        if (delta > 1) {
            for (var factor = 1;; factor *= 10) {
                for (i = 0; i < multipliers.length; i++) {
                    result = multipliers[i] * factor;
                    if (delta <= result)
                        return result;
                }
            }
        }
        else {
            result = 10;
            exp = Math.floor(Math.log(Math.abs(delta)) / Math.LN10);
            scale = Math.pow(10, -exp);
            normDelta = delta * scale;
            for (i = multipliers.length - 1; i >= 0; i--) {
                newResult = multipliers[i];
                if (normDelta > newResult) {
                    break;
                }
                result = newResult;
            }
            return result / scale;
        }
    };
    return gaugeRangeCalculator;
}());
exports.gaugeRangeCalculator = gaugeRangeCalculator;
