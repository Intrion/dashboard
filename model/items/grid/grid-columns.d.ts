/**
* DevExpress Dashboard (grid-columns.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { TypedSerializableModel } from '../../serializable-model';
import { IBindingModelProvider, IDataItemProvider } from '../_binding-model';
import { GridColumnFixedWidthType, GridDimensionColumnDisplayMode, GridColumnValueBarDisplayMode, GridMeasureColumnDisplayMode, DataFieldType } from '../../enums';
import { GridColumnTotal } from './grid-column-total';
import { DataItem, DataItemLink } from '../../data-item/data-item';
import { Dimension } from '../../data-item/dimension';
import { Measure } from '../../data-item/measure';
import { DeltaOptions } from '../options/delta-options';
import { AbsoluteVariationNumericFormat, PercentVariationNumericFormat, PercentOfTargetNumericFormat } from '../../data-item/data-item-format';
import { SparklineOptions } from '../options/sparkline-options';
import * as ko from 'knockout';
import { DataDashboardItem } from '../data-dashboard-item';
import { IBindingProperty } from '../binding-property';
export declare enum GridColumnType {
    Dimension = 0,
    Measure = 1,
    Delta = 2,
    Sparkline = 3,
    Hyperlink = 4
}
export declare abstract class GridColumn extends TypedSerializableModel implements IBindingModelProvider {
    name: ko.Observable<string>;
    weight: ko.Observable<number>;
    fixedWidth: ko.Observable<number>;
    widthType: ko.Observable<GridColumnFixedWidthType>;
    totals: ko.ObservableArray<GridColumnTotal>;
    _displayNameSeparator: string;
    readonly actualDataItem: DataItem;
    readonly _actualDataItemLink: DataItemLink;
    constructor(dataItemProvider: DataDashboardItem, dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    grabFrom(column: GridColumn): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _getColumnType(): GridColumnType;
    abstract _getBindingModel(): Array<IBindingProperty>;
    protected abstract _getActualDataItemLink(): DataItemLink;
    _isAttribute(dataItem: DataItem): boolean;
    _getViewModel(): {
        Weight: number;
        FixedWidth: number;
        WidthType: GridColumnFixedWidthType;
    };
    _getAvailableTotalTypes(dataItemProvider: IDataItemProvider): string[];
    protected _getTotalTypes(dataType: DataFieldType): Array<string>;
}
export declare class GridDimensionColumn extends GridColumn {
    private __dimension;
    dimension: ko.Observable<Dimension>;
    displayMode: ko.Observable<GridDimensionColumnDisplayMode>;
    constructor(dataItemProvider: DataDashboardItem, dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _getColumnType(): GridColumnType;
    protected _getActualDataItemLink(): DataItemLink;
    _getAvailableTotalTypes(dataItemProvider: IDataItemProvider): string[];
    protected _getDefaultItemType(): string;
    _getBindingModel(): Array<IBindingProperty>;
}
export declare class GridMeasureColumn extends GridColumn {
    private __measure;
    measure: ko.Observable<Measure>;
    displayMode: ko.Observable<GridMeasureColumnDisplayMode>;
    alwaysShowZeroLevel: ko.Observable<boolean>;
    constructor(dataItemProvider: DataDashboardItem, dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _getColumnType(): GridColumnType;
    protected _getActualDataItemLink(): DataItemLink;
    _getAvailableTotalTypes(dataItemProvider: IDataItemProvider): string[];
    protected _getDefaultItemType(): string;
    _getBindingModel(): Array<IBindingProperty>;
}
export declare class GridDeltaColumn extends GridColumn {
    private __actualValue;
    private __targetValue;
    actualValue: ko.Observable<Measure>;
    targetValue: ko.Observable<Measure>;
    deltaOptions: DeltaOptions;
    displayMode: ko.Observable<GridColumnValueBarDisplayMode>;
    alwaysShowZeroLevel: ko.Observable<boolean>;
    absoluteVariationNumericFormat: AbsoluteVariationNumericFormat;
    percentVariationNumericFormat: PercentVariationNumericFormat;
    percentOfTargetNumericFormat: PercentOfTargetNumericFormat;
    constructor(dataItemProvider: DataDashboardItem, dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _getColumnType(): GridColumnType;
    protected _getActualDataItemLink(): DataItemLink;
    protected _getDefaultItemType(): string;
    _getBindingModel(): Array<IBindingProperty>;
}
export declare class GridSparklineColumn extends GridColumn {
    private __measure;
    measure: ko.Observable<Measure>;
    showStartEndValues: ko.Observable<boolean>;
    sparklineOptions: SparklineOptions;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _getColumnType(): GridColumnType;
    protected _getActualDataItemLink(): DataItemLink;
    constructor(dataItemProvider: DataDashboardItem, dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    protected _getDefaultItemType(): string;
    _getBindingModel(): Array<IBindingProperty>;
}
export declare class GridHyperlinkColumn extends GridColumn {
    private __uriAttribute;
    private __displayValue;
    displayValue: ko.Observable<Dimension>;
    uriPattern: ko.Observable<string>;
    constructor(dataItemProvider: DataDashboardItem, dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _getColumnType(): GridColumnType;
    protected _getActualDataItemLink(): DataItemLink;
    protected _getDefaultItemType(): string;
    _isAttribute(dataItem: DataItem): boolean;
    _getBindingModel(): Array<IBindingProperty>;
}
