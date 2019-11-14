/**
* DevExpress Dashboard (_choropleth-map-data-controller.js)
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
var choroplethMapDataController = (function (_super) {
    __extends(choroplethMapDataController, _super);
    function choroplethMapDataController(options) {
        var _this = _super.call(this, options) || this;
        _this.axisHash = {};
        _this.isEmpty = true;
        _this._prepare();
        return _this;
    }
    choroplethMapDataController.prototype._prepare = function () {
        var attributeId = this.viewModel.AttributeDimensionId, axis = this.multiData.getAxis(), axisPoints = attributeId ? axis.getPointsByDimension(attributeId) : [];
        this.isEmpty = axisPoints.length == 0;
        for (var i = 0; i < axisPoints.length; i++)
            this.axisHash[axisPoints[i].getValue()] = axisPoints[i];
    };
    choroplethMapDataController.prototype.hasRecords = function () {
        return !this.isEmpty;
    };
    choroplethMapDataController.prototype.getDeltaValue = function (attribute, deltaId) {
        var axisPoint = this.axisHash[attribute];
        return axisPoint ? this.multiData.getSlice(axisPoint).getDeltaValue(deltaId) : null;
    };
    choroplethMapDataController.prototype.getValue = function (attribute, measureName) {
        var measureValue = this._getMeasureValue(attribute, measureName);
        return measureValue ? measureValue.getValue() : null;
    };
    choroplethMapDataController.prototype.getDisplayText = function (attribute, measureName) {
        var measureValue = this._getMeasureValue(attribute, measureName);
        return measureValue ? measureValue.getDisplayText() : null;
    };
    choroplethMapDataController.prototype.getUniqueValue = function (attribute) {
        var axisPoint = this.axisHash[attribute];
        return axisPoint ? axisPoint.getUniqueValue() : null;
    };
    choroplethMapDataController.prototype.getMinMax = function (measureName) {
        var that = this, min, max, value;
        $.each(this.axisHash, function (key, axisPoint) {
            value = that.multiData.getSlice(axisPoint).getMeasureValue(measureName).getValue();
            if (min == null || value < min)
                min = value;
            if (max == null || value > max)
                max = value;
        });
        return {
            min: min,
            max: max
        };
    };
    choroplethMapDataController.prototype.getMeasureDescriptorById = function (valueId) {
        return this.multiData.getMeasureById(valueId);
    };
    choroplethMapDataController.prototype._getMeasureValue = function (attribute, measureName) {
        var axisPoint = this.axisHash[attribute];
        return axisPoint ? this.multiData.getSlice(axisPoint).getMeasureValue(measureName) : null;
    };
    return choroplethMapDataController;
}(_data_controller_base_1.dataControllerBase));
exports.choroplethMapDataController = choroplethMapDataController;
