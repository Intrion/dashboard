/**
* DevExpress Dashboard (_scatter-chart-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { ScatterChartItem } from '../../../model/items/scatter-chart/scatter-chart-item';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { AccordionTab } from '../../_accordion-tab';
export declare class ScatterChartItemPropertiesComposer implements IDetailsPropertiesComposer<ScatterChartItem> {
    composeTabs(model: ScatterChartItem, dataSourceBrowser: DataSourceBrowser): Array<AccordionTab>;
}
