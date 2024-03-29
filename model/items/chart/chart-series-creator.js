﻿/**
* DevExpress Dashboard (chart-series-creator.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var chart_series_1 = require("./chart-series");
var ChartSeriesCreator = (function () {
    function ChartSeriesCreator() {
    }
    ChartSeriesCreator.getSeriesCreator = function (dataItemProvider) {
        return function (seriesViewType) {
            var seriesType = ChartSeriesCreator.chartSeriesViewTypesMap[seriesViewType].seriesType, series = ChartSeriesCreator.createSeries(dataItemProvider, { "@ItemType": seriesType });
            if (series instanceof chart_series_1.SimpleSeries) {
                series.seriesType(seriesViewType);
            }
            else if (series instanceof chart_series_1.RangeSeries) {
                series.seriesType(seriesViewType);
            }
            else if (series instanceof chart_series_1.OpenHighLowCloseSeries) {
                series.seriesType(seriesViewType);
            }
            return series;
        };
    };
    ChartSeriesCreator.createSeries = function (dataItemProvider, seriesJSON, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var itemType = seriesJSON["@ItemType"];
        return new ChartSeriesCreator.chartSeriesTypesMap[itemType](dataItemProvider, seriesJSON, serializer);
    };
    ChartSeriesCreator.chartSeriesTypesMap = {
        "Simple": chart_series_1.SimpleSeries,
        "Range": chart_series_1.RangeSeries,
        "Weighted": chart_series_1.WeightedSeries,
        "OpenHighLowClose": chart_series_1.OpenHighLowCloseSeries,
        "HighLowClose": chart_series_1.HighLowCloseSeries
    };
    ChartSeriesCreator.chartSeriesViewTypesMap = {
        "Bar": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeBar",
            group: "Bar",
            icon: "dx-dashboard-chart-series-bar"
        },
        "StackedBar": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeStackedBar",
            group: "Bar",
            icon: "dx-dashboard-chart-series-stacked-bar"
        },
        "FullStackedBar": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeFullStackedBar",
            group: "Bar",
            icon: "dx-dashboard-chart-series-full-stacked-bar"
        },
        "Point": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypePoint",
            group: "Point / Line",
            icon: "dx-dashboard-chart-series-points"
        },
        "Line": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeLine",
            group: "Point / Line",
            icon: "dx-dashboard-chart-series-line"
        },
        "StackedLine": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeStackedLine",
            group: "Point / Line",
            icon: "dx-dashboard-chart-series-stacked-line"
        },
        "FullStackedLine": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeFullStackedLine",
            group: "Point / Line",
            icon: "dx-dashboard-chart-series-full-stacked-line"
        },
        "StepLine": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeStepLine",
            group: "Point / Line",
            icon: "dx-dashboard-chart-series-step-line"
        },
        "Spline": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeSpline",
            group: "Point / Line",
            icon: "dx-dashboard-chart-series-spline"
        },
        "Area": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeArea",
            group: "Area",
            icon: "dx-dashboard-chart-series-area"
        },
        "StackedArea": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeStackedArea",
            group: "Area",
            icon: "dx-dashboard-chart-series-stacked-area"
        },
        "FullStackedArea": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeFullStackedArea",
            group: "Area",
            icon: "dx-dashboard-chart-series-full-stacked-area"
        },
        "StepArea": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeStepArea",
            group: "Area",
            icon: "dx-dashboard-chart-series-step-area"
        },
        "SplineArea": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeSplineArea",
            group: "Area",
            icon: "dx-dashboard-chart-series-spline-area"
        },
        "StackedSplineArea": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeStackedSplineArea",
            group: "Area",
            icon: "dx-dashboard-chart-series-stacked-spline-area"
        },
        "FullStackedSplineArea": {
            seriesType: "Simple",
            displayName: "DashboardStringId.SeriesTypeFullStackedSplineArea",
            group: "Area",
            icon: "dx-dashboard-chart-series-full-stacked-spline-area"
        },
        "SideBySideRangeBar": {
            seriesType: "Range",
            displayName: "DashboardStringId.SeriesTypeSideBySideRangeBar",
            group: "Range",
            icon: "dx-dashboard-chart-series-range-bar"
        },
        "RangeArea": {
            seriesType: "Range",
            displayName: "DashboardStringId.SeriesTypeRangeArea",
            group: "Range",
            icon: "dx-dashboard-chart-series-range-area"
        },
        "Weighted": {
            seriesType: "Weighted",
            displayName: "DashboardWebStringId.Chart.SeriesType.Weighted",
            group: "Bubble",
            icon: "dx-dashboard-chart-series-weighted"
        },
        "HighLowClose": {
            seriesType: "HighLowClose",
            displayName: "DashboardStringId.SeriesTypeHighLowClose",
            group: "Financial",
            icon: "dx-dashboard-chart-series-high-low-close"
        },
        "CandleStick": {
            seriesType: "OpenHighLowClose",
            displayName: "DashboardStringId.SeriesTypeCandleStick",
            group: "Financial",
            icon: "dx-dashboard-chart-series-candle-stick"
        },
        "Stock": {
            seriesType: "OpenHighLowClose",
            displayName: "DashboardStringId.SeriesTypeStock",
            group: "Financial",
            icon: "dx-dashboard-chart-series-stock"
        }
    };
    ChartSeriesCreator.chartSeriesGroupLocalization = {
        "Area": "DashboardStringId.SeriesTypeGroupArea",
        "Bar": "DashboardStringId.SeriesTypeGroupBar",
        "Bubble": "DashboardStringId.SeriesTypeGroupBubble",
        "Financial": "DashboardStringId.SeriesTypeGroupFinancial",
        "Point / Line": "DashboardStringId.SeriesTypeGroupPointLine",
        "Range": "DashboardStringId.SeriesTypeGroupRange"
    };
    return ChartSeriesCreator;
}());
exports.ChartSeriesCreator = ChartSeriesCreator;
