/**
* DevExpress Dashboard (_period-limit.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
exports.flowIntervalOrderedValues = ["Year", "Quarter", "Month", "Day", "Hour", "Minute", "Second"];
exports.flowIntervalValues = {
    "Year": "DashboardStringId.DateTimeIntervalYear",
    "Quarter": "DashboardStringId.DateTimeIntervalQuarter",
    "Month": "DashboardStringId.DateTimeIntervalMonth",
    "Day": "DashboardStringId.DateTimeIntervalDay",
    "Hour": "DashboardStringId.DateTimeIntervalHour",
    "Minute": "DashboardStringId.DateTimeIntervalMinute",
    "Second": "DashboardStringId.DateTimeIntervalSecond"
};
function convertDateTimeGroupInterval(groupInterval) {
    var map = {
        'Year': 'Year',
        'QuarterYear': 'Quarter',
        'MonthYear': 'Month',
        'DayMonthYear': 'Day',
        'DateHour': 'Hour',
        'DateHourMinute': 'Minute',
        'DateHourMinuteSecond': 'Second',
        'None': 'Second'
    };
    var dateTimeInterval = map[groupInterval];
    if (!dateTimeInterval) {
        throw Error("Argument exception");
    }
    return dateTimeInterval;
}
exports.convertDateTimeGroupInterval = convertDateTimeGroupInterval;
exports.interval = { propertyName: 'interval', modelName: '@Interval', defaultVal: "Year" };
exports.offset = { propertyName: 'offset', modelName: '@Offset', defaultVal: 0, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel };
exports.flowDateTimePeriodLimitSerializationsInfo = [exports.interval, exports.offset];
exports.date = { propertyName: 'date', modelName: '@Date', defaultVal: _base_metadata_1.fromDateToString(new Date()), from: _base_metadata_1.fromStringToDate, toJsonObject: _base_metadata_1.fromDateToString, editor: _base_metadata_1.editorTemplates.date };
exports.fixedDateTimePeriodLimitSerializationsInfo = [exports.date];
