/**
* DevExpress Dashboard (date-filter-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { Dimension } from '../../data-item/dimension';
import { DataItemLink } from '../../data-item/data-item';
import { DateTimePeriod } from '../range-filter/date-time-period';
import { DataDashboardItem } from '../data-dashboard-item';
import { DateFilterType, DateFilterArrangementMode, DatePickerLocation } from '../../enums';
import { DimensionFilterValues } from '../../data-item/_dimension-filter-values';
import * as ko from 'knockout';
import { ItemState } from '../../dashboard-state';
import { RangeStateController } from '../range-filter/_range-state-controller';
import { FilterableDashboardItemInteractivityOptions } from '../options/interactivity-options';
export declare class DateFilterItem extends DataDashboardItem {
    private __dimension;
    dimension: ko.Observable<Dimension>;
    filterType: ko.Observable<DateFilterType>;
    arrangementMode: ko.Observable<DateFilterArrangementMode>;
    datePickerLocation: ko.Observable<DatePickerLocation>;
    defaultDateTimePeriodName: ko.Observable<string>;
    displayTextPattern: ko.Observable<string>;
    dateTimePeriods: ko.ObservableArray<DateTimePeriod>;
    _defaultDateTimePeriodIndexSubscription: ko.Subscription;
    currentSelectedDateTimePeriodName: ko.Observable<string>;
    _stateController: RangeStateController;
    interactivityOptions: FilterableDashboardItemInteractivityOptions;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _getSelectionByPeriod(period: DateTimePeriod): any[][];
    _clearBindings(): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    protected _getClearMasterFilterSupported(): boolean;
    protected _getIsMasterFilter(): boolean;
    protected _getIgnoreMasterFilter(): boolean;
    protected _getInteractivityDimensionLinks(): DataItemLink[];
    protected _validateSelection(selection: Array<Array<any>>): void;
    _getDisplayFilterValues(limitCount?: number): Array<DimensionFilterValues>;
    protected _updateContentViewModel(content: any): void;
    protected _applySelectionFromState(itemState: ItemState): void;
    protected _extendContentState(content: any): void;
    _isSortingEnabled(): boolean;
    _isTopNEnabled(dataItem: Dimension): boolean;
    _getEntireRange(): Array<any>;
}
