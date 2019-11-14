/**
* DevExpress Dashboard (_format-helper.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = require("../data/_utils");
var _default_1 = require("./localization/_default");
var config_1 = require("devextreme/core/config");
var string_1 = require("devextreme/core/utils/string");
var formatHelper = require("devextreme/format_helper");
exports.formatHelper = formatHelper;
var dateUtils = require("devextreme/core/utils/date");
var dateLocalization = require("devextreme/localization/date");
var numberLocalization = require("devextreme/localization/number");
exports.invariantCurrencyIdentifier = 'INVARIANT';
exports.invariantCurrencySymbol = '¤';
numberLocalization.inject({
    format: function (value, formatConfig) {
        var numberStr = (+value).toString(10);
        if ((/e/).test(numberStr)) {
            console.warn("The number " + numberStr + " out of (1e21, 1e-7) range can`t be formatted. The number will be displayed as is.");
            return value.toString();
        }
        var invariantCurrency = formatConfig.currency === exports.invariantCurrencyIdentifier;
        if (invariantCurrency) {
            formatConfig.currency = 'USD';
        }
        var formattedValue = this.callBase.apply(this, arguments);
        if (formattedValue != null && formatConfig.currency != 'default') {
            var currencySymbol = "";
            var symbolAltNarrow = "";
            try {
                var symbolInfo = numberLocalization.getCurrencySymbol(formatConfig.currency);
                currencySymbol = symbolInfo['symbol'];
                symbolAltNarrow = symbolInfo['symbol-alt-narrow'];
            }
            catch (_a) { }
            try {
                var symbolInfo = numberLocalization._getCurrencySymbolInfo(formatConfig.currency);
                currencySymbol = symbolInfo.symbol;
                symbolAltNarrow = symbolInfo.symbol;
            }
            catch (_b) { }
            if (invariantCurrency) {
                symbolAltNarrow = exports.invariantCurrencySymbol;
                formatConfig.currency = exports.invariantCurrencyIdentifier;
            }
            if (!!symbolAltNarrow && symbolAltNarrow !== currencySymbol) {
                return formattedValue.replace(currencySymbol, symbolAltNarrow);
            }
        }
        return formattedValue;
    }
});
formatHelper.inject({
    defaultLargeNumberFormatPostfixes: {
        1: 'DashboardStringId.NumericFormatUnitSymbolThousands',
        2: 'DashboardStringId.NumericFormatUnitSymbolMillions',
        3: 'DashboardStringId.NumericFormatUnitSymbolBillions',
        4: 'T'
    },
    _accountingStyle: false,
    defaultQuarterFormat: function () { return _default_1.getLocalizationById("DashboardStringId.DateTimeQuarterFormat"); },
    romanDigits: ['I', 'II', 'III', 'IV'],
    format: function (value, format) {
        if (_utils_1.isPlainObject(format) && format.format) {
            if (format.dateType)
                return this._formatDateEx(value, format);
            else if (_utils_1.type.isNumeric(value) && isFinite(value))
                return this._formatNumberEx(value, format);
        }
        return this.callBase.apply(this, arguments);
    },
    _getQuarterString: function (date, format) {
        var quarter = dateUtils.getQuarter(date.getMonth());
        switch (format) {
            case 'q':
                return this.romanDigits[quarter];
            case 'qq':
                return string_1.format(this.defaultQuarterFormat(), this.romanDigits[quarter]);
            case 'Q':
                return (quarter + 1).toString();
            case 'QQ':
                return string_1.format(this.defaultQuarterFormat(), (quarter + 1).toString());
        }
        return '';
    },
    _formatDateEx: function (value, formatInfo) {
        var that = this, format = formatInfo.format, dateType = formatInfo.dateType, time, index, dateStr;
        format = format.toLowerCase();
        if (!_utils_1.type.isDefined(value)) {
            return '';
        }
        if (dateType !== 'num' || format === 'dayofweek') {
            switch (format) {
                case 'monthyear':
                    return dateLocalization.format(value, 'monthandyear');
                case 'quarteryear':
                    return that._getQuarterString(value, 'QQ') + ' ' + value.getFullYear();
                case 'daymonthyear':
                    return dateLocalization.format(value, dateType + 'Date');
                case 'datehour':
                    time = new Date(value.getTime());
                    time.setMinutes(0);
                    dateStr = dateType === 'timeOnly' ? '' : dateLocalization.format(value, dateType + 'Date');
                    return dateType === 'timeOnly' ? dateLocalization.format(time, 'shorttime') : dateStr + ' ' + dateLocalization.format(time, 'shorttime');
                case 'datehourminute':
                    dateStr = dateType === 'timeOnly' ? '' : dateLocalization.format(value, dateType + 'Date');
                    return dateType === 'timeOnly' ? dateLocalization.format(value, 'shorttime') : dateStr + ' ' + dateLocalization.format(value, 'shorttime');
                case 'datehourminutesecond':
                    dateStr = dateType === 'timeOnly' ? '' : dateLocalization.format(value, dateType + 'Date');
                    return dateType === 'timeOnly' ? dateLocalization.format(value, 'longtime') : dateStr + ' ' + dateLocalization.format(value, 'longtime');
                case 'year':
                    dateStr = value.toString();
                    return (dateType === 'abbr') ? dateStr.slice(2, 4) : dateStr;
                case 'dateyear':
                    return (dateType === 'abbr') ? dateLocalization.format(value, 'shortyear') : dateLocalization.format(value, 'year');
                case 'quarter':
                    return string_1.format(that.defaultQuarterFormat(), value.toString());
                case 'month':
                    index = value - 1;
                    return dateLocalization.getMonthNames(dateType === 'abbr' && "abbreviated")[index];
                case 'hour':
                    if (dateType === 'long') {
                        time = new Date();
                        time.setHours(value);
                        time.setMinutes(0);
                        return dateLocalization.format(time, 'shorttime');
                    }
                    return value.toString();
                case 'dayofweek':
                    index = _utils_1.type.isString(value) ? ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(value) : value;
                    if (dateType !== 'num') {
                        return dateLocalization.getDayNames(dateType === 'abbr' && "abbreviated")[index];
                    }
                    return ((index - dateLocalization.firstDayOfWeekIndex() + 1 + 7) % 8).toString();
                default:
                    return value.toString();
            }
        }
        else {
            return value.toString();
        }
    },
    _getMinimalPossibleValue: function (formatType, precision) {
        var maxPrecision = precision + 1;
        if (formatType === "percent") {
            maxPrecision += 2;
        }
        return Math.pow(10, -maxPrecision);
    },
    _formatNumberEx: function (value, formatInfo) {
        var that = this, formatType = formatInfo.format.toLowerCase(), formatSettings = that._getUnitFormatSettings(value, formatInfo), result = "", config;
        if (!_utils_1.type.isDefined(value)) {
            return '';
        }
        if (["currency", "percent", "fixedpoint"].indexOf(formatType) !== -1
            && formatSettings.precision > 0
            && Math.abs(value) < that._getMinimalPossibleValue(formatType, formatSettings.precision)) {
            value = 0;
        }
        value = that._getNumberByPower(value, formatSettings.unitPower, 1000);
        if (["fixedpoint", "currency", "percent"].indexOf(formatType) !== -1) {
            config = that._generateNumericFormatConfig(__assign({}, formatSettings, { significantDigits: formatInfo.significantDigits, signsAfterPointCount: that._countSignsAfterPoint(value, formatType), formatType: formatType }), value);
        }
        switch (formatType) {
            case "decimal":
                result = numberLocalization.format(value, that._normalizeFormatConfig(formatType, formatSettings.precision, value));
                break;
            case "fixedpoint":
                result = numberLocalization.format(value, config);
                break;
            case "currency":
                config.currency = formatInfo.currency || config_1.default().defaultCurrency;
                if (config.style === "accounting" && !this._accountingStyle)
                    delete config.style;
                result = numberLocalization.format(value, config);
                break;
            case "percent":
                config.style = "percent";
                result = numberLocalization.format(value, config);
                break;
            case "exponential":
                return numberLocalization.format(value, { type: "exponential", precision: formatSettings.precision });
            default:
                throw "Illegal numeric format: '" + formatType + "'";
        }
        result = that._insertUnitPostfix(result, formatSettings.unitPower);
        return (formatInfo.plus && value > 0 ? "+" : '') + result;
    },
    _getUnitFormatSettings: function (value, formatInfo) {
        var unitPower = formatInfo.unitPower || 0, precision = formatInfo.precision || 0, includeGroupSeparator = formatInfo.includeGroupSeparator || false, showTrailingZeros = formatInfo.showTrailingZeros === undefined ? true : formatInfo.showTrailingZeros, significantDigits = formatInfo.significantDigits || 1, absValue;
        if (unitPower.toString().toLowerCase() === 'auto') {
            showTrailingZeros = false;
            absValue = Math.abs(value);
            if (significantDigits < 1)
                significantDigits = 1;
            if (absValue >= 1000000000) {
                unitPower = 3;
                absValue /= 1000000000;
            }
            else if (absValue >= 1000000) {
                unitPower = 2;
                absValue /= 1000000;
            }
            else if (absValue >= 1000) {
                unitPower = 1;
                absValue /= 1000;
            }
            else
                unitPower = 0;
            if (absValue === 0)
                precision = 0;
            else if (absValue < 1) {
                precision = significantDigits;
                var smallValue = Math.pow(10, -significantDigits);
                while (absValue < smallValue) {
                    smallValue /= 10;
                    precision++;
                }
            }
            else {
                if (absValue >= 100)
                    precision = significantDigits - 3;
                else if (absValue >= 10)
                    precision = significantDigits - 2;
                else
                    precision = significantDigits - 1;
            }
        }
        if (precision < 0) {
            precision = 0;
        }
        return {
            unitPower: unitPower,
            precision: precision,
            showTrailingZeros: showTrailingZeros,
            includeGroupSeparator: includeGroupSeparator
        };
    },
    _insertUnitPostfix: function (formattedNumber, unitPower) {
        var lastDigitReg = /(\d)([^\d]*)$/;
        return unitPower > 0
            ? formattedNumber.replace(lastDigitReg, "$1" + _default_1.getLocalizationById(this.defaultLargeNumberFormatPostfixes[unitPower]) + "$2")
            : formattedNumber;
    },
    _generateNumericFormatConfig: function (settings, value) {
        var that = this, config;
        if (!settings.showTrailingZeros) {
            settings.precision = Math.min(settings.precision, settings.signsAfterPointCount);
        }
        config = that._normalizeFormatConfig(settings.formatType, settings.precision, value);
        config.useGrouping = settings.includeGroupSeparator;
        if (settings.significantDigits && value) {
            _utils_1.extend(config, {
                minimumSignificantDigits: settings.showTrailingZeros ? settings.significantDigits : 1,
                maximumSignificantDigits: settings.significantDigits
            });
        }
        return config;
    },
    _countSignsAfterPoint: function (num, formatType) {
        var strNum = String(num), pointPos = strNum.indexOf(".");
        if (formatType == "percent") {
            pointPos += 2;
        }
        if (pointPos < 0) {
            return 0;
        }
        return strNum.substr(pointPos + 1, strNum.length).length;
    },
    _excludeTrailingZeros: function (strValue, floatingSymbol) {
        var floatingIndex = strValue.indexOf(floatingSymbol), stopIndex, i;
        if (floatingIndex < 0)
            return strValue;
        stopIndex = strValue.length;
        for (i = stopIndex - 1; i >= floatingIndex && (strValue[i] === '0' || i === floatingIndex); i--) {
            stopIndex--;
        }
        return strValue.substring(0, stopIndex);
    },
    _normalizeFormatConfig: function (format, precision, value) {
        var config = numberLocalization._normalizeFormatConfig(format, {
            precision: precision
        }, value);
        if (format === "decimal") {
            config = __assign({}, config, {
                minimumIntegerDigits: precision || 1,
                useGrouping: false,
                maximumFractionDigits: 0,
                round: value < 0 ? "ceil" : "floor"
            });
        }
        else {
            config = __assign({}, config, {
                minimumFractionDigits: precision,
                maximumFractionDigits: precision
            });
        }
        return config;
    },
    _getNumberByPower: function (number, power, base) {
        var result = number;
        while (power > 0) {
            result = result / base;
            power--;
        }
        while (power < 0) {
            result = result * base;
            power++;
        }
        return result;
    }
});
