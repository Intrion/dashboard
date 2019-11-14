/**
* DevExpress Dashboard (_filter-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { FilterElementItemBase } from '../../../model/items/filter-items/filter-element-item-base';
import { BaseItemSurface } from './_base-item-surface';
import { Dashboard } from '../../../model/dashboard';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { IDetailsPropertiesComposer } from '../_interfaces';
export declare class FilterItemSurface extends BaseItemSurface<FilterElementItemBase> {
    fillSections(): void;
    constructor(dashboardItem: FilterElementItemBase, dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser);
    getPropertiesComposer(): IDetailsPropertiesComposer<FilterElementItemBase>;
}
