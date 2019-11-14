/**
* DevExpress Dashboard (gauge-item.js)
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
var kpi_item_1 = require("../kpi/kpi-item");
var gauge_1 = require("./gauge");
var _gauge_item_1 = require("./metadata/_gauge-item");
var gauge_calc_window_definition_1 = require("../../data-item/window-definition/gauge-calc-window-definition");
var serializable_model_1 = require("../../serializable-model");
var _utils_1 = require("../../internal/_utils");
var GaugeItem = (function (_super) {
    __extends(GaugeItem, _super);
    function GaugeItem(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.gauges = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.Gauges, function (item) { return new gauge_1.Gauge(_this, item, serializer); });
        return _this;
    }
    GaugeItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.gauges.removeAll();
    };
    GaugeItem.prototype.getInfo = function () {
        return _gauge_item_1.gaugeDashboardItemSerializationsInfo;
    };
    GaugeItem.prototype._getDefaultItemType = function () {
        return "Gauge";
    };
    GaugeItem.prototype._getLayersCount = function () {
        return !!this.__seriesDimensions && this.__seriesDimensions().length > 0 ? this.gauges().length : 0;
    };
    GaugeItem.prototype._getLayerName = function () {
        return this._getDataItemContainerDisplayName(this.gauges()[this._selectedElementIndex() || 0]);
    };
    GaugeItem.prototype._getDefaultCalculationWindowDefinition = function () {
        return new gauge_calc_window_definition_1.GaugeWindowDefinition();
    };
    __decorate([
        _utils_1.collectionItemType("GaugeElement")
    ], GaugeItem.prototype, "gauges", void 0);
    return GaugeItem;
}(kpi_item_1.KpiItem));
exports.GaugeItem = GaugeItem;
serializable_model_1.itemTypesMap["Gauge"] = { type: GaugeItem, groupName: 'common', title: "DashboardStringId.DefaultNameGaugeItem", index: 70 };
