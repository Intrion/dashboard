/**
* DevExpress Dashboard (_date-filter-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from "../_interfaces";
import { DateFilterItem } from "../../../model";
import { AccordionTab } from '../../_accordion-tab';
import { ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
export declare class DateFilterItemPropertiesComposer implements IDetailsPropertiesComposer<DateFilterItem> {
    editRuleHandler: any;
    constructor(editRuleHandler: any);
    composeTabs(model: DateFilterItem, dataSourceBrowser: DataSourceBrowser): AccordionTab[];
    getLayoutWrapper(model: DateFilterItem): ObjectPropertiesWrapper;
}
