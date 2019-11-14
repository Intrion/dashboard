/**
* DevExpress Dashboard (chart-series-creator.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SimpleSeries, RangeSeries, WeightedSeries, OpenHighLowCloseSeries, HighLowCloseSeries, ChartSeries } from './chart-series';
import { DataDashboardItem } from '../../items/data-dashboard-item';
export declare class ChartSeriesCreator {
    static chartSeriesTypesMap: {
        "Simple": typeof SimpleSeries;
        "Range": typeof RangeSeries;
        "Weighted": typeof WeightedSeries;
        "OpenHighLowClose": typeof OpenHighLowCloseSeries;
        "HighLowClose": typeof HighLowCloseSeries;
    };
    static chartSeriesViewTypesMap: {
        Bar: any;
        Point: any;
        Line: any;
        Spline: any;
        Area: any;
        StackedBar: any;
        FullStackedBar: any;
        StackedLine: any;
        FullStackedLine: any;
        StepLine: any;
        StackedArea: any;
        FullStackedArea: any;
        StepArea: any;
        SplineArea: any;
        StackedSplineArea: any;
        FullStackedSplineArea: any;
    };
    static chartSeriesGroupLocalization: {
        "Area": string;
        "Bar": string;
        "Bubble": string;
        "Financial": string;
        "Point / Line": string;
        "Range": string;
    };
    static getSeriesCreator(dataItemProvider: DataDashboardItem): (seriesViewType: "Bar" | "Point" | "Line" | "Spline" | "Area" | "StackedBar" | "FullStackedBar" | "StackedLine" | "FullStackedLine" | "StepLine" | "StackedArea" | "FullStackedArea" | "StepArea" | "SplineArea" | "StackedSplineArea" | "FullStackedSplineArea" | "SideBySideRangeBar" | "RangeArea" | "CandleStick" | "Stock") => ChartSeries;
    static createSeries(dataItemProvider: DataDashboardItem, seriesJSON: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer): ChartSeries;
}
