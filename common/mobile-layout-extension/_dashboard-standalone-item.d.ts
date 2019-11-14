/**
* DevExpress Dashboard (_dashboard-standalone-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardItem } from '../../model/items/dashboard-item';
import { IDashboardContext, IDashboardItemContext } from '../viewer/_viewer-interfaces';
export interface IStandaloneItemBindings {
    dashboardItem: DashboardItem;
    dashboardContext: IDashboardContext;
    localContext: IDashboardItemContext;
    repaintRequest: JQueryCallback;
}
