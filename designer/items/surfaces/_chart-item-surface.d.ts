/**
* DevExpress Dashboard (_chart-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { BaseItemSurface } from './_base-item-surface';
import { ChartItem } from '../../../model/items/chart/chart-item';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { Dashboard } from '../../../model/dashboard';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
export declare class ChartItemSurface extends BaseItemSurface<ChartItem> {
    fillSections(): void;
    constructor(dashboardItem: ChartItem, dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser);
    getPropertiesComposer(): IDetailsPropertiesComposer<ChartItem>;
}
