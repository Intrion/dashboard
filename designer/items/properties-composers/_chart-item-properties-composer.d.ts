/**
* DevExpress Dashboard (_chart-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { IDetailsPropertiesComposer } from '../_interfaces';
import { ChartItem } from '../../../model/items/chart/chart-item';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { AccordionTab } from '../../_accordion-tab';
import * as ko from 'knockout';
import { IDataField } from '../../../model/data-sources/_data-field';
import { ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
export declare class ChartItemPropertiesComposer implements IDetailsPropertiesComposer<ChartItem> {
    _getAxisXTabModel(model: ChartItem, dataSourceBrowser: DataSourceBrowser, argumentDataField: IDataField): ObjectPropertiesWrapper;
    argumentDataField: ko.Observable<IDataField>;
    composeTabs(model: ChartItem, dataSourceBrowser: DataSourceBrowser): Array<AccordionTab>;
}
