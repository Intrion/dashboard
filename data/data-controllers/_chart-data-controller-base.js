/**
* DevExpress Dashboard (_chart-data-controller-base.js)
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
var _data_controller_base_1 = require("./_data-controller-base");
var _localizer_1 = require("../_localizer");
var _localization_ids_1 = require("../_localization-ids");
var _item_data_axis_names_1 = require("../../viewer-parts/viewer/_item-data-axis-names");
var _utils_1 = require("../_utils");
var Color = require("devextreme/color");
var chartDataControllerBase = (function (_super) {
    __extends(chartDataControllerBase, _super);
    function chartDataControllerBase(options) {
        var _this = _super.call(this, options) || this;
        _this.elementCustomColor = options.elementCustomColor;
        return _this;
    }
    chartDataControllerBase._getLegendSeriesName = function (seriesName) {
    };
    chartDataControllerBase._getLegendSeriesDisplayName = function (seriesName) {
    };
    chartDataControllerBase.prototype.getArgument = function (argumentAxisPoint) {
        if (this.isQualitativeArgument()) {
            return this.getTitle(argumentAxisPoint, '\n');
        }
        else if (this.isDiscreteArgument()) {
            if (argumentAxisPoint.getParent() != null) {
                return argumentAxisPoint.getDisplayText() || "";
            }
            else {
                return _localizer_1.localizer.getString(_localization_ids_1.localizationId.ChartTotalValue);
            }
        }
        else {
            return argumentAxisPoint.getValue();
        }
    };
    chartDataControllerBase.prototype.getArgumentAxisPoints = function (argumentId) {
        if (this.viewModel) {
            var id = argumentId ? argumentId : this.viewModel.Argument.SummaryArgumentMember, argumentAxis = this._getArgumentAxis();
            return argumentAxis ? argumentAxis.getPointsByDimension(id) : [];
        }
        else {
            return [];
        }
    };
    chartDataControllerBase.prototype.getSeriesAxisPoints = function (seriesId) {
        var seriesAxis = this._getSeriesAxis(), id = seriesId ? seriesId : this.viewModel.SummarySeriesMember;
        return seriesAxis ? seriesAxis.getPointsByDimension(id) : [];
    };
    chartDataControllerBase.prototype.getSingleArgumentDimensionFormat = function () {
        var argumentDimension = this._getSingleArgumentDimension();
        return argumentDimension ? argumentDimension.getFormat() : undefined;
    };
    chartDataControllerBase.prototype.getColor = function (argumentAxisPoint, seriesAxisPoint, measuesIds, colorMeasureId) {
        var that = this, color = that._getColorFromData(argumentAxisPoint, seriesAxisPoint, colorMeasureId);
        return that._getElementCustomColor(argumentAxisPoint, seriesAxisPoint, measuesIds, color);
    };
    chartDataControllerBase.prototype.isDiscreteArgument = function () {
        return this.viewModel && (this.viewModel.Argument.Type === 'String');
    };
    chartDataControllerBase.prototype.isQualitativeArgument = function () {
        return this._getArgumentAxisDimensions().length > 1 && !this.drillDownState[_item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis];
    };
    chartDataControllerBase.prototype.isSingleArgument = function () {
        return this._getArgumentAxisDimensions().length == 1 || this.drillDownState[_item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis] != null;
    };
    chartDataControllerBase.prototype.hasSeriesPoints = function () {
        return this.viewModel && !!this.viewModel.SummarySeriesMember;
    };
    chartDataControllerBase.prototype._getElementCustomColor = function (argumentAxisPoint, seriesAxisPoint, measuesIds, color) {
        var that = this, dxColor = new Color(color), newColor;
        if (that.elementCustomColor && color) {
            var customElementColorEventArgs = {
                targetElement: [argumentAxisPoint, seriesAxisPoint],
                measureIds: measuesIds,
                color: dxColor.toHex()
            };
            that.elementCustomColor(customElementColorEventArgs);
            newColor = new Color(customElementColorEventArgs.color);
            if (!newColor.colorIsInvalid && customElementColorEventArgs.color !== dxColor.toHex()) {
                return customElementColorEventArgs.color;
            }
        }
        return color;
    };
    chartDataControllerBase.prototype._getColorFromData = function (argumentAxisPoint, seriesAxisPoint, colorMeasureId) {
        var that = this, colorArgumentAxisPoint = argumentAxisPoint ? argumentAxisPoint.getParentByDimensionId(that.viewModel.ArgumentColorDimension) : undefined, colorSeriesAxisPoint = seriesAxisPoint.getParentByDimensionId(that.viewModel.SeriesColorDimension);
        if (_utils_1.type.isDefined(colorMeasureId)) {
            try {
                var colorValue = that._getCrossSlice(colorArgumentAxisPoint, colorSeriesAxisPoint).getColorMeasureValue(colorMeasureId);
                return colorValue !== null ? _utils_1.toColor(colorValue) : undefined;
            }
            catch (e) {
                return undefined;
            }
        }
        return undefined;
    };
    chartDataControllerBase.prototype._getCrossSlice = function (argumentAxisPoint, seriesAxisPoint) {
        var slice = this.multiData.getSlice(seriesAxisPoint);
        return argumentAxisPoint ? slice.getSlice(argumentAxisPoint) : slice;
    };
    chartDataControllerBase.prototype._getArgumentAxis = function () {
        return this.multiData ? this.multiData.getAxis(_item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis) : undefined;
    };
    chartDataControllerBase.prototype._getSeriesAxis = function () {
        return this.multiData ? this.multiData.getAxis(_item_data_axis_names_1.itemDataAxisNames.chartSeriesAxis) : undefined;
    };
    chartDataControllerBase.prototype._getArgumentAxisDimensions = function () {
        var argumentAxis = this._getArgumentAxis(), dimensions = argumentAxis ? argumentAxis.getDimensions() : [];
        return dimensions ? dimensions : [];
    };
    chartDataControllerBase.prototype._getSingleArgumentDimension = function () {
        var argumentDimensions = this._getArgumentAxisDimensions();
        if (argumentDimensions.length > 0) {
            return argumentDimensions[argumentDimensions.length - 1];
        }
        else {
            return undefined;
        }
    };
    return chartDataControllerBase;
}(_data_controller_base_1.dataControllerBase));
exports.chartDataControllerBase = chartDataControllerBase;
