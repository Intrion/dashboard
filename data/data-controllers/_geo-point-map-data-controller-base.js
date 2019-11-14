/**
* DevExpress Dashboard (_geo-point-map-data-controller-base.js)
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
var $ = require("jquery");
var geoPointMapDataControllerBase = (function (_super) {
    __extends(geoPointMapDataControllerBase, _super);
    function geoPointMapDataControllerBase(options) {
        var _this = _super.call(this, options) || this;
        _this.axisPoints = [];
        _this._prepare();
        return _this;
    }
    geoPointMapDataControllerBase.prototype.getPoint = function (index, valueIndex) {
        var pointsCount = this._getPointsCount(index);
        return {
            lat: this._getLatitudeValue(index),
            lon: this._getLongitudeValue(index),
            latSel: this._getLatitudeUniqueValue(index),
            lonSel: this._getLongitudeUniqueValue(index),
            pointsCount: pointsCount,
            tooltipDimensions: pointsCount < 2 ? this._getTooltipDimensions(index) : [],
            tooltipMeasures: this._getTooltipMeasures(index)
        };
    };
    geoPointMapDataControllerBase.prototype.getCount = function () {
        return this.axisPoints.length;
    };
    geoPointMapDataControllerBase.prototype._prepare = function () {
        var dimensionId = this._getAxisPointDimensionDescriptorId(), axis = this.multiData.getAxis();
        this.axisPoints = dimensionId ? axis.getPointsByDimension(dimensionId) : [];
    };
    geoPointMapDataControllerBase.prototype._getAxisPointDimensionDescriptorId = function () {
        return this.viewModel.LongitudeDataId;
    };
    geoPointMapDataControllerBase.prototype._getMeasure = function (index, measureName) {
        var axisPoint = this._getAxisPoint(index);
        return this.multiData.getSlice(axisPoint).getMeasureValue(measureName);
    };
    geoPointMapDataControllerBase.prototype._getMeasureValue = function (index, measureName) {
        return this._getMeasure(index, measureName).getValue();
    };
    geoPointMapDataControllerBase.prototype._getMeasureDisplayText = function (index, measureName) {
        return this._getMeasure(index, measureName).getDisplayText();
    };
    geoPointMapDataControllerBase.prototype._getLatitude = function (index) {
        var point = this._getAxisPoint(index);
        return point.getParentByDimensionId(this.viewModel.LatitudeDataId);
    };
    geoPointMapDataControllerBase.prototype._getLatitudeValue = function (index) {
        return this._getLatitude(index).getValue();
    };
    geoPointMapDataControllerBase.prototype._getLatitudeUniqueValue = function (index) {
        return this._getLatitude(index).getUniqueValue();
    };
    geoPointMapDataControllerBase.prototype._getLongitude = function (index) {
        var point = this._getAxisPoint(index);
        return point.getParentByDimensionId(this.viewModel.LongitudeDataId);
    };
    geoPointMapDataControllerBase.prototype._getLongitudeValue = function (index) {
        return this._getLongitude(index).getValue();
    };
    geoPointMapDataControllerBase.prototype._getLongitudeUniqueValue = function (index) {
        return this._getLongitude(index).getUniqueValue();
    };
    geoPointMapDataControllerBase.prototype._getPointsCount = function (index) {
        var axisPoint = this._getAxisPoint(index).getParentByDimensionId(this.viewModel.LongitudeDataId);
        return this.multiData.getSlice(axisPoint).getMeasureValue(this.viewModel.PointsCountDataId).getValue();
    };
    geoPointMapDataControllerBase.prototype._getTooltipDimensions = function (index) {
        var tooltipDimensionsViewModel = this.viewModel.TooltipDimensions, tooltipDimensions = [], values, distinctValues;
        if (tooltipDimensionsViewModel) {
            for (var i = 0; i < tooltipDimensionsViewModel.length; i++) {
                values = this._getAxisPoint(index).getDisplayTextsByDimensionId(tooltipDimensionsViewModel[i].DataId);
                distinctValues = $.grep(values, function (el, index) {
                    return index === values.indexOf(el);
                });
                tooltipDimensions.push({
                    caption: tooltipDimensionsViewModel[i].Caption,
                    values: distinctValues
                });
            }
        }
        return tooltipDimensions;
    };
    geoPointMapDataControllerBase.prototype._getTooltipMeasures = function (index) {
        var tooltipMeasuresViewModel = this.viewModel.TooltipMeasures;
        var tooltipMeasures = [];
        if (tooltipMeasuresViewModel) {
            for (var i = 0; i < tooltipMeasuresViewModel.length; i++) {
                tooltipMeasures.push({
                    caption: tooltipMeasuresViewModel[i].Caption,
                    value: this._getMeasureDisplayText(index, tooltipMeasuresViewModel[i].DataId)
                });
            }
        }
        return tooltipMeasures;
    };
    geoPointMapDataControllerBase.prototype._getAxisPoint = function (index) {
        return this.axisPoints[index];
    };
    return geoPointMapDataControllerBase;
}(_data_controller_base_1.dataControllerBase));
exports.geoPointMapDataControllerBase = geoPointMapDataControllerBase;
