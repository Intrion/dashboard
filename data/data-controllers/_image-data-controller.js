/**
* DevExpress Dashboard (_image-data-controller.js)
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
var imageDataController = (function (_super) {
    __extends(imageDataController, _super);
    function imageDataController(options) {
        var _this = _super.call(this, options) || this;
        _this._imageAxisPoints = _this._getImageAxisPoints();
        return _this;
    }
    imageDataController.prototype._getImageAxisPoints = function () {
        var that = this, multiData = that.multiData, viewModel = that.viewModel;
        return multiData ? multiData.getPointsByDimensionId(viewModel.ImageDimensionId) : null;
    };
    imageDataController.prototype.getImageData = function () {
        return this._imageAxisPoints && this._imageAxisPoints.length ? this._imageAxisPoints[0].getValue() : undefined;
    };
    return imageDataController;
}(_data_controller_base_1.dataControllerBase));
exports.imageDataController = imageDataController;
