/**
* DevExpress Dashboard (_chart-series-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ChartSeries } from '../../../model/items/chart/chart-series';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { ChartItemBase } from '../../../model/items/chart-item-base';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { AccordionTab } from '../../_accordion-tab';
import * as ko from 'knockout';
export declare class ChartSeriesPropertiesComposer implements IDetailsPropertiesComposer<ChartSeries> {
    private _containerTypesMap;
    private _allowConfigurePointLabels;
    private _allowSecondaryAxis;
    constructor(_containerTypesMap?: any, _allowConfigurePointLabels?: boolean, _allowSecondaryAxis?: boolean);
    composeTabs(model: ChartSeries, dashboardItem: ChartItemBase, containerType: ko.Observable<string>, dataSourceBrowser: DataSourceBrowser): AccordionTab[];
    private _fillSeriesTypeWrapper;
    private _showPointMarkersVisible;
    private _showIgnoreEmptyPointsVisible;
    private _fillSeriesGeneralTab;
}
