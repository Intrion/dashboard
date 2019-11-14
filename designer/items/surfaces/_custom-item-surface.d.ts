/**
* DevExpress Dashboard (_custom-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { CustomItem } from '../../../model/items/custom-item/custom-item';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { AccordionTab } from '../../_accordion-tab';
import { BaseItemSurface } from './_base-item-surface';
import { Dashboard } from '../../../model/dashboard';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
export declare class CustomItemPropertiesComposer implements IDetailsPropertiesComposer<CustomItem> {
    composeTabs(model: CustomItem): AccordionTab[];
}
export declare class CustomItemSurface extends BaseItemSurface<CustomItem> {
    protected readonly showDefaultSections: boolean;
    fillSections(): void;
    constructor(dashboardItem: CustomItem, dashboardModel: Dashboard, dataSourceBrowser: DataSourceBrowser);
    getPropertiesComposer(): IDetailsPropertiesComposer<CustomItem>;
}
