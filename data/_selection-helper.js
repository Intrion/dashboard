﻿/**
* DevExpress Dashboard (_selection-helper.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = require("./_utils");
var selectionHelper = (function () {
    function selectionHelper() {
    }
    selectionHelper.setSelectedArguments = function (widget, values, state) {
        if (!values) {
            return;
        }
        for (var valueIndex = 0; valueIndex < values.length; valueIndex++) {
            this._selectArgument(widget, values[valueIndex], state);
        }
    };
    selectionHelper.setSelectedSeries = function (widget, values, state) {
        if (!values) {
            return;
        }
        for (var valueIndex = 0; valueIndex < values.length; valueIndex++) {
            this._selectSeries(widget, values[valueIndex], state);
        }
    };
    selectionHelper.setSelectedPoint = function (widget, seriesValue, argumentValue, state) {
        var that = this;
        if (seriesValue != null && argumentValue == null) {
            that._selectSeries(widget, seriesValue, state);
        }
        if (seriesValue == null && argumentValue != null) {
            that._selectArgument(widget, argumentValue, state);
        }
        if (seriesValue != null && argumentValue != null) {
            var seriesList = widget.getAllSeries();
            for (var i = 0; i < seriesList.length; i++) {
                if (that._checkWidgetCorrespondsToValue(seriesList[i], seriesValue)) {
                    this._selectSeriesPoints(seriesList[i], argumentValue, state);
                }
            }
        }
    };
    selectionHelper.setSelectedWidgetViewer = function (widget, values, state) {
        if (!values) {
            return;
        }
        for (var valueIndex = 0; valueIndex < values.length; valueIndex++) {
            this._selectValue(widget, values[valueIndex], state);
        }
    };
    selectionHelper.selectWholePie = function (widgetViewer, state) {
        var seriesList = widgetViewer.getAllSeries();
        for (var i = 0; i < seriesList.length; i++) {
            this._selectWidget(seriesList[i], state);
        }
    };
    selectionHelper._selectSeries = function (widget, seriesValue, state) {
        var seriesList = widget.getAllSeries();
        for (var i = 0; i < seriesList.length; i++) {
            this._selectValue(seriesList[i], seriesValue, state);
        }
    };
    selectionHelper._selectArgument = function (widget, argumentValue, state) {
        var seriesList = widget.getAllSeries();
        for (var i = 0; i < seriesList.length; i++) {
            this._selectSeriesPoints(seriesList[i], argumentValue, state);
        }
    };
    selectionHelper._selectSeriesPoints = function (series, argumentValue, state) {
        var points = series.getAllPoints();
        for (var j = 0; j < points.length; j++) {
            this._selectValue(points[j], argumentValue, state);
        }
    };
    selectionHelper._selectValue = function (widget, value, state) {
        if (this._checkWidgetCorrespondsToValue(widget, value)) {
            this._selectWidget(widget, state);
        }
    };
    selectionHelper._selectWidget = function (widget, state) {
        if (state) {
            widget.select();
        }
        else {
            widget.clearSelection();
        }
    };
    selectionHelper._checkWidgetCorrespondsToValue = function (widget, value) {
        var tag = widget.tag;
        if (!tag || !value)
            return false;
        if (tag)
            tag = _utils_1.getTagValue(tag);
        if (tag && !Array.isArray(tag) && !Array.isArray(value)) {
            throw Error("Internal Error: incorrect values for selection");
        }
        return _utils_1.checkValuesAreEqual(tag, value);
    };
    return selectionHelper;
}());
exports.selectionHelper = selectionHelper;
