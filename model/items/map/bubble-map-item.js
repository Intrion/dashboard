/**
* DevExpress Dashboard (bubble-map-item.js)
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
var geo_point_map_item_base_1 = require("./geo-point-map-item-base");
var _bubble_map_item_1 = require("./metadata/_bubble-map-item");
var serializable_model_1 = require("../../serializable-model");
var BubbleMapItem = (function (_super) {
    __extends(BubbleMapItem, _super);
    function BubbleMapItem(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this._attachDataItem(_this, _bubble_map_item_1.bubbleMapWeight.propertyName);
        _this._attachDataItem(_this, _bubble_map_item_1.bubbleMapColor.propertyName);
        return _this;
    }
    BubbleMapItem.prototype.getInfo = function () {
        return _bubble_map_item_1.bubbleMapDashboardItemSerializationsInfo;
    };
    BubbleMapItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.__weight.uniqueName(null);
        this.__color.uniqueName(null);
    };
    BubbleMapItem.prototype._getDefaultItemType = function () {
        return "BubbleMap";
    };
    return BubbleMapItem;
}(geo_point_map_item_base_1.GeoPointMapItemBase));
exports.BubbleMapItem = BubbleMapItem;
serializable_model_1.itemTypesMap["BubbleMap"] = { type: BubbleMapItem, groupName: 'maps', title: "DashboardWebStringId.DefaultNameBubbleMapItem", index: 230 };
