/**
* DevExpress Dashboard (_data-item-properties-composer.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataItemLink, DataItem } from '../../../model/data-item/data-item';
import { IDataField } from '../../../model/data-sources/_data-field';
import { Measure } from '../../../model/data-item/measure';
import { Dimension } from '../../../model/data-item/dimension';
import { DataDashboardItem } from '../../../model/items/data-dashboard-item';
import { MeasureCalculation } from '../../../model/data-item/calculations/measure-calculation';
import { IDetailsPropertiesComposer } from '../_interfaces';
import { DataSourceBrowser, IFieldConstraint } from '../../../common/_data-source-browser';
import { PropertiesController } from '../../_properties-controller';
import { BindingAccordionTab, AccordionTab } from '../../_accordion-tab';
import { ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
import * as ko from 'knockout';
import { DashboardLocalizationId } from '../../../data/localization/_default';
export interface ICalculationDefinition {
    title: DashboardLocalizationId;
    data: {
        type?: typeof MeasureCalculation;
        default?: any;
        isEqual?: (c: MeasureCalculation) => boolean;
    };
}
export declare class DataItemsPropertiesComposer implements IDetailsPropertiesComposer<DataItemLink> {
    composeTabs(model: DataItemLink, choosenField: ko.Observable<IDataField>, dataSourceBrowser: DataSourceBrowser, dataDashboardItem: DataDashboardItem, unwrappedDataItem: boolean, constraint?: IFieldConstraint, propertiesController?: PropertiesController): AccordionTab[];
    fillBindingTab(bindingTab: BindingAccordionTab, model: DataItemLink, choosenField: ko.Observable<IDataField>, dataSourceBrowser: DataSourceBrowser, dataDashboardItem: DataDashboardItem, constraint: IFieldConstraint): void;
    fillOptionsTab(tab: AccordionTab, dataItem: DataItem, model: DataItemLink, dataDashboardItem: DataDashboardItem): void;
    fillDataShapingPropertiesTab(tab: AccordionTab, dataDashboardItem: DataDashboardItem, model: DataItemLink, dataField: IDataField, measures: Array<DataItem>, dataSourceBrowser: DataSourceBrowser): void;
    fillDataItemExactDatetimeFormatTab(tab: AccordionTab, model: DataItem): void;
    fillDimensionDatetimeFormatTab(tab: AccordionTab, model: Dimension): void;
    fillTopNTab(tab: AccordionTab, dataDashboardItem: DataDashboardItem, dataItem: Dimension, dataField: IDataField, measures: Array<Measure>, supportsTopNOther: boolean, dataSourceBrowser: DataSourceBrowser): void;
    fillCalculationsTab(tab: AccordionTab, measure: Measure, dataDashboardItem: DataDashboardItem, dataSourceBrowser: DataSourceBrowser, propertiesController: PropertiesController): void;
    static getFormatRulesForDataItemWrapper(model: DataDashboardItem, dataItem: DataItem, dataItemApplyTo: DataItem, formatRuleItemType: string, dataSourceBrowser: DataSourceBrowser, editHandler: any): ObjectPropertiesWrapper;
}
