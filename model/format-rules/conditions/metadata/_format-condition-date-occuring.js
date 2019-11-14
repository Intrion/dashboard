/**
* DevExpress Dashboard (_format-condition-date-occuring.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var enums_1 = require("../../../enums");
var _format_condition_style_base_1 = require("./_format-condition-style-base");
var ko = require("knockout");
var _common_1 = require("../../../../data/_common");
var parseFilterDateType = function (typeModel) {
    return _common_1.parseFlagsEnumType(typeModel, enums_1.FilterDateType.None, FilterDateTypeDictionary);
};
var serializeFilterDateType = function (val) {
    return _common_1.serializeFlagsEnumType(val, 'None', FilterDateTypeDictionary);
};
var getFilterDateTypeValues = function (val) {
    return _common_1.getFlagsEnumTypeValues(val, FilterDateTypeDictionary, 'key');
};
var FilterDateTypeDictionary = {
    'BeyondThisYear': enums_1.FilterDateType.BeyondThisYear,
    'LaterThisYear': enums_1.FilterDateType.LaterThisYear,
    'LaterThisMonth': enums_1.FilterDateType.LaterThisMonth,
    'LaterThisWeek': enums_1.FilterDateType.LaterThisWeek,
    'NextWeek': enums_1.FilterDateType.NextWeek,
    'Tomorrow': enums_1.FilterDateType.Tomorrow,
    'Today': enums_1.FilterDateType.Today,
    'Yesterday': enums_1.FilterDateType.Yesterday,
    'EarlierThisWeek': enums_1.FilterDateType.EarlierThisWeek,
    'LastWeek': enums_1.FilterDateType.LastWeek,
    'EarlierThisMonth': enums_1.FilterDateType.EarlierThisMonth,
    'EarlierThisYear': enums_1.FilterDateType.EarlierThisYear,
    'PriorThisYear': enums_1.FilterDateType.PriorThisYear,
    'Empty': enums_1.FilterDateType.Empty,
    'Beyond': enums_1.FilterDateType.Beyond,
    'ThisWeek': enums_1.FilterDateType.ThisWeek,
    'ThisMonth': enums_1.FilterDateType.ThisMonth,
    'MonthAfter1': enums_1.FilterDateType.MonthAfter1,
    'MonthAfter2': enums_1.FilterDateType.MonthAfter2,
    'MonthAgo1': enums_1.FilterDateType.MonthAgo1,
    'MonthAgo2': enums_1.FilterDateType.MonthAgo2,
    'MonthAgo3': enums_1.FilterDateType.MonthAgo3,
    'MonthAgo4': enums_1.FilterDateType.MonthAgo4,
    'MonthAgo5': enums_1.FilterDateType.MonthAgo5,
    'MonthAgo6': enums_1.FilterDateType.MonthAgo6,
    'Earlier': enums_1.FilterDateType.Earlier
};
exports.dateType = {
    propertyName: 'dateType', modelName: '@DateType', defaultVal: "Yesterday",
    editor: _base_metadata_1.editorTemplates.enumFlagsTypeSelector,
    editorOptions: {
        getFilterDateTypeValues: getFilterDateTypeValues,
        filterDateTypeDictionary: FilterDateTypeDictionary
    },
    from: function (d) { return ko.observable(parseFilterDateType(d)); }, toJsonObject: serializeFilterDateType,
    values: {
        "BeyondThisYear": "DashboardWebStringId.ConditionalFormatting.DateType.BeyondThisYear",
        "LaterThisYear": "DashboardWebStringId.ConditionalFormatting.DateType.LaterThisYear",
        "LaterThisMonth": "DashboardWebStringId.ConditionalFormatting.DateType.LaterThisMonth",
        "LaterThisWeek": "DashboardWebStringId.ConditionalFormatting.DateType.LaterThisWeek",
        "NextWeek": "DashboardWebStringId.ConditionalFormatting.DateType.NextWeek",
        "Tomorrow": "DashboardWebStringId.ConditionalFormatting.DateType.Tomorrow",
        "Today": "DashboardWebStringId.ConditionalFormatting.DateType.Today",
        "Yesterday": "DashboardWebStringId.ConditionalFormatting.DateType.Yesterday",
        "EarlierThisWeek": "DashboardWebStringId.ConditionalFormatting.DateType.EarlierThisWeek",
        "LastWeek": "DashboardWebStringId.ConditionalFormatting.DateType.LastWeek",
        "EarlierThisMonth": "DashboardWebStringId.ConditionalFormatting.DateType.EarlierThisMonth",
        "EarlierThisYear": "DashboardWebStringId.ConditionalFormatting.DateType.EarlierThisYear",
        "PriorThisYear": "DashboardWebStringId.ConditionalFormatting.DateType.PriorThisYear",
        "Empty": "DashboardWebStringId.ConditionalFormatting.DateType.Empty",
        "Beyond": "DashboardWebStringId.ConditionalFormatting.DateType.Beyond",
        "ThisWeek": "DashboardWebStringId.ConditionalFormatting.DateType.ThisWeek",
        "ThisMonth": "DashboardWebStringId.ConditionalFormatting.DateType.ThisMonth",
        "MonthAfter1": "DashboardWebStringId.ConditionalFormatting.DateType.MonthAfter1",
        "MonthAfter2": "DashboardWebStringId.ConditionalFormatting.DateType.MonthAfter2",
        "MonthAgo1": "DashboardWebStringId.ConditionalFormatting.DateType.MonthAgo1",
        "MonthAgo2": "DashboardWebStringId.ConditionalFormatting.DateType.MonthAgo2",
        "MonthAgo3": "DashboardWebStringId.ConditionalFormatting.DateType.MonthAgo3",
        "MonthAgo4": "DashboardWebStringId.ConditionalFormatting.DateType.MonthAgo4",
        "MonthAgo5": "DashboardWebStringId.ConditionalFormatting.DateType.MonthAgo5",
        "MonthAgo6": "DashboardWebStringId.ConditionalFormatting.DateType.MonthAgo6",
        "Earlier": "DashboardWebStringId.ConditionalFormatting.DateType.Earlier"
    }
};
exports.FormatConditionDateOccurringSerializationsInfo = _format_condition_style_base_1.formatConditionStyleBaseSerializationsInfo.concat([exports.dateType]);
