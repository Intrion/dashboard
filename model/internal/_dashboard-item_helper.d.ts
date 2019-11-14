/**
* DevExpress Dashboard (_dashboard-item_helper.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardItem } from '../items/dashboard-item';
export declare function getIconName(typeName: any, icon?: any): any;
export declare function getItemIconName(item: DashboardItem): any;
export declare function getItemTitle(item: DashboardItem): any;
export declare function getItemJson(itemType: string): {
    "@ItemType": string;
    "@CustomItemType": string;
};
