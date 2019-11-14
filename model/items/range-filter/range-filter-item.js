/**
* DevExpress Dashboard (range-filter-item.js)
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
var _range_filter_selection_validator_1 = require("../../../viewer-parts/viewer-items/range-selector-item/_range-filter-selection-validator");
var series_item_1 = require("../series-item");
var chart_series_creator_1 = require("../chart/chart-series-creator");
var data_item_1 = require("../../data-item/data-item");
var _utils_1 = require("../../internal/_utils");
var date_time_period_1 = require("./date-time-period");
var _range_filter_item_1 = require("./metadata/_range-filter-item");
var _base_metadata_1 = require("../../metadata/_base-metadata");
var range_filter_calc_window_definition_1 = require("../../data-item/window-definition/range-filter-calc-window-definition");
var _array_utils_1 = require("../../internal/_array-utils");
var _item_data_axis_names_1 = require("../../../viewer-parts/viewer/_item-data-axis-names");
var serializable_model_1 = require("../../serializable-model");
var ko = require("knockout");
var _range_state_controller_1 = require("./_range-state-controller");
var RangeFilterItem = (function (_super) {
    __extends(RangeFilterItem, _super);
    function RangeFilterItem(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dashboardItemJSON, serializer) || this;
        _this._defaultDateTimePeriodIndexSubscription = null;
        _this.currentSelectedDateTimePeriodName = ko.observable();
        _this.series = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.Series, function (item) {
            return chart_series_creator_1.ChartSeriesCreator.createSeries(_this, item, serializer);
        });
        _this.dateTimePeriods = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.DateTimePeriods, function (item) { return new date_time_period_1.DateTimePeriod(item, serializer); });
        _this._attachDataItem(_this, _range_filter_item_1.argument.propertyName);
        _this.__argument._specifics.acceptableShapingType = data_item_1.AcceptableShapingType.RangeDate;
        _this.__argument._specifics.forceAddOlapExactDateFormat = true;
        _this._stateController = new _range_state_controller_1.RangeStateController(_this);
        _this._stateController.initialize();
        ko.computed(function () {
            if (_this.argument())
                _this.dateTimePeriods().forEach(function (dateTimePeriod) { return dateTimePeriod.argumentInterval(_this.argument().dateTimeGroupInterval()); });
        });
        return _this;
    }
    Object.defineProperty(RangeFilterItem.prototype, "_supportParallelRequests", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    RangeFilterItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.dateTimePeriods.removeAll();
        this.series.removeAll();
    };
    RangeFilterItem.prototype.getInfo = function () {
        return _range_filter_item_1.rangeFilterDashboardItemSerializationsInfo;
    };
    RangeFilterItem.prototype._getDefaultItemType = function () {
        return "RangeFilter";
    };
    RangeFilterItem.prototype._getIgnoreMasterFilter = function () { return this.interactivityOptions.ignoreMasterFilters(); };
    RangeFilterItem.prototype._getClearMasterFilterSupported = function () { return true; };
    RangeFilterItem.prototype._getIsMasterFilter = function () { return true; };
    RangeFilterItem.prototype._getInteractivityDimensionLinks = function () {
        return [this.__argument];
    };
    RangeFilterItem.prototype._getCanColorByDimensions = function () { return true; };
    RangeFilterItem.prototype._getCanColorByMeasures = function () { return true; };
    RangeFilterItem.prototype._getAreMeasuresColoredByDefault = function () {
        return this.series().length > 1;
    };
    RangeFilterItem.prototype._getIsDimensionColoredByDefault = function (dimension) {
        return !!this.__seriesDimensions().filter(function (link) { return link.dataItem() === dimension; })[0];
    };
    RangeFilterItem.prototype._getColorizableDataItemsInfo = function () {
        return [{
                items: this.__seriesDimensions(),
                prefixId: _base_metadata_1.BindingSectionTitles.SeriesDimension
            }];
    };
    RangeFilterItem.prototype._getDefaultCalculationWindowDefinition = function () {
        return new range_filter_calc_window_definition_1.RangeFilterWindowDefinition();
    };
    RangeFilterItem.prototype._hasSelection = function (selection) {
        if (_super.prototype._hasSelection.call(this, selection)) {
            var fullRange = this._fullRange.peek();
            if (fullRange) {
                return !_array_utils_1.arrayEquals(fullRange, selection[0]);
            }
            else
                return true;
        }
        return false;
    };
    RangeFilterItem.prototype._getSelectionByPeriod = function (period) {
        var range = period.getDateTimeValue();
        return [[range.startValue, range.endValue]];
    };
    RangeFilterItem.prototype._getDisplayFilterValues = function (limitCount) {
        return this._stateController._getDisplayFilterValues(limitCount);
    };
    RangeFilterItem.prototype._getEntireRange = function () {
        var points = this._getPointsByDimension(this.__argument.uniqueName(), _item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis);
        if (points && points.length > 0) {
            return [points[0].getValue(), points[points.length - 1].getValue()];
        }
        return [];
    };
    RangeFilterItem.prototype._validateSelection = function (selection) {
        _super.prototype._validateSelection.call(this, selection);
        if (this.argument()) {
            var newRange = this._getEntireRange();
            if (!_array_utils_1.arrayEquals(newRange, this._fullRange.peek()))
                this._fullRange(newRange);
        }
        if (this._fullRange() && this._fullRange().length > 0) {
            if (selection) {
                var validatedRange = _range_filter_selection_validator_1.RangeFilterSelectionValidator.validate({
                    startValue: selection[0][0],
                    endValue: selection[0][1]
                }, this.argument().dateTimeGroupInterval() === 'Year', {
                    minimum: this._fullRange()[0],
                    maximum: this._fullRange()[1]
                });
                this._selectionValues([[validatedRange.startValue, validatedRange.endValue]]);
            }
        }
        else {
            this._selectionValues(null);
        }
    };
    RangeFilterItem.prototype._applySelectionFromState = function (itemState) {
        _super.prototype._applySelectionFromState.call(this, itemState);
        this._stateController.applySelectionFromState(itemState);
    };
    RangeFilterItem.prototype._updateContentViewModel = function (content) {
        _super.prototype._updateContentViewModel.call(this, content);
        (content.ViewModel.DateTimePeriods || []).forEach(function (p) {
            p.Start && p.Start.Date && (p.Start.Date = new Date(p.Start.Date));
            p.End && p.End.Date && (p.End.Date = new Date(p.End.Date));
        });
    };
    RangeFilterItem.prototype._extendContentState = function (content) {
        _super.prototype._extendContentState.call(this, content);
        this._stateController.extendContentState(content);
    };
    RangeFilterItem.prototype._isSortingEnabled = function () {
        return false;
    };
    RangeFilterItem.prototype._isTopNEnabled = function (dataItem) {
        return false;
    };
    RangeFilterItem.rangeSeriesViewTypesMap = {
        Line: chart_series_creator_1.ChartSeriesCreator.chartSeriesViewTypesMap.Line,
        StackedLine: chart_series_creator_1.ChartSeriesCreator.chartSeriesViewTypesMap.StackedLine,
        FullStackedLine: chart_series_creator_1.ChartSeriesCreator.chartSeriesViewTypesMap.FullStackedLine,
        Area: chart_series_creator_1.ChartSeriesCreator.chartSeriesViewTypesMap.Area,
        StackedArea: chart_series_creator_1.ChartSeriesCreator.chartSeriesViewTypesMap.StackedArea,
        FullStackedArea: chart_series_creator_1.ChartSeriesCreator.chartSeriesViewTypesMap.FullStackedArea,
        Bar: chart_series_creator_1.ChartSeriesCreator.chartSeriesViewTypesMap.Bar,
        StackedBar: chart_series_creator_1.ChartSeriesCreator.chartSeriesViewTypesMap.StackedBar,
        FullStackedBar: chart_series_creator_1.ChartSeriesCreator.chartSeriesViewTypesMap.FullStackedBar
    };
    __decorate([
        _utils_1.collectionItemType("DateTimePeriod")
    ], RangeFilterItem.prototype, "dateTimePeriods", void 0);
    return RangeFilterItem;
}(series_item_1.SeriesItem));
exports.RangeFilterItem = RangeFilterItem;
serializable_model_1.itemTypesMap["RangeFilter"] = { type: RangeFilterItem, groupName: 'filter', title: "DashboardStringId.DefaultNameRangeFilterItem", index: 310 };
