/**
* DevExpress Dashboard (_tab-container-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { TabContainerItem } from '../../../model/items/tab-container-item/tab-container-item';
import { Dashboard } from '../../../model/dashboard';
import { AccordionTab } from '../../_accordion-tab';
import { DashboardLayoutTabContainer } from '../../../model/layout/dashboard-layout-tab-container';
import { DashboardTabPage, DashboardLayoutTabPage } from '../../../model';
export declare class TabContainerItemPropertiesComposer implements IDetailsPropertiesComposer<TabContainerItem> {
    composeTabs(model: TabContainerItem, _: any, dashboard: Dashboard): AccordionTab[];
    _getTabPagesInLayoutOrder(model: TabContainerItem, tabContainerLayoutItem: DashboardLayoutTabContainer): DashboardTabPage[];
    _reordrerTabs(tabContainerLayoutItem: DashboardLayoutTabContainer, tabPageLayoutItem: DashboardLayoutTabPage, direction: 1 | -1): void;
}
