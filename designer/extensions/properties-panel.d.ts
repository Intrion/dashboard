/**
* DevExpress Dashboard (properties-panel.d.ts)
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
import { DataSourceBrowser } from '../../common/_data-source-browser';
import { IPropertiesHolder } from '../_properties-controller';
import * as ko from 'knockout';
import { DisposableType, IDisposable } from '../../model/disposable-object';
export declare class OptionsPanelExtension implements IExtension {
    private dashboardControl;
    name: string;
    private _subscriptions;
    _perMenuSubscriptions: DisposableType[];
    private _customizeTabsHandlers;
    constructor(dashboardControl: DashboardControl);
    _contextMenuSubscriber(itemContextMenu: ItemMenuViewModel): void;
    start(): void;
    stop(): void;
    _updateContextMenu(menu: ItemMenuViewModel, item: DashboardItem, dashboard: Dashboard, dataSourceBrowser: DataSourceBrowser): void;
    _subscribeTabsChanged(handler: (tabs: any) => void): IDisposable;
    _properties: ko.Observable<IPropertiesHolder>;
}
