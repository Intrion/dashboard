/**
* DevExpress Dashboard (_data-item-format.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
exports.formatTypeValues = {
    "Auto": "DashboardStringId.NumericFormatFormatTypeAutoCaption",
    "General": "DashboardStringId.NumericFormatFormatTypeGeneralCaption",
    "Number": "DashboardStringId.NumericFormatFormatTypeNumberCaption",
    "Currency": "DashboardStringId.NumericFormatFormatTypeCurrencyCaption",
    "Scientific": "DashboardStringId.NumericFormatFormatTypeScientificCaption",
    "Percent": "DashboardStringId.NumericFormatFormatTypePercentCaption"
};
function getFormatType(defaultVal) {
    return {
        propertyName: 'formatType', modelName: '@FormatType', displayName: 'DashboardWebStringId.FormatType', defaultVal: defaultVal, editor: _base_metadata_1.editorTemplates.combobox, values: exports.formatTypeValues
    };
}
exports.precisionPropertyName = "precision";
function getPrecision(defaultVal) {
    return { propertyName: exports.precisionPropertyName, modelName: '@Precision', displayName: "DashboardWebStringId.DataItem.Precision", defaultVal: defaultVal, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel, validationRules: [{ type: "custom", validationCallback: function (options) { return options.value >= 0; }, message: "Precision shouldn't be negative." }] };
}
exports.unit = {
    propertyName: 'unit', modelName: '@Unit', displayName: 'DashboardStringId.NumericFormatUnitCaption', defaultVal: "Auto", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Auto": "DashboardStringId.NumericFormatUnitAutoCaption",
        "Ones": "DashboardStringId.NumericFormatUnitOnesCaption",
        "Thousands": "DashboardStringId.NumericFormatUnitThousandsCaption",
        "Millions": "DashboardStringId.NumericFormatUnitMillionsCaption",
        "Billions": "DashboardStringId.NumericFormatUnitBillionsCaption"
    }
};
exports.includeGroupSeparator = { propertyName: 'includeGroupSeparator', modelName: '@IncludeGroupSeparator', displayName: "DashboardWebStringId.DataItem.IncludeGroupSeparator", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.dataItemCurrencyCultureName = { propertyName: 'currencyCultureName', modelName: '@CurrencyCultureName', displayName: "DashboardStringId.NumericFormatFormatTypeCurrencyCaption", defaultVal: null, editor: _base_metadata_1.editorTemplates.currency };
exports.dataItemNumericFormatSerializationsInfo = [getFormatType("Auto"), exports.unit, getPrecision(2), exports.includeGroupSeparator, exports.dataItemCurrencyCultureName];
exports.absoluteVariationNumericFormatSerializationsInfo = [getFormatType("Number"), exports.unit, getPrecision(0), exports.includeGroupSeparator, exports.dataItemCurrencyCultureName];
exports.percentVariationNumericFormatSerializationsInfo = [getFormatType("Percent"), exports.unit, getPrecision(2), exports.includeGroupSeparator, exports.dataItemCurrencyCultureName];
exports.percentOfTargetNumericFormatSerializationsInfo = [getFormatType("Percent"), exports.unit, getPrecision(2), exports.includeGroupSeparator, exports.dataItemCurrencyCultureName];
exports.yearFormat = {
    propertyName: 'yearFormat', modelName: '@YearFormat', displayName: 'DashboardWebStringId.FormatType', defaultVal: "Default", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Default": "DashboardStringId.DateTimeFormatYearFormatDefaultCaption",
        "Full": "DashboardStringId.DateTimeFormatYearFormatFullCaption",
        "Abbreviated": "DashboardStringId.DateTimeFormatYearFormatAbbreviatedCaption"
    }
};
exports.quarterFormat = {
    propertyName: 'quarterFormat', modelName: '@QuarterFormat', displayName: 'DashboardWebStringId.FormatType', defaultVal: "Default", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Default": "DashboardStringId.DateTimeFormatQuarterFormatDefaultCaption",
        "Numeric": "DashboardStringId.DateTimeFormatQuarterFormatNumericCaption",
        "Full": "DashboardStringId.DateTimeFormatQuarterFormatFullCaption"
    }
};
exports.monthFormat = {
    propertyName: 'monthFormat', modelName: '@MonthFormat', displayName: 'DashboardWebStringId.FormatType', defaultVal: "Default", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Default": "DashboardStringId.DateTimeFormatMonthFormatDefaultCaption",
        "Full": "DashboardStringId.DateTimeFormatMonthFormatFullCaption",
        "Abbreviated": "DashboardStringId.DateTimeFormatMonthFormatAbbreviatedCaption",
        "Numeric": "DashboardStringId.DateTimeFormatMonthFormatNumericCaption"
    }
};
exports.dayOfWeekFormat = {
    propertyName: 'dayOfWeekFormat', modelName: '@DayOfWeekFormat', displayName: 'DashboardWebStringId.FormatType', defaultVal: "Default", editor: _base_metadata_1.editorTemplates.list, values: {
        "Default": "DashboardStringId.DateTimeFormatDayOfWeekFormatDefaultCaption",
        "Full": "DashboardStringId.DateTimeFormatDayOfWeekFormatFullCaption",
        "Abbreviated": "DashboardStringId.DateTimeFormatDayOfWeekFormatAbbreviatedCaption",
        "Numeric": "DashboardStringId.DateTimeFormatDayOfWeekFormatNumericCaption"
    }
};
exports.dateFormat = {
    propertyName: 'dateFormat', modelName: '@DateFormat', displayName: 'DashboardWebStringId.FormatType', defaultVal: "Default", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Default": "DashboardStringId.DateTimeFormatDateFormatDefaultCaption",
        "Long": "DashboardStringId.DateTimeFormatDateFormatLongCaption",
        "Short": "DashboardStringId.DateTimeFormatDateFormatShortCaption"
    }
};
exports.dateHourFormat = {
    propertyName: 'dateHourFormat', modelName: '@DateHourFormat', displayName: 'DashboardWebStringId.FormatType', defaultVal: "Default", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Default": "DashboardStringId.DateTimeFormatDateTimeFormatDefaultCaption",
        "Long": "DashboardStringId.DateTimeFormatDateTimeFormatLongCaption",
        "Short": "DashboardStringId.DateTimeFormatDateTimeFormatShortCaption",
        "TimeOnly": "DashboardStringId.DateTimeFormatDateTimeFormatTimeOnlyCaption"
    }
};
exports.dateHourMinuteFormat = {
    propertyName: 'dateHourMinuteFormat', modelName: '@DateHourMinuteFormat', displayName: 'DashboardWebStringId.FormatType', defaultVal: "Default", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Default": "DashboardStringId.DateTimeFormatDateTimeFormatDefaultCaption",
        "Long": "DashboardStringId.DateTimeFormatDateTimeFormatLongCaption",
        "Short": "DashboardStringId.DateTimeFormatDateTimeFormatShortCaption",
        "TimeOnly": "DashboardStringId.DateTimeFormatDateTimeFormatTimeOnlyCaption"
    }
};
exports.dateTimeWithSecondsFormat = {
    propertyName: 'dateTimeFormat', modelName: '@DateTimeFormat', displayName: 'DashboardWebStringId.FormatType', defaultVal: "Default", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Default": "DashboardStringId.DateTimeFormatDateTimeFormatDefaultCaption",
        "Long": "DashboardStringId.DateTimeFormatDateTimeFormatLongCaption",
        "Short": "DashboardStringId.DateTimeFormatDateTimeFormatShortCaption",
        "TimeOnly": "DashboardStringId.DateTimeFormatDateTimeFormatTimeOnlyCaption"
    }
};
exports.hourFormat = {
    propertyName: 'hourFormat', modelName: '@HourFormat', displayName: 'DashboardWebStringId.FormatType', defaultVal: "Default", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Default": "DashboardStringId.DateTimeFormatDateTimeFormatDefaultCaption",
        "Short": "DashboardStringId.DateTimeFormatDateTimeFormatShortCaption",
        "Long": "DashboardStringId.DateTimeFormatDateTimeFormatLongCaption"
    }
};
exports.exactDateFormat = {
    propertyName: 'exactDateFormat', modelName: '@ExactDateFormat', displayName: 'DashboardWebStringId.FormatType', defaultVal: "Day", editor: _base_metadata_1.editorTemplates.list, values: {
        "Year": "DashboardStringId.ExactDateFormatYear",
        "Quarter": "DashboardStringId.ExactDateFormatQuarter",
        "Month": "DashboardStringId.ExactDateFormatMonth",
        "Day": "DashboardStringId.ExactDateFormatDay",
        "Hour": "DashboardStringId.ExactDateFormatHour",
        "Minute": "DashboardStringId.ExactDateFormatMinute",
        "Second": "DashboardStringId.ExactDateFormatSecond"
    }
};
exports.dataItemDateTimeFormatSerializationsInfo = [exports.yearFormat, exports.quarterFormat, exports.monthFormat, exports.dayOfWeekFormat, exports.dateFormat, exports.dateHourFormat, exports.dateHourMinuteFormat, exports.dateTimeWithSecondsFormat, exports.hourFormat, exports.exactDateFormat];
