/**
* DevExpress Dashboard (interactivity-panel.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IExtension } from '../../common/common-interfaces';
import { DashboardControl } from '../../common/dashboard-control';
import { IDashboardItemMenu } from '../items/_dashboard-item-menu';
import { DashboardItem } from '../../model/items/dashboard-item';
export declare class InteractivityPanelExtension implements IExtension {
    private dashboardControl;
    name: string;
    private _subscriptions;
    constructor(dashboardControl: DashboardControl);
    _contextMenuSubscriber(itemContextMenu: IDashboardItemMenu): void;
    _updateContextMenu(menu: IDashboardItemMenu, item: DashboardItem): void;
    private interactivityOptions;
    start(): void;
    stop(): void;
}
