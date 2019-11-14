/**
* DevExpress Dashboard (_tab-container-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { TabContainerItem } from '../../../model/items/tab-container-item/tab-container-item';
import { Dashboard } from '../../../model/dashboard';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { IDisposable } from '../../../model/disposable-object';
export declare class TabContainerItemSurface implements IDisposable {
    constructor(dashboardItem: TabContainerItem, dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser);
    getPropertiesComposer(): IDetailsPropertiesComposer<TabContainerItem>;
    dispose(): void;
}
