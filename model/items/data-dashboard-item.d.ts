﻿/**
* DevExpress Dashboard (data-dashboard-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { LimitDataState } from './_limit-data-state';
import { PrimitiveType } from '../../data/types';
import { itemDataTuple } from '../../data/item-data/_item-data-tuple';
import { DashboardItem, UiStateType } from './dashboard-item';
import { IDataItemProvider, IBindingModelProvider } from './_binding-model';
import { IMasterFilterItemsProvider, IColorSignaturesProvider, IExternalFilter } from '../internal/_interfaces';
import { IDataSourceConsumer } from '../data-sources/data-source';
import { Measure } from '../data-item/measure';
import { Dimension } from '../data-item/dimension';
import { DataItem, AcceptableShapingType, DataItemLink } from '../data-item/data-item';
import { IDataField } from '../data-sources/_data-field';
import { DashboardItemFormatRule } from '../format-rules/dashboard-item-format-rule';
import { ColorSchemeEntry } from '../colorization/color-scheme-entry';
import { DashboardItemColoringOptions } from './options/coloring-options';
import { ExpandingManager, IExpandingState, IExpandingParams } from '../internal/_expanding-manager';
import { ItemState } from '../dashboard-state';
import { ClearMasterFilterButtonState } from '../../data/_common';
import { KnockoutEntry } from '../internal/_knockout-utils';
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { MeasureCalculationWindowDefinition } from '../data-item/window-definition/measure-calc-window-definition';
import { DimensionFilterValues } from '../data-item/_dimension-filter-values';
import { ColorSchemeDefinition } from '../colorization/color-scheme-definition';
import { ItemDataAxisName, ItemDataAxisPointTuple } from '../../data/item-data/item-data-definitions';
import { itemData } from '../../data/item-data/_item-data';
import * as ko from 'knockout';
import { IBindingProperty } from './binding-property';
import { DataFieldType } from '../enums';
export declare type MasterFilterValues = Array<Array<PrimitiveType>> | Array<ItemDataAxisPointTuple>;
export declare abstract class DataDashboardItem extends DashboardItem implements IDataItemProvider, IMasterFilterItemsProvider, IColorSignaturesProvider, IDataSourceConsumer {
    private static _itemTypesMap;
    private static _formatRuleTypesMap;
    private static _createDataItem;
    private static _updateDataItemByField;
    protected static _addColoringMeta: (links: DataItemLink[]) => void;
    static _createFormatRule(item: DataDashboardItem, formatRuleJSON: any, serializer?: DxDesigner.Analytics.Utils.IModelSerializer): DashboardItemFormatRule;
    static _getAvaliableSummaryTypeInfo(dataField: IDataField, acceptableShapingType: AcceptableShapingType): DxDesigner.Analytics.Utils.ISerializationInfo;
    dataSource: ko.Observable<string>;
    dataMember: ko.Observable<string>;
    dataItems: ko.ObservableArray<DataItem>;
    filterString: ko.Observable<string>;
    private __hiddenDimensions;
    hiddenDimensions: ko.ObservableArray<Dimension>;
    private __hiddenMeasures;
    hiddenMeasures: ko.ObservableArray<Measure>;
    colorScheme: ko.ObservableArray<ColorSchemeEntry>;
    formatRules: ko.ObservableArray<DashboardItemFormatRule>;
    isMasterFilterCrossDataSource: ko.Observable<boolean>;
    coloringOptions: DashboardItemColoringOptions;
    _masterFilterMode: ko.Computed<string>;
    _isSingleMasterFilter: ko.Computed<boolean>;
    _isMultipleMasterFilter: ko.Computed<boolean>;
    _isDrillDownEnabled: ko.Computed<boolean>;
    _isIgnoreMasterFilter: ko.Computed<boolean>;
    _isMasterFilter: ko.Computed<boolean>;
    _clearMasterFilterSupported: ko.Computed<boolean>;
    _availableColorSignatures: ko.Computed<any>;
    _fullRange: ko.Observable<any[]>;
    _selectedElementIndex: ko.Observable<number>;
    _beforeMasterFilterSetByUserInteraction: () => void;
    _afterMasterFilterSetByUserInteraction: () => void;
    _drillDownChangedByUserInteraction: () => void;
    _masterFilterItems: ko.Observable<DataDashboardItem[]>;
    _dataManager: ko.Observable<any>;
    _drillDownValues: ko.ObservableArray<PrimitiveType>;
    _clientState: ko.Observable<any>;
    protected _dataRequestArgs: ko.Observable<any>;
    protected _expandingManager: ExpandingManager;
    _selectionValues: ko.Observable<PrimitiveType[][]>;
    protected _supportedUIStates: ko.Observable<Array<UiStateType>>;
    private _componentNameGenerator;
    _outputFilter: ko.Computed<IExternalFilter>;
    _limitDataState: LimitDataState;
    readonly _actualSelectionValues: KnockoutEntry<Array<Array<any>>>;
    readonly _canColorByMeasures: boolean;
    readonly _canColorByDimensions: boolean;
    readonly _isLocallyColored: boolean;
    readonly _isGloballyColored: boolean;
    readonly _interactivityDimensions: Array<Dimension>;
    readonly _dimensions: Array<Dimension>;
    readonly _measures: Array<Measure>;
    readonly _uniqueDataItems: Array<DataItem>;
    _isExcludingAllFilter: ko.Computed<boolean>;
    protected readonly _multiData: any;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer, info?: DxDesigner.Analytics.Utils.ISerializationInfoArray);
    _clearBindings(): void;
    _clearInteractivityState(): void;
    _isCalculationSupported(): boolean;
    _isSortingEnabled(): boolean;
    _isTopNEnabled(dataItem: Dimension): boolean;
    _isColoringEnabled(dataItem: DataItem): boolean;
    _getDataItem(uniqueName: any): DataItem;
    _getFinalDataType(dataItemId: string): DataFieldType;
    _createDataItem(dataField: IDataField, binding: IBindingProperty): DataItem;
    _updateDataItem(dataItem: DataItem, binding: IBindingProperty, dataField: IDataField, acceptableShapingType: AcceptableShapingType): void;
    _removeDataItem(dataItem: DataItem, skipGroups?: boolean): void;
    _attachDataItem(target: Object, propertyName: string, link?: DataItemLink): void;
    protected _subscribeDataItemLinkArrays(...propertyInfos: Array<{
        propertyName: string;
        modelName?: string;
    }>): void;
    protected _getMasterFilterMode(): string;
    protected _getDrillDownEnabled(): boolean;
    protected _getIgnoreMasterFilter(): boolean;
    protected _getClearMasterFilterSupported(): boolean;
    protected _getIsMasterFilter(): boolean;
    protected _getInteractivityDimensionLinks(): DataItemLink[];
    protected _getCanColorByMeasures(): boolean;
    protected _getCanColorByDimensions(): boolean;
    protected _getAreMeasuresColoredByDefault(): boolean;
    protected _getIsDimensionColoredByDefault(dimension: Dimension): boolean;
    protected _coloredDimensions(): Dimension[];
    protected _coloredByMeasures(): boolean;
    private _getUseGlobalColors;
    private _patchArray;
    private _patchSelectionValues;
    _getClearMasterFilterState(): ClearMasterFilterButtonState;
    protected _allowAllValue(): boolean;
    protected _validateSelection(selection: Array<Array<any>>): void;
    protected _updateContentData(content: any): void;
    protected _extendContentState(content: any): void;
    private _updateDataManager;
    protected _getAllSelectionValues(activeDimensions: Array<string>): any;
    protected _getPointsByDimension(dimensionId: string, axisName: string): any;
    _getColorizableDataItemsInfo(): Array<{
        items: Array<DataItemLink>;
        prefixId: string;
    }>;
    _getDefaultCalculationWindowDefinition(): MeasureCalculationWindowDefinition;
    _getExportingSelection(): PrimitiveType[][];
    _getDisplayFilterValues(limitCount?: number): Array<DimensionFilterValues>;
    _getDisplayFilterValuesExternal(): Array<DimensionFilterValues>;
    _getDisplayDrillDownValues(): Array<DimensionFilterValues>;
    _getColoringSignature(): ColorSchemeDefinition;
    _isAttribute(dataItem: DataItem): boolean;
    _getItemDataAxis(): ItemDataAxisName;
    _getDataItemContainerDisplayName(dataItemContainer: IBindingModelProvider, dataItemDisplayNameGetter?: (d: DataItem) => string): string;
    protected _getDataItemDisplayName(dataItem: DataItem): string;
    protected _getMeasureDisplayName(uniqueName: string): string;
    _getDimensionDisplayName(uniqueName: string): string;
    protected _getOlapDimensionDisplayText(uniqueValue: any, dimensionId: any): any;
    protected _cleanDataItemDependencies(): void;
    protected _setLinkCollectionAcceptableShapingType(links: Array<DataItemLink>, type: AcceptableShapingType): void;
    protected _updateDataQueryParams(params: any): void;
    private _stateSupported;
    private _isHiddenDimension;
    private _isHiddenMeasure;
    protected _applySelectionFromState(parameter: ItemState): void;
    _setSelectionFromState(stateSelection: any): void;
    protected _hasSelection(selection: any): boolean;
    protected _performOutputFilterOptimization(filter: IExternalFilter): IExternalFilter;
    _setState(parameter: ItemState): void;
    _setClientState(clientState: any): void;
    _setSelectionData(selection: Array<Array<PrimitiveType>>): void;
    _processItemSelectionChange: (itemElement: any, mode: string, selection: any) => void;
    _processItemDrillUp: () => void;
    _processItemClearMasterFilter: (itemElement?: any) => void;
    _processContentElementSelection: (itemName: any, args: any) => void;
    _processDataRequest: () => void;
    _processItemClientStateUpdate: (itemName: any, clientState: any) => void;
    _processExpandingStateChanged: (expandingParams: IExpandingState) => void;
    _processItemExpandingChange: (expandingParams: IExpandingParams) => void;
    _itemInteractivityByColumnAxis(): boolean;
    _getInteractivityAxisDimensionCount(): number;
    private _unassignDataItem;
    private _removeDataItemCore;
    _getActiveDimensions(): Array<Dimension>;
    _getDimensionIdsByItemName(): Array<string>;
    _getValues(tuples: any): any[];
    _getAvailableTuples(): itemDataTuple[];
    _getCurrentAxisNameByItemName(): ItemDataAxisName;
    _getSelectedValuesByItemName(): PrimitiveType[][];
    _performSetMasterFilter(values: MasterFilterValues): void;
    _performClearMasterFilter(): void;
    _performDrillDown(values: ItemDataAxisPointTuple | PrimitiveType): void;
    _performDrillUp(): void;
    _getAvailableDrillDownValues(itemName: any): itemDataTuple[];
    _getCurrentDrillDownValues(): itemDataTuple;
    _getAvailableFilterValues(itemName: any): itemDataTuple[];
    _getAvailableActions(): Array<string>;
    _getItemData(): itemData;
    _getCurrentFilterValues(): itemDataTuple[];
}
