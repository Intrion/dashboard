/**
* DevExpress Dashboard (chart-item-base.js)
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
var series_item_1 = require("./series-item");
var _utils_1 = require("../internal/_utils");
var data_item_1 = require("../data-item/data-item");
var data_dashboard_item_1 = require("./data-dashboard-item");
var _chart_item_base_1 = require("./metadata/_chart-item-base");
var _base_metadata_1 = require("../metadata/_base-metadata");
var ko = require("knockout");
var _item_data_axis_names_1 = require("../../viewer-parts/viewer/_item-data-axis-names");
var _item_data_tuple_1 = require("../../data/item-data/_item-data-tuple");
var _knockout_utils_1 = require("../internal/_knockout-utils");
var ChartItemBase = (function (_super) {
    __extends(ChartItemBase, _super);
    function ChartItemBase(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dashboardItemJSON, serializer) || this;
        _this.__arguments = ko.observableArray([]);
        _this.arguments = ko.observableArray([]);
        _this.__arguments(dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.Arguments, function (item) { return new data_item_1.DataItemLink(_this, item, serializer); })());
        _this._subscribeDataItemLinkArrays(_chart_item_base_1.chartArgumentsMeta);
        _knockout_utils_1.subscribeAndPerform(_this.__seriesDimensions, function (newValue) {
            data_dashboard_item_1.DataDashboardItem._addColoringMeta(newValue);
        });
        _knockout_utils_1.subscribeAndPerform(_this.__arguments, function (newValue) {
            data_dashboard_item_1.DataDashboardItem._addColoringMeta(newValue);
        });
        return _this;
    }
    ChartItemBase.prototype.getInfo = function () {
        return _chart_item_base_1.chartItemBaseSerializationsInfo;
    };
    ChartItemBase.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.__arguments.removeAll();
    };
    ChartItemBase.prototype._getInteractivityDimensionLinks = function () {
        var targetDimensions = this._getTargetDimensions();
        if (targetDimensions) {
            if (targetDimensions === "Arguments") {
                return this.__arguments();
            }
            else if (targetDimensions === "Points") {
                return this.__arguments().concat(this.__seriesDimensions());
            }
        }
        return _super.prototype._getInteractivityDimensionLinks.call(this);
    };
    ChartItemBase.prototype._getTargetDimensions = function () {
        return "Arguments";
    };
    ChartItemBase.prototype._getItemDataAxis = function () {
        if (this.interactivityOptions.targetDimensions() === "Series") {
            return _item_data_axis_names_1.itemDataAxisNames.chartSeriesAxis;
        }
        else if (this.interactivityOptions.targetDimensions() === "Arguments") {
            return _item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis;
        }
        else if (this.interactivityOptions.targetDimensions() === "Points") {
            return _item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis;
        }
        else {
            throw Error("Unsupported interactivity type");
        }
    };
    ChartItemBase.prototype._getCurrentFilterValues = function () {
        var that = this, data = that._getItemData(), argumentNames = that.arguments().map(function (dim) { return dim.uniqueName(); }), seriesNames = that.seriesDimensions().map(function (dim) { return dim.uniqueName(); }), selectedValues = that._getSelectedValuesByItemName();
        if (!data)
            return;
        if (this.interactivityOptions.targetDimensions() === "Arguments") {
            return data && data.getCurrentFilterValues(argumentNames, _item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis, selectedValues);
        }
        else if (this.interactivityOptions.targetDimensions() === "Series") {
            return data.getCurrentFilterValues(seriesNames, _item_data_axis_names_1.itemDataAxisNames.chartSeriesAxis, selectedValues);
        }
        else if (this.interactivityOptions.targetDimensions() === "Points") {
            var argumentPoints = data.getCurrentFilterValues(that.arguments().map(function (dim) { return dim.uniqueName(); }), _item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis, selectedValues.map(function (val) { return [val[0]]; }));
            var seriesPoints = data.getCurrentFilterValues(that.seriesDimensions().map(function (dim) { return dim.uniqueName(); }), _item_data_axis_names_1.itemDataAxisNames.chartSeriesAxis, selectedValues.map(function (val) { return [val[1]]; }));
            var tuples = [];
            argumentPoints.forEach(function (arg, index) {
                tuples.push(new _item_data_tuple_1.itemDataTuple([arg.getAxisPoint(_item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis), seriesPoints[index].getAxisPoint(_item_data_axis_names_1.itemDataAxisNames.chartSeriesAxis)]));
            });
            return tuples;
        }
    };
    ChartItemBase.prototype._itemInteractivityByColumnAxis = function () {
        return this.interactivityOptions.targetDimensions() === "Arguments";
    };
    ChartItemBase.prototype._getInteractivityAxisDimensionCount = function () {
        return this._itemInteractivityByColumnAxis() ? this.arguments().length : this.seriesDimensions().length;
    };
    ChartItemBase.prototype._getCanColorByMeasures = function () { return true; };
    ChartItemBase.prototype._getCanColorByDimensions = function () { return true; };
    ChartItemBase.prototype._getColorizableDataItemsInfo = function () {
        return [{
                items: this.__arguments(),
                prefixId: _base_metadata_1.BindingSectionTitles.Arguments
            }, {
                items: this.__seriesDimensions(),
                prefixId: _base_metadata_1.BindingSectionTitles.SeriesDimension
            }];
    };
    __decorate([
        _utils_1.collectionItemType("Argument")
    ], ChartItemBase.prototype, "__arguments", void 0);
    return ChartItemBase;
}(series_item_1.SeriesItem));
exports.ChartItemBase = ChartItemBase;
