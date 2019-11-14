/**
* DevExpress Dashboard (range-filter-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SeriesItem } from '../series-item';
import { DataItemLink } from '../../data-item/data-item';
import { Dimension } from '../../data-item/dimension';
import { FilterableDashboardItemInteractivityOptions } from '../options/interactivity-options';
import { DateTimePeriod } from './date-time-period';
import { ChartSeries } from '../chart/chart-series';
import { ItemState } from '../../dashboard-state';
import { MeasureCalculationWindowDefinition } from '../../data-item/window-definition/measure-calc-window-definition';
import { DimensionFilterValues } from '../../data-item/_dimension-filter-values';
import * as ko from 'knockout';
import { RangeStateController } from './_range-state-controller';
export declare class RangeFilterItem extends SeriesItem {
    static rangeSeriesViewTypesMap: {
        Line: any;
        StackedLine: any;
        FullStackedLine: any;
        Area: any;
        StackedArea: any;
        FullStackedArea: any;
        Bar: any;
        StackedBar: any;
        FullStackedBar: any;
    };
    private __argument;
    argument: ko.Observable<Dimension>;
    interactivityOptions: FilterableDashboardItemInteractivityOptions;
    dateTimePeriods: ko.ObservableArray<DateTimePeriod>;
    series: ko.ObservableArray<ChartSeries>;
    defaultDateTimePeriodName: ko.Observable<string>;
    _defaultDateTimePeriodIndexSubscription: ko.Subscription;
    currentSelectedDateTimePeriodName: ko.Observable<string>;
    _stateController: RangeStateController;
    readonly _supportParallelRequests: boolean;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _clearBindings(): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    protected _getIgnoreMasterFilter(): boolean;
    protected _getClearMasterFilterSupported(): boolean;
    protected _getIsMasterFilter(): boolean;
    protected _getInteractivityDimensionLinks(): DataItemLink[];
    protected _getCanColorByDimensions(): boolean;
    protected _getCanColorByMeasures(): boolean;
    protected _getAreMeasuresColoredByDefault(): boolean;
    protected _getIsDimensionColoredByDefault(dimension: Dimension): boolean;
    _getColorizableDataItemsInfo(): Array<{
        items: Array<DataItemLink>;
        prefixId: string;
    }>;
    _getDefaultCalculationWindowDefinition(): MeasureCalculationWindowDefinition;
    protected _hasSelection(selection: any): boolean;
    _getSelectionByPeriod(period: DateTimePeriod): any[][];
    _getDisplayFilterValues(limitCount?: number): Array<DimensionFilterValues>;
    _getEntireRange(): Array<any>;
    protected _validateSelection(selection: Array<Array<any>>): void;
    protected _applySelectionFromState(itemState: ItemState): void;
    protected _updateContentViewModel(content: any): void;
    protected _extendContentState(content: any): void;
    _isSortingEnabled(): boolean;
    _isTopNEnabled(dataItem: Dimension): boolean;
}
