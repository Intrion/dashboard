/**
* DevExpress Dashboard (_mobile-layout.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDashboardLayout } from '../internal/_interfaces';
import { FullscreenItemModel } from '../viewer/_viewer';
import { MasterFiltersEditorModel } from './_mobile-layout-master-filters-editor';
import { DashboardTitleContext } from '../viewer/title/_title-component';
import { Dashboard } from '../../model/dashboard';
import { IDashboardContext } from '../viewer/_viewer-interfaces';
import { IExtension } from '../common-interfaces';
import { DashboardItem } from '../../model/items/dashboard-item';
export declare class DashboardMobileLayout implements IDashboardLayout {
    dashboard: Dashboard;
    dashboardContext: IDashboardContext;
    private _encodeHtml;
    fullscreenItemModel: FullscreenItemModel;
    masterFiltersEditorModel: MasterFiltersEditorModel;
    dashboardTitleContext: DashboardTitleContext;
    readonly fullscreenItemProvider: FullscreenItemModel;
    constructor(dashboard: Dashboard, dashboardContext: IDashboardContext, findExtension: (name: string) => IExtension, _encodeHtml?: boolean);
    private _getDashboardItemsInLayoutOrder;
    private _getGroupName;
    private _getGroupComponentName;
    private _getParentTabContainer;
    items: Array<DashboardMobileLayoutItem>;
}
export declare class DashboardMobileLayoutItem {
    dashboardItems: Array<DashboardItem>;
    groupName: string;
    constructor(dashboardItems: Array<DashboardItem>, groupName: string);
}
export interface FlatMobileLayoutItem {
    groupName: string;
    groupComponentName: string;
    itemComponentName: string;
}
export interface GroupedMobileLayoutItem {
    groupName: string;
    groupComponentName: string;
    itemComponentNames: Array<string>;
}
export declare function groupLayoutItems(flatItems: Array<FlatMobileLayoutItem>): Array<GroupedMobileLayoutItem>;
export declare let ungroupedItemKey: string;
export declare let groupWithoutCaptionItemKey: string;
export declare let dashboardTitleKey: string;
