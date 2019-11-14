/**
* DevExpress Dashboard (_item-data-axis.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ItemDataAxis, ItemDataDimension } from './item-data-definitions';
import { itemDataAxisPoint } from './_item-data-axis-point';
import { PrimitiveType } from '../types';
export declare class itemDataAxis implements ItemDataAxis {
    _dimensions: any;
    _axisPoint: any;
    constructor(dimensions: any, axisPoint: any);
    getDimensions(): Array<ItemDataDimension>;
    getRootPoint(): itemDataAxisPoint;
    getPoints(ignoreRootPoint?: boolean): Array<itemDataAxisPoint>;
    getAvaliableLeafPoints(): Array<itemDataAxisPoint>;
    getPointsByDimension(dimensionId: string): Array<itemDataAxisPoint>;
    getPointByUniqueValues(values: Array<PrimitiveType>): itemDataAxisPoint;
    getPointByUniqueValueAndDimension(value: any, dimensionId: string): itemDataAxisPoint;
    getPointByValues(values: Array<PrimitiveType>): itemDataAxisPoint;
}
