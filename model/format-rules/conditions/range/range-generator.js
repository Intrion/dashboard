﻿/**
* DevExpress Dashboard (range-generator.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var range_converter_1 = require("./range-converter");
var range_info_1 = require("./range-info");
var icon_settings_1 = require("../../style-settings/icon-settings");
var bar_style_settings_1 = require("../../style-settings/bar-style-settings");
var appearance_settings_1 = require("../../style-settings/appearance-settings");
var color_1 = require("../../../color");
var _helper_classes_1 = require("../../../internal/_helper-classes");
var _format_rules_common_1 = require("../../metadata/_format-rules-common");
var FormatConditionRangeGenerator = (function () {
    function FormatConditionRangeGenerator() {
    }
    FormatConditionRangeGenerator.generateRangeSet = function (condition, type) {
        if (type === range_converter_1.FormatConditionRangeSetPredefinedType.None || type === range_converter_1.FormatConditionRangeSetPredefinedType.Custom)
            return;
        condition.valueType(!!condition.dateTimeGroupInterval() ? 'Number' : 'Percent');
        var ranges = [];
        var styleList = range_converter_1.FormatConditionConverter.getStyleList(type);
        if (styleList.isIcon) {
            ranges = FormatConditionRangeGenerator._generateRangeSet(styleList.list.length, condition.dataType(), condition.dateTimeGroupInterval(), function (i) { return new icon_settings_1.IconSettings({
                '@IconType': styleList.list[i]
            }); });
        }
        else {
            ranges = FormatConditionRangeGenerator._generateRangeSet(styleList.list.length, condition.dataType(), condition.dateTimeGroupInterval(), function (i) {
                return condition.createStyleSettings(styleList.list[i]);
            });
        }
        condition.rangeSet.ranges(ranges);
    };
    FormatConditionRangeGenerator.generateGradientByType = function (condition, type, segmentNumber, isBar) {
        if (isBar === void 0) { isBar = false; }
        if (type === range_converter_1.FormatConditionRangeGradientPredefinedType.None || type === range_converter_1.FormatConditionRangeGradientPredefinedType.Custom)
            return;
        var styles = range_converter_1.FormatConditionConverter
            .toAppearanceTypes(type)
            .map(function (t) { return isBar ? new bar_style_settings_1.BarStyleSettings({ '@PredefinedColor': t }) : new appearance_settings_1.AppearanceSettings({ '@AppearanceType': t }); });
        FormatConditionRangeGenerator.generateGradientByStyles(condition, styles, segmentNumber);
    };
    FormatConditionRangeGenerator.generateGradientByStyles = function (condition, styles, segmentNumber) {
        var colorsCount = styles.length;
        if (segmentNumber >= colorsCount) {
            condition.generateAsPercent(styles[0], styles[colorsCount - 1], segmentNumber);
            if (colorsCount == 3)
                condition.rangeSet.ranges()[Math.floor(segmentNumber / 2)].styleSettings(styles[1]);
            if (colorsCount == 4) {
                condition.rangeSet.ranges()[Math.floor(segmentNumber / 3)].styleSettings(styles[1]);
                condition.rangeSet.ranges()[Math.floor(2 * segmentNumber / 3)].styleSettings(styles[2]);
            }
        }
    };
    FormatConditionRangeGenerator.generateGradientColors = function (gradientType, count) {
        var gradientColors = [];
        var appearanceTypes = range_converter_1.FormatConditionConverter.toAppearanceTypes(gradientType);
        var prevIndex = 0, nextIndex = count - 1;
        gradientColors[prevIndex] = color_1.Color.fromAppearance(appearanceTypes[0]);
        gradientColors[nextIndex] = color_1.Color.fromAppearance(appearanceTypes[appearanceTypes.length - 1]);
        if (appearanceTypes.length == 3) {
            nextIndex = count / 2;
            gradientColors[nextIndex] = color_1.Color.fromAppearance(appearanceTypes[1]);
        }
        for (var i = 1; i < count - 1; i++) {
            if (appearanceTypes.length == 3 && (i === count / 2)) {
                nextIndex = count - 1;
            }
            gradientColors[i] = color_1.Color.fromDxColor(gradientColors[nextIndex].blend(gradientColors[prevIndex], (i - nextIndex) / (prevIndex - nextIndex)));
        }
        return gradientColors;
    };
    FormatConditionRangeGenerator.getPredefinedType = function (actualStyles, func) {
        var enumValues = _helper_classes_1.EnumManager.getValues(range_converter_1.FormatConditionRangeSetPredefinedType);
        for (var i = 0; i < enumValues.length; i++) {
            var rangePredefinedType = enumValues[i];
            if (rangePredefinedType != range_converter_1.FormatConditionRangeSetPredefinedType.None && rangePredefinedType != range_converter_1.FormatConditionRangeSetPredefinedType.Custom
                && FormatConditionRangeGenerator._isStylesEqual(actualStyles, func(rangePredefinedType).actualStyles))
                return rangePredefinedType;
        }
        return range_converter_1.FormatConditionRangeSetPredefinedType.Custom;
    };
    FormatConditionRangeGenerator.getGradientPredefinedType = function (actualStyles, func) {
        var enumValues = _helper_classes_1.EnumManager.getValues(range_converter_1.FormatConditionRangeGradientPredefinedType);
        for (var i = 0; i < enumValues.length; i++) {
            var rangePredefinedType = enumValues[i];
            if (rangePredefinedType != range_converter_1.FormatConditionRangeGradientPredefinedType.None && rangePredefinedType != range_converter_1.FormatConditionRangeGradientPredefinedType.Custom
                && FormatConditionRangeGenerator._isStylesEqual(actualStyles, func(rangePredefinedType).actualStyles))
                return rangePredefinedType;
        }
        return range_converter_1.FormatConditionRangeGradientPredefinedType.Custom;
    };
    FormatConditionRangeGenerator.calculateRangePercentValues = function (segmentCount) {
        var values = [];
        for (var i = 0; i < segmentCount; i++) {
            values.push(FormatConditionRangeGenerator._calculateRangePercent(i, segmentCount));
        }
        return values;
    };
    FormatConditionRangeGenerator.compareValues = function (val1, val2, changeType) {
        var negativeInfinity = negativeInfinity;
        var compare = function (a, b) {
            if (a == b) {
                return 0;
            }
            if (!a) {
                return -1;
            }
            if (!b) {
                return 1;
            }
            return a > b ? 1 : -1;
        };
        if (changeType && !!val1 && !!val2) {
            var firstNegativeInfinity = (val1 == negativeInfinity), secondNegativeInfinity = (val2 == negativeInfinity);
            if (firstNegativeInfinity && secondNegativeInfinity) {
                return 0;
            }
            if (firstNegativeInfinity) {
                return -1;
            }
            if (secondNegativeInfinity) {
                return 1;
            }
        }
        return compare(val1, val2);
    };
    FormatConditionRangeGenerator._isStylesEqual = function (actual, predefined) {
        if (actual.length != predefined.length)
            return false;
        for (var i = 0; i < actual.length; i++) {
            if ((actual[i] != null && predefined[i] == null) ||
                (actual[i] == null && predefined[i] != null) ||
                !actual[i].equals(predefined[i]))
                return false;
        }
        return true;
    };
    FormatConditionRangeGenerator._getPercentRangeStops = function (rangeStopsCount) {
        var marks = new Array(rangeStopsCount);
        for (var i = 0; i < rangeStopsCount; i++) {
            marks.push(i * 100 / rangeStopsCount);
        }
        return marks;
    };
    FormatConditionRangeGenerator._calculateRangePercent = function (index, count, decimals) {
        if (decimals === void 0) { decimals = 0; }
        return Math.round(100 * (index / count));
    };
    FormatConditionRangeGenerator._generateRangeSet = function (segmentCount, dataType, dateTimeGroupInterval, createStyleProc) {
        var ranges = [];
        for (var i = 0; i < segmentCount; i++) {
            var rangeInfo = new range_info_1.RangeInfo();
            var value = !dateTimeGroupInterval ? FormatConditionRangeGenerator._calculateRangePercent(i, segmentCount) : FormatConditionRangeGenerator._calculateRangeDate(dateTimeGroupInterval, i, segmentCount);
            rangeInfo.value.setValue(value, _format_rules_common_1.fieldTypes[dataType]);
            rangeInfo.styleSettings(createStyleProc(i));
            ranges.push(rangeInfo);
        }
        return ranges;
    };
    FormatConditionRangeGenerator._calculateRangeDate = function (groupInterval, i, segmentCount) {
        var dateIndex = segmentCount - i - 1;
        switch (groupInterval) {
            case 'DateHour':
                return DateTime.addHours(-dateIndex);
            case 'DateHourMinute':
                return DateTime.addMinutes(-dateIndex);
            case 'DateHourMinuteSecond':
                return DateTime.addSeconds(-dateIndex);
            case 'DayMonthYear':
            case 'None':
                return DateTime.addDays(-dateIndex);
            case 'MonthYear':
                return DateTime.addMonths(-dateIndex);
            case 'QuarterYear':
                return DateTime.addMonths(-dateIndex * 3);
            case 'Year':
                return DateTime.addYears(-dateIndex).getFullYear();
            case 'WeekOfMonth':
            case 'WeekOfYear':
            case 'Second':
            case 'Quarter':
            case 'Hour':
            case 'Minute':
            case 'Month':
            case 'DayOfWeek':
            case 'DayOfYear':
            case 'Day':
            default:
                return i;
        }
    };
    return FormatConditionRangeGenerator;
}());
exports.FormatConditionRangeGenerator = FormatConditionRangeGenerator;
var DateTime = (function () {
    function DateTime() {
    }
    DateTime.addHours = function (v) {
        var date = new Date();
        date.setTime(date.getTime() + (v * 60 * 60 * 1000));
        return date;
    };
    DateTime.addMinutes = function (v) {
        var date = new Date();
        date.setTime(date.getTime() + (v * 60 * 1000));
        return date;
    };
    DateTime.addSeconds = function (v) {
        var date = new Date();
        date.setTime(date.getTime() + (v * 1000));
        return date;
    };
    DateTime.addDays = function (v) {
        var date = new Date();
        date.setTime(date.getTime() + (v * 24 * 60 * 60 * 1000));
        return date;
    };
    DateTime.addMonths = function (v) {
        var date = new Date();
        var year = date.getFullYear();
        var newMonth = date.getMonth() + v;
        var month = newMonth % 12;
        if (month < 0) {
            month += 12;
        }
        date.setMonth(month);
        date.setFullYear(year + (newMonth - month) / 12);
        return date;
    };
    DateTime.addYears = function (v) {
        var date = new Date();
        date.setFullYear(date.getFullYear() + v);
        return date;
    };
    return DateTime;
}());
