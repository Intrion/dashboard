/**
* DevExpress Dashboard (_data-controller-base.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _render_helper_1 = require("../../viewer-parts/widgets/_render-helper");
var _utils_1 = require("../_utils");
var _localizer_1 = require("../_localizer");
var _localization_ids_1 = require("../_localization-ids");
var $ = require("jquery");
var _z_index_1 = require("../_z-index");
exports.DATA_POSTFIX = '_Data';
exports.DEFAULT_SUBTITLE_SEPARATOR = ' - ';
var dataControllerBase = (function () {
    function dataControllerBase(options) {
        this.deltaIndicatorTypes = ["none", "up", "down", "warning"];
        this.multiData = options ? options.multiData : undefined;
        this.viewModel = options ? options.viewModel : undefined;
        this.cfModel = options ? options.cfModel : undefined;
        this.drillDownState = options ? options.drillDownState : undefined;
        this.useNeutralFilterMode = options ? options.useNeutralFilterMode : undefined;
    }
    dataControllerBase.prototype.isMultiselectable = function () {
        return false;
    };
    dataControllerBase.prototype.update = function (selectedValues, encodeHtml) {
    };
    dataControllerBase.prototype.getTitle = function (axisPoint, separator, saveOrder) {
        var axisName = axisPoint.getAxisName(), values;
        if (this.drillDownState[axisName]) {
            var text = axisPoint.getDisplayText();
            return text == undefined ? '' : text;
        }
        else {
            values = axisPoint.getDisplayPath();
            if (!saveOrder) {
                values = values.reverse();
            }
            return values.join(separator ? separator : exports.DEFAULT_SUBTITLE_SEPARATOR);
        }
    };
    dataControllerBase.prototype.getAxisPointsHash = function () {
    };
    dataControllerBase.prototype._getMeasureValueByAxisPoints = function (axisPoints, cfMeasureId) {
        var slice = this._getSlice(axisPoints);
        return slice.getConditionalFormattingMeasureValue(cfMeasureId);
    };
    dataControllerBase.prototype._getSlice = function (axisPoints) {
        var slice = this.multiData;
        $.each(axisPoints, function (_, axisPoint) {
            slice = slice.getSlice(axisPoint);
        });
        return slice;
    };
    dataControllerBase.prototype._getZeroPosition = function (zeroPositionMeasureId, columnAxisName, rowAxisName) {
        var that = this, currentZeroPosition, zeroPosition, columnRootPoint, rowRootPoint;
        columnRootPoint = that.multiData.getAxis(columnAxisName).getRootPoint();
        rowRootPoint = that.multiData.getAxis(rowAxisName).getRootPoint();
        currentZeroPosition = that._getMeasureValueByAxisPoints([columnRootPoint, rowRootPoint], zeroPositionMeasureId);
        if (currentZeroPosition !== undefined && currentZeroPosition !== null)
            zeroPosition = currentZeroPosition;
        return zeroPosition;
    };
    dataControllerBase.prototype._getStyleIndexes = function (rule, cellInfo, points) {
    };
    dataControllerBase.prototype._getStyleSettingsInfoCore = function (cellInfo, rules, columnAxisName, rowAxisName) {
        var that = this, currentStyleIndexes = [], uniqueIndexes = [], styleAndRuleMappingTable = {}, ruleIndex, currentNormalizedValue, normalizedValue, zeroPosition, styleSettingsInfo, points = [];
        if (rules.length > 0) {
            $.each(rules, function (_, rule) {
                currentStyleIndexes = that._getStyleIndexes(rule, cellInfo, points);
                if (currentStyleIndexes.length > 0) {
                    ruleIndex = that.cfModel.RuleModels ? that.cfModel.RuleModels.indexOf(rule) : -1;
                    $.each(currentStyleIndexes, function (_, styleIndex) {
                        if (uniqueIndexes[styleIndex] === undefined) {
                            uniqueIndexes.push(styleIndex);
                            styleAndRuleMappingTable[styleIndex] = ruleIndex;
                        }
                    });
                }
                currentNormalizedValue = that._getMeasureValueByAxisPoints(points, rule.NormalizedValueMeasureId);
                if (currentNormalizedValue !== undefined && currentNormalizedValue !== null) {
                    normalizedValue = currentNormalizedValue;
                    zeroPosition = that._getZeroPosition(rule.ZeroPositionMeasureId, columnAxisName, rowAxisName);
                }
            });
            styleSettingsInfo = {
                styleIndexes: uniqueIndexes,
                styleAndRuleMappingTable: styleAndRuleMappingTable
            };
            if (normalizedValue !== undefined && zeroPosition !== undefined) {
                styleSettingsInfo.normalizedValue = normalizedValue;
                styleSettingsInfo.zeroPosition = zeroPosition;
            }
        }
        return styleSettingsInfo;
    };
    dataControllerBase.prototype._generateSparklineOptions = function (data, options, format) {
        return {
            dataSource: data,
            type: options.ViewType.toLowerCase(),
            onIncidentOccurred: _render_helper_1.RenderHelper.widgetIncidentOccurred,
            showMinMax: options.HighlightMinMaxPoints,
            showFirstLast: options.HighlightStartEndPoints,
            tooltip: {
                _justify: true,
                container: _utils_1.tooltipContainerSelector,
                customizeTooltip: function () {
                    var startText = _localizer_1.localizer.getString(_localization_ids_1.localizationId.sparkline.TooltipStartValue), endText = _localizer_1.localizer.getString(_localization_ids_1.localizationId.sparkline.TooltipEndValue), minText = _localizer_1.localizer.getString(_localization_ids_1.localizationId.sparkline.TooltipMinValue), maxText = _localizer_1.localizer.getString(_localization_ids_1.localizationId.sparkline.TooltipMaxValue), html = "<table style='border-spacing:0px;'>", template = "</td><td style='width: 15px'></td><td style='text-align: right'>";
                    html += "<tr><td>" + startText + template + format(this.originalFirstValue) + "</td></tr>";
                    html += "<tr><td>" + endText + template + format(this.originalLastValue) + "</td></tr>";
                    html += "<tr><td>" + minText + template + format(this.originalMinValue) + "</td></tr>";
                    html += "<tr><td>" + maxText + template + format(this.originalMaxValue) + "</td></tr>";
                    html += "</table>";
                    return { html: html };
                },
                zIndex: _z_index_1.zIndex.dashboardItemTooltips
            }
        };
    };
    dataControllerBase.prototype._convertIndicatorType = function (type) {
        return this.deltaIndicatorTypes[type];
    };
    return dataControllerBase;
}());
exports.dataControllerBase = dataControllerBase;
