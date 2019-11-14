/**
* DevExpress Dashboard (_pivot-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { PivotItem } from '../../../model/items/pivot/pivot-item';
import { BaseItemSurface } from './_base-item-surface';
import { AccordionTab } from '../../_accordion-tab';
import { Dashboard } from '../../../model/dashboard';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { IDetailsPropertiesComposer } from '../_interfaces';
export declare class PivotItemSurface extends BaseItemSurface<PivotItem> {
    private addConditionalFormattingOptions;
    protected extendHiddenMeasuresTabs(tabs: AccordionTab[], model: any): void;
    fillSections(): void;
    constructor(dashboardItem: PivotItem, dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser);
    getPropertiesComposer(): IDetailsPropertiesComposer<PivotItem>;
}
