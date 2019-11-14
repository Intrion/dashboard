/**
* DevExpress Dashboard (_choropleth-map-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { ChoroplethMapItem } from '../../../model/items/map/chorolpeth-map-item';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { Dashboard } from '../../../model/dashboard';
import { PropertiesController } from '../../_properties-controller';
import { AccordionTab } from '../../_accordion-tab';
import { ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
export declare class ChoroplethMapItemPropertiesComposer implements IDetailsPropertiesComposer<ChoroplethMapItem> {
    composeTabs(model: ChoroplethMapItem, dataSourceBrowser: DataSourceBrowser, dashboard: Dashboard, propertiesController: PropertiesController): AccordionTab[];
    getShapeLabelsWrapper(model: ChoroplethMapItem): ObjectPropertiesWrapper;
}
