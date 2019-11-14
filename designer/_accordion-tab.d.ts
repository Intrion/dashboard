/**
* DevExpress Dashboard (_accordion-tab.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ObjectPropertiesWrapper } from './_object-properties-wrapper';
import { IDataField } from '../model/data-sources/_data-field';
import { DataItemLink } from '../model/data-item/data-item';
import { IFieldConstraint, DataSourceBrowser } from '../common/_data-source-browser';
import * as ko from 'knockout';
export declare var KnownTabs: {
    Binding: string;
    DataShaping: string;
    NumericFormat: string;
    DateTimeFormat: string;
    TopN: string;
    Interactivity: string;
    Common: string;
    Totals: string;
    AxisX: string;
    AxisY: string;
    Legend: string;
    ColoringOptions: string;
    ColorLegend: string;
    WeightedLegend: string;
    Layout: string;
    ConditionalFormatting: string;
    FormatRuleCommon: string;
    FormatRuleCondition: string;
    FormatRuleMisc: string;
    CustomRanges: string;
    Type: string;
    PointLabels: string;
    DeltaOptions: string;
    ScaleOptions: string;
    SparklineOptions: string;
    CardTemplates: string;
    DeltaFormats: string;
    CardTemplateSettings: string;
    ContentArrangement: string;
    ShapeLabels: string;
    Labels: string;
    DataLayout: string;
    DataItemsGroup: string;
    ColorScheme: string;
    Calculations: string;
    Expression: string;
    TileOptions: string;
    UnwrappedDataItem: string;
    CustomMapOptions: string;
};
export declare class AccordionTab {
    name: string;
    category: string | ko.Observable<string>;
    private _tabModel;
    constructor(name: string, category: string | ko.Observable<string>, tabModel?: any);
    grabData(tab: AccordionTab): void;
    visible: ko.Computed<boolean>;
    tabModel: ko.Observable<any>;
    orderNo: number;
    readonly summary: ko.Computed<string>;
    readonly buttons: Array<any>;
    headerTemplate?: string;
    headerModel?: any;
    unsubscribeTabModel(): void;
    dispose(): void;
}
export declare class TypeAccordionTab extends AccordionTab {
    tabModel: ko.Observable<ObjectPropertiesWrapper>;
    orderNo: number;
    style: string;
    headerTemplate: string;
    hasNoBorder: boolean;
}
export declare class StyleAccordionTab extends AccordionTab {
    tabModel: ko.Observable<ObjectPropertiesWrapper>;
    orderNo: number;
    style: string;
    headerTemplate: string;
    hasNoBorder: boolean;
}
export declare class ItemGroupAccordionTab extends AccordionTab {
    style: string;
    orderNo: number;
    headerTemplate: string;
    readonly headerHeight: number;
    hasNoBorder: boolean;
}
export declare class BindingAccordionTab extends AccordionTab {
    name: string;
    category: string;
    constructor(name: string, category: string);
    tabModel: ko.Observable<{
        choosenField: ko.Observable<ko.Observable<IDataField>>;
        dataItemLink: DataItemLink;
        constraint: IFieldConstraint;
        dataSourceBrowser: DataSourceBrowser;
        dataMemberPath: ko.Observable<ko.Subscribable<string>>;
        additionalProperties: ko.Observable<ko.Subscribable<ObjectPropertiesWrapper>>;
        summary: ko.Computed<string>;
        summaryHint: ko.Computed<string>;
    }>;
    tabTemplate: string;
    readonly summaryHint: ko.Computed<string>;
    unsubscribeTabModel(): void;
    grabData(tab: BindingAccordionTab): void;
    orderNo: number;
}
