/**
* DevExpress Dashboard (_geo-point-map-data-controller.js)
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
var geoPointMapDataController = (function (_super) {
    __extends(geoPointMapDataController, _super);
    function geoPointMapDataController(options) {
        return _super.call(this, options) || this;
    }
    geoPointMapDataController.prototype.getPoint = function (index) {
        return _utils_1.deepExtend(_super.prototype.getPoint.call(this, index), {
            text: this._getMeasureDisplayText(index, this.viewModel.ValueId)
        });
    };
    return geoPointMapDataController;
}(_geo_point_map_data_controller_base_1.geoPointMapDataControllerBase));
exports.geoPointMapDataController = geoPointMapDataController;
