﻿/**
* DevExpress Dashboard (custom-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataDashboardItem } from '../data-dashboard-item';
import { ICustomItemProperty } from './property';
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { ICustomItemBinding, ICustomItemBindingValue } from './binding';
import { ColorSchemeEntry } from '../../colorization/color-scheme-entry';
import { DashboardItemColoringOptions } from '../options/coloring-options';
import { SliceTable } from './slice-table';
import { DataItemLink } from '../../data-item/data-item';
import { ICustomItemMetaData } from './meta';
import { ICustomDataRow } from './data-row';
import { MeasureCalculationWindowDefinition } from '../../data-item/window-definition/measure-calc-window-definition';
import * as ko from 'knockout';
export declare class CustomItem extends DataDashboardItem {
    private _meta;
    static ItemType: string;
    static getPropertyInfo(p: ICustomItemProperty): DxDesigner.Analytics.Utils.ISerializationInfo;
    static _getBindingLinkName(propertyName: string): string;
    private static _getSerializationsInfo;
    private static _hasInteractivityTargets;
    private static _hasColoringDimensions;
    private static _hasColoringMeasures;
    private static _isFilterAllowed;
    private static _isDrillDownAllowed;
    private static _getInfo;
    private static _getPropertiesSerializationsInfo;
    colorScheme: ko.ObservableArray<ColorSchemeEntry>;
    coloringOptions: DashboardItemColoringOptions;
    customItemType: ko.Observable<string>;
    sliceTables: ko.ObservableArray<SliceTable>;
    interactivityOptions: any;
    interactivityTargets: ko.ObservableArray<DataItemLink>;
    coloringDimensions: ko.ObservableArray<DataItemLink>;
    coloringMeasures: ko.ObservableArray<DataItemLink>;
    customMetadata: {};
    getInfo: () => DxDesigner.Analytics.Utils.ISerializationInfoArray;
    constructor(_meta: ICustomItemMetaData, modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _clearBindings(): void;
    getBindingValue(propertyName: string, index?: number): Array<ICustomItemBindingValue>;
    iterateData(action: (item: ICustomDataRow) => any, sliceTableName?: string): void;
    protected _getDefaultItemType(): string;
    private _getSliceTable;
    _getAllSelectionValues(activeDimensions: Array<string>): any[];
    private getSlice;
    private _getStorage;
    private _getValidIds;
    private _getColor;
    private _getColorMeasureId;
    private _getMeasureValue;
    private _getMeasureDisplayText;
    private _getDimensionUniqueValue;
    private _getDimensionValue;
    private _getDimensionDisplayText;
    private _format;
    private _getServerText;
    private _getSpecialValue;
    private _getValueBySliceKey;
    _isExcludingAllFilter: ko.Computed<boolean>;
    readonly customBindings: Array<ICustomItemBinding>;
    readonly customProperties: Array<ICustomItemProperty>;
    readonly customInteractivity: any;
    protected _getMasterFilterMode(): string;
    protected _getDrillDownEnabled(): boolean;
    protected _getIgnoreMasterFilter(): boolean;
    protected _getInteractivityDimensionLinks(): DataItemLink[];
    isDrillDownAllowed(): boolean;
    isFilterAllowed(): boolean;
    _isInteractivityAllowed(): boolean;
    protected _getCanColorByMeasures(): boolean;
    protected _getCanColorByDimensions(): boolean;
    _getColorizableDataItemsInfo(): Array<{
        items: Array<DataItemLink>;
        prefixId: string;
    }>;
    _getDefaultCalculationWindowDefinition(): MeasureCalculationWindowDefinition;
}
