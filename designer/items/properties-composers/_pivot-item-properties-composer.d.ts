/**
* DevExpress Dashboard (_pivot-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { PivotItem } from '../../../model/items/pivot/pivot-item';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { AccordionTab } from '../../_accordion-tab';
import { ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
export declare class PivotItemPropertiesComposer implements IDetailsPropertiesComposer<PivotItem> {
    editRuleHandler: any;
    constructor(editRuleHandler: any);
    composeTabs(model: PivotItem, dataSourceBrowser: DataSourceBrowser): AccordionTab[];
    static getFormatRulesWrapper(model: PivotItem, dataSourceBrowser: DataSourceBrowser, editHandler: any): ObjectPropertiesWrapper;
    getLayoutDataWrapper(model: PivotItem): ObjectPropertiesWrapper;
    getInitialStateDataWrapper(model: PivotItem): ObjectPropertiesWrapper;
}
