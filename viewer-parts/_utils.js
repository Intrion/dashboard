/**
* DevExpress Dashboard (_utils.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalendarHelper = (function () {
    function CalendarHelper() {
    }
    CalendarHelper.getCalendarMaxZoomLevel = function (groupInterval) {
        switch (groupInterval) {
            case 'Year':
                return 'decade';
            case 'QuarterYear':
            case 'MonthYear':
                return 'year';
            case 'DayMonthYear':
            case 'DateHour':
            case 'DateHourMinute':
            case 'DateHourMinuteSecond':
            case 'None':
            default:
                return 'month';
        }
    };
    CalendarHelper.getCalentarType = function (groupInterval) {
        switch (groupInterval) {
            case 'DateHour':
            case 'DateHourMinute':
            case 'DateHourMinuteSecond':
            case 'None':
                return 'datetime';
            case 'Year':
            case 'QuarterYear':
            case 'MonthYear':
            case 'DayMonthYear':
            default:
                return 'date';
        }
    };
    return CalendarHelper;
}());
exports.CalendarHelper = CalendarHelper;
