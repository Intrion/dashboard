/**
* DevExpress Dashboard (_shared-composers.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardItem } from '../../../model/items/dashboard-item';
import { SerializableModel } from '../../../model/serializable-model';
import { PieItem } from '../../../model/items/pie/pie-item';
import { KpiItem } from '../../../model/items/kpi/kpi-item';
import { MapItem } from '../../../model/items/map/map-item';
import { RangeFilterItem } from '../../../model/items/range-filter/range-filter-item';
import { DateFilterItem } from '../../../model/items/filter-items/date-filter-item';
import { DataItemNumericFormat } from '../../../model/data-item/data-item-format';
import { IPropertyDesciptors, IObjectPropertiesRules, ObjectPropertiesWrapper } from '../../_object-properties-wrapper';
import { AccordionTab } from '../../_accordion-tab';
import { PropertiesController } from '../../_properties-controller';
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { ChartAxis } from '../../../model/items/chart/chart-axis';
import { ChartItem } from '../../../model/items/chart/chart-item';
import { ScatterChartItem } from '../../../model/items/scatter-chart/scatter-chart-item';
import { ChartSeries } from '../../../model/items/chart/chart-series';
import { ChoroplethMapItem } from '../../../model/items/map/chorolpeth-map-item';
import { PieMapItem } from '../../../model/items/map/pie-map-item';
import { BubbleMapItem } from '../../../model/items/map/bubble-map-item';
import * as ko from 'knockout';
import { GridDeltaColumn, KpiElement, DeltaMap, DateTimeGroupInterval } from '../../../model';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
export declare class SharedComposers {
    static getCommonTab(model: DashboardItem, properties?: IPropertyDesciptors, disabledRules?: IObjectPropertiesRules): AccordionTab;
    static getAllTab(model: SerializableModel): AccordionTab;
    static getContentArrangementTab(model: PieItem | KpiItem): AccordionTab;
    static getCommonWrapper(model: DashboardItem, specificProperties?: IPropertyDesciptors, specificDisabledRules?: IObjectPropertiesRules, specificVisibilityRules?: IObjectPropertiesRules): ObjectPropertiesWrapper;
    static getCommonMapWrapper(model: MapItem, propertiesController: PropertiesController, specificProperties?: IPropertyDesciptors): ObjectPropertiesWrapper;
    static getAxisWrapper(model: ChartAxis, axisComputedTitle: ko.Subscribable<string>, alwaysShowZeroLevelInfo: DxDesigner.Analytics.Utils.ISerializationInfo, isDateField?: boolean, isNumericField?: boolean, groupInterval?: DateTimeGroupInterval): ObjectPropertiesWrapper;
    static getLegendWrapper(model: ChartItem | ScatterChartItem): ObjectPropertiesWrapper;
    static getContentArrangementWrapper(model: PieItem | KpiItem): ObjectPropertiesWrapper;
    static getLabelsWrapper(model: ChartSeries | ScatterChartItem): ObjectPropertiesWrapper;
    static getAttributeNamesSerializationInfo(model: MapItem, propertyInfo: DxDesigner.Analytics.Utils.ISerializationInfo, includeNoneValue?: boolean, noneValueCaption?: string): DxDesigner.Analytics.Utils.ISerializationInfo;
    static getShapeTitleSerializationInfo(model: MapItem): DxDesigner.Analytics.Utils.ISerializationInfo;
    static getColorLegendWrapper(model: ChoroplethMapItem | PieMapItem | BubbleMapItem): ObjectPropertiesWrapper;
    static getWeightedLegendWrapper(model: PieMapItem | BubbleMapItem): ObjectPropertiesWrapper;
    static getNumericFormatWrapper(model: DataItemNumericFormat): ObjectPropertiesWrapper;
    static getDeltaOptionsWrapper(model: any): ObjectPropertiesWrapper;
    static getDeltaFormatsOptionsWrapper(model: KpiElement | GridDeltaColumn | DeltaMap, editFormat?: (model: any) => void, ...additionalFormats: {
        title: string;
        numericFormat: DataItemNumericFormat;
    }[]): ObjectPropertiesWrapper;
    static getDeltaFormats(kpiElement: KpiElement | GridDeltaColumn | DeltaMap): any[];
    static getCustomRangesWrapper(model: RangeFilterItem | DateFilterItem, editRuleHandler: any, dataSourceBrowser: DataSourceBrowser, dimension: any): ObjectPropertiesWrapper;
}
