/**
* DevExpress Dashboard (_bubble-map-data-controller.js)
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
var _utils_1 = require("../../data/_utils");
var bubbleMapDataController = (function (_super) {
    __extends(bubbleMapDataController, _super);
    function bubbleMapDataController(options) {
        return _super.call(this, options) || this;
    }
    bubbleMapDataController.prototype.getPoint = function (index) {
        return _utils_1.deepExtend(_super.prototype.getPoint.call(this, index), {
            weight: this._getMeasureValue(index, this.viewModel.WeightId),
            color: this._getMeasureValue(index, this.viewModel.ColorId),
            weightText: this._getMeasureDisplayText(index, this.viewModel.WeightId),
            colorText: this._getMeasureDisplayText(index, this.viewModel.ColorId)
        });
    };
    bubbleMapDataController.prototype.formatColor = function (value) {
        var measure = this.multiData.getMeasureById(this.viewModel.ColorId);
        return measure ? measure.format(value) : value;
    };
    bubbleMapDataController.prototype.formatWeight = function (value) {
        var measure = this.multiData.getMeasureById(this.viewModel.WeightId);
        return measure ? measure.format(value) : value;
    };
    return bubbleMapDataController;
}(_geo_point_map_data_controller_base_1.geoPointMapDataControllerBase));
exports.bubbleMapDataController = bubbleMapDataController;
