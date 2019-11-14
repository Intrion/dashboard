/**
* DevExpress Dashboard (_filter-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { FilterElementItemBase } from '../../../model/items/filter-items/filter-element-item-base';
import { AccordionTab } from '../../_accordion-tab';
export declare class FilterItemPropertiesComposer implements IDetailsPropertiesComposer<FilterElementItemBase> {
    composeTabs(model: FilterElementItemBase): AccordionTab[];
}
