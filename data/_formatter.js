﻿/**
* DevExpress Dashboard (_formatter.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = require("./_utils");
var _localizer_1 = require("./_localizer");
var _format_helper_1 = require("./_format-helper");
var _default_1 = require("./localization/_default");
var string_1 = require("devextreme/core/utils/string");
exports.defaultNumericFormat = {
    format: 'fixedPoint',
    unitPower: 'auto',
    precision: 0,
    significantDigits: 3
};
exports.defaultPercentFormat = {
    format: 'percent',
    unitPower: 0,
    precision: 2,
    significantDigits: 0,
    showTrailingZeros: false
};
exports.defaultScientificFormat = {
    format: 'exponential',
    precision: 2
};
exports._types = {
    Abbreviated: 'abbr',
    Full: 'full',
    Long: 'long',
    Numeric: 'num',
    Short: 'short',
    TimeOnly: 'timeOnly'
};
function format(value, formatViewModel) {
    var str = _localizer_1.localizer.getPredefinedString(value);
    if (!_utils_1.type.isDefined(str)) {
        var numericFormat = formatViewModel.NumericFormat, dateTimeFormat = formatViewModel.DateTimeFormat;
        if (numericFormat) {
            str = this.formatNumeric(value, numericFormat);
        }
        else {
            str = !dateTimeFormat ? this.formatObject(value) : this.formatDateTime(value, dateTimeFormat);
        }
    }
    return str;
}
exports.format = format;
function formatFilterValue(filterValue) {
    var rangePattern = _default_1.getLocalizationById("DashboardStringId.FromToDatePeriodCaption"), fromPattern = _default_1.getLocalizationById("DashboardStringId.FromDatePeriodCaption"), toPattern = _default_1.getLocalizationById("DashboardStringId.ToDatePeriodCaption"), rangeLeft, rangeRight;
    if (_utils_1.type.isDefined(filterValue.Value)) {
        return this.format(filterValue.Value, filterValue.Format);
    }
    if (_utils_1.type.isDefined(filterValue.RangeLeft)) {
        rangeLeft = this.format(filterValue.RangeLeft, filterValue.Format);
    }
    if (_utils_1.type.isDefined(filterValue.RangeRight)) {
        rangeRight = this.format(filterValue.RangeRight, filterValue.Format);
    }
    return constructIntervalFilterText({ range: rangePattern, from: fromPattern, to: toPattern }, { left: rangeLeft, right: rangeRight });
}
exports.formatFilterValue = formatFilterValue;
function constructIntervalFilterText(patterns, rangeText) {
    if (rangeText.left && rangeText.right) {
        if (rangeText.right != rangeText.left)
            return string_1.format(patterns.range, rangeText.left, rangeText.right);
        else
            return rangeText.left;
    }
    if (rangeText.left) {
        return string_1.format(patterns.from, rangeText.left);
    }
    if (rangeText.right) {
        return string_1.format(patterns.to, rangeText.right);
    }
}
exports.constructIntervalFilterText = constructIntervalFilterText;
function formatNumeric(value, numericFormatViewModel) {
    if (!numericFormatViewModel) {
        return value.toString();
    }
    else {
        var format = this._convertToNumberFormat(numericFormatViewModel);
        return _format_helper_1.formatHelper.format(value, format);
    }
}
exports.formatNumeric = formatNumeric;
function formatDateTime(value, dateFormatViewModel) {
    var format = this._convertToDateFormat(dateFormatViewModel);
    return _format_helper_1.formatHelper.format(value, format);
}
exports.formatDateTime = formatDateTime;
function formatObject(value) {
    return value == null ? '' : value.toString();
}
exports.formatObject = formatObject;
function formatPercentValue(value) {
    return _format_helper_1.formatHelper.format(value, this.defaultPercentFormat);
}
exports.formatPercentValue = formatPercentValue;
function formatScientificAxisValue(value) {
    return _format_helper_1.formatHelper.format(value, this.defaultScientificFormat);
}
exports.formatScientificAxisValue = formatScientificAxisValue;
function formatAxisValue(value, axisMin, axisMax) {
    return _format_helper_1.formatHelper.format(value, this.getAxisFormat(axisMin, axisMax));
}
exports.formatAxisValue = formatAxisValue;
function getAxisFormat(axisMin, axisMax) {
    return {
        format: 'fixedPoint',
        unitPower: this.calculateUnitPower(axisMin, axisMax),
        precision: this.calculatePrecision(axisMin, axisMax),
        significantDigits: 0,
        showTrailingZeros: false
    };
}
exports.getAxisFormat = getAxisFormat;
function calculateUnitPower(axisMin, axisMax) {
    var range = axisMax - axisMin;
    if (range >= 1000000000)
        return 3;
    if (range >= 1000000)
        return 2;
    if (range >= 1000)
        return 1;
    return 0;
}
exports.calculateUnitPower = calculateUnitPower;
function calculatePrecision(axisMin, axisMax) {
    var precision = 0, range = axisMax - axisMin;
    if (range > 0) {
        var smallValue = Math.pow(10, -precision);
        while (range < smallValue) {
            smallValue /= 10;
            precision++;
        }
    }
    return precision + 2;
}
exports.calculatePrecision = calculatePrecision;
function convertToFormat(formatViewModel) {
    var format = null;
    if (formatViewModel) {
        var numericFormat = formatViewModel.NumericFormat, dateTimeFormat = formatViewModel.DateTimeFormat;
        if (numericFormat) {
            format = this._convertToNumberFormat(numericFormat);
        }
        else {
            format = !dateTimeFormat ? null : this._convertToDateFormat(dateTimeFormat);
        }
    }
    return format;
}
exports.convertToFormat = convertToFormat;
function _convertToNumberFormat(numericFormatViewModel) {
    var formatInfo = null, formatType = numericFormatViewModel ? numericFormatViewModel.FormatType : undefined, unit = numericFormatViewModel ? numericFormatViewModel.Unit : undefined;
    if (formatType !== 'General') {
        formatInfo = {};
        formatInfo.format = this._convertNumericFormat(formatType);
        formatInfo.currency = numericFormatViewModel.Currency;
        if (formatInfo.currency === _format_helper_1.invariantCurrencyIdentifier) {
            console.log("A web server does not support a currency specified for the dashboard. Refer to https://go.devexpress.com/dashboardInvariantCurrency.aspx to learn more.");
        }
        if (numericFormatViewModel.IncludeGroupSeparator) {
            formatInfo.includeGroupSeparator = numericFormatViewModel.IncludeGroupSeparator;
        }
        if (numericFormatViewModel.ForcePlusSign) {
            formatInfo.plus = numericFormatViewModel.ForcePlusSign;
        }
        formatInfo.precision = numericFormatViewModel.Precision;
        if (unit && unit === "Auto" && formatType !== 'Percent') {
            formatInfo.significantDigits = numericFormatViewModel.SignificantDigits;
        }
        if (unit && formatType === 'Number' || formatType === 'Currency') {
            formatInfo.unitPower = this._convertNumericUnit(unit);
        }
        formatInfo.dateType = null;
    }
    return formatInfo;
}
exports._convertToNumberFormat = _convertToNumberFormat;
function _convertToDateFormat(dateFormatViewModel) {
    if (dateFormatViewModel) {
        switch (this._getSyntheticDateTimeGroupInterval(dateFormatViewModel.GroupInterval, dateFormatViewModel.ExactDateFormat)) {
            case 'MonthYear':
                return { format: "monthYear", dateType: this._types.Full };
            case 'QuarterYear':
                return { format: "quarterYear", dateType: this._types.Full };
            case 'DayMonthYear':
                return {
                    format: "dayMonthYear",
                    dateType: dateFormatViewModel.DateFormat === 'Long' ? this._types.Long : this._types.Short
                };
            case 'DateHour':
                if (dateFormatViewModel.DateHourFormat === 'Long')
                    return { format: "dateHour", dateType: this._types.Long };
                else
                    return { format: "dateHour", dateType: dateFormatViewModel.DateHourFormat === 'Short' ? this._types.Short : this._types.TimeOnly };
            case 'DateHourMinute':
                if (dateFormatViewModel.DateHourMinuteFormat === 'Long')
                    return { format: "dateHourMinute", dateType: this._types.Long };
                else
                    return { format: "dateHourMinute", dateType: dateFormatViewModel.DateHourMinuteFormat === 'Short' ? this._types.Short : this._types.TimeOnly };
            case 'DateHourMinuteSecond':
                if (dateFormatViewModel.DateTimeFormat === 'Long')
                    return { format: "dateHourMinuteSecond", dateType: this._types.Long };
                else
                    return { format: "dateHourMinuteSecond", dateType: dateFormatViewModel.DateTimeFormat === 'Short' ? this._types.Short : this._types.TimeOnly };
            case 'Year':
                return {
                    format: "year",
                    dateType: dateFormatViewModel.YearFormat === 'Abbreviated' ? this._types.Abbreviated : this._types.Full
                };
            case 'DateYear':
                return {
                    format: "dateYear",
                    dateType: dateFormatViewModel.YearFormat === 'Abbreviated' ? this._types.Abbreviated : this._types.Full
                };
            case 'Quarter':
                if (dateFormatViewModel.QuarterFormat === 'Numeric')
                    return { format: "quarter", dateType: this._types.Numeric };
                else
                    return { format: "quarter", dateType: this._types.Full };
            case 'Month':
                if (dateFormatViewModel.MonthFormat === 'Numeric')
                    return { format: "month", dateType: this._types.Numeric };
                else
                    return { format: "month", dateType: dateFormatViewModel.MonthFormat === 'Abbreviated' ? this._types.Abbreviated : this._types.Full };
            case 'Hour':
                return {
                    format: "hour",
                    dateType: dateFormatViewModel.HourFormat === 'Long' ? this._types.Long : this._types.Short
                };
            case 'DayOfWeek':
                if (dateFormatViewModel.DayOfWeekFormat === 'Numeric')
                    return { format: "dayOfWeek", dateType: this._types.Numeric };
                else
                    return { format: "dayOfWeek", dateType: dateFormatViewModel.DayOfWeekFormat === 'Abbreviated' ? this._types.Abbreviated : this._types.Full };
            default:
                return { format: dateFormatViewModel.GroupInterval.toString(), dateType: this._types.Numeric };
        }
    }
    else {
        return null;
    }
}
exports._convertToDateFormat = _convertToDateFormat;
function _getSyntheticDateTimeGroupInterval(groupInterval, exactDateFormat) {
    if (groupInterval != 'None')
        return groupInterval;
    switch (exactDateFormat) {
        case 'Year':
            return 'DateYear';
        case 'Quarter':
            return 'QuarterYear';
        case 'Month':
            return 'MonthYear';
        case 'Day':
            return 'DayMonthYear';
        case 'Hour':
            return 'DateHour';
        case 'Minute':
            return 'DateHourMinute';
        case 'Second':
            return 'DateHourMinuteSecond';
        default:
            return null;
    }
}
exports._getSyntheticDateTimeGroupInterval = _getSyntheticDateTimeGroupInterval;
function _convertNumericFormat(formatType) {
    switch (formatType) {
        case 'Number': return 'fixedPoint';
        case 'Currency': return 'currency';
        case 'Scientific': return 'exponential';
        case 'Percent': return 'percent';
        default: return undefined;
    }
}
exports._convertNumericFormat = _convertNumericFormat;
function _convertNumericUnit(numericUnit) {
    switch (numericUnit) {
        case 'Auto': return 'auto';
        case 'Thousands': return 1;
        case 'Millions': return 2;
        case 'Billions': return 3;
        default: return 0;
    }
}
exports._convertNumericUnit = _convertNumericUnit;
