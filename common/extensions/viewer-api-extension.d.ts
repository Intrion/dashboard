/**
* DevExpress Dashboard (viewer-api-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { MasterFilterValues } from '../../model/items/data-dashboard-item';
import { ItemClickEventArgs, ItemSelectionChangedEventArgs, ItemWidgetEventArgs, ItemElementCustomColorEventArgs, ItemVisualInteractivityEventArgs, ItemMasterFilterStateChangedEventArgs, ItemDrillDownStateChangedEventArgs, ItemActionAvailabilityChangedEventArgs, SelectedTabPageChangedEventArgs } from '../../viewer-parts/viewer/events-arguments';
import { DashboardItemCaptionToolbarOptions, DashboardTitleToolbarOptions } from '../../viewer-parts/widgets/caption-toolbar/caption-toolbar-options';
import { DisposableObject } from '../../model/disposable-object';
import { IExtension } from '../common-interfaces';
import { baseItem } from '../../viewer-parts/viewer-items/_base-item';
import { IDashboardTitle } from '../../viewer-parts/title/_dashboard-title-view';
import { DashboardControl } from '../dashboard-control';
import { RequestUnderlyingDataParameters, ItemUnderlyingData, RangeFilterSelection, ItemDataAxisPointTuple, ItemData } from '../../data/item-data/item-data-definitions';
import { PrimitiveType } from '../../data/types';
import * as ko from 'knockout';
export interface ViewerApiExtensionOptions {
    onItemClick?: (args: ItemClickEventArgs) => void;
    onItemSelectionChanged?: (args: ItemSelectionChangedEventArgs) => void;
    onItemWidgetCreated?: (args: ItemWidgetEventArgs) => void;
    onItemWidgetUpdating?: (args: ItemWidgetEventArgs) => void;
    onItemWidgetUpdated?: (args: ItemWidgetEventArgs) => void;
    onItemElementCustomColor?: (args: ItemElementCustomColorEventArgs) => void;
    onItemVisualInteractivity?: (args: ItemVisualInteractivityEventArgs) => void;
    onItemMasterFilterStateChanged?: (args: ItemMasterFilterStateChangedEventArgs) => void;
    onItemDrillDownStateChanged?: (args: ItemDrillDownStateChangedEventArgs) => void;
    onItemActionAvailabilityChanged?: (args: ItemActionAvailabilityChangedEventArgs) => void;
    onItemCaptionToolbarUpdated?: (args: {
        itemName: string;
        options: DashboardItemCaptionToolbarOptions;
    }) => void;
    onDashboardTitleToolbarUpdated?: (args: {
        options: DashboardTitleToolbarOptions;
    }) => void;
    onSelectedTabPageChanged?: (args: SelectedTabPageChangedEventArgs) => void;
}
export declare class ViewerApiExtension extends DisposableObject implements IExtension {
    private dashboardControl;
    name: string;
    _viewerItems: {
        [itemName: string]: Array<baseItem>;
    };
    _defaultOptions: ViewerApiExtensionOptions;
    private _dashboardDisposables;
    _options: ViewerApiExtensionOptions;
    _title: ko.Observable<IDashboardTitle>;
    constructor(dashboardControl: DashboardControl, customOptions?: ViewerApiExtensionOptions);
    private _checkIsRangeFilterItem;
    private _viewerItemCreated;
    private _viewerItemDispose;
    private _beforeApplyOptions;
    _raiseItemActionAvailabilityChanged: (itemName: any) => void;
    _raiseItemClick: (itemName: any, dataPoint: any) => void;
    _raiseItemSelectionChanged: (itemName: any, tuples: any) => void;
    _raiseItemWidgetCreated: (name: any, viewControl: any) => void;
    _raiseItemWidgetUpdating: (name: any, viewControl: any) => void;
    _raiseItemWidgetUpdated: (name: any, viewControl: any) => void;
    _raiseItemCaptionToolbarUpdated: (name: string, options: DashboardItemCaptionToolbarOptions) => void;
    _raiseTitleToolbarUpdated: (options: DashboardTitleToolbarOptions) => void;
    _raiseSelectedTabPageChanged(tabContainerName: string, prevPageName: string, pageName: string): any;
    _raiseItemElementCustomColor: (itemName: any, eventArgs: any) => void;
    _raiseItemVisualInteractivity: (itemName: any, interactivityOptions: any) => void;
    _raiseClearMasterFilter: (itemName: any) => void;
    start(): void;
    stop(): void;
    private _getDataItem;
    requestUnderlyingData: (itemName: string, args: RequestUnderlyingDataParameters, onCompleted: (result: ItemUnderlyingData) => void) => void;
    getCurrentRange(itemName: string): RangeFilterSelection;
    getEntireRange(itemName: string): RangeFilterSelection;
    setRange(itemName: string, range: RangeFilterSelection): void;
    setPredefinedRange(itemName: string, dateTimePeriodName: string): void;
    getAvailablePredefinedRanges(itemName: string): Array<string>;
    getCurrentPredefinedRange(itemName: string): string;
    getCurrentSelection(itemName: string): Array<ItemDataAxisPointTuple>;
    canSetMasterFilter(itemName: string): boolean;
    canClearMasterFilter(itemName: string): boolean;
    canPerformDrillDown(itemName: string): boolean;
    canPerformDrillUp(itemName: string): boolean;
    getItemData(itemName: string): ItemData;
    getCurrentFilterValues(itemName: string): Array<ItemDataAxisPointTuple>;
    getAvailableFilterValues(itemName: string): Array<ItemDataAxisPointTuple>;
    getCurrentDrillDownValues(itemName: string): ItemDataAxisPointTuple;
    getAvailableDrillDownValues(itemName: string): Array<ItemDataAxisPointTuple>;
    setMasterFilter(itemName: string, values: MasterFilterValues): void;
    clearMasterFilter(itemName: string): void;
    performDrillDown(itemName: string, value: PrimitiveType | ItemDataAxisPointTuple): void;
    performDrillUp(itemName: string): void;
    getAvailableActions(itemName: string): Array<string>;
    updateItemCaptionToolbar(itemName?: string): void;
    updateDashboardTitleToolbar(): void;
    setSelectedTabPage(tabPageName: string): void;
    setSelectedTabPageIndex(tabContainerName: string, index: number): void;
    getSelectedTabPageIndex(tabContainerName: string): number;
    getSelectedTabPage(tabContainerName: string): string;
    private _findParentTabContainer;
    private _getViewerItem;
    private _clearSelectedDateTimePeriod;
}
