/**
* DevExpress Dashboard (chart-item.js)
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
var chart_item_base_1 = require("../chart-item-base");
var chart_pane_1 = require("./chart-pane");
var _chart_item_1 = require("./metadata/_chart-item");
var _helper_classes_1 = require("../../internal/_helper-classes");
var chart_series_1 = require("./chart-series");
var chart_calc_window_definition_1 = require("../../data-item/window-definition/chart-calc-window-definition");
var serializable_model_1 = require("../../serializable-model");
var _default_1 = require("../../../data/localization/_default");
var index_internal_1 = require("../../index.internal");
var _dimension_1 = require("../../data-item/metadata/_dimension");
var _data_field_1 = require("../../data-sources/_data-field");
var ChartItem = (function (_super) {
    __extends(ChartItem, _super);
    function ChartItem(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dashboardItemJSON, serializer) || this;
        _this.panes = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.Panes || {}, function (item) { return new chart_pane_1.ChartPane(_this, item, serializer); });
        if (_this.panes().length === 0) {
            _this._addNewPane();
        }
        index_internal_1.subscribeAndPerform(_this.__arguments, function (newValue) {
            newValue.forEach(function (argument) {
                argument._specifics.customDataShapingProperties = [{
                        serializationInfo: _dimension_1.isDiscreteNumericScale,
                        filter: function (dataField) { return _data_field_1.DataField.isNumeric(dataField); }
                    }];
            });
        });
        return _this;
    }
    ChartItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.panes.removeAll();
        this.panes.push(new chart_pane_1.ChartPane(this, {}));
    };
    ChartItem.prototype.getInfo = function () {
        return _chart_item_1.chartItemSerializationInfo;
    };
    ChartItem.prototype._getDefaultItemType = function () {
        return "Chart";
    };
    ChartItem.prototype._updateContentViewModel = function (content) {
        _super.prototype._updateContentViewModel.call(this, content);
        content.ViewModel.Rotated = this.rotated();
    };
    ChartItem.prototype._getTargetDimensions = function () { return this.interactivityOptions.targetDimensions(); };
    ChartItem.prototype._getMasterFilterMode = function () { return this.interactivityOptions.masterFilterMode(); };
    ChartItem.prototype._getDrillDownEnabled = function () { return this.interactivityOptions.isDrillDownEnabled(); };
    ChartItem.prototype._getIgnoreMasterFilter = function () { return this.interactivityOptions.ignoreMasterFilters(); };
    ChartItem.prototype._getCanColorByDimensions = function () { return this._coloredSeries().length > 0; };
    ChartItem.prototype._getAreMeasuresColoredByDefault = function () {
        return this._coloredSeries().length > 1;
    };
    ChartItem.prototype._getIsDimensionColoredByDefault = function (dimension) {
        return !!this.__seriesDimensions().filter(function (link) { return link.dataItem() === dimension; })[0];
    };
    ChartItem.prototype._addNewPane = function () {
        var pane = new chart_pane_1.ChartPane(this, { "@ItemType": "Pane" });
        pane.name(_helper_classes_1.NameGenerator.generateName(_default_1.getLocalizationById("DashboardStringId.DefaultNameChartPane") + " ", this.panes(), "name", 1));
        this.panes.push(pane);
    };
    ChartItem.prototype._coloredSeries = function () {
        return [].concat.apply([], this.panes().map(function (pane) { return pane.series(); })).filter(function (series) { return !(series instanceof chart_series_1.HighLowCloseSeries) && !(series instanceof chart_series_1.OpenHighLowCloseSeries); });
    };
    ChartItem.prototype._getDefaultCalculationWindowDefinition = function () {
        return new chart_calc_window_definition_1.ChartWindowDefinition();
    };
    return ChartItem;
}(chart_item_base_1.ChartItemBase));
exports.ChartItem = ChartItem;
serializable_model_1.itemTypesMap["Chart"] = { type: ChartItem, groupName: 'common', title: "DashboardStringId.DefaultNameChartItem", index: 30 };
