/**
* DevExpress Dashboard (scatter-chart-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataDashboardItem } from '../data-dashboard-item';
import { DataItemLink } from '../../data-item/data-item';
import { Dimension } from '../../data-item/dimension';
import { Measure } from '../../data-item/measure';
import { DashboardItemInteractivityOptions } from '../options/interactivity-options';
import { ChartLegend } from '../chart/chart-legend';
import { ChartAxisY } from '../chart/chart-axis';
import { ScatterPointLabelOptions } from './scatter-point-label-options';
import { MeasureCalculationWindowDefinition } from '../../data-item/window-definition/measure-calc-window-definition';
import * as ko from 'knockout';
export declare class ScatterChartItem extends DataDashboardItem {
    private __arguments;
    arguments: ko.ObservableArray<Dimension>;
    private __axisXMeasure;
    private __axisYMeasure;
    private __weight;
    weight: ko.Observable<Measure>;
    axisXMeasure: ko.Observable<Measure>;
    axisYMeasure: ko.Observable<Measure>;
    interactivityOptions: DashboardItemInteractivityOptions;
    rotated: ko.Observable<boolean>;
    legend: ChartLegend;
    axisX: ChartAxisY;
    axisY: ChartAxisY;
    pointLabelOptions: ScatterPointLabelOptions;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _clearBindings(): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _isCalculationSupported(): boolean;
    protected _getDefaultItemType(): string;
    protected _getMasterFilterMode(): string;
    protected _getDrillDownEnabled(): boolean;
    protected _getIgnoreMasterFilter(): boolean;
    protected _getInteractivityDimensionLinks(): DataItemLink[];
    protected _getCanColorByMeasures(): boolean;
    protected _getCanColorByDimensions(): boolean;
    _getColorizableDataItemsInfo(): Array<{
        items: Array<DataItemLink>;
        prefixId: string;
    }>;
    _getDefaultCalculationWindowDefinition(): MeasureCalculationWindowDefinition;
    _isSortingEnabled(): boolean;
}
