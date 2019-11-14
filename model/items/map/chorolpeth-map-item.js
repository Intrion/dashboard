/**
* DevExpress Dashboard (chorolpeth-map-item.js)
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
var map_item_1 = require("./map-item");
var chorolpeth_map_1 = require("./chorolpeth-map");
var _chorolpeth_map_item_1 = require("./metadata/_chorolpeth-map-item");
var _base_metadata_1 = require("../../metadata/_base-metadata");
var serializable_model_1 = require("../../serializable-model");
var ChoroplethMapItem = (function (_super) {
    __extends(ChoroplethMapItem, _super);
    function ChoroplethMapItem(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.maps = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.Maps, function (item) { return _this._createMap(item, serializer); });
        _this._attachDataItem(_this, _chorolpeth_map_item_1.attributeDimension.propertyName);
        _this._shapeFilesAttributeNameList.subscribe(function (list) {
            if ((!_this.attributeName() && list && list.length > 0) || list.indexOf(_this.attributeName()) === -1) {
                _this.attributeName(list[0]);
            }
        });
        return _this;
    }
    ChoroplethMapItem.prototype._getInteractivityDimensionLinks = function () {
        return [this.__attributeDimension];
    };
    ChoroplethMapItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.maps.removeAll();
    };
    ChoroplethMapItem.prototype._createMap = function (mapJSON, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var itemType = mapJSON["@ItemType"];
        return new ChoroplethMapItem.choroplethMapTypesMap[itemType].constructor(this, mapJSON, serializer);
    };
    ChoroplethMapItem.prototype.getInfo = function () {
        return _chorolpeth_map_item_1.choroplethMapDashboardItemSerializationsInfo;
    };
    ChoroplethMapItem.prototype._getDefaultItemType = function () {
        return "ChoroplethMap";
    };
    ChoroplethMapItem.prototype._getLayersCount = function () {
        return !!this.maps ? this.maps().length : 0;
    };
    ChoroplethMapItem.prototype._getLayerName = function () {
        return this._getDataItemContainerDisplayName(this.maps()[this._selectedElementIndex() || 0]);
    };
    ChoroplethMapItem.prototype._updateContentViewModel = function (content) {
        _super.prototype._updateContentViewModel.call(this, content);
        var mapContent = this._paneContentHolder.getContent(_base_metadata_1.PropertyCategory.Map);
        if (mapContent && mapContent.ViewModel) {
            content.ViewModel.ToolTipAttributeName = mapContent.ViewModel.ToolTipAttributeName;
            if (mapContent.ViewModel.ChoroplethColorizer) {
                if (!content.ViewModel.ChoroplethColorizer)
                    content.ViewModel.ChoroplethColorizer = {};
                content.ViewModel.ChoroplethColorizer.AttributeName = mapContent.ViewModel.ChoroplethColorizer.AttributeName;
            }
        }
    };
    ChoroplethMapItem.choroplethMapTypesMap = {
        "ValueMap": {
            constructor: chorolpeth_map_1.ValueMap,
            displayName: "DashboardWebStringId.Map.ValueMap",
            icon: "dx-dashboard-grid-column-measure"
        },
        "DeltaMap": {
            constructor: chorolpeth_map_1.DeltaMap,
            displayName: "DashboardWebStringId.Map.DeltaMap",
            icon: "dx-dashboard-grid-column-delta"
        }
    };
    return ChoroplethMapItem;
}(map_item_1.MapItem));
exports.ChoroplethMapItem = ChoroplethMapItem;
serializable_model_1.itemTypesMap["ChoroplethMap"] = { type: ChoroplethMapItem, groupName: 'maps', title: "DashboardWebStringId.DefaultNameChoroplethMapItem", index: 220 };
