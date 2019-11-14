/**
* DevExpress Dashboard (_interfaces.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataDashboardItem } from '../items/data-dashboard-item';
import { DashboardItem } from '../items/dashboard-item';
import * as ko from 'knockout';
import { GroupItem } from '../items/group/group-item';
import { DataSource } from '../data-sources/data-source';
import { DashboardLayoutNode } from '../layout/dashboard-layout-node';
import { DashboardTabPage } from '../items/tab-container-item/dashboard-tab-page';
export interface IDashboardItemsProvider {
    findItem(itemId: string): DashboardItem;
    items: ko.ObservableArray<DashboardItem>;
    groups: ko.ObservableArray<GroupItem>;
    dataSources: ko.ObservableArray<DataSource>;
    layout: ko.Observable<DashboardLayoutNode>;
    _createDashboardLayoutItem(modelItemJson?: any): DashboardLayoutNode;
    _createDashboardLayoutNode(dashboardItem: DashboardItem): DashboardLayoutNode;
    _getDisplayDashboardItem(tabPage: DashboardTabPage): DashboardItem;
}
export interface IExternalFilter {
    dimensions: Array<any>;
    range: Array<any>;
    values: Array<any>;
    isExcludingAllFilter: boolean;
}
export interface IMasterFilterItemsProvider {
    _masterFilterItems: ko.Subscribable<Array<DataDashboardItem>>;
}
export interface IColorSignaturesProvider {
    _availableColorSignatures: ko.Computed<any>;
}
export interface Notification {
    title: string;
    detail?: string;
}
export interface IViewport {
    RightLongitude: number;
    LeftLongitude: number;
    BottomLatitude: number;
    TopLatitude: number;
    CenterPointLongitude: number;
    CenterPointLatitude: number;
}
