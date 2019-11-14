/**
* DevExpress Dashboard (pie-item.js)
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
var chart_item_base_1 = require("../chart-item-base");
var _utils_1 = require("../../internal/_utils");
var data_item_1 = require("../../data-item/data-item");
var _pie_item_1 = require("./metadata/_pie-item");
var pie_calc_window_definition_1 = require("../../data-item/window-definition/pie-calc-window-definition");
var serializable_model_1 = require("../../serializable-model");
var ko = require("knockout");
var PieItem = (function (_super) {
    __extends(PieItem, _super);
    function PieItem(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dashboardItemJSON, serializer) || this;
        _this.values = ko.observableArray([]);
        _this.__values = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.Values, function (item) { return new data_item_1.DataItemLink(_this, item, serializer); });
        _this._subscribeDataItemLinkArrays(_pie_item_1.pieValues);
        return _this;
    }
    PieItem.prototype.getInfo = function () {
        return _pie_item_1.pieDashboardItemSerializationsInfo;
    };
    PieItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.__values.removeAll();
    };
    PieItem.prototype._getDefaultItemType = function () {
        return "Pie";
    };
    PieItem.prototype._getTargetDimensions = function () { return this.interactivityOptions.targetDimensions(); };
    PieItem.prototype._getMasterFilterMode = function () { return this.interactivityOptions.masterFilterMode(); };
    PieItem.prototype._getDrillDownEnabled = function () { return this.interactivityOptions.isDrillDownEnabled(); };
    PieItem.prototype._getIgnoreMasterFilter = function () { return this.interactivityOptions.ignoreMasterFilters(); };
    PieItem.prototype._getAreMeasuresColoredByDefault = function () { return this.values().length > 1 && this.arguments().length == 0; };
    PieItem.prototype._getIsDimensionColoredByDefault = function (dimension) {
        return !!this.arguments().filter(function (dim) { return dim === dimension; })[0];
    };
    PieItem.prototype._getLayersCount = function () {
        return !!this.__seriesDimensions && this.__seriesDimensions().length > 0 ? this.__values().length : 0;
    };
    PieItem.prototype._getLayerName = function () {
        return this._getDataItemDisplayName(this.__values()[this._selectedElementIndex() || 0].dataItem());
    };
    PieItem.prototype._getDefaultCalculationWindowDefinition = function () {
        return new pie_calc_window_definition_1.PieWindowDefinition();
    };
    __decorate([
        _utils_1.collectionItemType("Value")
    ], PieItem.prototype, "__values", void 0);
    return PieItem;
}(chart_item_base_1.ChartItemBase));
exports.PieItem = PieItem;
serializable_model_1.itemTypesMap["Pie"] = { type: PieItem, groupName: 'common', title: "DashboardStringId.DefaultNamePieItem", index: 40 };
