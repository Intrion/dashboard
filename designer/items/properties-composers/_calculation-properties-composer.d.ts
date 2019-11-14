/**
* DevExpress Dashboard (_calculation-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { Measure } from '../../../model/data-item/measure';
import { DataDashboardItem } from '../../../model/items/data-dashboard-item';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { AccordionTab } from '../../_accordion-tab';
export declare class CalculationPropertiesComposer implements IDetailsPropertiesComposer<Measure> {
    composeTabs(model: Measure, dashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser): AccordionTab[];
    fillCommonWrapper(tab: AccordionTab, model: Measure, dashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser): void;
}
