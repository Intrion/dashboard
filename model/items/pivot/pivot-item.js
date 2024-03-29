﻿/**
* DevExpress Dashboard (pivot-item.js)
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
var measure_1 = require("../../data-item/measure");
var _pivot_item_1 = require("./metadata/_pivot-item");
var _data_item_1 = require("../../data-item/metadata/_data-item");
var pivot_calc_window_definition_1 = require("../../data-item/window-definition/pivot-calc-window-definition");
var serializable_model_1 = require("../../serializable-model");
var ko = require("knockout");
var PivotItem = (function (_super) {
    __extends(PivotItem, _super);
    function PivotItem(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dashboardItemJSON, serializer) || this;
        _this.columns = ko.observableArray([]);
        _this.rows = ko.observableArray([]);
        _this.values = ko.observableArray([]);
        _this.__columns = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.Columns, function (item) { return new data_item_1.DataItemLink(_this, item, serializer); });
        _this.__rows = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.Rows, function (item) { return new data_item_1.DataItemLink(_this, item, serializer); });
        _this.__values = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.Values, function (item) { return new data_item_1.DataItemLink(_this, item, serializer); });
        _this._subscribeDataItemLinkArrays(_pivot_item_1.pivotColumns, _pivot_item_1.pivotRows, _pivot_item_1.pivotValues);
        _this.__values.subscribe(function (newValue) {
            _this._setCustomOptionsPropertyOnMeasures(newValue);
            _this._setLinkCollectionAcceptableShapingType(newValue, data_item_1.AcceptableShapingType.String);
        });
        _this.__rows.subscribe(function (newValue) {
            _this._setCustomOptionsPropertyOnDimensions(newValue);
        });
        _this.__columns.subscribe(function (newValue) {
            _this._setCustomOptionsPropertyOnDimensions(newValue);
        });
        _this._setCustomOptionsPropertyOnMeasures(_this.__values());
        _this._setLinkCollectionAcceptableShapingType(_this.__values(), data_item_1.AcceptableShapingType.String);
        _this._setCustomOptionsPropertyOnDimensions(_this.__rows());
        _this._setCustomOptionsPropertyOnDimensions(_this.__columns());
        _this.autoExpandColumnGroups.subscribe(function () {
            _this._expandingManager.resetExpandingParams();
            _this._expandingManager.resetColumnViewState();
        });
        _this.autoExpandRowGroups.subscribe(function () {
            _this._expandingManager.resetExpandingParams();
            _this._expandingManager.resetRowViewState();
        });
        return _this;
    }
    PivotItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.__columns.removeAll();
        this.__rows.removeAll();
        this.__values.removeAll();
    };
    PivotItem.prototype.getInfo = function () {
        return _pivot_item_1.pivotDashboardItemSerializationsInfo;
    };
    PivotItem.prototype._canChangeDataItemVisibilityOptions = function (dataItem) {
        return this.__values().some(function (value) { return value.dataItem() === dataItem; }) || this.__rows().some(function (value) { return value.dataItem() === dataItem; }) || this.__columns().some(function (value) { return value.dataItem() === dataItem; });
    };
    PivotItem.prototype._isTotalsVisibilityOptionEnabled = function (dataItem) {
        if (dataItem instanceof measure_1.Measure)
            return true;
        var localRows = this.__rows();
        if (localRows.length > 0 && localRows.some(function (row) { return row.dataItem() == dataItem; })) {
            return localRows.length > 0 && this.layoutType() != 'Compact' && dataItem != localRows[localRows.length - 1].dataItem();
        }
        var localColumns = this.__columns();
        return localColumns.length > 0 && localColumns.some(function (column) { return column.dataItem() == dataItem; }) && dataItem != localColumns[localColumns.length - 1].dataItem();
    };
    PivotItem.prototype._setCustomOptionsPropertyOnMeasures = function (links) {
        links.forEach(function (value) {
            value._specifics.customOptionsProperties = [{
                    serializationInfo: _data_item_1.showValues
                }, {
                    serializationInfo: _data_item_1.showTotals
                }, {
                    serializationInfo: _data_item_1.showGrandTotals
                }];
        });
    };
    PivotItem.prototype._setCustomOptionsPropertyOnDimensions = function (links) {
        var _this = this;
        links.forEach(function (row) {
            row._specifics.customOptionsProperties = [{
                    serializationInfo: _data_item_1.showTotals,
                    filter: function (dataItem) { return _this._canChangeDataItemVisibilityOptions(dataItem); },
                    disabledRule: function (dataItem) { return !_this._isTotalsVisibilityOptionEnabled(dataItem); }
                }];
        });
    };
    PivotItem.prototype._getDefaultItemType = function () {
        return "Pivot";
    };
    PivotItem.prototype._extendContentState = function (content) {
        content.PivotExpandViewState = this._expandingManager.getPivotExpandViewState();
    };
    PivotItem.prototype._getIgnoreMasterFilter = function () { return this.interactivityOptions.ignoreMasterFilters(); };
    PivotItem.prototype._getDefaultCalculationWindowDefinition = function () {
        return new pivot_calc_window_definition_1.PivotWindowDefinition();
    };
    __decorate([
        _utils_1.collectionItemType("Column")
    ], PivotItem.prototype, "__columns", void 0);
    __decorate([
        _utils_1.collectionItemType("Row")
    ], PivotItem.prototype, "__rows", void 0);
    __decorate([
        _utils_1.collectionItemType("Value")
    ], PivotItem.prototype, "__values", void 0);
    return PivotItem;
}(data_dashboard_item_1.DataDashboardItem));
exports.PivotItem = PivotItem;
serializable_model_1.itemTypesMap["Pivot"] = { type: PivotItem, groupName: 'common', title: "DashboardStringId.DefaultNamePivotItem", index: 20 };
