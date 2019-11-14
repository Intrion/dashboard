/**
* DevExpress Dashboard (_range-state-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DateTimePeriod } from './date-time-period';
import { ItemState } from '../../dashboard-state';
import * as ko from 'knockout';
import { DateFilterItem } from '../filter-items/date-filter-item';
import { RangeFilterItem } from './range-filter-item';
import { PrimitiveType } from '../../../data';
import { DimensionFilterValues } from '../../data-item/_dimension-filter-values';
export declare class RangeStateController {
    item: DateFilterItem | RangeFilterItem;
    readonly defaultDateTimePeriodName: ko.Observable<string>;
    readonly currentSelectedDateTimePeriodName: ko.Observable<string>;
    readonly dateTimePeriods: ko.ObservableArray<DateTimePeriod>;
    readonly _selectionValues: ko.Observable<PrimitiveType[][]>;
    _setSelectionData(selection: Array<Array<PrimitiveType>>): void;
    _getSelectionByPeriod(period: DateTimePeriod): any[][];
    _setSelectionFromState(stateSelection: any): void;
    constructor(item: DateFilterItem | RangeFilterItem);
    initialize(): void;
    applySelectionFromState(itemState: ItemState): void;
    extendContentState(content: any): void;
    _getDisplayFilterValues(limitCount?: number): Array<DimensionFilterValues>;
}
