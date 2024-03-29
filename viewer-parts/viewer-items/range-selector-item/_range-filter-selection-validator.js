﻿/**
* DevExpress Dashboard (_range-filter-selection-validator.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RangeFilterSelectionValidator = (function () {
    function RangeFilterSelectionValidator() {
    }
    RangeFilterSelectionValidator.validate = function (range, isYearGroupInterval, entireRange) {
        var validatedRange = this._prepareYearRangeBeforeSelection(range, isYearGroupInterval);
        validatedRange = this._validateValues(validatedRange, entireRange || { maximum: null, minimum: null });
        validatedRange = this.validateLimitsOrder(validatedRange);
        if (entireRange) {
            validatedRange = this._validateOutOfRange(validatedRange, entireRange);
        }
        return validatedRange;
    };
    RangeFilterSelectionValidator.validateLimitsOrder = function (range) {
        if (range.startValue && range.endValue && range.startValue > range.endValue) {
            return {
                startValue: range.endValue,
                endValue: range.startValue
            };
        }
        return range;
    };
    RangeFilterSelectionValidator.isValidValue = function (value) {
        return (typeof value === "number") || (value instanceof Date);
    };
    RangeFilterSelectionValidator._validateValues = function (range, entireRange) {
        return {
            startValue: RangeFilterSelectionValidator.isValidValue(range.startValue) ? range.startValue : entireRange.minimum,
            endValue: RangeFilterSelectionValidator.isValidValue(range.endValue) ? range.endValue : entireRange.maximum
        };
    };
    RangeFilterSelectionValidator._validateOutOfRange = function (range, entireRange) {
        var startValue = range.startValue >= entireRange.minimum ? range.startValue : entireRange.minimum;
        startValue = startValue <= entireRange.maximum ? startValue : entireRange.minimum;
        var endValue = range.endValue <= entireRange.maximum ? range.endValue : entireRange.maximum;
        endValue = endValue >= entireRange.minimum ? endValue : entireRange.maximum;
        return {
            startValue: startValue,
            endValue: endValue
        };
    };
    RangeFilterSelectionValidator._prepareYearRangeBeforeSelection = function (range, isYearGroupInterval) {
        var prepareYearBeforeSelection = function (value) {
            return value && value.getFullYear ? value.getFullYear() : value;
        };
        if (isYearGroupInterval) {
            return {
                startValue: prepareYearBeforeSelection(range.startValue),
                endValue: prepareYearBeforeSelection(range.endValue)
            };
        }
        else {
            return range;
        }
    };
    return RangeFilterSelectionValidator;
}());
exports.RangeFilterSelectionValidator = RangeFilterSelectionValidator;
