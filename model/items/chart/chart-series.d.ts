/**
* DevExpress Dashboard (chart-series.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { TypedSerializableModel } from '../../serializable-model';
import { IBindingModelProvider } from '../_binding-model';
import { PointLabelOptions } from './point-label-options';
import { Measure } from '../../data-item/measure';
import { SimpleSeriesType, RangeSeriesType, OpenHighLowCloseSeriesType } from '../../enums';
import * as ko from 'knockout';
import { DataDashboardItem } from '../../items/data-dashboard-item';
import { IBindingProperty } from '../binding-property';
export declare abstract class ChartSeries extends TypedSerializableModel implements IBindingModelProvider {
    name: ko.Observable<string>;
    plotOnSecondaryAxis: ko.Observable<boolean>;
    ignoreEmptyPoints: ko.Observable<boolean>;
    showPointMarkers: ko.Observable<boolean>;
    pointLabelOptions: PointLabelOptions;
    constructor(seriesJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    grabFrom(series: ChartSeries): void;
    abstract _getBindingModel(): Array<IBindingProperty>;
}
export declare class SimpleSeries extends ChartSeries {
    private __value;
    value: ko.Observable<Measure>;
    seriesType: ko.Observable<SimpleSeriesType>;
    constructor(dataItemProvider: DataDashboardItem, seriesJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _getBindingModel(): Array<IBindingProperty>;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
}
export declare class RangeSeries extends ChartSeries {
    private __value1;
    private __value2;
    value1: ko.Observable<Measure>;
    value2: ko.Observable<Measure>;
    seriesType: ko.Observable<RangeSeriesType>;
    constructor(dataItemProvider: DataDashboardItem, seriesJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    _getBindingModel(): Array<IBindingProperty>;
}
export declare class WeightedSeries extends ChartSeries {
    private __weight;
    private __value;
    weight: ko.Observable<Measure>;
    value: ko.Observable<Measure>;
    constructor(dataItemProvider: DataDashboardItem, seriesJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    _getBindingModel(): Array<IBindingProperty>;
}
export declare class HighLowCloseSeries extends ChartSeries {
    private __high;
    private __low;
    private __close;
    high: ko.Observable<Measure>;
    low: ko.Observable<Measure>;
    close: ko.Observable<Measure>;
    constructor(dataItemProvider: DataDashboardItem, seriesJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    _getBindingModel(): Array<IBindingProperty>;
}
export declare class OpenHighLowCloseSeries extends HighLowCloseSeries {
    private __open;
    open: ko.Observable<Measure>;
    seriesType: ko.Observable<OpenHighLowCloseSeriesType>;
    constructor(dataItemProvider: DataDashboardItem, seriesJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    _getBindingModel(): Array<IBindingProperty>;
}
