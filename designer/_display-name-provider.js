﻿/**
* DevExpress Dashboard (_display-name-provider.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _data_field_1 = require("../model/data-sources/_data-field");
var measure_1 = require("../model/data-item/measure");
var dimension_1 = require("../model/data-item/dimension");
var _dimension_1 = require("../model/data-item/metadata/_dimension");
var _measure_1 = require("../model/data-item/metadata/_measure");
var ko = require("knockout");
var _default_1 = require("../data/localization/_default");
function getDataItemContainerDisplayName(dataSourceBrowser, dashboardItem, dataItemContainer) {
    return dashboardItem._getDataItemContainerDisplayName(dataItemContainer, function (dataItem) { return getDataItemDisplayName(dataSourceBrowser, dashboardItem, dataItem); });
}
exports.getDataItemContainerDisplayName = getDataItemContainerDisplayName;
function getDataItemDisplayName(dataSourceBrowser, dataDashboardItem, dataItem) {
    var dataSourceName = dataDashboardItem.dataSource.peek(), queryName = dataDashboardItem.dataMember.peek(), dataMember = dataItem.dataMember(), cacheKey = createKey(dataSourceName, queryName, dataMember);
    if (!dataItem[cacheKey]) {
        var dataFieldObservable = ko.observable(null);
        dataSourceBrowser
            .findDataField(dataSourceName, queryName, dataMember, true)
            .done(function (dataField) {
            if (dataField) {
                dataFieldObservable(dataField);
            }
        });
        dataItem[cacheKey] = ko.computed(function () { return getDataItemDisplayNameByField(dataDashboardItem, dataItem, dataFieldObservable); });
    }
    return dataItem[cacheKey]();
}
exports.getDataItemDisplayName = getDataItemDisplayName;
function getDataItemDisplayNameByField(dataDashboardItem, dataItem, dataFieldObservable) {
    if (dataItem.name()) {
        return dataItem.name();
    }
    var dataField = dataFieldObservable();
    if (dataField) {
        return computeDataItemDisplayName(dataDashboardItem, dataItem, dataField);
    }
    else {
        return guessDataItemDisplayName(dataDashboardItem, dataItem);
    }
}
function createKey(dataSourceName, queryName, dataMemberName) {
    return "__dx_displayNameCache_" + [dataSourceName, queryName, dataMemberName].join("_");
}
function guessDataItemDisplayName(dataDashboardItem, dataItem) {
    var dataMember = dataItem.dataMember();
    var isOlap = _data_field_1.DataField.isOlap(dataMember);
    if (isOlap) {
        var parts = dataMember.split(_data_field_1.DataField.olapMarker());
        var length = parts.length - 1;
        return parts[length].substr(0, parts[length].length - 1);
    }
    else if (dataItem instanceof measure_1.Measure) {
        return _getMeasureDisplayName(dataDashboardItem, dataItem, dataMember);
    }
    else if (dataItem instanceof dimension_1.Dimension) {
        var timeGroupInterval = dataItem.dateTimeGroupInterval();
        var postfix = timeGroupInterval !== "Year" && timeGroupInterval !== "None" ?
            " (" + _default_1.getLocalizationById(_dimension_1.dateTimeGroupIntervalsDict[timeGroupInterval]) + ")" : "";
        return dataMember + postfix;
    }
    else {
        return dataMember;
    }
}
function computeDataItemDisplayName(dataDashboardItem, dataItem, dataField) {
    var displayName = dataField.displayName();
    var isOlap = _data_field_1.DataField.isOlap(dataItem.dataMember());
    if (isOlap) {
        return displayName;
    }
    else if (dataItem instanceof measure_1.Measure) {
        return _getMeasureDisplayName(dataDashboardItem, dataItem, displayName);
    }
    else if (dataItem instanceof dimension_1.Dimension) {
        var timeGroupInterval = dataItem.dateTimeGroupInterval();
        if (_data_field_1.IsDateTime(dataField.fieldType()) && timeGroupInterval !== "None") {
            return displayName + " (" + _default_1.getLocalizationById(_dimension_1.dateTimeGroupIntervalsDict[timeGroupInterval]) + ")";
        }
        else {
            return displayName;
        }
    }
    else {
        return displayName;
    }
}
function _getMeasureDisplayName(dataDashboardItem, measure, dataMemberDisplayName) {
    if (dataDashboardItem._isAttribute(measure)) {
        return dataMemberDisplayName;
    }
    if (!!measure.expression()) {
        return _default_1.getLocalizationById("DashboardWebStringId.Calculations.Expression");
    }
    var prefix = !!measure.calculation.calculation() && _default_1.getLocalizationById(measure.calculation.calculation().name);
    var postfix = " (" + _default_1.getLocalizationById(_measure_1.summaryTypeDict[measure.summaryType()]) + ")";
    return ((prefix && (prefix + " ")) || "") + dataMemberDisplayName + postfix;
}
