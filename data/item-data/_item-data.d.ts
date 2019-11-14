/**
* DevExpress Dashboard (_item-data.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ItemData, ItemDataAxisName, ItemDataMeasure, ItemDataDimension, ItemDataDelta, ItemDataMeasureValue, ItemDataDeltaValue } from './item-data-definitions';
import { itemDataAxisPoint } from './_item-data-axis-point';
import { PrimitiveType } from '../types';
import { itemDataTuple } from './_item-data-tuple';
import { itemDataAxis } from './_item-data-axis';
export declare class itemData implements ItemData {
    _data: any;
    _rootItems: any;
    constructor(data: any, rootItems: any);
    isEmpty(): boolean;
    getCurrentFilterValues(dimensionIds: Array<string>, axisName: ItemDataAxisName, selectedValues: Array<itemDataAxisPoint> | Array<Array<PrimitiveType>>): Array<itemDataTuple>;
    getCurrentDrillDownValues(dimensionIds: Array<string>, axisName: ItemDataAxisName): itemDataTuple;
    getAvailableTuples(dimensionIds: Array<string>, axisName: ItemDataAxisName): Array<itemDataTuple>;
    getAllSelectionValues(dimensionIds: Array<string>): any;
    getMeasuresByIds(measureIds: Array<string>): Array<ItemDataMeasure>;
    getAxisNames(): Array<ItemDataAxisName>;
    getAxis(axisName: ItemDataAxisName): itemDataAxis;
    getDimensions(axisName: ItemDataAxisName): Array<ItemDataDimension>;
    getColorMeasures(): Array<ItemDataMeasure>;
    getMeasures(): Array<ItemDataMeasure>;
    getDeltas(): Array<ItemDataDelta>;
    getMeasureById(id: string): ItemDataMeasure;
    getDeltaById(id: string): ItemDataDelta;
    getSlice(value: itemDataTuple | itemDataAxisPoint): itemData;
    getMeasureFormat(measureId: string): any;
    getColorMeasureValue(colorMeasureId: string): any;
    getConditionalFormattingMeasureValue(cfMeasureId: string): any;
    getMeasureValue(measureId: string): ItemDataMeasureValue;
    getPointsByDimensionId(dimensionId: string): Array<itemDataAxisPoint>;
    _getKeys(points?: any): any[];
    _getValue(measureId: any): any;
    _getMeasureValueByKeys(keys: any, mId: any, format: any): {
        getValue: () => any;
        getDisplayText: () => any;
    };
    _getDeltaValueByKeys(keys: any, deltaIds: any, formats: any): {
        getActualValue: () => {
            getValue: () => any;
            getDisplayText: () => any;
        };
        getTargetValue: () => {
            getValue: () => any;
            getDisplayText: () => any;
        };
        getAbsoluteVariation: () => {
            getValue: () => any;
            getDisplayText: () => any;
        };
        getPercentVariation: () => {
            getValue: () => any;
            getDisplayText: () => any;
        };
        getPercentOfTarget: () => {
            getValue: () => any;
            getDisplayText: () => any;
        };
        getIsGood: () => {
            getValue: () => any;
            getDisplayText: () => any;
        };
        getIndicatorType: () => {
            getValue: () => any;
            getDisplayText: () => any;
        };
        getDisplayValue: () => {
            getValue: () => any;
            getDisplayText: () => any;
        };
        getDisplaySubValue1: () => {
            getValue: () => any;
            getDisplayText: () => any;
        };
        getDisplaySubValue2: () => {
            getValue: () => any;
            getDisplayText: () => any;
        };
    };
    _createPointsHash(axisPoints: any): {};
    getMeasureValueByAxisPoints(measureId: string, axisPoints: Array<itemDataAxisPoint>): ItemDataMeasureValue;
    getDeltaValue(deltaId: string): ItemDataDeltaValue;
    getDeltaValueByAxisPoints(deltaId: string, axisPoints: Array<itemDataAxisPoint>): ItemDataDeltaValue;
    getDataMembers(): Array<string>;
    createTuple(values: Array<itemDataAxisPoint> | Array<{
        axisName: ItemDataAxisName;
        value: Array<PrimitiveType>;
    }>): itemDataTuple;
    _getCellValue(keys: any, valueId: any): any;
    _getCellDisplayText(keys: any, valueId: any, format: any): any;
    _getSliceByAxisPoint(axisPoint: any): itemData;
    _getSliceByTuple(tuple: any): itemData;
}
