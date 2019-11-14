/**
* DevExpress Dashboard (treemap-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataDashboardItem } from '../data-dashboard-item';
import { DataItemLink } from '../../data-item/data-item';
import { Measure } from '../../data-item/measure';
import { Dimension } from '../../data-item/dimension';
import { DashboardTreemapLayoutAlgorithm, DashboardTreemapLayoutDirection, TreemapValueType } from '../../enums';
import { DashboardItemInteractivityOptions } from '../options/interactivity-options';
import { ColorSchemeEntry } from '../../colorization/color-scheme-entry';
import { DashboardItemColoringOptions } from '../options/coloring-options';
import * as ko from 'knockout';
export declare class TreemapItem extends DataDashboardItem {
    private __values;
    values: ko.ObservableArray<Measure>;
    private __arguments;
    arguments: ko.ObservableArray<Dimension>;
    layoutAlgorithm: ko.Observable<DashboardTreemapLayoutAlgorithm>;
    layoutDirection: ko.Observable<DashboardTreemapLayoutDirection>;
    tilesLabelContentType: ko.Observable<TreemapValueType>;
    tilesTooltipContentType: ko.Observable<TreemapValueType>;
    groupsLabelContentType: ko.Observable<TreemapValueType>;
    groupsTooltipContentType: ko.Observable<TreemapValueType>;
    interactivityOptions: DashboardItemInteractivityOptions;
    colorScheme: ko.ObservableArray<ColorSchemeEntry>;
    coloringOptions: DashboardItemColoringOptions;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _clearBindings(): void;
    _isCalculationSupported(): boolean;
    protected _getDefaultItemType(): string;
    protected _getCanColorByMeasures(): boolean;
    protected _getCanColorByDimensions(): boolean;
    protected _getAreMeasuresColoredByDefault(): boolean;
    protected _getIsDimensionColoredByDefault(dimension: Dimension): boolean;
    protected _getMasterFilterMode(): string;
    protected _getDrillDownEnabled(): boolean;
    protected _getIgnoreMasterFilter(): boolean;
    protected _getInteractivityDimensionLinks(): DataItemLink[];
    protected _getLayersCount(): number;
    protected _getLayerName(): string;
    _getColorizableDataItemsInfo(): Array<{
        items: Array<DataItemLink>;
        prefixId: string;
    }>;
    _isSortingEnabled(): boolean;
}
