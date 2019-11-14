/**
* DevExpress Dashboard (_format-rule-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { CellsItemFormatRule } from '../../../../model/format-rules/cells-item-format-rule';
import { DataDashboardItem } from '../../../../model/items/data-dashboard-item';
import { IDetailsPropertiesComposer } from '../../../items/_interfaces';
import { DataSourceBrowser } from '../../../../common/_data-source-browser';
import { AccordionTab } from '../../../_accordion-tab';
import { ObjectPropertiesWrapper } from '../../../_object-properties-wrapper';
import * as ko from 'knockout';
export interface KeyText {
    uniqueName: string | ko.Observable<string>;
    displayName: string | ko.Observable<string>;
}
export declare class FormatRulePropertiesComposer implements IDetailsPropertiesComposer<CellsItemFormatRule> {
    composeTabs(model: CellsItemFormatRule, dashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser, requestRecalculation: JQueryCallback): AccordionTab[];
    grabDataItems(dashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser): KeyText[];
    grapApplyToItems(dashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser): KeyText[];
    composeCreationWrapper(model: CellsItemFormatRule, dashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser, requestRecalculation: JQueryCallback): ObjectPropertiesWrapper;
    fillConditionWrapper(tab: AccordionTab, model: CellsItemFormatRule, dashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser): void;
    fillMiscWrapper(tab: AccordionTab, model: CellsItemFormatRule, dashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser): void;
}
