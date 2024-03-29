﻿/**
* DevExpress Dashboard (item-data-definitions.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { PrimitiveType } from '../types';
export declare type ItemDataAxisName = 'Default' | 'Series' | 'Argument' | 'Sparkline' | 'Column' | 'Row';
export declare type AxisValuesDictionary = {
    [axisName: string]: Array<PrimitiveType>;
};
export interface ItemData {
    createTuple(values: Array<ItemDataAxisPoint> | Array<{
        axisName: ItemDataAxisName;
        value: Array<PrimitiveType>;
    }>): ItemDataAxisPointTuple;
    getAxis(axisName: ItemDataAxisName): ItemDataAxis;
    getAxisNames(): Array<ItemDataAxisName>;
    getDataMembers(): Array<string>;
    getDeltas(): Array<ItemDataDelta>;
    getDeltaValue(deltaId: string): ItemDataDeltaValue;
    getDimensions(axisName: ItemDataAxisName): Array<ItemDataDimension>;
    getMeasures(): Array<ItemDataMeasure>;
    getMeasureValue(measureId: string): ItemDataMeasureValue;
    getSlice(value: ItemDataAxisPointTuple | ItemDataAxisPoint): ItemData;
}
export interface ItemDataAxis {
    getDimensions(): Array<ItemDataDimension>;
    getPointByUniqueValues(values: Array<PrimitiveType>): ItemDataAxisPoint;
    getPoints(): Array<ItemDataAxisPoint>;
    getPointsByDimension(dimensionId: string): Array<ItemDataAxisPoint>;
    getRootPoint(): ItemDataAxisPoint;
}
export interface ItemDataAxisPoint {
    getAxisName(): string;
    getChildren(): Array<ItemDataAxisPoint>;
    getDimension(): ItemDataDimension;
    getDimensions(): Array<ItemDataDimension>;
    getDimensionValue(dimensionId?: string): ItemDataDimensionValue;
    getDisplayText(): string;
    getParent(): ItemDataAxisPoint;
    getUniqueValue(): PrimitiveType;
    getValue(): PrimitiveType;
}
export interface ItemDataAxisPointTuple {
    getAxisPoint(axisName?: ItemDataAxisName): ItemDataAxisPoint;
}
export interface ItemDataDelta {
    actualMeasureId: string;
    id: string;
    name: string;
    targetMeasureId: string;
}
export interface ItemDataDeltaValue {
    getAbsoluteVariation(): ItemDataMeasureValue;
    getActualValue(): ItemDataMeasureValue;
    getDisplaySubValue1(): ItemDataMeasureValue;
    getDisplaySubValue2(): ItemDataMeasureValue;
    getDisplayValue(): ItemDataMeasureValue;
    getIndicatorType(): ItemDataMeasureValue;
    getIsGood(): ItemDataMeasureValue;
    getPercentOfTarget(): ItemDataMeasureValue;
    getPercentVariation(): ItemDataMeasureValue;
    getTargetValue(): ItemDataMeasureValue;
}
export interface ItemDataDimension {
    dataMember: string;
    dateTimeGroupInterval: string;
    id: string;
    name: string;
    textGroupInterval: string;
    format: (value: any) => string;
}
export interface ItemDataDimensionValue {
    getDisplayText(): string;
    getUniqueValue(): PrimitiveType;
    getValue(): PrimitiveType;
}
export interface ItemDataMeasure {
    dataMember: string;
    id: string;
    name: string;
    summaryType: string;
    format: (value: any) => string;
}
export interface ItemDataMeasureValue {
    getDisplayText(): string;
    getValue(): number;
}
export interface RequestUnderlyingDataParameters {
    axisPoints?: Array<ItemDataAxisPoint>;
    dataMembers?: Array<string>;
    uniqueValuesByAxisName?: AxisValuesDictionary;
    valuesByAxisName?: AxisValuesDictionary;
}
export interface ItemUnderlyingData {
    getDataMembers(): Array<string>;
    getRequestDataError(): string;
    getRowCount(): number;
    getRowValue(rowIndex: number, columnName: string): PrimitiveType;
    isDataReceived(): boolean;
}
export interface RangeFilterSelection {
    minimum: number | Date;
    maximum: number | Date;
}
