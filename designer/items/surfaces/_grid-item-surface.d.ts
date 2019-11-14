/**
* DevExpress Dashboard (_grid-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { GridItem } from '../../../model/items/grid/grid-item';
import { BaseItemSurface } from './_base-item-surface';
import { AccordionTab } from '../../_accordion-tab';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { Dashboard } from '../../../model/dashboard';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
export declare class GridItemSurface extends BaseItemSurface<GridItem> {
    private addConditionalFormattingOptions;
    protected extendHiddenMeasuresTabs(tabs: AccordionTab[], model: any): void;
    fillSections(): void;
    constructor(dashboardItem: GridItem, dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser);
    private editRuleHandler;
    getPropertiesComposer(): IDetailsPropertiesComposer<GridItem>;
}
