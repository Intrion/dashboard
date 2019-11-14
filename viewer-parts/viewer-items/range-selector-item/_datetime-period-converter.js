/**
* DevExpress Dashboard (_datetime-period-converter.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _range_filter_selection_validator_1 = require("./_range-filter-selection-validator");
var DateTimePeriodConverter = (function () {
    function DateTimePeriodConverter() {
    }
    DateTimePeriodConverter.toRange = function (period) {
        var now = new Date();
        var range = {
            startValue: this._getDateTime(period.Start, now),
            endValue: this._getDateTime(period.End, now)
        };
        var endLimit = period.Start && period.End && period.End < period.Start ? period.Start : period.End;
        range = _range_filter_selection_validator_1.RangeFilterSelectionValidator.validateLimitsOrder(range);
        if (endLimit && endLimit.Relative) {
            range.endValue.setMilliseconds(range.endValue.getMilliseconds() - 1);
            range = _range_filter_selection_validator_1.RangeFilterSelectionValidator.validateLimitsOrder(range);
        }
        return range;
    };
    DateTimePeriodConverter._getDateTime = function (limit, now) {
        if (limit) {
            if (!limit.Relative)
                return limit.Date;
            switch (limit.Interval) {
                case 'Year':
                    return new Date(now.getFullYear() + limit.Offset, 0, 1);
                case 'Quarter':
                    var quarterIndex = Math.floor(now.getMonth() / 3);
                    return new Date(now.getFullYear(), quarterIndex * 3 + 3 * limit.Offset, 1);
                case 'Month':
                    return new Date(now.getFullYear(), now.getMonth() + limit.Offset, 1);
                case 'Day':
                    return new Date(now.getFullYear(), now.getMonth(), now.getDate() + limit.Offset);
                case 'Hour':
                    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + limit.Offset, 0, 0, 0);
                case 'Minute':
                    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + limit.Offset, 0, 0);
                case 'Second':
                    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds() + limit.Offset, 0);
            }
        }
    };
    return DateTimePeriodConverter;
}());
exports.DateTimePeriodConverter = DateTimePeriodConverter;
