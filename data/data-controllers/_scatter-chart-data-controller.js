﻿/**
* DevExpress Dashboard (_scatter-chart-data-controller.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _chart_data_controller_1 = require("./_chart-data-controller");
var _formatter_1 = require("../_formatter");
var _utils_1 = require("../_utils");
var _render_helper_1 = require("../../viewer-parts/widgets/_render-helper");
var $ = require("jquery");
var scatterChartDataController = (function (_super) {
    __extends(scatterChartDataController, _super);
    function scatterChartDataController(options) {
        return _super.call(this, options) || this;
    }
    scatterChartDataController.prototype.getArgument = function (argumentAxisPoint) {
        var measureId = this.viewModel.AxisXDataMember, slice = this.multiData.getSlice(argumentAxisPoint);
        return slice.getMeasureValue(measureId).getValue();
    };
    scatterChartDataController.prototype.getArgumentBindingValue = function (argumentPoint, pointIndex, range) {
        return this.getArgument(argumentPoint);
    };
    scatterChartDataController.prototype.getArgumentDisplayPath = function (axisPoint) {
        return axisPoint.getDisplayPath().reverse().join(', ');
    };
    scatterChartDataController.prototype.getArgumentFormat = function () {
        return this.multiData && this.multiData.getMeasureFormat(this.viewModel.AxisXDataMember);
    };
    scatterChartDataController.prototype.getArgumentText = function (argument) {
        if (this.viewModel.AxisXPercentValues)
            return _formatter_1.formatPercentValue(argument.value);
        if (this.viewModel.AxisXScientificValues)
            return _formatter_1.formatScientificAxisValue(argument.value);
        return _formatter_1.formatAxisValue(argument.value, argument.min, argument.max);
    };
    scatterChartDataController.prototype._getTooltipHtml = function (series, point, seriesFormats, encodeHtml, color) {
        var that = this, html = '', text, slice = that.multiData.getSlice(point.tag.axisPoint), measureIds = that._getMeasureIds();
        $.each(measureIds, function (index, measureId) {
            text = that.multiData.getMeasureById(measureId).name + ': ' + slice.getMeasureValue(measureId).getDisplayText();
            text = encodeHtml ? _utils_1.encodeHtml(text) : text;
            html += '<tr><td>' + (color && index === 0 ? _render_helper_1.RenderHelper.rectangle(color, 10, 10) : '') + '&nbsp;</td><td>' + text + '</td></tr>';
        });
        return '<table>' + html + '</table>';
    };
    scatterChartDataController.prototype._getMeasureIds = function () {
        var measureIds = [];
        measureIds.push(this.viewModel.AxisXDataMember);
        $.each(this.viewModel.Panes[0].SeriesTemplates[0].DataMembers, function (_, measureId) {
            measureIds.push(measureId);
        });
        return measureIds;
    };
    scatterChartDataController.prototype.getTooltipArgumentText = function (obj) {
        return this._getTooltipArgumentText(obj.point.tag.axisPoint);
    };
    scatterChartDataController.prototype._getTooltipArgumentText = function (axisPoint) {
        var axisName = axisPoint.getAxisName();
        if (this.drillDownState[axisName]) {
            return axisPoint.getDisplayText();
        }
        else {
            return this.getArgumentDisplayPath(axisPoint);
        }
    };
    scatterChartDataController.prototype._customizePointLabelText = function (valueContainer, pointLabel, seriesInfo) {
        var that = this, axisPoint = valueContainer.point.tag.axisPoint, argument = function () {
            return that._getTooltipArgumentText(axisPoint);
        }, weight = function () {
            var dataMembers = that.viewModel.Panes[0].SeriesTemplates[0].DataMembers;
            if (dataMembers.length > 1) {
                var measureId = dataMembers[1];
                var slice = that.multiData.getSlice(axisPoint);
                return slice.getMeasureValue(measureId).getDisplayText();
            }
            return null;
        }, values = function () {
            var text = '', measureIds = that._getMeasureIds(), slice = that.multiData.getSlice(axisPoint);
            $.each(measureIds, function (index, measureId) {
                text += (index > 0 ? ' - ' : '') + slice.getMeasureValue(measureId).getDisplayText();
            });
            return text;
        };
        switch (pointLabel.scatterContent) {
            case 'Argument':
                return argument();
            case 'Weight':
                return weight();
            case 'Values':
                return values();
            case 'ArgumentAndWeight':
                return argument() + ": " + weight();
            case 'ArgumentAndValues':
                return argument() + ": " + values();
            default:
                return null;
        }
    };
    scatterChartDataController.prototype.isQualitativeArgument = function () {
        return false;
    };
    scatterChartDataController.prototype.isDiscreteArgument = function () {
        return false;
    };
    scatterChartDataController.prototype.showPointLabels = function (pointLabelInfo) {
        return pointLabelInfo && pointLabelInfo.showPointLabels;
    };
    return scatterChartDataController;
}(_chart_data_controller_1.chartDataController));
exports.scatterChartDataController = scatterChartDataController;
