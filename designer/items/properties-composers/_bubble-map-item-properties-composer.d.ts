/**
* DevExpress Dashboard (_bubble-map-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { BubbleMapItem } from '../../../model/items/map/bubble-map-item';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { Dashboard } from '../../../model/dashboard';
import { PropertiesController } from '../../_properties-controller';
import { AccordionTab } from '../../_accordion-tab';
export declare class BubleMapItemPropertiesComposer implements IDetailsPropertiesComposer<BubbleMapItem> {
    composeTabs(model: BubbleMapItem, dataSourceBrowser: DataSourceBrowser, dashboard: Dashboard, propertiesController: PropertiesController): AccordionTab[];
}
