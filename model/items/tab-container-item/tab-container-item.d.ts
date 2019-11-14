/**
* DevExpress Dashboard (tab-container-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DashboardItem } from '../dashboard-item';
import { DashboardTabPage } from './dashboard-tab-page';
import * as ko from 'knockout';
import { ItemState } from '../../dashboard-state';
export declare class TabContainerItem extends DashboardItem {
    tabPages: ko.ObservableArray<DashboardTabPage>;
    _activeTabPage: ko.Observable<DashboardTabPage>;
    _activePageChanged: (prevPageName: string, pageName: string) => void;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _setState(itemState: ItemState): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    _addNewPage(): DashboardTabPage;
}
