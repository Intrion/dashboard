/**
* DevExpress Dashboard (_dimension.js)
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
var _base_metadata_1 = require("../../metadata/_base-metadata");
var _data_item_1 = require("./_data-item");
exports.dateTimeGroupIntervalsDict = {
    "Year": "DashboardStringId.DateTimeGroupIntervalYear",
    "Quarter": "DashboardStringId.DateTimeGroupIntervalQuarter",
    "Month": "DashboardStringId.DateTimeGroupIntervalMonth",
    "Day": "DashboardStringId.DateTimeGroupIntervalDay",
    "Hour": "DashboardStringId.DateTimeGroupIntervalHour",
    "Minute": "DashboardStringId.DateTimeGroupIntervalMinute",
    "Second": "DashboardStringId.DateTimeGroupIntervalSecond",
    "DayOfYear": "DashboardStringId.DateTimeGroupIntervalDayOfYear",
    "DayOfWeek": "DashboardStringId.DateTimeGroupIntervalDayOfWeek",
    "WeekOfYear": "DashboardStringId.DateTimeGroupIntervalWeekOfYear",
    "WeekOfMonth": "DashboardStringId.DateTimeGroupIntervalWeekOfMonth",
    "MonthYear": "DashboardStringId.DateTimeGroupIntervalMonthYear",
    "QuarterYear": "DashboardStringId.DateTimeGroupIntervalQuarterYear",
    "DayMonthYear": "DashboardStringId.DateTimeGroupIntervalDayMonthYear",
    "DateHour": "DashboardStringId.DateTimeGroupIntervalDateHour",
    "DateHourMinute": "DashboardStringId.DateTimeGroupIntervalDateHourMinute",
    "DateHourMinuteSecond": "DashboardStringId.DateTimeGroupIntervalDateHourMinuteSecond",
    "None": "DashboardStringId.DateTimeGroupIntervalExactDate"
};
exports.dimensionGroupIndex = { propertyName: "groupIndex", modelName: "@GroupIndex" };
exports.dateTimeGroupInterval = {
    propertyName: "dateTimeGroupInterval", modelName: "@DateTimeGroupInterval", displayName: "DashboardWebStringId.Dimension.GroupInterval", defaultVal: "Year", editor: _base_metadata_1.editorTemplates.combobox, values: exports.dateTimeGroupIntervalsDict
};
exports.rangeDateTimeGroupInterval = {
    propertyName: "dateTimeGroupInterval", modelName: "@DateTimeGroupInterval", displayName: "DashboardWebStringId.Dimension.GroupInterval", defaultVal: "Year", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Year": "DashboardStringId.DateTimeGroupIntervalYear",
        "MonthYear": "DashboardStringId.DateTimeGroupIntervalMonthYear",
        "QuarterYear": "DashboardStringId.DateTimeGroupIntervalQuarterYear",
        "DayMonthYear": "DashboardStringId.DateTimeGroupIntervalDayMonthYear",
        "DateHour": "DashboardStringId.DateTimeGroupIntervalDateHour",
        "DateHourMinute": "DashboardStringId.DateTimeGroupIntervalDateHourMinute",
        "DateHourMinuteSecond": "DashboardStringId.DateTimeGroupIntervalDateHourMinuteSecond",
        "None": "DashboardStringId.DateTimeGroupIntervalExactDate"
    }
};
exports.sortOrderBase = {
    propertyName: "sortOrder", modelName: "@SortOrder", displayName: "DevExpress.DashboardCommon.DynamicListLookUpSettings.SortOrder", defaultVal: "Ascending", editor: _base_metadata_1.editorTemplates.buttonGroup
};
exports.sortOrderOlap = __assign({ values: {
        "Ascending": "DevExpress.DashboardCommon.DimensionSortOrder.Ascending",
        "Descending": "DevExpress.DashboardCommon.DimensionSortOrder.Descending",
        "None": "DevExpress.DashboardCommon.DimensionSortOrder.None"
    } }, exports.sortOrderBase);
exports.sortOrderNonOlap = __assign({ values: {
        "Ascending": "DevExpress.DashboardCommon.DimensionSortOrder.Ascending",
        "Descending": "DevExpress.DashboardCommon.DimensionSortOrder.Descending"
    } }, exports.sortOrderBase);
exports.sortMode = {
    propertyName: "sortMode", modelName: "@SortMode", displayName: "DashboardWebStringId.Dimension.SortMode", defaultVal: "Value", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "DisplayText": "DashboardStringId.CommandDimensionSortModeDisplayText",
        "Value": "DashboardStringId.CommandDimensionSortModeValue",
        "ID": "DashboardStringId.CommandDimensionSortModeID",
        "Key": "DashboardStringId.CommandDimensionSortModeKey"
    }
};
exports.textGroupInterval = {
    propertyName: "textGroupInterval", modelName: "@TextGroupInterval", displayName: "DashboardWebStringId.Dimension.GroupInterval", defaultVal: "None", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "None": "DashboardStringId.GroupIntervalNone",
        "Alphabetical": "DashboardStringId.TextGroupIntervalAlphabetical"
    }
};
exports.isDiscreteNumericScale = { propertyName: "isDiscreteNumericScale", modelName: "@IsDiscreteScale", displayName: "DashboardWebStringId.Dialog.ArgumentMode", defaultVal: false, editor: _base_metadata_1.editorTemplates.boolDiscreteContinuous, from: _base_metadata_1.parseBool };
exports.groupChildValues = { propertyName: "groupChildValues", modelName: "@GroupChildValues", displayName: "DashboardStringId.CommandDimensionGroupChildValues", defaultVal: false, editor: _base_metadata_1.editorTemplates.boolYesNo, from: _base_metadata_1.parseBool };
exports.coloringMode = {
    propertyName: "coloringMode", modelName: "@ColoringMode", displayName: "DashboardWebStringId.ColoringOptions", defaultVal: "Default", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Default": "DashboardWebStringId.ColoringModeAuto",
        "None": "DashboardWebStringId.ColoringModeOff",
        "Hue": "DashboardWebStringId.ColoringModeOn"
    }
};
exports.sortMeasure = { propertyName: "sortMeasure", modelName: "@SortByMeasure", displayName: "DashboardWebStringId.DimensionSortBy" };
exports.realSortMode = { propertyName: "realSortMode", defaultVal: "DXValue", displayName: "DashboardWebStringId.DimensionSortBy", editor: _base_metadata_1.editorTemplates.combobox };
exports.topNOptionsEnabled = { propertyName: 'topNOptionsEnabled', modelName: '@TopNEnabled', displayName: "DashboardWebStringId.TopNEnabled", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.topNOptionsModeValues = {
    "Top": "DashboardWebStringId.TopN.Top",
    "Bottom": "DashboardWebStringId.TopN.Bottom"
};
exports.topNOptionsMode = {
    propertyName: 'topNOptionsMode', modelName: '@TopNMode', displayName: 'DashboardWebStringId.TopNMode', defaultVal: "Top", editor: _base_metadata_1.editorTemplates.buttonGroup, values: exports.topNOptionsModeValues
};
exports.topNOptionsCount = { propertyName: 'topNOptionsCount', modelName: '@TopNCount', displayName: 'DashboardStringId.SummaryTypeCount', defaultVal: 5, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel, editorOptions: { min: 1 }, validationRules: [_base_metadata_1.integerValidationRule] };
exports.topNOptionsMeasure = { propertyName: 'topNOptionsMeasureName', modelName: '@TopNMeasure', displayName: 'DashboardStringId.DescriptionItemMeasure', editor: _base_metadata_1.editorTemplates.combobox };
exports.topNOptionsShowOthers = { propertyName: 'topNOptionsShowOthers', modelName: '@TopNShowOthers', displayName: "DashboardWebStringId.ShowOthersValue", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.topNOptionsSerializationsInfo = [exports.topNOptionsEnabled, exports.topNOptionsMode, exports.topNOptionsCount, exports.topNOptionsMeasure, exports.topNOptionsShowOthers];
exports.dimensionItemSerializationsInfo = _data_item_1.dataItemSerializationsInfo
    .concat(exports.dimensionGroupIndex, exports.dateTimeGroupInterval, exports.sortOrderBase, exports.sortMeasure, exports.sortMode, exports.textGroupInterval, exports.isDiscreteNumericScale, exports.groupChildValues, exports.coloringMode)
    .concat(exports.topNOptionsSerializationsInfo);
