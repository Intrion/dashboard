/**
* DevExpress Dashboard (scatter-chart-item.js)
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
var _scatter_chart_item_1 = require("./metadata/_scatter-chart-item");
var _base_metadata_1 = require("../../metadata/_base-metadata");
var scatter_chart_calc_window_definition_1 = require("../../data-item/window-definition/scatter-chart-calc-window-definition");
var serializable_model_1 = require("../../serializable-model");
var ko = require("knockout");
var ScatterChartItem = (function (_super) {
    __extends(ScatterChartItem, _super);
    function ScatterChartItem(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.arguments = ko.observableArray([]);
        _this.__arguments = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.Dimensions, function (item) { return new data_item_1.DataItemLink(_this, item, serializer); });
        _this._subscribeDataItemLinkArrays(_scatter_chart_item_1.scatterArgumentsMeta);
        _this.__arguments.subscribe(function (newValue) {
            data_dashboard_item_1.DataDashboardItem._addColoringMeta(newValue);
        });
        data_dashboard_item_1.DataDashboardItem._addColoringMeta(_this.__arguments());
        _this._attachDataItem(_this, _scatter_chart_item_1.scatterChartWeight.propertyName);
        _this._attachDataItem(_this, _scatter_chart_item_1.axisXMeasure.propertyName);
        _this._attachDataItem(_this, _scatter_chart_item_1.axisYMeasure.propertyName);
        return _this;
    }
    ScatterChartItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.__arguments.removeAll();
    };
    ScatterChartItem.prototype.getInfo = function () {
        return _scatter_chart_item_1.scatterChartDashboardItemSerializationsInfo;
    };
    ScatterChartItem.prototype._isCalculationSupported = function () {
        return true;
    };
    ScatterChartItem.prototype._getDefaultItemType = function () {
        return "ScatterChart";
    };
    ScatterChartItem.prototype._getMasterFilterMode = function () { return this.interactivityOptions.masterFilterMode(); };
    ScatterChartItem.prototype._getDrillDownEnabled = function () { return this.interactivityOptions.isDrillDownEnabled(); };
    ScatterChartItem.prototype._getIgnoreMasterFilter = function () { return this.interactivityOptions.ignoreMasterFilters(); };
    ScatterChartItem.prototype._getInteractivityDimensionLinks = function () { return this.__arguments(); };
    ScatterChartItem.prototype._getCanColorByMeasures = function () { return false; };
    ScatterChartItem.prototype._getCanColorByDimensions = function () { return true; };
    ScatterChartItem.prototype._getColorizableDataItemsInfo = function () {
        return [{
                items: this.__arguments(),
                prefixId: _base_metadata_1.BindingSectionTitles.Arguments
            }];
    };
    ScatterChartItem.prototype._getDefaultCalculationWindowDefinition = function () {
        return new scatter_chart_calc_window_definition_1.ScatterWindowDefinition();
    };
    ScatterChartItem.prototype._isSortingEnabled = function () {
        return false;
    };
    __decorate([
        _utils_1.collectionItemType("Dimension")
    ], ScatterChartItem.prototype, "__arguments", void 0);
    return ScatterChartItem;
}(data_dashboard_item_1.DataDashboardItem));
exports.ScatterChartItem = ScatterChartItem;
serializable_model_1.itemTypesMap["ScatterChart"] = { type: ScatterChartItem, groupName: 'common', title: "DashboardStringId.DefaultNameScatterChartItem", index: 50 };
