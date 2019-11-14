/**
* DevExpress Dashboard (image-item.js)
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
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var dashboard_item_1 = require("./dashboard-item");
var _image_item_1 = require("./metadata/_image-item");
var serializable_model_1 = require("../serializable-model");
var ko = require("knockout");
var ImageItem = (function (_super) {
    __extends(ImageItem, _super);
    function ImageItem(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.imageType = ko.observable('linked');
        if (_this.image64()) {
            _this.imageType('embedded');
        }
        else {
            _this.imageType('linked');
        }
        _this.imageType.subscribe(function (imageType) {
            switch (imageType) {
                case 'embedded':
                    _this.urlPath(null);
                    break;
                default:
                    _this.image64(null);
                    break;
            }
        });
        return _this;
    }
    ImageItem.prototype.getInfo = function () {
        return _image_item_1.imageDashboardItemSerializationsInfo;
    };
    ImageItem.prototype._getDefaultItemType = function () {
        return "Image";
    };
    ImageItem.prototype._updateContentViewModel = function (content) {
        _super.prototype._updateContentViewModel.call(this, content);
        content.ViewModel.SizeMode = this.sizeMode();
        content.ViewModel.HorizontalAlignment = this.horizontalAlignment();
        content.ViewModel.VerticalAlignment = this.verticalAlignment();
    };
    return ImageItem;
}(dashboard_item_1.DashboardItem));
exports.ImageItem = ImageItem;
serializable_model_1.itemTypesMap["Image"] = { type: ImageItem, groupName: 'common', title: "DashboardStringId.DefaultNameImageItem", index: 90 };
