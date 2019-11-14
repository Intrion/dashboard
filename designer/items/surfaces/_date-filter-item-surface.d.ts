/**
* DevExpress Dashboard (_date-filter-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { BaseItemSurface } from "./_base-item-surface";
import { Dashboard } from '../../../model/dashboard';
import { DateFilterItem } from "../../../model/items/filter-items/date-filter-item";
import { IDetailsPropertiesComposer } from '../_interfaces';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
export declare class DateFilterItemSurface extends BaseItemSurface<DateFilterItem> {
    constructor(dashboardItem: DateFilterItem, dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser);
    fillSections(): void;
    getPropertiesComposer(): IDetailsPropertiesComposer<DateFilterItem>;
}
