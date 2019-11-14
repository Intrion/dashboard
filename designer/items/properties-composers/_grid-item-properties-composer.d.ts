/**
* DevExpress Dashboard (_grid-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { GridItem } from '../../../model/items/grid/grid-item';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { AccordionTab } from '../../_accordion-tab';
import { GridOptions } from '../../../model/items/grid/grid-options';
import { ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
export declare class GridItemPropertiesComposer implements IDetailsPropertiesComposer<GridItem> {
    editRuleHandler: any;
    constructor(editRuleHandler: any);
    composeTabs(model: GridItem, dataSourceBrowser: DataSourceBrowser): AccordionTab[];
    getLayoutWrapper(model: GridOptions): ObjectPropertiesWrapper;
    getFormatRulesWrapper(model: GridItem, dataSourceBrowser: DataSourceBrowser): ObjectPropertiesWrapper;
}
