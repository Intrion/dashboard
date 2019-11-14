/**
* DevExpress Dashboard (_range-filter-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { RangeFilterItem } from '../../../model/items/range-filter/range-filter-item';
import { BaseItemSurface } from './_base-item-surface';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { Dashboard } from '../../../model/dashboard';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
export declare class RangeFilterItemSurface extends BaseItemSurface<RangeFilterItem> {
    fillSections(): void;
    constructor(dashboardItem: RangeFilterItem, dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser);
    getPropertiesComposer(): IDetailsPropertiesComposer<RangeFilterItem>;
}
