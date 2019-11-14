/**
* DevExpress Dashboard (chart-series.js)
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
var serializable_model_1 = require("../../serializable-model");
var _chart_series_1 = require("./metadata/_chart-series");
var ChartSeries = (function (_super) {
    __extends(ChartSeries, _super);
    function ChartSeries(seriesJSON, serializer) {
        return _super.call(this, seriesJSON, serializer) || this;
    }
    ChartSeries.prototype.getInfo = function () {
        throw new Error("Method 'getInfo' is not implemented.");
    };
    ChartSeries.prototype.grabFrom = function (series) {
        this.plotOnSecondaryAxis(series.plotOnSecondaryAxis());
        this.ignoreEmptyPoints(series.ignoreEmptyPoints());
        this.showPointMarkers(series.showPointMarkers());
        this.ignoreEmptyPoints(series.ignoreEmptyPoints());
        this.name(series.name());
        this.pointLabelOptions.grabFrom(series.pointLabelOptions);
    };
    return ChartSeries;
}(serializable_model_1.TypedSerializableModel));
exports.ChartSeries = ChartSeries;
var SimpleSeries = (function (_super) {
    __extends(SimpleSeries, _super);
    function SimpleSeries(dataItemProvider, seriesJSON, serializer) {
        if (seriesJSON === void 0) { seriesJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, seriesJSON, serializer) || this;
        dataItemProvider._attachDataItem(_this, _chart_series_1.chartSeriesValue.propertyName);
        return _this;
    }
    SimpleSeries.prototype._getBindingModel = function () {
        return [{
                propertyName: _chart_series_1.chartSeriesValue.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardStringId.ValueCaption"
            }];
    };
    SimpleSeries.prototype.getInfo = function () {
        return _chart_series_1.simpleSeriesSerializationsInfo;
    };
    SimpleSeries.prototype._getDefaultItemType = function () {
        return "Simple";
    };
    return SimpleSeries;
}(ChartSeries));
exports.SimpleSeries = SimpleSeries;
var RangeSeries = (function (_super) {
    __extends(RangeSeries, _super);
    function RangeSeries(dataItemProvider, seriesJSON, serializer) {
        if (seriesJSON === void 0) { seriesJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, seriesJSON, serializer) || this;
        dataItemProvider._attachDataItem(_this, _chart_series_1.value1.propertyName);
        dataItemProvider._attachDataItem(_this, _chart_series_1.value2.propertyName);
        return _this;
    }
    RangeSeries.prototype.getInfo = function () {
        return _chart_series_1.rangeSeriesSerializationsInfo;
    };
    RangeSeries.prototype._getDefaultItemType = function () {
        return "Range";
    };
    RangeSeries.prototype._getBindingModel = function () {
        return [{
                propertyName: _chart_series_1.value1.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardStringId.Value1Caption"
            }, {
                propertyName: _chart_series_1.value2.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardStringId.Value2Caption"
            }];
    };
    return RangeSeries;
}(ChartSeries));
exports.RangeSeries = RangeSeries;
var WeightedSeries = (function (_super) {
    __extends(WeightedSeries, _super);
    function WeightedSeries(dataItemProvider, seriesJSON, serializer) {
        if (seriesJSON === void 0) { seriesJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, seriesJSON, serializer) || this;
        dataItemProvider._attachDataItem(_this, _chart_series_1.chartSeriesWeight.propertyName);
        dataItemProvider._attachDataItem(_this, _chart_series_1.chartSeriesValue.propertyName);
        return _this;
    }
    WeightedSeries.prototype.getInfo = function () {
        return _chart_series_1.weightedSeriesSerializationsInfo;
    };
    WeightedSeries.prototype._getDefaultItemType = function () {
        return "Weighted";
    };
    WeightedSeries.prototype._getBindingModel = function () {
        return [{
                propertyName: _chart_series_1.chartSeriesValue.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardWebStringId.Chart.Value"
            }, {
                propertyName: _chart_series_1.chartSeriesWeight.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardStringId.WeightCaption"
            }];
    };
    return WeightedSeries;
}(ChartSeries));
exports.WeightedSeries = WeightedSeries;
var HighLowCloseSeries = (function (_super) {
    __extends(HighLowCloseSeries, _super);
    function HighLowCloseSeries(dataItemProvider, seriesJSON, serializer) {
        if (seriesJSON === void 0) { seriesJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, seriesJSON, serializer) || this;
        dataItemProvider._attachDataItem(_this, _chart_series_1.high.propertyName);
        dataItemProvider._attachDataItem(_this, _chart_series_1.low.propertyName);
        dataItemProvider._attachDataItem(_this, _chart_series_1.close.propertyName);
        return _this;
    }
    HighLowCloseSeries.prototype.getInfo = function () {
        return _chart_series_1.highLowCloseSeriesSerializationsInfo;
    };
    HighLowCloseSeries.prototype._getDefaultItemType = function () {
        return "HighLowClose";
    };
    HighLowCloseSeries.prototype._getBindingModel = function () {
        return [{
                propertyName: _chart_series_1.high.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardStringId.HighCaption"
            }, {
                propertyName: _chart_series_1.low.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardStringId.LowCaption"
            }, {
                propertyName: _chart_series_1.close.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardStringId.CloseCaption"
            }];
    };
    return HighLowCloseSeries;
}(ChartSeries));
exports.HighLowCloseSeries = HighLowCloseSeries;
var OpenHighLowCloseSeries = (function (_super) {
    __extends(OpenHighLowCloseSeries, _super);
    function OpenHighLowCloseSeries(dataItemProvider, seriesJSON, serializer) {
        if (seriesJSON === void 0) { seriesJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dataItemProvider, seriesJSON, serializer) || this;
        dataItemProvider._attachDataItem(_this, _chart_series_1.open.propertyName);
        return _this;
    }
    OpenHighLowCloseSeries.prototype.getInfo = function () {
        return _chart_series_1.openHighLowCloseSeriesSerializationsInfo;
    };
    OpenHighLowCloseSeries.prototype._getDefaultItemType = function () {
        return "OpenHighLowClose";
    };
    OpenHighLowCloseSeries.prototype._getBindingModel = function () {
        return [{
                propertyName: _chart_series_1.open.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardStringId.OpenCaption"
            }].concat(_super.prototype._getBindingModel.call(this));
    };
    return OpenHighLowCloseSeries;
}(HighLowCloseSeries));
exports.OpenHighLowCloseSeries = OpenHighLowCloseSeries;
