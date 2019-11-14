/**
* DevExpress Dashboard (_display-name-provider.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDataItemValuesProvider } from '../common/_data-source-browser';
import { DataDashboardItem } from '../model/items/data-dashboard-item';
import { IBindingModelProvider } from '../model/items/_binding-model';
import { DataItem } from '../model/data-item/data-item';
export declare function getDataItemContainerDisplayName(dataSourceBrowser: IDataItemValuesProvider, dashboardItem: DataDashboardItem, dataItemContainer: IBindingModelProvider): string;
export declare function getDataItemDisplayName(dataSourceBrowser: IDataItemValuesProvider, dataDashboardItem: DataDashboardItem, dataItem: DataItem): string;
