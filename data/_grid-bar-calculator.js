/**
* DevExpress Dashboard (_grid-bar-calculator.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var startPercent = 0.15;
var gridBarCalculator = (function () {
    function gridBarCalculator(showZeroLevel) {
        this._valueItems = [];
        this._alwaysShowZeroLevel = showZeroLevel;
    }
    gridBarCalculator.prototype.addValue = function (valueItem) {
        this._valueItems.push(valueItem);
        this._initialized = false;
        this._invalidate();
    };
    gridBarCalculator.prototype.getNormalizedValue = function (index) {
        if (!this._initialized)
            this._initialize();
        if (this._normalizedValues[index])
            return this._normalizedValues[index];
        var normalizedValue = this._normalizeValue(this._valueItems[index].getValue());
        this._normalizedValues[index] = normalizedValue;
        return normalizedValue;
    };
    gridBarCalculator.prototype.getZeroPosition = function () {
        if (!this._initialized)
            this._initialize();
        return this._zeroPosition;
    };
    gridBarCalculator.prototype._invalidate = function () {
        this._normalizedValues = [];
        this._range = null;
        this._min = null;
        this._max = null;
        this._zeroPosition = null;
        this._normalizationData = null;
        this._initialized = false;
    };
    gridBarCalculator.prototype._normalizeValue = function (value) {
        var showZero = this._normalizationData.showZero, minimum = this._normalizationData.minimum, ratio = this._normalizationData.ratio, range = this._normalizationData.range, sign = value >= 0 ? 1 : -1;
        return !showZero || ratio === 0 ? value / range : sign * (startPercent + ratio * (Math.abs(value) - minimum));
    };
    gridBarCalculator.prototype._calcMinMax = function () {
        var values = [];
        this._valueItems.forEach(function (item) {
            values.push(item.getValue());
        });
        this._min = Math.min.apply(Math, values);
        this._max = Math.max.apply(Math, values);
    };
    gridBarCalculator.prototype._calcRange = function () {
        var min = this._min, minAbs = Math.abs(min), max = this._max, maxAbs = Math.abs(max);
        this._range = Math.max(max - min, minAbs, maxAbs);
    };
    gridBarCalculator.prototype._calcZeroPosition = function () {
        var min = this._min, minAbs = Math.abs(min), max = this._max, range = this._range;
        if (min < 0)
            if (max < 0)
                this._zeroPosition = 1;
            else {
                this._zeroPosition = range !== 0 ? minAbs / range : 0;
            }
        else
            this._zeroPosition = 0;
    };
    gridBarCalculator.prototype._calcNormalizationData = function () {
        var range = this._range || 1, min = this._min, max = this._max, equalSign = (min < 0 && max < 0) || (min >= 0 && max >= 0), minAbs = Math.abs(min), maxAbs = Math.abs(max), minimum = Math.min(minAbs, maxAbs), maximum = Math.max(minAbs, maxAbs), delta = maximum - minimum, ratio = delta !== 0 ? (1 - startPercent) / delta : 0, showZero = this._alwaysShowZeroLevel || (equalSign && minimum / maximum <= startPercent);
        this._normalizationData = {
            showZero: showZero,
            minimum: minimum,
            ratio: ratio,
            range: range
        };
    };
    gridBarCalculator.prototype._initialize = function () {
        this._calcMinMax();
        this._calcRange();
        this._calcZeroPosition();
        this._calcNormalizationData();
        this._initialized = true;
    };
    return gridBarCalculator;
}());
exports.gridBarCalculator = gridBarCalculator;
