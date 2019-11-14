/**
* DevExpress Dashboard (_range-filter-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { RangeFilterItem } from '../../../model/items/range-filter/range-filter-item';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { AccordionTab } from '../../_accordion-tab';
export declare class RangeFilterItemPropertiesComposer implements IDetailsPropertiesComposer<RangeFilterItem> {
    editRuleHandler: any;
    constructor(editRuleHandler: any);
    composeTabs(model: RangeFilterItem, dataSourceBrowser: DataSourceBrowser): AccordionTab[];
}
