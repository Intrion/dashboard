/**
* DevExpress Dashboard (_gauge-element-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { Gauge } from '../../../model/items/gauge/gauge';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { CardItem } from '../../../model/items/card/card-item';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { AccordionTab } from '../../_accordion-tab';
import { DataDashboardItem } from '../../../model/items/data-dashboard-item';
import { ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
import * as ko from 'knockout';
export declare class GaugeElementPropertiesComposer implements IDetailsPropertiesComposer<Gauge> {
    private editFormatHandler;
    constructor(editFormatHandler?: (model: any) => void);
    composeTabs(model: Gauge, dashboardItem: CardItem, containerType: ko.Observable<string>, dataSourceBrowser: DataSourceBrowser): AccordionTab[];
    getCommonWrapper(model: Gauge, dashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser): ObjectPropertiesWrapper;
    getScaleWrapper(model: Gauge): ObjectPropertiesWrapper;
}
