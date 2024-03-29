﻿/**
* DevExpress Dashboard (treemap-item.js)
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
var _treemap_item_1 = require("./metadata/_treemap-item");
var _base_metadata_1 = require("../../metadata/_base-metadata");
var serializable_model_1 = require("../../serializable-model");
var ko = require("knockout");
var TreemapItem = (function (_super) {
    __extends(TreemapItem, _super);
    function TreemapItem(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.values = ko.observableArray([]);
        _this.__arguments = ko.observableArray([]);
        _this.arguments = ko.observableArray([]);
        _this.__arguments.subscribe(function (newArguments) {
            data_dashboard_item_1.DataDashboardItem._addColoringMeta(newArguments);
        });
        _this.__arguments(dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.Arguments, function (item) { return new data_item_1.DataItemLink(_this, item, serializer); })());
        _this._subscribeDataItemLinkArrays(_treemap_item_1.treeMapArgumentsMeta);
        _this.__values = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.Values, function (item) { return new data_item_1.DataItemLink(_this, item, serializer); });
        _this._subscribeDataItemLinkArrays(_treemap_item_1.treeMapvalues);
        return _this;
    }
    TreemapItem.prototype.getInfo = function () {
        return _treemap_item_1.treemapDashboardItemSerializationsInfo;
    };
    TreemapItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.__arguments.removeAll();
        this.__values.removeAll();
    };
    TreemapItem.prototype._isCalculationSupported = function () {
        return false;
    };
    TreemapItem.prototype._getDefaultItemType = function () {
        return "Treemap";
    };
    TreemapItem.prototype._getCanColorByMeasures = function () { return true; };
    TreemapItem.prototype._getCanColorByDimensions = function () { return true; };
    TreemapItem.prototype._getAreMeasuresColoredByDefault = function () { return this.__values().length > 1 && this.__arguments().length === 0; };
    TreemapItem.prototype._getIsDimensionColoredByDefault = function (dimension) {
        return this.__arguments().length > 0 && this.__arguments()[0].dataItem() === dimension;
    };
    TreemapItem.prototype._getMasterFilterMode = function () { return this.interactivityOptions.masterFilterMode(); };
    TreemapItem.prototype._getDrillDownEnabled = function () { return this.interactivityOptions.isDrillDownEnabled(); };
    TreemapItem.prototype._getIgnoreMasterFilter = function () { return this.interactivityOptions.ignoreMasterFilters(); };
    TreemapItem.prototype._getInteractivityDimensionLinks = function () { return this.__arguments(); };
    TreemapItem.prototype._getLayersCount = function () {
        return !!this.__arguments && this.__arguments().length > 0 ? this.__values().length : 0;
    };
    TreemapItem.prototype._getLayerName = function () {
        return this._getDataItemDisplayName(this.__values()[this._selectedElementIndex() || 0].dataItem());
    };
    TreemapItem.prototype._getColorizableDataItemsInfo = function () {
        return [{
                items: this.__arguments(),
                prefixId: _base_metadata_1.BindingSectionTitles.Arguments
            }];
    };
    TreemapItem.prototype._isSortingEnabled = function () {
        return false;
    };
    __decorate([
        _utils_1.collectionItemType("Value")
    ], TreemapItem.prototype, "__values", void 0);
    __decorate([
        _utils_1.collectionItemType("Argument")
    ], TreemapItem.prototype, "__arguments", void 0);
    return TreemapItem;
}(data_dashboard_item_1.DataDashboardItem));
exports.TreemapItem = TreemapItem;
serializable_model_1.itemTypesMap["Treemap"] = { type: TreemapItem, groupName: 'common', title: "DashboardStringId.DefaultNameTreemapItem", index: 40 };
