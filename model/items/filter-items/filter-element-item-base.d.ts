/**
* DevExpress Dashboard (filter-element-item-base.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataDashboardItem } from '../data-dashboard-item';
import { DataItemLink } from '../../data-item/data-item';
import { Dimension } from '../../data-item/dimension';
import { FilterableDashboardItemInteractivityOptions } from '../options/interactivity-options';
import { IExternalFilter } from '../../internal/_interfaces';
import { PrimitiveType } from '../../../data/types';
import * as ko from 'knockout';
export declare abstract class FilterElementItemBase extends DataDashboardItem {
    private __filterDimensions;
    filterDimensions: ko.ObservableArray<Dimension>;
    enableSearch: ko.Observable<boolean>;
    interactivityOptions: FilterableDashboardItemInteractivityOptions;
    _unselectedValues: ko.Observable<any[][]>;
    _isExcludingAllFilter: ko.Computed<boolean>;
    readonly _supportParallelRequests: boolean;
    private readonly _useCriteriaOptimization;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _clearBindings(): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfo[];
    _isCalculationSupported(): boolean;
    protected _getInteractivityDimensionLinks(): DataItemLink[];
    protected _getMasterFilterMode(): string;
    protected _getIgnoreMasterFilter(): boolean;
    protected _getClearMasterFilterSupported(): boolean;
    protected _getIsMasterFilter(): boolean;
    protected _isMultiselectable(): boolean;
    protected _updateContentViewModel(content: any): void;
    protected _performOutputFilterOptimization(filter: IExternalFilter): IExternalFilter;
    protected _validateSelection(selection: Array<Array<any>>): void;
    _setSelectionData(selection: Array<Array<PrimitiveType>>): void;
    private _correctSelectionValues;
    private _updateUnselectedValues;
    private _arrayContains;
}
