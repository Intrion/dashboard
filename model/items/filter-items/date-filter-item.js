/**
* DevExpress Dashboard (date-filter-item.js)
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
var _date_filter_item_1 = require("./metadata/_date-filter-item");
var data_item_1 = require("../../data-item/data-item");
var date_time_period_1 = require("../range-filter/date-time-period");
var data_dashboard_item_1 = require("../data-dashboard-item");
var serializable_model_1 = require("../../serializable-model");
var _utils_1 = require("../../internal/_utils");
var ko = require("knockout");
var _range_state_controller_1 = require("../range-filter/_range-state-controller");
var DateFilterItem = (function (_super) {
    __extends(DateFilterItem, _super);
    function DateFilterItem(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dashboardItemJSON, serializer) || this;
        _this._defaultDateTimePeriodIndexSubscription = null;
        _this.currentSelectedDateTimePeriodName = ko.observable();
        _this._attachDataItem(_this, _date_filter_item_1.dateFilterDimension.propertyName);
        _this.__dimension._specifics.acceptableShapingType = data_item_1.AcceptableShapingType.RangeDate;
        _this.dateTimePeriods = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.DateTimePeriods, function (item) { return new date_time_period_1.DateTimePeriod(item, serializer); });
        _this._stateController = new _range_state_controller_1.RangeStateController(_this);
        _this._stateController.initialize();
        ko.computed(function () {
            if (_this.dimension())
                _this.dateTimePeriods().forEach(function (dateTimePeriod) { return dateTimePeriod.argumentInterval(_this.dimension().dateTimeGroupInterval()); });
        });
        return _this;
    }
    DateFilterItem.prototype._getSelectionByPeriod = function (period) {
        var range = period.getDateTimeValue();
        return [[range.startValue, range.endValue]];
    };
    DateFilterItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.dateTimePeriods.removeAll();
    };
    DateFilterItem.prototype.getInfo = function () {
        return _date_filter_item_1.dateFilterDashboardItemSerializationsInfo;
    };
    DateFilterItem.prototype._getDefaultItemType = function () {
        return "DateFilter";
    };
    DateFilterItem.prototype._getClearMasterFilterSupported = function () { return true; };
    DateFilterItem.prototype._getIsMasterFilter = function () { return true; };
    DateFilterItem.prototype._getIgnoreMasterFilter = function () { return this.interactivityOptions.ignoreMasterFilters(); };
    DateFilterItem.prototype._getInteractivityDimensionLinks = function () {
        return [this.__dimension];
    };
    DateFilterItem.prototype._validateSelection = function (selection) {
    };
    DateFilterItem.prototype._getDisplayFilterValues = function (limitCount) {
        return this._stateController._getDisplayFilterValues(limitCount);
    };
    DateFilterItem.prototype._updateContentViewModel = function (content) {
        _super.prototype._updateContentViewModel.call(this, content);
        (content.ViewModel.DateTimePeriods || []).forEach(function (p) {
            p.Start && p.Start.Date && (p.Start.Date = new Date(p.Start.Date));
            p.End && p.End.Date && (p.End.Date = new Date(p.End.Date));
        });
    };
    DateFilterItem.prototype._applySelectionFromState = function (itemState) {
        _super.prototype._applySelectionFromState.call(this, itemState);
        this._stateController.applySelectionFromState(itemState);
    };
    DateFilterItem.prototype._extendContentState = function (content) {
        _super.prototype._extendContentState.call(this, content);
        this._stateController.extendContentState(content);
    };
    DateFilterItem.prototype._isSortingEnabled = function () {
        return false;
    };
    DateFilterItem.prototype._isTopNEnabled = function (dataItem) {
        return false;
    };
    DateFilterItem.prototype._getEntireRange = function () {
        if (this._multiData) {
            var measures = this._multiData.getMeasures();
            var values = [];
            for (var i = 0; i < measures.length; i++)
                values.push(this._multiData.getMeasureValue(measures[i].id).getValue());
            values.sort(function (a, b) { return a > b ? 1 : -1; });
            return values;
        }
        return [];
    };
    __decorate([
        _utils_1.collectionItemType("DateTimePeriod")
    ], DateFilterItem.prototype, "dateTimePeriods", void 0);
    return DateFilterItem;
}(data_dashboard_item_1.DataDashboardItem));
exports.DateFilterItem = DateFilterItem;
serializable_model_1.itemTypesMap["DateFilter"] = { type: DateFilterItem, groupName: 'filter', title: "DashboardStringId.DefaultNameDateFilterItem", index: 350 };
