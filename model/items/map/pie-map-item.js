/**
* DevExpress Dashboard (pie-map-item.js)
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var geo_point_map_item_base_1 = require("./geo-point-map-item-base");
var data_item_1 = require("../../data-item/data-item");
var _utils_1 = require("../../internal/_utils");
var _pie_map_item_1 = require("./metadata/_pie-map-item");
var data_dashboard_item_1 = require("../data-dashboard-item");
var _base_metadata_1 = require("../../metadata/_base-metadata");
var serializable_model_1 = require("../../serializable-model");
var ko = require("knockout");
var PieMapItem = (function (_super) {
    __extends(PieMapItem, _super);
    function PieMapItem(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.values = ko.observableArray([]);
        _this.__values = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.Values, function (item) { return new data_item_1.DataItemLink(_this, item, serializer); });
        _this._subscribeDataItemLinkArrays(_pie_map_item_1.pieMapValues);
        _this._attachDataItem(_this, _pie_map_item_1.pieMapArgument.propertyName);
        data_dashboard_item_1.DataDashboardItem._addColoringMeta([_this.__argument]);
        return _this;
    }
    PieMapItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.__values.removeAll();
        this.__argument.uniqueName(null);
    };
    PieMapItem.prototype.getInfo = function () {
        return _pie_map_item_1.pieMapDashboardItemSerializationsInfo;
    };
    PieMapItem.prototype._getDefaultItemType = function () {
        return "PieMap";
    };
    PieMapItem.prototype._getLayersCount = function () {
        return !!this.__values ? this.__values().length : 0;
    };
    PieMapItem.prototype._getLayerName = function () {
        return this._getDataItemDisplayName(this.__values()[this._selectedElementIndex() || 0].dataItem());
    };
    PieMapItem.prototype._getSliceDimensions = function () {
        return _super.prototype._getSliceDimensions.call(this).concat(this.__argument);
    };
    PieMapItem.prototype._getIsDimensionColoredByDefault = function (dimension) {
        return this.__argument.dataItem() === dimension;
    };
    PieMapItem.prototype._getAreMeasuresColoredByDefault = function () {
        return this.__values().length > 1 && !this.__argument.dataItem();
    };
    PieMapItem.prototype._getCanColorByMeasures = function () { return true; };
    PieMapItem.prototype._getCanColorByDimensions = function () { return true; };
    PieMapItem.prototype._getColorizableDataItemsInfo = function () {
        return [{
                items: [this.__argument],
                prefixId: _base_metadata_1.BindingSectionTitles.SingleArgument
            }];
    };
    __decorate([
        _utils_1.collectionItemType("Value")
    ], PieMapItem.prototype, "__values", void 0);
    return PieMapItem;
}(geo_point_map_item_base_1.GeoPointMapItemBase));
exports.PieMapItem = PieMapItem;
serializable_model_1.itemTypesMap["PieMap"] = { type: PieMapItem, groupName: 'maps', title: "DashboardWebStringId.DefaultNamePieMapItem", index: 240 };
