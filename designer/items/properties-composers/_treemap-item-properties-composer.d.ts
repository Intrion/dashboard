/**
* DevExpress Dashboard (_treemap-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { TreemapItem } from '../../../model/items/treemap/treemap-item';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { DashboardSurface } from '../../../common/_dashboard-surface';
import { AccordionTab } from '../../_accordion-tab';
import { ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
import { DataItem } from '../../../model/data-item/data-item';
export declare class TreemapItemPropertiesComposer implements IDetailsPropertiesComposer<TreemapItem> {
    composeTabs(model: TreemapItem, _: any, surface: DashboardSurface): AccordionTab[];
    getLayoutWrapper(model: TreemapItem): ObjectPropertiesWrapper;
    getLabelsWrapper(model: TreemapItem): ObjectPropertiesWrapper;
    static getTileOptionsTab(model: TreemapItem, dataItem: DataItem): AccordionTab;
    protected static getTileOptionsWrapper(model: TreemapItem, dataItem: DataItem): ObjectPropertiesWrapper;
}
