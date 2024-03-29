﻿/**
* DevExpress Dashboard (map-item.js)
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
var data_dashboard_item_1 = require("../data-dashboard-item");
var _utils_1 = require("../../internal/_utils");
var data_item_1 = require("../../data-item/data-item");
var _map_item_1 = require("./metadata/_map-item");
var _custom_shape_file_data_1 = require("./metadata/_custom-shape-file-data");
var _base_metadata_1 = require("../../metadata/_base-metadata");
var _array_utils_1 = require("../../internal/_array-utils");
var ko = require("knockout");
var MapItem = (function (_super) {
    __extends(MapItem, _super);
    function MapItem(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.tooltipMeasures = ko.observableArray([]);
        _this._isGeometryChanged = false;
        _this._shapeFilesAttributeNameList = ko.observableArray();
        _this._initialExtentChanged = ko.observable(false);
        _this._isGeometryChangedCallback = function () {
            _this._isGeometryChanged = true;
            _this.viewport.createViewerPaddings(true);
        };
        _this.__tooltipMeasures = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.TooltipMeasures, function (item) { return new data_item_1.DataItemLink(_this, item, serializer); });
        _this._subscribeDataItemLinkArrays(_map_item_1.tooltipMeasures);
        _this.__tooltipMeasures.subscribe(function (links) {
            _this._setLinkCollectionAcceptableShapingType(links, data_item_1.AcceptableShapingType.String);
        });
        _this._setLinkCollectionAcceptableShapingType(_this.__tooltipMeasures(), data_item_1.AcceptableShapingType.String);
        if (!modelJson[_map_item_1.viewport.modelName] &&
            !modelJson[_map_item_1.area.modelName] &&
            !modelJson[_custom_shape_file_data_1.shapeData.modelName]) {
            _this.viewport._set({
                "TopLatitude": 83.64513000000001,
                "BottomLatitude": -55.61182999999996,
                "CenterPointLatitude": 44.08908074480383,
                "CenterPointLongitude": 1.4210854715202004e-13,
                "LeftLongitude": -179.99999999999997,
                "RightLongitude": 180
            });
        }
        _this._supportedUIStates(["error", "loading"]);
        return _this;
    }
    MapItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.__tooltipMeasures.removeAll();
    };
    MapItem.prototype.getInfo = function () {
        return _map_item_1.mapDashboardItemSerializationsInfo;
    };
    MapItem.prototype._isCalculationSupported = function () {
        return false;
    };
    MapItem.prototype._getMasterFilterMode = function () { return this.interactivityOptions.masterFilterMode(); };
    MapItem.prototype._getDrillDownEnabled = function () { return false; };
    MapItem.prototype._getIgnoreMasterFilter = function () { return this.interactivityOptions.ignoreMasterFilters(); };
    MapItem.prototype._setClientState = function (clientState) {
        _super.prototype._setClientState.call(this, clientState);
    };
    MapItem.prototype._getContentCategories = function () {
        return _super.prototype._getContentCategories.call(this).concat([_base_metadata_1.PropertyCategory.Map]);
    };
    MapItem.prototype._updateContentViewModel = function (content) {
        _super.prototype._updateContentViewModel.call(this, content);
        var mapContent = this._paneContentHolder.getContent(_base_metadata_1.PropertyCategory.Map);
        if (!_array_utils_1.areArraysEqual(this._shapeFilesAttributeNameList(), mapContent.MapAttributesNames)) {
            this._shapeFilesAttributeNameList(mapContent.MapAttributesNames);
        }
        if (mapContent && mapContent.ViewModel) {
            content.ViewModel.MapItems = mapContent.ViewModel.MapItems;
            content.ViewModel.ShapeTitleAttributeName = mapContent.ViewModel.ShapeTitleAttributeName;
            content.ViewModel.LockNavigation = mapContent.ViewModel.LockNavigation;
            content.FullViewport = mapContent.FullViewport;
            if (this._isGeometryChanged) {
                this.viewport._set(mapContent.FullViewport);
                content.ViewModel.Viewport = mapContent.FullViewport;
                this._isGeometryChanged = false;
            }
        }
    };
    MapItem.prototype._isSortingEnabled = function () {
        return false;
    };
    __decorate([
        _utils_1.collectionItemType("TooltipMeasure")
    ], MapItem.prototype, "__tooltipMeasures", void 0);
    return MapItem;
}(data_dashboard_item_1.DataDashboardItem));
exports.MapItem = MapItem;
