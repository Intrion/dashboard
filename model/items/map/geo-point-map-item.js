/**
* DevExpress Dashboard (geo-point-map-item.js)
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
var data_item_1 = require("../../data-item/data-item");
var _geo_point_map_item_1 = require("./metadata/_geo-point-map-item");
var serializable_model_1 = require("../../serializable-model");
var GeoPointMapItem = (function (_super) {
    __extends(GeoPointMapItem, _super);
    function GeoPointMapItem(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this._attachDataItem(_this, _geo_point_map_item_1.value.propertyName);
        _this.__value._specifics.acceptableShapingType = data_item_1.AcceptableShapingType.String;
        return _this;
    }
    GeoPointMapItem.prototype.getInfo = function () {
        return _geo_point_map_item_1.geoPointMapDashboardItemSerializationsInfo;
    };
    GeoPointMapItem.prototype._getDefaultItemType = function () {
        return "GeoPointMap";
    };
    return GeoPointMapItem;
}(geo_point_map_item_base_1.GeoPointMapItemBase));
exports.GeoPointMapItem = GeoPointMapItem;
serializable_model_1.itemTypesMap["GeoPointMap"] = { type: GeoPointMapItem, groupName: 'maps', title: "DashboardWebStringId.DefaultNameGeoPointMapItem", index: 210 };
