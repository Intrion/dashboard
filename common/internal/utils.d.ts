/**
* DevExpress Dashboard (utils.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardItem, Dashboard } from "../../model";
export declare function findItemForApi<T extends DashboardItem>(dashboard: Dashboard, itemName: string, expectedItemClass?: any): T;
