/**
* DevExpress Dashboard (_dashboard-update-hub.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardItem } from '../../model/items/dashboard-item';
import { DataDashboardItem } from '../../model/items/data-dashboard-item';
import { PropertyCategory } from '../../model/metadata/_base-metadata';
import { DisposableObject } from '../../model/disposable-object';
import { Dashboard } from '../../model/dashboard';
import { DataSourceChangedEventArgs } from './_item-change-subscriber';
import { DashboardEvent } from './_dashboard-event';
interface UpdateHubCallbacks {
    getItemData: (item: DashboardItem) => JQueryPromise<{}>;
    getBatchItemData: (items: DashboardItem[]) => JQueryPromise<{}>;
    getMapShapeFile: (item: DashboardItem) => JQueryPromise<{}>;
}
export declare class DashboardUpdateHub extends DisposableObject {
    private _dashboard;
    private _itemBatchUpdateEnabled;
    private _callBacks;
    private _timer;
    private _requestQueue;
    private _suspendItem;
    private _isUpdating;
    private _dequeueRequest;
    private _enqueueRequest;
    _getDataRequestPriority(dashboardItem: DashboardItem): 1 | 0 | 2;
    _getRequestLockingMasterFilterItems(dashboardItem: DataDashboardItem): DataDashboardItem[];
    private _resolveItems;
    private _processItemChanged;
    private _itemChanged;
    initializeItem: (item: DashboardItem) => void;
    constructor(_dashboard: Dashboard, _itemBatchUpdateEnabled: any, _callBacks: UpdateHubCallbacks);
    _getItemData: (item: DashboardItem) => JQueryPromise<any>;
    _performServerRequest(item: DashboardItem, category: any): JQueryPromise<any>;
    refreshItems(itemsNames: Array<string>): void;
    reloadAllItems(caterory: PropertyCategory): void;
    reloadGlobalColoredItems(caterory: PropertyCategory): void;
    initialize(): void;
    itemBeginUpdate: (itemName: string) => void;
    itemEndUpdate: (itemName: string) => void;
    dashboardBeginUpdate: () => void;
    dashboardEndUpdate: () => void;
    dataSourcePropertyChanged: DashboardEvent<DataSourceChangedEventArgs>;
    dispose(): void;
}
export {};
