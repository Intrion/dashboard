/**
* DevExpress Dashboard (_grid-column-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { GridColumn, GridDeltaColumn, GridSparklineColumn } from '../../../model/items/grid/grid-columns';
import { GridItem } from '../../../model/items/grid/grid-item';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { AccordionTab } from '../../_accordion-tab';
import { ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
import { DataDashboardItem } from '../../../model/items/data-dashboard-item';
import { IDataItemProvider } from '../../../model/items/_binding-model';
import * as ko from 'knockout';
export declare class GridColumnPropertiesComposer implements IDetailsPropertiesComposer<GridColumn> {
    editRuleHandler: any;
    private editDeltaFormatHandler;
    private _totals;
    constructor(editRuleHandler: any, editDeltaFormatHandler?: (model: any) => void);
    composeTabs(model: GridColumn, dashboardItem: GridItem, containerType: ko.Observable<string>, dataSourceBrowser: DataSourceBrowser): AccordionTab[];
    getColumnTypeWrapper(model: GridColumn, containerType: ko.Observable<string>): ObjectPropertiesWrapper;
    getColumnWrapper(model: GridColumn, dashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser): ObjectPropertiesWrapper;
    getWidthWrapper(model: GridColumn): ObjectPropertiesWrapper;
    getTotalsWrapper(model: GridColumn, p: IDataItemProvider): ObjectPropertiesWrapper;
    getDeltaWrapper(model: GridDeltaColumn): ObjectPropertiesWrapper;
    getSparklineWrapper(model: GridSparklineColumn): ObjectPropertiesWrapper;
    getFormatRulesWrapper(model: GridColumn, dashboardItem: GridItem): ObjectPropertiesWrapper;
}
