/**
* DevExpress Dashboard (_item-filter-display-name-provider.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataDashboardItem } from '../../model/items/data-dashboard-item';
import { IDataItemValuesProvider } from '../../common/_data-source-browser';
import { DataItem } from '../../model/data-item/data-item';
export declare class ItemFilterDisplayNameProvider implements DxDesigner.Analytics.Utils.IDisplayNameProvider {
    private dashboardItem;
    private dataSourceBrowser;
    constructor(dashboardItem: DataDashboardItem, dataSourceBrowser: IDataItemValuesProvider);
    _mapDataItemProperties(getSourceProperty: (i: DataItem) => any, getTargetProperty: (i: DataItem) => any, value: any): JQueryPromise<string>;
    getDisplayNameByPath(path: string, dataMember: string): JQueryPromise<string>;
    getRealName(path: string, displayDataMember: string): JQueryPromise<string>;
}
