﻿/**
* DevExpress Dashboard (pivot-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataDashboardItem } from '../data-dashboard-item';
import { Dimension } from '../../data-item/dimension';
import { Measure } from '../../data-item/measure';
import { FilterableDashboardItemInteractivityOptions } from '../options/interactivity-options';
import { PivotValuesPosition, PivotRowTotalsPosition, PivotColumnTotalsPosition, PivotLayoutType } from '../../enums';
import { MeasureCalculationWindowDefinition } from '../../data-item/window-definition/measure-calc-window-definition';
import * as ko from 'knockout';
export declare class PivotItem extends DataDashboardItem {
    private __columns;
    columns: ko.ObservableArray<Dimension>;
    private __rows;
    rows: ko.ObservableArray<Dimension>;
    private __values;
    values: ko.ObservableArray<Measure>;
    autoExpandColumnGroups: ko.Observable<boolean>;
    autoExpandRowGroups: ko.Observable<boolean>;
    showColumnGrandTotals: ko.Observable<boolean>;
    showRowGrandTotals: ko.Observable<boolean>;
    showColumnTotals: ko.Observable<boolean>;
    showRowTotals: ko.Observable<boolean>;
    interactivityOptions: FilterableDashboardItemInteractivityOptions;
    valuesPosition: ko.Observable<PivotValuesPosition>;
    rowTotalsLocation: ko.Observable<PivotRowTotalsPosition>;
    columnTotalsLocation: ko.Observable<PivotColumnTotalsPosition>;
    layoutType: ko.Observable<PivotLayoutType>;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _clearBindings(): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    private _canChangeDataItemVisibilityOptions;
    private _isTotalsVisibilityOptionEnabled;
    private _setCustomOptionsPropertyOnMeasures;
    private _setCustomOptionsPropertyOnDimensions;
    protected _getDefaultItemType(): string;
    protected _extendContentState(content: any): void;
    protected _getIgnoreMasterFilter(): boolean;
    _getDefaultCalculationWindowDefinition(): MeasureCalculationWindowDefinition;
}
