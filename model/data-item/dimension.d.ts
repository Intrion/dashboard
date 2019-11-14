/**
* DevExpress Dashboard (dimension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataItem } from './data-item';
import { IDimensionDefinition } from '../colorization/dimension-key';
import { DimensionSortOrder, DimensionSortMode, DateTimeGroupInterval, TextGroupInterval, ColoringMode, DimensionTopNMode } from '../enums';
import * as ko from 'knockout';
export declare class Dimension extends DataItem implements IDimensionDefinition {
    groupIndex: ko.Observable<number>;
    sortOrder: ko.Observable<DimensionSortOrder>;
    sortMeasure: ko.Observable<string>;
    sortMode: ko.Observable<DimensionSortMode>;
    realSortMode: ko.Computed<string>;
    dateTimeGroupInterval: ko.Observable<DateTimeGroupInterval>;
    textGroupInterval: ko.Observable<TextGroupInterval>;
    isDiscreteNumericScale: ko.Observable<boolean>;
    groupChildValues: ko.Observable<boolean>;
    coloringMode: ko.Observable<ColoringMode>;
    topNOptionsEnabled: ko.Observable<boolean>;
    topNOptionsMode: ko.Observable<DimensionTopNMode>;
    topNOptionsCount: ko.Observable<number>;
    topNOptionsMeasureName: ko.Observable<string>;
    topNOptionsShowOthers: ko.Observable<boolean>;
    constructor(dataItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.IModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    grabFrom(dataItem: Dimension): void;
    isDefinitionEquals(dataItem: DataItem): any;
    protected _getDefaultItemType(): string;
}
