/**
* DevExpress Dashboard (_pie-map-data-controller.js)
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
var _geo_point_map_data_controller_base_1 = require("./_geo-point-map-data-controller-base");
var _utils_1 = require("../_utils");
var pieMapDataController = (function (_super) {
    __extends(pieMapDataController, _super);
    function pieMapDataController(options) {
        var _this = _super.call(this, options) || this;
        _this.elementCustomColor = options.elementCustomColor;
        return _this;
    }
    pieMapDataController.prototype.getPoint = function (index, valueIndex) {
        var point = _super.prototype.getPoint.call(this, index), multiData = this.multiData, viewModel = this.viewModel, filledValues = viewModel.Values && viewModel.Values.length > 0, axisPoint = this._getAxisPoint(index), argument, argumentDisplayText, value, valueDisplayText, valueId, colorId, colorValue;
        if (viewModel.ArgumentDataId) {
            argument = axisPoint.getUniqueValue();
            argumentDisplayText = axisPoint.getDisplayText();
            if (filledValues) {
                valueId = viewModel.Values[0];
                value = this._getMeasureValue(index, valueId);
                valueDisplayText = this._getMeasureDisplayText(index, valueId);
            }
            else {
                value = point.pointsCount > 1 ? point.pointsCount : 1;
            }
            colorId = viewModel.ColorIds[0];
            colorValue = viewModel.ColorByArgument ? this._getMeasureValue(index, colorId) : multiData.getMeasureValue(colorId).getValue();
        }
        else {
            valueId = viewModel.Values[valueIndex];
            argument = multiData.getMeasureById(valueId).name;
            argumentDisplayText = argument;
            value = this._getMeasureValue(index, valueId);
            valueDisplayText = this._getMeasureDisplayText(index, valueId);
            colorValue = multiData.getMeasureValue(viewModel.ColorIds[valueIndex]).getValue();
        }
        return _utils_1.deepExtend(point, {
            argument: argument,
            argumentDisplayText: argumentDisplayText,
            value: Math.abs(value),
            valueDisplayText: valueDisplayText,
            color: _utils_1.toColor(colorValue),
            valueId: valueId,
            axisPoint: axisPoint
        });
    };
    pieMapDataController.prototype._getAxisPointDimensionDescriptorId = function () {
        return this.viewModel.ArgumentDataId || this.viewModel.LongitudeDataId;
    };
    pieMapDataController.prototype.formatValue = function (value) {
        var measure;
        if (this.viewModel.Values.length > 0) {
            measure = this.multiData.getMeasureById(this.viewModel.Values[0]);
        }
        return measure ? measure.format(value) : value;
    };
    return pieMapDataController;
}(_geo_point_map_data_controller_base_1.geoPointMapDataControllerBase));
exports.pieMapDataController = pieMapDataController;
