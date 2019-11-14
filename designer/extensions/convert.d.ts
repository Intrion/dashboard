/**
* DevExpress Dashboard (convert.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IExtension } from '../../common/common-interfaces';
import { DashboardControl } from '../../common/dashboard-control';
import { ItemMenuViewModel } from '../items/_dashboard-item-menu';
import { DashboardItem } from '../../model/items/dashboard-item';
import { Dashboard } from '../../model/dashboard';
import { IDataServiceClient } from '../../common/_service-client';
export declare class ConversionPanelExtension implements IExtension {
    private dashboardControl;
    name: string;
    private _subscriptions;
    constructor(dashboardControl: DashboardControl);
    _contextMenuSubscriber(itemContextMenu: ItemMenuViewModel): void;
    start(): void;
    stop(): void;
    _updateContextMenu(itemContextMenu: ItemMenuViewModel, item: DashboardItem, dashboard: Dashboard, serviceClient: IDataServiceClient): void;
    private properties;
}
